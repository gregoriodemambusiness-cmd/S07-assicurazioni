/**
 * Test sull'export statico del sito (cartella `out/`, generata da `npm run build`).
 * Coprono i punti che, se si rompessero, costerebbero contatti o credibilita':
 * il form Netlify, il framing problema/soluzione in home e il peso delle immagini.
 */
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const out = (...parts) => path.join(root, "out", ...parts);
const html = (file) => readFile(out(file), "utf8");

test("la home presenta il problema e la soluzione", async () => {
  const page = await html("index.html");

  // Il framing che fa scattare il riconoscimento nel cliente deve stare in home,
  // non solo nella pagina /approccio.
  assert.match(page, /Tante attività/);
  assert.match(page, /Nessuna regia/);
  assert.match(page, /Una sola visione/);
  assert.match(page, /Più specialisti/);

  // Offerta e invito all'azione.
  assert.match(page, /Brand identity/);
  assert.match(page, /Sistemi AI/);
  assert.match(page, /href="\/contatti"/);
});

test("il form contatti e' rilevabile da Netlify Forms", async () => {
  const page = await html("contatti/index.html");

  // Senza questi attributi nell'HTML statico Netlify non registra il form
  // e ogni richiesta inviata dai visitatori andrebbe persa.
  assert.match(page, /data-netlify="true"/);
  assert.match(page, /name="contatti-svolta"/);
  assert.match(page, /name="form-name"[^>]*value="contatti-svolta"|value="contatti-svolta"[^>]*name="form-name"/);
  assert.match(page, /data-netlify-honeypot="bot-field"/);

  // Campi attesi lato ricezione.
  for (const field of ["nome", "azienda", "email", "interesse", "messaggio"]) {
    assert.match(page, new RegExp(`name="${field}"`), `campo mancante: ${field}`);
  }
});

test("tutte le pagine sono state generate", async () => {
  for (const page of ["index.html", "servizi/index.html", "approccio/index.html", "studio/index.html", "startup/index.html", "contatti/index.html", "tariffe/index.html", "founders/index.html", "privacy/index.html", "scoprire/index.html", "definire/index.html", "costruire/index.html", "accelerare/index.html"]) {
    await assert.doesNotReject(stat(out(page)), `pagina mancante: ${page}`);
  }
});

test("la candidatura Founders e' rilevabile da Netlify Forms", async () => {
  const page = await html("founders/index.html");

  assert.match(page, /data-netlify="true"/);
  assert.match(page, /name="candidatura-founders"/);
  assert.match(page, /data-netlify-honeypot="bot-field"/);

  for (const field of ["nome", "email", "startup", "idea", "problema", "target", "stato_progetto", "team", "necessita", "deck"]) {
    assert.match(page, new RegExp(`name="${field}"`), `campo mancante: ${field}`);
  }

  // La checkbox privacy deve linkare a una pagina reale, non a un placeholder.
  assert.match(page, /href="\/privacy"/);
});

test("il calcolatore preventivi e' rilevabile da Netlify Forms", async () => {
  const page = await html("tariffe/index.html");

  assert.match(page, /data-netlify="true"/);
  assert.match(page, /name="preventivo-svolta"/);
  assert.match(page, /data-netlify-honeypot="bot-field"/);

  // Tutti i campi di ogni step devono stare nell'HTML statico (non solo
  // apparire dopo un click), altrimenti Netlify non li registra come form.
  for (const field of ["servizio", "pagine", "design", "funzionalita", "contenuti", "tempistiche", "tipo", "integrazioni", "manutenzione", "nome", "azienda", "email", "fascia"]) {
    assert.match(page, new RegExp(`name="${field}"`), `campo mancante: ${field}`);
  }
});

test("le immagini restano leggere e in WebP", async () => {
  const files = await readdir(out());
  const photos = files.filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

  // og.png resta PNG di proposito: alcuni scraper social non leggono WebP.
  // apple-touch-icon.png idem: iOS richiede esplicitamente un PNG, non SVG/WebP.
  const pngExceptions = ["og.png", "apple-touch-icon.png"];
  const nonWebp = photos.filter((f) => !f.endsWith(".webp") && !pngExceptions.includes(f));
  assert.deepEqual(nonWebp, [], `foto non convertite in WebP: ${nonWebp.join(", ")}`);

  for (const file of photos) {
    const { size } = await stat(out(file));
    assert.ok(size < 500 * 1024, `${file} pesa ${Math.round(size / 1024)} KB: troppo per il web`);
  }
});
