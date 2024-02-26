# [vurk.lt](vurk.lt)

Vilniaus universiteto radijo klubo (VURK) interneto svetainė.

## Prisidėkite

```sh
npm install

npm run dev
```

Puslapis bus pasiekiamas adresu `http://localhost:5173`

### Tinklaraštis

Tinklaraščio įrašai yra saugomi `posts` kataloge. Kiekvienas įrašas turi `YAML` antraštę. Tekstas prieš pirmą `---` yra įrašo ištrauka rodoma pagrindiniame puslapyje.

```yaml
---
title: Įrašo pavadinimas
date: 2024-01-04
author: Domantas Petrauskas LY1JA
gravatar: ly1ja@vurk.lt
twitter: "@domnantas"
layout: post
---
Ištrauka, kuri bus rodoma pagrinidniame puslapyje.
---
Pagrindinis tekstas, kuris bus rodomas tik paspaudus `Skaityti daugiau ->`.
```

Dėl vitepress limitacijos, paveikslėliai ištraukose ir pagrindiniame tekste veikia skirtingai. Ištraukose naudojami paveiksliukai turi būti saugomi `public` aplanke, o visi kiti – `assets`.

```yaml
---
title: Įrašo pavadinimas
---
Ištrauka

![Paveikslėlio aprašymas](/iraso-pavadinimas/image.png). Šiuo atveju paveikslėlis saugomas `public/iraso-pavadinimas/image.png`.
---
Pagrindinis tekstas.

![Paveikslėlio aprašymas](/assets/iraso-pavadinimas/image.png). Šiuo atveju paveikslėlis saugomas `assets/iraso-pavadinimas/image.png`.
```
