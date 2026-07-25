import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/urednicka-politika")({
  head: () => ({
    meta: [
      { title: "Uređivačka politika — Ca5ino ZaštoZato" },
      { name: "description", content: "Principi, nezavisnost i način nastanka sadržaja na edukativnom portalu Ca5ino ZaštoZato." },
      { property: "og:title", content: "Uređivačka politika — Ca5ino ZaštoZato" },
      { property: "og:description", content: "Kako Ca5ino ZaštoZato bira teme, proverava informacije i sarađuje sa stručnjacima." },
    ],
  }),
  component: () => (
    <LegalPage title="Uređivačka politika (Editorial Policy)" breadcrumbLabel="Uređivačka politika">
      <p className="text-xs uppercase tracking-wider text-text-muted">Poslednje ažuriranje: [unesite datum]</p>

      <h2>1. Naša misija</h2>
      <p>Ca5inoZaštoZato je nezavisni edukativni projekat nastao sa ciljem da javnosti približi način funkcionisanja online igara na sreću i iGaming industrije. Verujemo da korisnici imaju pravo da razumeju kako funkcionišu bonusi, verifikacija naloga, RTP, psihologija igranja, poslovni modeli operatera i regulatorni okvir, kako bi mogli da donose informisane odluke. Naš cilj nije da podstičemo ljude na igranje, već da objasnimo sistem iz perspektive ljudi koji ga godinama poznaju iznutra.</p>

      <h2>2. Naši principi</h2>
      <p>Sav sadržaj koji objavljujemo zasniva se na sledećim principima: tačnost; objektivnost; transparentnost; odgovornost; stručnost; razumljivost. Trudimo se da složene teme prevedemo na jednostavan jezik, bez senzacionalizma, preterivanja ili obmanjujućih tvrdnji.</p>

      <h2>3. Naša uređivačka nezavisnost</h2>
      <p>Ca5inoZaštoZato uređuje sadržaj potpuno nezavisno. Na uređivačke odluke ne utiču komercijalni interesi, operateri igara na sreću, marketinške agencije niti druga treća lica. Teme biramo isključivo prema njihovom značaju za korisnike. Ukoliko u budućnosti rad projekta bude finansiran kroz grantove, donacije ili saradnju sa fondacijama i akademskim institucijama, takav vid podrške neće uticati na izbor tema, zaključke autora niti konačan sadržaj koji objavljujemo.</p>

      <h2>4. Kako nastaje sadržaj</h2>
      <p>Sadržaj na sajtu nastaje kombinacijom: dugogodišnjeg profesionalnog iskustva autora; razgovora sa stručnjacima različitih profila; proučavanja regulatornih dokumenata; analize uslova korišćenja operatera; javno dostupnih istraživanja; naučne literature; iskustava korisnika kada su relevantna za temu; sopstvenih analiza i istraživanja. Naš cilj nije da budemo prvi koji će objaviti neku informaciju, već da budemo među onima koji će je objasniti najtačnije i najrazumljivije.</p>

      <h2>5. Kako proveravamo informacije</h2>
      <p>Pre objavljivanja sadržaja nastojimo da informacije proverimo iz više izvora. Kada je moguće, koristimo: zvanične internet stranice regulatora; licence i uslove poslovanja operatera; zvaničnu dokumentaciju proizvođača igara; naučne radove; stručnu literaturu; javno dostupne statistike; iskustvo stručnih saradnika. Ukoliko određena tvrdnja predstavlja mišljenje autora, to će biti jasno naznačeno.</p>

      <h2>6. Stručni saradnici</h2>
      <p>Na pojedinim tekstovima i projektima sarađujemo sa stručnjacima iz različitih oblasti, uključujući: psihologiju; neuropsihijatriju; matematiku i statistiku; pravo; informacione tehnologije; odgovorno igranje; marketing; iGaming industriju. Naš cilj nije da jednu temu posmatramo iz samo jednog ugla, već da čitaocima ponudimo širu i objektivniju perspektivu.</p>

      <h2>7. Greške i ispravke</h2>
      <p>Iako ulažemo maksimalan trud da sadržaj bude tačan, moguće je da se povremeno pojave greške. Ukoliko uočimo netačnu ili zastarelu informaciju, nastojaćemo da je ispravimo u najkraćem mogućem roku. Ukoliko korisnici primete grešku, mogu nas kontaktirati putem kontakt forme ili elektronske pošte. Konstruktivne sugestije i ispravke uvek su dobrodošle.</p>

      <h2>8. Kako koristimo veštačku inteligenciju (AI)</h2>
      <p>Ca5inoZaštoZato može koristiti alate zasnovane na veštačkoj inteligenciji kao pomoć prilikom istraživanja, organizovanja informacija ili jezičke obrade sadržaja. Međutim, nijedan tekst nije objavljen isključivo na osnovu odgovora generisanih veštačkom inteligencijom. Svaki članak prolazi ljudsku proveru, uređivanje i stručnu kontrolu pre objavljivanja. Za tačnost, objektivnost i konačan sadržaj odgovoran je urednički tim, a ne AI alat.</p>

      <h2>9. Kako biramo stručne saradnike</h2>
      <p>Naš cilj je da različite teme posmatramo iz ugla ljudi koji se njima profesionalno bave. Zbog toga sarađujemo sa stručnjacima iz oblasti: psihologije; neuropsihijatrije; matematike i statistike; prava; informacionih tehnologija; odgovornog igranja; marketinga; iGaming industrije. Prilikom izbora saradnika prvenstveno vrednujemo njihovo iskustvo, stručnost i profesionalni integritet. Kada je moguće, uz njihove odgovore objavljujemo kratku biografiju kako bi čitaoci mogli da procene relevantnost njihovog mišljenja.</p>

      <h2>10. Sukob interesa</h2>
      <p>Verujemo da transparentnost predstavlja osnov poverenja. Autori i stručni saradnici dužni su da uredništvu prijave svaki potencijalni sukob interesa koji bi mogao uticati na objektivnost sadržaja. Ukoliko postoji mogućnost da određena profesionalna ili poslovna saradnja utiče na nepristrasnost autora, ta okolnost biće jasno naznačena ili autor neće učestvovati u obradi te teme.</p>

      <h2>11. Kako ažuriramo sadržaj</h2>
      <p>Industrija online igara na sreću menja se veoma brzo. Zbog toga periodično proveravamo ranije objavljene tekstove i po potrebi ih dopunjujemo ili ažuriramo. Ažuriranja mogu obuhvatati: promene zakonskih propisa; izmene pravila operatera; nove tehnologije; nova naučna istraživanja; ispravke netačnih ili zastarelih informacija. Kada dođe do značajnih izmena sadržaja, nastojaćemo da to jasno naznačimo.</p>

      <h2>12. Etički kodeks</h2>
      <p>Ca5inoZaštoZato zasniva svoj rad na odgovornosti, poštovanju činjenica i zaštiti interesa čitalaca. Obavezujemo se da ćemo: informacije predstavljati tačno i u dobroj veri; jasno razlikovati činjenice od ličnih mišljenja; poštovati autorska prava drugih autora; ispravljati uočene greške; poštovati dostojanstvo svih sagovornika; izbegavati senzacionalizam i manipulativne naslove; promovisati odgovorno igranje. Ne objavljujemo sadržaj čija je svrha da obmane korisnike ili podstakne neodgovorno ponašanje.</p>

      <h2>13. Komunikacija sa čitaocima</h2>
      <p>Podstičemo korisnike da postavljaju pitanja, predlažu teme i ukažu na eventualne greške ili nedostatke u objavljenom sadržaju. Verujemo da kvalitetan edukativni portal nastaje kroz otvoren dijalog sa zajednicom. Svaku dobronamernu sugestiju razmatramo sa dužnom pažnjom i nastojimo da odgovorimo u razumnom roku.</p>

      <h2>14. Naša odgovornost prema javnosti</h2>
      <p>Ca5inoZaštoZato je nastao kako bi objasnio način funkcionisanja industrije iz ugla ljudi koji je poznaju iznutra, ne kako bi promovisao igre na sreću. Verujemo da je znanje najbolja zaštita korisnika. Zbog toga ćemo nastaviti da objavljujemo sadržaj zasnovan na činjenicama, iskustvu, stručnim mišljenjima i odgovornom pristupu, sa ciljem da doprinesemo boljem razumevanju iGaming industrije i zaštiti interesa igrača.</p>

      <h2>15. Kontakt uredništva</h2>
      <p>Ukoliko imate pitanja u vezi sa ovom Uređivačkom politikom, želite da prijavite grešku, predložite temu ili ostvarite stručnu saradnju, možete nas kontaktirati putem:</p>
      <p>E-mail: redakcija@ca5inozastozato.rs<br />Internet stranica: https://ca5inozastozato.rs</p>
    </LegalPage>
  ),
});
