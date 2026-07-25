import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politika-kolacica")({
  head: () => ({
    meta: [
      { title: "Politika kolačića — Ca5ino ZaštoZato" },
      { name: "description", content: "Koje kolačiće koristi Ca5ino ZaštoZato i kako njima upravljati." },
      { property: "og:title", content: "Politika kolačića — Ca5ino ZaštoZato" },
      { property: "og:description", content: "Vrste kolačića, svrha i upravljanje na sajtu Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Politika kolačića (Cookie Policy)" breadcrumbLabel="Politika kolačića">
      <p className="text-xs uppercase tracking-wider text-text-muted">Poslednje ažuriranje: [unesite datum]</p>

      <p>Dobro došli na <strong>Ca5inoZaštoZato</strong>.</p>
      <p>Ova Politika kolačića objašnjava šta su kolačići (cookies), zašto ih koristimo i na koji način možete upravljati njihovim podešavanjima. Naš cilj nije da prikupljamo više podataka nego što je potrebno. Kolačiće koristimo isključivo kako bismo obezbedili pravilno funkcionisanje sajta, unapredili korisničko iskustvo i razumeli kako posetioci koriste naš edukativni sadržaj.</p>

      <h2>1. Šta su kolačići?</h2>
      <p>Kolačići (Cookies) su male tekstualne datoteke koje internet stranica čuva na vašem računaru, telefonu ili drugom uređaju kada je posetite. Njihova svrha je da omoguće pravilan rad sajta, zapamte određena korisnička podešavanja i pomognu vlasnicima sajta da analiziraju način korišćenja sadržaja. Kolačići ne mogu pristupiti vašim datotekama, instalirati programe niti sadržati viruse.</p>

      <h2>2. Zašto koristimo kolačiće?</h2>
      <p>Ca5inoZaštoZato koristi kolačiće kako bi: omogućio pravilno funkcionisanje sajta; zapamtio vaša podešavanja; analizirao posećenost i korišćenje sadržaja; unapredio kvalitet članaka i korisničko iskustvo; povećao bezbednost sajta; otkrio tehničke probleme. Naš cilj nije praćenje pojedinačnih korisnika, već razumevanje načina na koji se koristi naš edukativni sadržaj.</p>

      <h2>3. Koje vrste kolačića koristimo?</h2>
      <p><em>Neophodni kolačići:</em> omogućavaju osnovno funkcionisanje sajta. Bez njih određeni delovi internet stranice ne bi mogli pravilno da rade. Koriste se, na primer, za: bezbednost sajta; prikaz sadržaja; čuvanje izbora korisnika u vezi sa kolačićima. Ovi kolačići ne mogu biti isključeni.</p>
      <p><em>Analitički kolačići:</em> koristimo ih kako bismo bolje razumeli: koliko korisnika posećuje sajt; koje stranice su najčitanije; koliko vremena korisnici provode na sajtu; kako se kreću kroz sadržaj. Ove informacije koriste se isključivo u statističke svrhe i ne služe za identifikaciju pojedinačnih korisnika.</p>
      <p><em>Funkcionalni kolačići:</em> omogućavaju da sajt zapamti određena korisnička podešavanja kako bi naredna poseta bila jednostavnija. Na primer: izbor jezika; prihvatanje obaveštenja; određena podešavanja prikaza sadržaja.</p>

      <h2>4. Google Analytics</h2>
      <p>Ca5inoZaštoZato koristi Google Analytics, analitičku uslugu kompanije Google LLC. Google Analytics prikuplja anonimne statističke podatke kao što su: broj posetilaca; posećene stranice; vreme provedeno na sajtu; tip uređaja; internet pregledač; okvirna geografska lokacija. Ove informacije koristimo isključivo radi poboljšanja kvaliteta sadržaja i boljeg razumevanja potreba naših korisnika. Više informacija dostupno je u Google Politici privatnosti: https://policies.google.com/privacy</p>

      <h2>5. Da li koristimo marketinške kolačiće?</h2>
      <p>Ne. Ca5inoZaštoZato trenutno ne koristi marketinške kolačiće, ne prikazuje personalizovane oglase niti koristi alate poput Meta Pixela za oglašavanje ili praćenje marketinških kampanja. Ukoliko se to u budućnosti promeni, korisnici će o tome biti jasno obavešteni putem ove Politike kolačića i banera za saglasnost.</p>

      <h2>6. Koliko dugo se kolačići čuvaju?</h2>
      <p>Trajanje kolačića zavisi od njihove vrste. Neki kolačići brišu se automatski nakon zatvaranja internet pregledača, dok drugi mogu ostati sačuvani određeni vremenski period kako bi zapamtili vaša podešavanja prilikom sledeće posete.</p>

      <h2>7. Kako možete upravljati kolačićima?</h2>
      <p>Prilikom prve posete sajtu možete odabrati koje kolačiće želite da prihvatite. Svoju odluku možete promeniti u bilo kom trenutku putem podešavanja internet pregledača ili banera za kolačiće, ukoliko je dostupan. Većina pregledača omogućava da: obrišete postojeće kolačiće; blokirate sve kolačiće; dozvolite samo određene vrste kolačića; primate obaveštenje pre nego što kolačić bude sačuvan. Imajte u vidu da isključivanje određenih kolačića može uticati na pravilno funkcionisanje pojedinih delova sajta.</p>

      <h2>8. Kolačići trećih strana</h2>
      <p>Pojedini servisi koje koristimo mogu postavljati sopstvene kolačiće. To može uključivati: Google Analytics; YouTube, ukoliko u članke ugrađujemo video sadržaj; Google Fonts ili druge servise koji omogućavaju pravilan prikaz sadržaja. Na obradu podataka putem tih kolačića primenjuju se politike privatnosti njihovih pružalaca usluga.</p>

      <h2>9. Izmene Politike kolačića</h2>
      <p>Zadržavamo pravo da ovu Politiku kolačića izmenimo ili dopunimo radi usklađivanja sa važećim propisima ili promenama u radu sajta. Sve izmene biće objavljene na ovoj stranici zajedno sa datumom poslednjeg ažuriranja.</p>

      <h2>10. Kontakt</h2>
      <p>Ukoliko imate pitanja u vezi sa ovom Politikom kolačića, možete nas kontaktirati putem:</p>
      <p>E-mail: redakcija@ca5inozastozato.rs<br />Internet stranica: https://ca5inozastozato.rs<br />Kontakt forma: https://ca5inozastozato.rs/kontakt (ukoliko bude postojala posebna kontakt stranica)</p>
    </LegalPage>
  ),
});
