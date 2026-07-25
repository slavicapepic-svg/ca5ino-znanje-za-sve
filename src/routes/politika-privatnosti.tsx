import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — Ca5ino ZaštoZato" },
      { name: "description", content: "Kako Ca5ino ZaštoZato prikuplja, obrađuje i štiti podatke o ličnosti korisnika." },
      { property: "og:title", content: "Politika privatnosti — Ca5ino ZaštoZato" },
      { property: "og:description", content: "Zaštita privatnosti i podataka o ličnosti na edukativnom portalu Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika privatnosti" breadcrumbLabel="Politika privatnosti">
      <p className="text-xs uppercase tracking-wider text-text-muted">Poslednje ažuriranje: [unesite datum]</p>

      <p>Dobro došli na <strong>Ca5inoZaštoZato</strong>.</p>
      <p>Zaštita vaše privatnosti i podataka o ličnosti jedan je od naših prioriteta. Ova Politika privatnosti objašnjava koje podatke prikupljamo, zbog čega ih prikupljamo, kako ih obrađujemo, koliko dugo ih čuvamo i koja prava imate kao korisnik našeg sajta.</p>
      <p>Prilikom obrade podataka o ličnosti postupamo u skladu sa: Zakonom o zaštiti podataka o ličnosti Republike Srbije („Službeni glasnik RS", br. 87/2018); osnovnim principima Opšte uredbe Evropske unije o zaštiti podataka (GDPR), kada je to primenljivo; drugim važećim propisima koji uređuju zaštitu privatnosti korisnika.</p>
      <p>Korišćenjem internet stranice www.ca5inozastozato.rs potvrđujete da ste upoznati sa ovom Politikom privatnosti.</p>

      <h2>1. Ko smo mi</h2>
      <p>Rukovalac podataka — Naziv projekta: Ca5inoZaštoZato. Osnivač i glavni urednik: Jovana Bojanić. Internet stranica: https://ca5inozastozato.rs. Kontakt e-mail: redakcija@ca5inozastozato.rs. Ca5inoZaštoZato određuje svrhu i način obrade podataka o ličnosti prikupljenih putem ovog sajta.</p>

      <h2>2. Naši principi</h2>
      <p>Prilikom obrade podataka vodimo se sledećim principima: prikupljamo samo podatke koji su nam zaista potrebni; obrađujemo ih zakonito, pošteno i transparentno; koristimo ih isključivo u svrhe zbog kojih su prikupljeni; ne prodajemo vaše podatke trećim licima; preduzimamo odgovarajuće mere zaštite kako bismo sprečili neovlašćen pristup, gubitak ili zloupotrebu podataka. Poštujemo vaše pravo na privatnost i nastojimo da obrada podataka bude svedena na najmanju moguću meru.</p>

      <h2>3. Koje podatke prikupljamo</h2>
      <p>U zavisnosti od načina na koji koristite naš sajt, možemo prikupljati sledeće podatke.</p>
      <p><em>Podaci koje nam sami dostavite:</em> kada nas kontaktirate putem elektronske pošte, možete nam dostaviti: ime i prezime; e-mail adresu; broj telefona (ukoliko ga sami navedete); naziv kompanije ili organizacije (ukoliko je primenljivo); sadržaj poruke; druge informacije koje dobrovoljno odlučite da podelite sa nama. Davanje ovih podataka nije zakonska obaveza, ali bez njih možda nećemo biti u mogućnosti da odgovorimo na vaš upit.</p>
      <p><em>Podaci koje automatski prikupljamo:</em> prilikom posete sajtu automatski se mogu prikupljati određeni tehnički podaci, uključujući: IP adresu; datum i vreme pristupa sajtu; tip internet pregledača; operativni sistem; tip uređaja; rezoluciju ekrana; jezik pregledača; URL sa kog ste došli na naš sajt; stranice koje posećujete; vreme provedeno na sajtu; klikove i osnovne informacije o korišćenju sadržaja. Ovi podaci ne koriste se za vašu direktnu identifikaciju, već za analizu rada sajta, poboljšanje korisničkog iskustva i unapređenje bezbednosti.</p>

      <h2>4. Kako prikupljamo podatke</h2>
      <p>Podatke možemo prikupljati na nekoliko načina: <em>Elektronska pošta</em> — kada nam se obratite putem e-mail adrese objavljene na sajtu. <em>Kolačići (Cookies)</em> — korišćenjem analitičkih i tehničkih kolačića. <em>Analitički alati</em> — kroz alate poput Google Analytics-a ili drugih servisa koji nam pomažu da razumemo način korišćenja sajta. <em>Dobrovoljno dostavljene informacije</em> — kada sami odlučite da učestvujete u anketi, istraživanju, prijavite grešku ili postavite pitanje u rubrici „Pitaj stručnjaka".</p>

      <h2>5. U koje svrhe koristimo vaše podatke</h2>
      <p>Podatke obrađujemo isključivo kada za to postoji opravdan razlog. Najčešće svrhe obrade su: odgovaranje na vaše upite; komunikacija sa korisnicima; unapređenje sadržaja sajta; analiza posećenosti; poboljšanje bezbednosti sajta; sprečavanje zloupotreba; otkrivanje tehničkih problema; vođenje interne statistike; ispunjavanje zakonskih obaveza. Vaše podatke ne koristimo za donošenje automatizovanih odluka koje mogu proizvesti pravne posledice po vas.</p>

      <h2>6. Pravni osnov obrade</h2>
      <p>Podatke obrađujemo isključivo kada postoji odgovarajući pravni osnov. To može biti: <em>Vaša saglasnost</em> — na primer kada prihvatite analitičke kolačiće ili nam dobrovoljno pošaljete poruku. <em>Legitimni interes</em> — kada obrađujemo podatke radi bezbednosti sajta, sprečavanja zloupotreba, analize rada sajta ili unapređenja korisničkog iskustva. <em>Zakonska obaveza</em> — kada je obrada neophodna radi ispunjavanja obaveza propisanih važećim zakonima Republike Srbije. U svakom trenutku imate pravo da povučete saglasnost za obradu podataka kada se obrada zasniva upravo na vašoj saglasnosti.</p>

      <h2>7. Google Analytics</h2>
      <p>Radi boljeg razumevanja načina na koji korisnici koriste naš sajt, Ca5inoZaštoZato može koristiti Google Analytics, analitičku uslugu kompanije Google LLC. Google Analytics koristi kolačiće za prikupljanje anonimnih statističkih podataka, kao što su: broj posetilaca; posećene stranice; vreme provedeno na sajtu; uređaj sa kog pristupate sajtu; okvirna geografska lokacija; način na koji ste došli na naš sajt. Ovi podaci koriste se isključivo radi unapređenja kvaliteta sadržaja, korisničkog iskustva i tehničkih performansi sajta. Google može obrađivati određene podatke na serverima koji se nalaze van Republike Srbije i Evropske unije, u skladu sa sopstvenom Politikom privatnosti. Više informacija možete pronaći na: https://policies.google.com/privacy</p>

      <h2>8. Deljenje podataka sa trećim licima</h2>
      <p>Ca5inoZaštoZato ne prodaje, ne iznajmljuje niti ustupa vaše podatke trećim licima u marketinške svrhe. Podaci mogu biti dostupni isključivo pouzdanim partnerima koji nam pomažu u funkcionisanju sajta, kao što su: hosting provajder; administratori informacionog sistema; pružaoci analitičkih usluga; pružaoci usluga zaštite sajta; državni organi kada za to postoji zakonska obaveza. Svi partneri sa kojima sarađujemo dužni su da vaše podatke obrađuju u skladu sa važećim propisima o zaštiti podataka.</p>

      <h2>9. Koliko dugo čuvamo vaše podatke</h2>
      <p>Podatke čuvamo samo onoliko dugo koliko je potrebno da ostvarimo svrhu zbog koje su prikupljeni ili koliko to zahtevaju važeći propisi. Na primer: poruke poslate putem kontakt forme čuvamo dok traje komunikacija ili dok postoji potreba za daljom saradnjom; analitički podaci čuvaju se u skladu sa podešavanjima analitičkih alata koje koristimo; podaci koji se obrađuju na osnovu vaše saglasnosti čuvaju se do njenog povlačenja, osim ukoliko zakon nalaže drugačije. Po isteku roka čuvanja podaci se brišu ili anonimizuju.</p>

      <h2>10. Vaša prava</h2>
      <p>U skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije imate pravo da: zatražite pristup svojim podacima; zatražite ispravku netačnih ili nepotpunih podataka; zatražite brisanje podataka kada za to postoje zakonski uslovi; ograničite obradu svojih podataka; uložite prigovor na obradu podataka; povučete prethodno datu saglasnost; podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti. Svoja prava možete ostvariti slanjem zahteva na našu e-mail adresu.</p>

      <h2>11. Bezbednost podataka</h2>
      <p>Preduzimamo odgovarajuće tehničke i organizacione mere kako bismo zaštitili vaše podatke od: neovlašćenog pristupa; gubitka; uništenja; izmene; zloupotrebe; neovlašćenog otkrivanja. Iako primenjujemo savremene mere zaštite, nijedan sistem na internetu ne može garantovati apsolutnu bezbednost podataka. Zbog toga preporučujemo korisnicima da i sami vode računa o zaštiti svojih uređaja, lozinki i internet naloga.</p>

      <h2>12. Kolačići (Cookies)</h2>
      <p>Ca5inoZaštoZato koristi kolačiće radi pravilnog funkcionisanja sajta i unapređenja korisničkog iskustva. Možemo koristiti: <em>Neophodne kolačiće</em> — neophodni su za osnovno funkcionisanje sajta i nije ih moguće isključiti. <em>Analitičke kolačiće</em> — koriste se za anonimnu analizu posećenosti i unapređenje sadržaja. <em>Funkcionalne kolačiće</em> — pamte određena korisnička podešavanja kako bi korišćenje sajta bilo jednostavnije. <em>Marketinške kolačiće</em> — koriste se samo ukoliko u budućnosti budemo sprovodili promotivne aktivnosti koje zahtevaju vašu prethodnu saglasnost. Detaljnije informacije nalaze se u našoj posebnoj Politici kolačića.</p>

      <h2>13. Izmene Politike privatnosti</h2>
      <p>Zadržavamo pravo da ovu Politiku privatnosti izmenimo ili dopunimo u bilo kom trenutku radi usklađivanja sa važećim zakonima ili promenama u radu sajta. Sve izmene biće objavljene na ovoj stranici zajedno sa datumom poslednjeg ažuriranja. Preporučujemo korisnicima da povremeno provere ovu stranicu kako bi bili upoznati sa eventualnim izmenama.</p>

      <h2>14. Kontakt</h2>
      <p>Ukoliko imate pitanja u vezi sa ovom Politikom privatnosti ili želite da ostvarite neko od svojih prava, možete nas kontaktirati putem:</p>
      <p>E-mail: support@ca5inozastozato.rs<br />Internet stranica: https://ca5inozastozato.rs<br />Kontakt forma: https://ca5inozastozato.rs/kontakt (ukoliko bude postojala posebna kontakt stranica)</p>
      <p>Potrudićemo se da odgovorimo na vaš zahtev u najkraćem mogućem roku.</p>

      <p><em>Ca5inoZaštoZato nikada neće tražiti vaše lozinke za naloge u online kazinima ili kladionicama, podatke o platnim karticama, PIN kodove niti druge osetljive finansijske informacije. Ukoliko neko u naše ime zatraži takve podatke, molimo vas da nas odmah kontaktirate.</em></p>
      <p><em>Ca5inoZaštoZato trenutno ne koristi alate za personalizovano oglašavanje, remarketing niti praćenje korisnika u marketinške svrhe, kao što su Meta Pixel ili slične tehnologije. Ukoliko se to u budućnosti promeni, ova Politika privatnosti biće blagovremeno ažurirana, a korisnici će biti obavešteni u skladu sa važećim propisima.</em></p>
    </LegalPage>
  ),
});
