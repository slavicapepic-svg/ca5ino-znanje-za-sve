
## Cilj

Napraviti sve unutrašnje stranice (edukacijske kategorije, članci, Reč stručnjaka, Vesti i Mediji, Postavi pitanje, O nama, pravne stranice) koristeći ISTI dizajn sistem sa home page-a. Home page se NE dira.

## Faza 1 — Izdvajanje reusable komponenti iz home page-a

Trenutno je sve u `src/routes/index.tsx`. Izdvojiti u `src/components/site/`:

- `Header.tsx` — postojeći header sa Edukacija dropdown-om (linkovi vode na `/registracija-verifikacija`, `/bonus-uslovi`, itd. umesto `#`)
- `Footer.tsx` — postojeći footer + `ResponsibleGamingBar` iznad
- `Logo.tsx`, `TikTokIcon.tsx`
- `PageHeader.tsx` — H1 + intro + opcioni autor desno
- `Breadcrumb.tsx` — Edukacija › Kategorija › Naslov
- `CardTile.tsx` — slika, naslov, datum, "X min read", autor (isti stil kao postojeće kartice)
- `CardGrid.tsx` — 1/2/3–4 kolone
- `ExpertCard.tsx` — portret, ime, titula, LinkedIn, pitanje
- `VideoCard.tsx` / `NewsCard.tsx` — thumbnail + Play badge
- `Accordion.tsx` (FAQ)
- `QuestionForm.tsx` — nadimak + pitanje + CTA
- `ArticleLayout.tsx` — meta red, telo, "Povezane teme"
- `ResponsibleGamingBar.tsx` — 18+ bedž + poruka
- `SiteShell.tsx` — Header + `<main>{children}</main>` + ResponsibleGamingBar + Footer

Home page (`src/routes/index.tsx`) refaktorisati da koristi `Header`/`Footer` iz komponenti — bez vizuelnih promena.

Content data izneti u `src/content/`:
- `categories.ts` — 6 kategorija sa slug-ovima, intro tekstom, listom članaka (slug, naslov, sažetak, datum, minRead, autor, image)
- `experts.ts` — stručnjaci (Vera Novković + 3 pitanja)
- `mediaFeed.ts` — vesti + video (tip, slug, naslov, thumb, datum)
- `faq.ts` — objavljena pitanja i odgovori
- `helpLinks.ts` — institucije za pomoć

## Faza 2 — Rute (TanStack file-based routing)

Kreirati:

```
src/routes/
  registracija-verifikacija.tsx        (parent listing)
  registracija-verifikacija.$slug.tsx  (članak)
  bonus-uslovi.tsx
  bonus-uslovi.$slug.tsx
  uplate-isplate.tsx
  uplate-isplate.$slug.tsx
  sve-o-igricama.tsx
  sve-o-igricama.$slug.tsx
  svet-regulative.tsx
  svet-regulative.$slug.tsx
  odgovorna-igra.tsx
  odgovorna-igra.$slug.tsx
  rec-strucnjaka.tsx
  rec-strucnjaka.$slug.tsx
  vesti-mediji.tsx
  vesti-mediji.$slug.tsx
  o-nama.tsx
  postavi-pitanje.tsx
  disclaimer.tsx
  uslovi-koriscenja.tsx
  politika-privatnosti.tsx
  kolacici.tsx
  pomoc.tsx
```

Svaka ruta postavlja svoj `head()` sa unikatnim title/description/OG.

## Faza 3 — Templati

**CategoryPage template** (koristi ga svih 6 kategorija):
`SiteShell` → `Breadcrumb` → `PageHeader(H1, intro)` → opcioni info-blokovi (npr. za /bonus-uslovi) → `CardGrid` mapiran preko liste članaka iz `categories.ts` → ResponsibleGamingBar (u shell-u).

**ArticlePage template**:
`SiteShell` → `Breadcrumb` → `H1` → meta red (autor · datum · min read) → hero slika → telo (H2/H3/citati) → "Povezane teme" `CardGrid` (iz iste kategorije).

**/rec-strucnjaka**: PageHeader + grid `ExpertCard`.

**/vesti-mediji**: PageHeader + tabovi Sve/Video/Vesti + feed od `VideoCard`/`NewsCard`. Video članak koristi lazy YouTube embed sa `youtube.com/embed/...`.

**/postavi-pitanje**: PageHeader + disclaimer box + `QuestionForm` (state only, client-side; submit → toast "Poslato") + search polje + Accordion baze pitanja.

**/o-nama**: statična stranica, dve kolone za Jovana + Lane, misija blok, pravno obaveštenje.

**Pravne stranice**: jednostavan `LegalPage` template sa H1 + telo (pun tekst za `/disclaimer`, placeholder body za ostale).

**/pomoc**: grid kartica institucija (naziv, opis, telefon, link).

## Faza 4 — Content

Napisati sve intro tekstove i naslove kartica po specifikaciji korisnika (bez izmišljanja članaka — samo naslov, kratak sažetak od 1 rečenice, autor "Redakcija", datum, min read = 3–6 min, generička placeholder slika iz postojećih `@/assets/news-*.jpg`/`edu-*.jpg`). Telo članaka: kratak placeholder paragraf ("Sadržaj u pripremi") + struktura H2/H3 tako da članak ne izgleda prazno.

## Tehnički detalji

- Bez novih npm paketa. Koristiti `lucide-react`, `@tanstack/react-router` `Link`, postojeće Tailwind tokene.
- Slug↔članak: `categories.ts` je izvor istine; `$slug.tsx` traži članak po slug-u; `notFound()` ako ne postoji.
- YouTube embed: `<iframe loading="lazy" src="https://www.youtube.com/embed/{id}">`; thumbnail preview pattern za lazy-load (klik → embed) da se ne učitava iframe unapred.
- SEO: svaka ruta ima svoj `head()` sa title/description/og:title/og:description; article i video rute mogu imati `og:image` (leaf only, ne root).
- Mobile-first: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Bez novih boja/fontova — samo postojeći tokeni iz `src/styles.css`.

## Redosled izrade (u više turnova jer je obimno)

1. **Turn 1 (ovaj)**: plan
2. **Turn 2**: Faza 1 — izdvojiti Header/Footer/SiteShell/CardTile/CardGrid/PageHeader/Breadcrumb/ResponsibleGamingBar; refaktor home; napraviti `categories.ts` content; kreirati svih 6 CategoryPage ruta + generic `[category].$slug.tsx` article template
3. **Turn 3**: /rec-strucnjaka + /vesti-mediji + article za oba
4. **Turn 4**: /postavi-pitanje + /o-nama
5. **Turn 5**: pravne stranice + /pomoc + finalne provere

Molim potvrdu pre nego što krenem sa Turn 2.
