import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/uslovi-koriscenja")({
  head: () => ({
    meta: [
      { title: "Uslovi korišćenja — Ca5ino ZaštoZato" },
      { name: "description", content: "Uslovi korišćenja edukativne platforme Ca5ino ZaštoZato." },
      { property: "og:title", content: "Uslovi korišćenja — Ca5ino ZaštoZato" },
      { property: "og:description", content: "Prava i obaveze korisnika edukativnog portala Ca5ino ZaštoZato." },
    ],
  }),
  component: () => (
    <LegalPage title="Uslovi korišćenja (Terms of Use)" breadcrumbLabel="Uslovi korišćenja">
      <p className="text-xs uppercase tracking-wider text-text-muted">Poslednje ažuriranje: [unesite datum]</p>

      <p>Dobro došli na internet stranicu <strong>Ca5inoZaštoZato</strong> („Sajt").</p>
      <p>Korišćenjem sajta www.ca5inozastozato.rs potvrđujete da ste pročitali, razumeli i prihvatili ove Uslove korišćenja. Ukoliko se ne slažete sa bilo kojim delom ovog dokumenta, molimo vas da ne koristite naš sajt.</p>
      <p>Ovi Uslovi uređuju prava i obaveze između vlasnika sajta Ca5inoZaštoZato i svih korisnika koji pristupaju sadržaju objavljenom na sajtu.</p>

      <h2>1. O sajtu</h2>
      <p>Ca5inoZaštoZato je nezavisni edukativni portal posvećen online igrama na sreću, iGaming industriji i odgovornom igranju. Sajt je nastao sa ciljem da korisnicima približi način na koji funkcionišu online kazina i kladionice, bonusi, verifikacija naloga, RTP, volatilnost, psihologija kockanja, regulatorni okvir industrije i drugi aspekti koji utiču na iskustvo igrača.</p>
      <p>Na sajtu objavljujemo: edukativne članke; stručne analize; intervjue sa ekspertima; video sadržaj; odgovore na pitanja korisnika; praktične vodiče; istraživanja i komentare.</p>
      <p><strong>Ca5inoZaštoZato nije organizator igara na sreću.</strong> Ne posedujemo licencu za priređivanje igara na sreću, ne primamo uplate, ne isplaćujemo dobitke, ne otvaramo korisničke naloge niti zastupamo bilo kog operatera. Naš cilj je isključivo edukacija javnosti.</p>

      <h2>2. Prihvatanje uslova korišćenja</h2>
      <p>Pristupanjem ovom sajtu prihvatate ove Uslove korišćenja u celosti. Korišćenjem sajta potvrđujete da: ste punoletni u skladu sa zakonima države iz koje pristupate sadržaju; koristite sadržaj na sopstvenu odgovornost; razumete da sadržaj ima isključivo edukativni karakter; prihvatate da Ca5inoZaštoZato nije odgovoran za odluke koje donesete na osnovu objavljenih informacija. Ukoliko se ne slažete sa ovim uslovima, molimo vas da odmah prestanete da koristite sajt.</p>

      <h2>3. Edukativni karakter sadržaja</h2>
      <p>Sav sadržaj objavljen na sajtu Ca5inoZaštoZato namenjen je isključivo informisanju i edukaciji korisnika. Naš cilj nije da podstičemo igranje igara na sreću, već da objasnimo kako industrija funkcioniše i pomognemo korisnicima da donose informisane odluke.</p>
      <p>Tekstovi predstavljaju: stručna mišljenja autora; iskustva stečena dugogodišnjim radom u iGaming industriji; razgovore sa stručnjacima; analize regulatornih dokumenata; javno dostupne informacije; istraživanja i naučne izvore kada su dostupni.</p>
      <p>Sadržaj objavljen na ovom sajtu ne predstavlja: pravni savet; finansijski savet; poreski savet; medicinski savet; psihološki savet; niti garanciju ishoda bilo kog spora između korisnika i operatera igara na sreću. Svaki kazino ili kladionica posluje u skladu sa sopstvenim pravilima, licencom i zakonima države u kojoj je registrovan.</p>

      <h2>4. Naša misija</h2>
      <p>Ca5inoZaštoZato nastao je iz želje da složene mehanizme iGaming industrije prevedemo na jednostavan i razumljiv jezik. Godinama smo radili unutar industrije i svakodnevno učestvovali u procesima koji oblikuju iskustvo igrača – od kreiranja promotivnih kampanja i bonus ponuda, preko korisničke podrške, pa sve do rešavanja sporova između igrača i operatera. Zato danas želimo da svoje znanje, iskustvo i stručne uvide podelimo sa javnošću. Verujemo da će korisnik koji razume kako funkcionišu igre na sreću, bonusi, verifikacija naloga, psihologija igranja i poslovni modeli kazina donositi odgovornije i informisanije odluke. Naš cilj nije da govorimo ljudima da igraju. Naš cilj je da, ukoliko već odluče da igraju, razumeju sistem u koji ulaze.</p>

      <h2>5. Naša nezavisnost</h2>
      <p>Ca5inoZaštoZato je nezavisan edukativni projekat. Sve analize, tekstovi, mišljenja i video sadržaj nastaju nezavisno, na osnovu: profesionalnog iskustva autora; razgovora sa stručnjacima; regulatornih dokumenata; naučnih istraživanja; javno dostupnih izvora; sopstvenih analiza. Naš cilj nije promocija bilo kog online kazina ili kladionice. Naš cilj je da pružimo tačne, proverene i razumljive informacije koje korisnicima pomažu da bolje razumeju iGaming industriju.</p>

      <h2>6. Naša uređivačka politika</h2>
      <p>Ca5inoZaštoZato nije marketinški portal niti platforma za promociju operatera igara na sreću. Uređivačke odluke donosimo samostalno i nezavisno. Recenzije, analize i mišljenja predstavljaju stav uredničkog tima i zasnivaju se na unapred definisanim kriterijumima, profesionalnom iskustvu autora i javno dostupnim informacijama. Ne prihvatamo izmene sadržaja na zahtev operatera, niti objavljujemo tekstove koji bi doveli u pitanje objektivnost ili kredibilitet sajta. Ukoliko u budućnosti budemo sarađivali sa fondacijama, univerzitetima, istraživačkim centrima ili drugim organizacijama koje podržavaju našu misiju edukacije, takva saradnja neće uticati na uređivačku nezavisnost niti na sadržaj koji objavljujemo. Naš primarni interes ostaje edukacija korisnika i unapređenje razumevanja iGaming industrije kroz činjenice, iskustvo i stručna mišljenja.</p>

      <h2>7. Kako nastaje sadržaj</h2>
      <p>Naš cilj nije da objavljujemo što više tekstova, već da objavljujemo sadržaj koji je tačan, razumljiv i koristan. Sadržaj na sajtu Ca5inoZaštoZato nastaje kombinacijom: dugogodišnjeg profesionalnog iskustva autora u iGaming industriji; razgovora sa stručnjacima iz oblasti psihologije, neuropsihijatrije, matematike, prava, marketinga i informacionih tehnologija; analize regulatornih dokumenata i zakona; proučavanja pravila i uslova poslovanja operatera; javno dostupnih istraživanja i naučne literature; praktičnih primera iz industrije; iskustava korisnika kada su ona relevantna za temu. Kada koristimo statističke podatke ili rezultate istraživanja, trudimo se da navedemo njihov izvor. Naš cilj nije da nudimo senzacionalističke tvrdnje, već da složene teme objasnimo jednostavnim jezikom.</p>

      <h2>8. Transparentnost autora i stručnih saradnika</h2>
      <p>Verujemo da kredibilitet sadržaja počinje kredibilitetom ljudi koji ga stvaraju. Zbog toga sadržaj na sajtu objavljuju autori i stručni saradnici koji imaju relevantno profesionalno iskustvo u oblastima o kojima pišu ili govore. Kod intervjua, analiza i stručnih mišljenja nastojimo da predstavimo biografiju sagovornika kako bi čitaoci mogli da procene njegovu stručnost i iskustvo. Mišljenja stručnih saradnika predstavljaju njihove profesionalne stavove i ne moraju nužno predstavljati stav uredništva Ca5inoZaštoZato.</p>

      <h2>9. Finansiranje projekta</h2>
      <p>Ca5inoZaštoZato je nezavisni edukativni projekat. Trenutni sadržaj nastaje zahvaljujući radu autora i saradnika koji dele zajedničku misiju unapređenja informisanosti korisnika o igrama na sreću i iGaming industriji. U budućnosti rad sajta može biti finansiran putem: donacija; grantova; fondacija; akademskih ili istraživačkih projekata; ili drugih oblika podrške organizacija koje dele našu misiju edukacije. Takav vid finansiranja neće uticati na uređivačku nezavisnost, izbor tema niti objektivnost sadržaja koji objavljujemo. Ukoliko određeni projekat ili istraživanje bude finansijski podržano od strane trećih lica, ta informacija biće jasno naznačena radi potpune transparentnosti prema našim čitaocima.</p>

      <h2>10. Odricanje od odgovornosti</h2>
      <p>Iako ulažemo maksimalan trud da sve informacije budu proverene, tačne i ažurne, Ca5inoZaštoZato ne može garantovati da će svi podaci u svakom trenutku biti potpuno tačni ili nepromenjeni. Operatori igara na sreću mogu u svakom trenutku promeniti: uslove korišćenja; bonus ponude; pravila promocija; načine verifikacije; metode plaćanja; rokove isplate; RTP vrednosti; ili druge informacije bez prethodnog obaveštenja. Pre donošenja bilo kakve odluke preporučujemo da korisnik pročita zvanične uslove konkretnog operatera. Ca5inoZaštoZato ne odgovara za: finansijske gubitke; izgubljene dobitke; odbijene isplate; suspendovane korisničke naloge; sporove između korisnika i operatera; niti bilo koju drugu direktnu ili indirektnu štetu nastalu korišćenjem informacija objavljenih na ovom sajtu. Korisnici koriste sadržaj sajta na sopstvenu odgovornost.</p>

      <h2>11. Odgovorno igranje</h2>
      <p>Ca5inoZaštoZato promoviše isključivo odgovorno igranje. Verujemo da igre na sreću predstavljaju oblik zabave, a ne način ostvarivanja prihoda niti rešavanja finansijskih problema. Nikada nemojte igrati novcem koji ne možete sebi da priuštite da izgubite. Preporučujemo da unapred odredite: budžet; vremensko ograničenje igranja; maksimalan prihvatljiv gubitak. Ukoliko primetite da igre na sreću negativno utiču na vaše finansije, posao, porodične odnose ili mentalno zdravlje, preporučujemo da odmah napravite pauzu i potražite stručnu pomoć. Sadržaj objavljen na sajtu nije namenjen maloletnim licima niti osobama kojima je zakonom zabranjeno učestvovanje u igrama na sreću. Naša misija nije da podstičemo igranje, već da edukujemo korisnike kako bi razumeli rizike, donosili informisane odluke i odgovornije pristupali igrama na sreću.</p>

      <h2>12. Rubrika „Pitanja &amp; Saveti"</h2>
      <p>Rubrika „Pitanja &amp; Saveti" namenjena je edukaciji korisnika i boljem razumevanju tema iz oblasti online igara na sreću, psihologije, matematike, prava i iGaming industrije. Odgovore pripremaju autori sajta ili stručni saradnici iz različitih oblasti, u skladu sa svojim znanjem, iskustvom i važećim propisima u trenutku objavljivanja. Odgovori predstavljaju stručno mišljenje i ne predstavljaju: pravni savet; advokatsko zastupanje; finansijski savet; medicinski ili psihološki savet; niti garanciju ishoda bilo kog spora između korisnika i operatera. Ca5inoZaštoZato zadržava pravo da: skrati ili jezički prilagodi pitanja radi bolje razumljivosti; ispravi gramatičke greške; odbije objavljivanje pitanja koja sadrže uvrede, govor mržnje, diskriminaciju, pretnje ili nezakonit sadržaj; ne objavi pitanja koja nisu u skladu sa misijom sajta. Pitanja korisnika mogu biti objavljena anonimno, osim ukoliko korisnik izričito zatraži drugačije.</p>

      <h2>13. Autorska prava</h2>
      <p>Kompletan sadržaj objavljen na sajtu Ca5inoZaštoZato predstavlja intelektualnu svojinu autora i izdavača sajta, osim ukoliko nije drugačije naznačeno. To uključuje, ali nije ograničeno na: tekstove; analize; istraživanja; video sadržaj; ilustracije; infografike; grafikone; fotografije; logotipe; dizajn sajta; skripte za video sadržaj; intervjue; edukativne materijale; baze podataka. Bez prethodne pisane saglasnosti nije dozvoljeno: kopiranje sadržaja u celini; preuzimanje i ponovno objavljivanje; prevođenje; distribucija; prodaja; korišćenje u komercijalne svrhe; korišćenje za treniranje veštačke inteligencije ili drugih automatizovanih sistema bez naše prethodne saglasnosti. Dozvoljeno je citiranje kraćih delova teksta isključivo uz: jasno navođenje izvora; ime sajta Ca5inoZaštoZato; aktivan link ka originalnom članku. Neovlašćeno preuzimanje sadržaja može predstavljati povredu autorskih prava u skladu sa važećim propisima Republike Srbije.</p>

      <h2>14. Linkovi ka drugim internet stranicama</h2>
      <p>Na pojedinim mestima na sajtu mogu biti objavljeni linkovi ka internet stranicama trećih lica. Takvi linkovi služe isključivo kao dodatni izvor informacija ili referenca. Ca5inoZaštoZato nema kontrolu nad sadržajem, politikom privatnosti, bezbednošću niti načinom poslovanja internet stranica trećih lica. Zbog toga ne odgovaramo za: tačnost informacija objavljenih na drugim sajtovima; njihove uslove korišćenja; politiku privatnosti; eventualne finansijske ili druge posledice nastale njihovim korišćenjem. Korisnici pristupaju internet stranicama trećih lica isključivo na sopstvenu odgovornost.</p>

      <h2>15. Politika privatnosti</h2>
      <p>Korišćenje sajta uređeno je i našom Politikom privatnosti, koja predstavlja sastavni deo ovih Uslova korišćenja. Politika privatnosti detaljno objašnjava: koje podatke prikupljamo; zbog čega ih prikupljamo; kako ih obrađujemo; koliko dugo ih čuvamo; sa kim ih možemo deliti; koja prava korisnici imaju u vezi sa svojim podacima o ličnosti. Obrada podataka vrši se u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije, kao i drugim važećim propisima. Korišćenjem ovog sajta potvrđujete da ste upoznati sa sadržajem Politike privatnosti. Ukoliko se ne slažete sa načinom obrade podataka opisanim u Politici privatnosti, molimo vas da ne koristite naš sajt.</p>

      <h2>16. Izmene Uslova korišćenja</h2>
      <p>Ca5inoZaštoZato zadržava pravo da u bilo kom trenutku izmeni ili dopuni ove Uslove korišćenja radi usklađivanja sa važećim zakonima, unapređenja rada sajta ili promena u načinu pružanja sadržaja. Sve izmene biće objavljene na ovoj stranici zajedno sa datumom poslednjeg ažuriranja. Nastavkom korišćenja sajta nakon objavljivanja izmena smatra se da ste prihvatili nove Uslove korišćenja. Ukoliko se ne slažete sa izmenama, potrebno je da prestanete sa korišćenjem sajta.</p>

      <h2>17. Merodavno pravo</h2>
      <p>Na ove Uslove korišćenja primenjuju se zakoni Republike Srbije. Svi eventualni sporovi koji proisteknu iz korišćenja sajta ili tumačenja ovih Uslova rešavaće se mirnim putem, kada god je to moguće. Ukoliko spor nije moguće rešiti sporazumno, za njegovo rešavanje nadležan je stvarno nadležni sud u Republici Srbiji.</p>

      <h2>18. Kontakt</h2>
      <p>Ukoliko imate pitanja u vezi sa ovim Uslovima korišćenja, Politikom privatnosti ili načinom rada sajta Ca5inoZaštoZato, možete nas kontaktirati putem:</p>
      <p>E-mail: redakcija@ca5inozastozato.rs<br />Internet stranica: https://ca5inozastozato.rs</p>

      <h2>19. Podaci o izdavaču</h2>
      <p>Ca5inoZaštoZato je nezavisni edukativni projekat posvećen razumevanju iGaming industrije, odgovornom igranju i zaštiti igrača kroz pružanje tačnih, objektivnih i razumljivih informacija.</p>
      <p>Osnivač i glavni urednik: <strong>Jovana Bojanić</strong></p>
      <p>Jovana Bojanić je dugogodišnji stručnjak iz oblasti iGaming industrije sa višegodišnjim iskustvom u radu sa online kazinima, kladionicama, korisničkom podrškom, bonus sistemima, rešavanjem sporova između igrača i operatera, kao i kreiranjem edukativnog sadržaja o igrama na sreću.</p>
      <p>Ca5inoZaštoZato osnovan je sa ciljem da javnosti približi način na koji industrija funkcioniše iza kulisa i da korisnicima omogući donošenje informisanih odluka zasnovanih na činjenicama, iskustvu i stručnim mišljenjima. Pored uredničkog tima, na projektu učestvuju i stručni saradnici iz oblasti psihologije, neuropsihijatrije, matematike, prava, informacionih tehnologija i drugih disciplina koje doprinose kvalitetu i objektivnosti objavljenog sadržaja. Ukoliko želite da sarađujete sa nama, predložite temu, prijavite grešku u tekstu ili učestvujete kao stručni saradnik, možete nam se obratiti putem kontakt forme ili elektronske pošte.</p>
      <p>© [godina] Ca5inoZaštoZato. Sva prava zadržana. Sadržaj objavljen na ovom sajtu zaštićen je autorskim pravima i ne može se kopirati, distribuirati ili koristiti u komercijalne svrhe bez prethodne pisane saglasnosti izdavača.</p>
    </LegalPage>
  ),
});
