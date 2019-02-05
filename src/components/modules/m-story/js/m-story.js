import $ from 'jquery';
import fullpage from 'fullpage.js';
import { TweenMax, TimelineMax, Power0 } from 'gsap/all';

class Story {
	constructor() {
		this.initialize();
	}

	setup() {
		// Base selectors
		this.$holder = document.getElementsByClassName('m-story')[0];
		this.$body = document.getElementsByTagName('body');

		// Init bool
		this.$initBool = false;
		this.$init = document.getElementsByClassName('m-story__init')[0];
		this.$initBtn = document.getElementsByClassName('m-story__init__btn')[0];

		// Get chosen language
		this.$lang = window.location.search.split('=');
		this.$lang = this.$lang[this.$lang.length - 1];

		// Anchor link
		this.$anchor;

		// More info section
		this.$moreInfo = document.getElementsByClassName('m-story__moreinfo')[0];
		this.$moreInfoContent = document.getElementsByClassName('m-story__moreinfo--content')[0];
		this.$moreInfoTitle = document.getElementsByClassName('m-story__moreinfo--title')[0];
		this.$moreInfoQuote = document.getElementsByClassName('m-story__moreinfo--quote')[0];
		this.$moreInfoClose = document.getElementById('m-story__moreinfo--close');
		this.$moreInfoTextPerSection = [
			{
				content: [
					{
						tag: 'h2',
						content: 'De schutterij is er al eeuwen bij',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“De meiste komme oet de 17e, 18e eeuw, opgerich door de lokale kirk”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'De schutterij, ook wel het schuttersgilde genoemd, was van oorsprong een lokale militie. Deze milities werden opgericht in de middeleeuwen en bestonden uit burgers. Vaak kwam het initiatief voor het oprichtte van deze manschappen vanuit de kerk. Het geloof speelde namelijk een prominente rol in die tijd en de kerk bezat zelf veel kostbaarheden die beschermt diende te worden. De schutterij moest hun stad of dorp dan ook beschermen en verdedigen bij aanvallen van rondzwervende roversbenden of vreemde legers. Daarnaast moesten zij de orde handhaven in het geval van oproer, brand of belangrijk bezoek. De naam schutterij komt waarschijnlijk van het schieten.',
						att: []
					},
					{
						tag: 'p',
						content: 'De kerntaken van de schutterij waren dus te vergelijken met die van de hedendaagse orde en hulpdiensten. Dit is ook de reden dat de schutterijen op een gegeven moment niet meer nodig waren. In 1810 werd er namelijk een nationaal politiekorps opgericht die de taken van de schutterijen overnamen. In het rijk van Napoleon moest iedere regering een eigen politiekorps hebben die het hele land beschermde, en dat betekende dat alle schuttersgilden verboden moesten worden.',
						att: []
					},
					{
						tag: 'p',
						content: 'Toen de legers van Napoleon Nederland weer verlieten besloot de regering dat de nationale politie zou blijven bestaan. De schutterijen kwamen zodoende pas aan het einde van de 20ste eeuw terug, toen enthousiastelingen besloten het historische beeld van een stad of streek te laten herleven. Op dat moment ontstonden in beginselen de schutterijen zoals we ze nu kennen.',
						att: []
					},
					{
						tag: 'p',
						content: 'De schutterij heeft dus een totaal andere functie gekregen. Zij hoeven niet langer de steden of dorpen waar zij zich bevinden te beschermen, maar zijn wél belangrijk voor het behoud van historische tradities. Schutterijen zijn daarmee tegenwoordig folkloristische verenigingen geworden; verenigingen die de geschiedenis van het volk in stand proberen te houden.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-1.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Het schot verzilveren',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“Esse op ’t gooje moment aan de beurt bis, en de sjuuts raak, dan bisse keuning”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Het koningsschieten, of vogelschieten, is één van de belangrijkste activiteiten van het jaar voor een schutterij. Tijdens het koningsschieten wordt er namelijk bepaald wie dat jaar de nieuwe koning van de schuttersvereniging gaat worden. Om beurten mag men schieten op een houten vogel die bovenop een hoge paal bevestigd is. De wedstrijd om het koningschap wint men door het laatste restje van de vogel weg te schieten. Hier is natuurlijk enige kunde voor nodig, maar vooral een portie geluk om aan de beurt te zijn net wanneer er nog maar een klein restje van de vogel over is. Tijdens de schietwedstrijden vormen stress en de weersomstandigheden soms een spelbreker, waardoor de schutter sneller mist.',
						att: []
					},
					{
						tag: 'p',
						content: 'De uiteindelijke winnaar, de koning, wordt geëerd nadat hij gewonnen heeft. In veel gevallen mag hij dan het schutterszilver dragen. Dit is een zilveren ketting bestaande uit verschillende schilden. Elke koning laat zo’n zilveren schild maken, waarop zijn naam, de naam van schutterij, en het jaar van zijn koningschap staan. Als er te veel schilden aan de ketting zitten en de ketting dus niet meer draagbaar is, dan worden de oudere schilden er meestal af gehaald.',
						att: []
					},
					{
						tag: 'p',
						content: 'Naast zijn eigen schild aan de zilveren ketting, mag de koning ook zijn koningin uitkiezen. In de meeste gevallen valt die eer te beurt aan zijn vrouw, vriendin of dochter. Op steeds meer plaatsen mogen vrouwen echter ook meedoen aan de wedstrijd. Zo kan het dus ook gebeuren dat een vrouw schutterskoningin wordt.',
						att: []
					},
					{
						tag: 'p',
						content: 'Naast koning, kan men ook keizer worden. Dit gebeurt wanneer men driemaal achter elkaar koning is geworden. Omdat dit erg moeilijk is, zijn er veel schutterijen die nog nooit een keizer hebben gehad. Om de kans te vergroten dat er een (nieuwe) keizer komt worden de regels daarom soms aangepast. Men kan dan bijvoorbeeld keizer worden door drie keer in zijn leven koning te worden, of krijgt extra schoten om de kans te vergroten dat hij het laatste stuk van de vogel zal wegschieten. Dit verschilt echter per schutterij en er zijn dus ook geen vaste regels omtrent het worden van keizer. Als het echter eenmaal lukt om keizer te worden, dan behoud je deze titel ook voor het leven óf totdat er een nieuwe keizer komt en de huidige bereid is afstand te doen van zijn titel.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-2.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Vreemde vogels en bolletjes',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“Zoeine vogel heat toch waal het meist, mer is d’r binoa neet meer”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Op veel plaatsen waar het koningsschieten wordt georganiseerd gebruikt men een andere naam om dit fenomeen te benoemen. De naam ‘koningsschieten’ verwijst logischerwijs naar de winnaar van de competitie, die uiteindelijk de ‘koning’ van de schutterij zal worden. Op sommige plaatsen spreekt men ook wel van het ‘vogelschieten’ of ‘papegaaischieten’. Dit verwijst naar het object waarop men schiet. Bij het vogelschieten wordt er dus geschoten op een vogel gemaakt van hout. Deze vogel wordt traditiegetrouw van hout gemaakt en beschilderd in mooie, felle kleuren. Hierdoor valt de vogel niet alleen van grote hoogte op, maar geeft het tegelijkertijd aan hoeveel waarde er aan het koningsschieten wordt gehecht.',
						att: []
					},
					{
						tag: 'p',
						content: 'Tegenwoordig wordt er echter vaak niet meer op een houten vogel geschoten, maar op ronde plaat met daarop meestal wel nog een vogel afgebeeld. Of er wordt geschoten op een schietboom. Op deze schietboom staat een soort hark waaraan verschillende houten blokjes van 1 cm of 1,5 cm zijn bevestigd. Deze blokjes worden ook wel ‘bolletjes’ genoemd. Deze schuttersbomen worden echter meestal gebruikt bij andere schuttersfeesten zoals bondsfeesten waarbij een twintigtal schutterijen tegen elkaar strijden, en dus niet specifiek bij het koningsschieten. Ook bij het grootste schuttersfeest, het OLS, worden de ‘bolletjes’ gebruikt.',
						att: []
					},
					{
						tag: 'p',
						content: `De leden van de schutterijen worden bij die grotere schutterswedstrijden ingedeeld in ploegen van 6 personen. In de eerste ronde dienen er 3 x 3 bolletjes afgeschoten te worden. Als niemand gemist heeft in een ploeg, mag je door naar de volgende ronde. Vervolgens wordt er in de meeste gevallen doorgeschoten totdat er gemist wordt. In schutterstermen noemt men dit ‘kavelen’.`,
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-3.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Koning, keizer, admiraal…',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“Jekerein is geliek he, die range zin vanoet de historie en houwe ver in ere”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'In de schutterij is er voor iedereen plaats, van jong tot oud, voor man en vrouw. Samen vormen zij een hechte club waarin iedereen zo zijn eigen taak en rang heeft. Ondanks dat iedereen gelijk is, wordt er van oudsher wel vastgehouden aan de rangen binnen de schutterij omdat dit een belangrijk onderdeel is van het schuttersweze. De rang- en taakverdeling binnen de schutterij is het best zichtbaar tijdens het marcheren. Tijdens feesten en ceremonies lopen de schutters namelijk strak in het gelid gezamenlijk volgens een vaste volgorde de route af. Om iedereen in dezelfde maat te laten marcheren brengen verscheidene schutters nummers ten gehore tijdens het marcheren. Ook dit is iets dat al afstamt vanuit de begintijden van de schutterij en op zijn plaats weer afkomt van de legers die zich door muziek lieten begeleiden.',
						att: []
					},
					{
						tag: 'p',
						content: 'De rangen en taken binnen de schutterij komen ook tot uiting in de kleding die de schutters dragen. Zo dragen alle schutters kostuums die speciaal voor hun schutterij zijn ontworpen en gemaakt. Aan ieder kostuum is, voor de kenner althans, te herkennen welke taak en rang de drager heeft. In de schutterij zijn normaliter de volgende rangen en taken, in de volgorde waarin zij ook marcheren, te vinden:',
						att: []
					},
					{
						tag: 'ul',
						content: '<li>Bordjesdrager: meestal een kind dat een bordje vasthoudt met daarop de naam van de schutterij.</li><li>Bielemannen: mannen met bijl en baard die vroeger de weg vrij moesten maken voor de overige manschappen.</li><li>Tambour-maître: heeft de leiding over het trommelkorps.</li><li>Het trommelkorps: de hele stoet marcheert op de muziek van het trommelkorps. Deze bestaat uit verschillende trommels, maar in de meeste gevallen zijn er ook schutters bij die onder andere de klaroen en hoorn bespelen.</li><li>Marketentsters: vrouwelijke leden die vroeger voor de manschappen zorgden. In de stoet dragen de marketentsters een mand met daarin meestal een brood en een tonnetje jenever.</li><li>Vlaggendrager: draagt de historische vlag van de schutterij.</li><li>Koning en koningin: de winnaar van het koningsschieten en zijn koningin.</li><li>Keizer en keizerin (als deze er is): de drievoudig winnaar van het koningsschieten en zijn keizerin.</li><li>Officieren: hebben vaak een functie in het bestuur, zijn daarom belangrijk en dragen een sabel.</li><li>Commandant: stelt de manschappen op en zorgt ervoor dat iedereen in pas loopt.</li><li>Manschappen: De manschappen marcheren achteraan de stoet. Zij dragen een geweer over de schouder en nemen meestal deel in de schietwedstrijden.</li>',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-4.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Niet geschoten is altijd mis',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“’t Is neet meer ’t materiaal datse vreuger houws, mer noe eg fatsoenlijk”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Het schieten is één van de belangrijkste onderdelen van de schutterij. Wie goed kan schieten, én een portie geluk heeft, kan er koning mee worden en andere schietwedstrijden zoals het OLS mee winnen. In het algemeen worden bij het Limburgs traditioneel schieten buksen gebruikt met munitie met de kaliber nummers 12 en 16. Dit zijn kogels met een massa van 45 gram voor de kogel van het kaliber 12 en circa 40 gram voor de kogel van het kaliber 16. De snelheid waarmee de kogel wordt afgevuurd bedraagt maximaal 230 m/sec.',
						att: []
					},
					{
						tag: 'p',
						content: 'De buksen die gebruikt worden voor schietwedstrijden zijn zware geweren van wel bijna twee meter lang. Dit geweer weegt ook nog eens zo’n 15 kilogram. Hoewel dit nog wel eens kan verschillen is op 9 meter van de schietboom met daarop de vogel of bolletjes een speciale aanlegpaal, ook wel schutsboom genoemd, opgesteld. De schutter kan zijn buks op deze paal laten steunen en zo een stabiele houding aannemen. In die houding kan hij niet alleen de terugslag opvangen, maar is het ook mogelijk langdurig op de bolletjes of de vogel te mikken. Dat laatste is vooral belangrijk omdat het, in het geval van de bolletjes, niet ongebruikelijk is dat iedere schutter keer op keer raak blijft schieten.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-5.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'De beloning voor de koning',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“’t Is toch oug nog ech unne eer he, keuning zin van zo’n gans durp”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Het schutters leven is er een van tradities en gebruiken. Ceremoniële gelegenheden zijn dan ook een belangrijk onderdeel van de schutterij. Zo ook de ceremonie van het koningsschieten. Hoewel deze bij iedere vereniging anders verloopt, zijn er wel elementen die bij veel schutterijen terugkomen;',
						att: []
					},
					{
						tag: 'p',
						content: 'Eerst verzamelen de leden van de schutterij zich in het schutterslokaal. Hierna marcheren zij in optocht, met het koningszilver en de vogel, naar het woonhuis van de koning waar deze wordt uitgenodigd om deel te nemen aan de optocht naar de kerk voor het bijwonen van de offermis. Na de Heilige Mis trekt men naar buiten en legt men een eed van trouw af aan het geestelijk gezag en vertrekt men terug naar het schutterslokaal voor een koffietafel.',
						att: []
					},
					{
						tag: 'p',
						content: 'Voordat het koningsschieten begint wordt de schutsboom, ook wel aanlegpaal genoemd, ‘vrij gemaakt’ door er driemaal omheen te lopen. Om de schiet volgorde te bepalen vindt er hierna een loting plaats door lotnummers uit de hoed van de koning te trekken. De voormalige koning hangt dan zijn zilveren ketting op aan de schutsboom, en houdt een afscheidsrede. Hierna kan het schieten eindelijk van start gaan.',
						att: []
					},
					{
						tag: 'p',
						content: 'Om en om mogen de manschappen schieten volgens de volgorde die tijdens de loting is bepaald. Iedereen schiet met hetzelfde geweer, een 2 meter lange buks. Als de vogel van de paal geschoten is, is de nieuwe koning bekend die als eerste gefeliciteerd moet worden door de oud-koning die hem de zilveren ketting omhangt als symbool van het nieuwe koningschap. De nieuwe koning legt daarna de koningseed af waarin hij onder andere zweert het koningschap goed in te vullen. Tenslotte nodigt hij zijn schutterij, familie en de aanwezigen uit om zijn overwinning te vieren.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-6.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Van beschermen naar behouden',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“Jekerein is d’r veur mekaar, in gooje, mer zeker oug in slechte tieje”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Als je het verhaal over de schutterij volgt, dan zie je dat er door de jaren heen een aantal dingen zijn veranderd. Men schiet niet meer altijd op een vogel tijdens het koningsschieten, en ook vrouwen mogen mee schieten om koningin te worden. De grootste verandering lijkt echter nog immer te zitten in de veranderende functie van de schutterijen. Waar zij ooit begonnen als de orde houders en beschermers van steden en dorpen, lijken zij nu die functie totaal verloren te zijn.',
						att: []
					},
					{
						tag: 'p',
						content: 'Schutterijen hebben echter een nieuwe functie gekregen. Zij vertellen en behouden niet alleen een deel van onze geschiedenis en de tradities die daarbij kwamen kijken, maar spelen op veel plekken ook een grote rol in het verenigings- en daarmee ook het dorpsleven. Schutterijen geven mensen de mogelijkheid ergens bij te horen in een tijd waarin alles steeds individueler lijkt te worden, mensen zich eenzaam voelen en vervreemde van de samenleving. Mensen neigen terug naar een identiteit waarbij broederschap en bouwen en vertrouwen op en met elkaar nog hoog in het vaandel staan en kunnen juist datgene vinden in een schutterij.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-7.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Tradities ten gronde',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“De mos ’t toch veurnamelik hubbe van de families die al lid zeen”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'Het is een pijnlijk gegeven; verenigingen die zich bezighouden met volkscultuur en immaterieel erfgoed hebben het moeilijk. Veel folkloristische verenigingen, zoals ook de schutterij, kampen met een oubollig imago, een individualistische tijdsgeest en daardoor een gebrek aan nieuw bloed. Verenigingen die al eeuwen bestaan komen in gevaar als ze niet moderniseren.',
						att: []
					},
					{
						tag: 'p',
						content: `Het algemene beeld van de meeste schutterijen is dat zij bestaan uit 'mannen op leeftijd'. Hoewel dit per definitie niet zo is, heeft het schutterswezen wel degelijk te kampen met teruglopende ledenaantallen. Uit tellingen blijkt zelfs dat de meeste schutterijen een jaar of twintig geleden dubbel zo groot waren. Sommige, met name in de steden, hebben nog maar een handvol leden of bestaan al helemaal niet meer. Er speelt een generatie verschuiving in het verenigingsleven die nog niet in deze omvang heeft plaatsgevonden. Verenigingen weten daarom dan ook niet hoe ze dit probleem moeten oplossen.`,
						att: []
					},
					{
						tag: 'p',
						content: `Een van de problemen is vaak ook dat het lidmaatschap bij een schutterij erg veel tijd in beslag neemt. Men moet veel oefenen, en dan zijn er ook nog ceremonies en feesten waarbij men aanwezig moet zijn. Een beetje schutter noemt het dan ook een levensstijl, en geen hobby die je er enkel voor de lol bij doet. Daarnaast vinden veel jonge mensen dat schutterijen er over het algemeen, ondanks dat dit ook de bedoeling is, ouderwets uitzien, en willen zij de ‘rare pakken’ waarin de schutters lopen niet aantrekken. Veel jongeren blijven daarnaast niet meer hangen in hun eigen stad of dorp, en nieuwe inwoners van buiten zijn, en willen niet, bekend zijn met de tradities en plaatselijke verenigingen. Ook is de jongere generatie individueler ingesteld en beperken ze zich niet meer tot één ding. Dat past natuurlijk niet goed bij de schutterijen, waar 'broederschap' en 'gemeenschap' hoog in het vaandel staan.`,
						att: []
					},
					{
						tag: 'p',
						content: 'Ook zien de schutters zelf de toekomst niet al te rooskleurig in. Nieuwe aanwas is vooral afhankelijk van de kroost van schutters en ook dan is het nog allerminst een zekerheid of deze dit wel (blijven) willen. Daarnaast zijn er maar weinig schutters die mogelijke oplossingen zoals het commercialiseren van schietwedstrijden door middel van live-televisie-uitzendingen of livestreams op internet omarmen. Zij vrezen hierdoor de authenticiteit en charme van het schutterswezen te verliezen dat door zulke oplossingen ontegenzeggelijk in het gedrang komt.',
						att: []
					},
					{
						tag: 'p',
						content: 'Schutterijen worden door deze problemen dus geconfronteerd met een tweestrijd. Zij moeten veranderen en moderniseren om leden te krijgen, maar kunnen dat aan de andere kant niet (te ver) doorvoeren als ze hun tradities in ere willen houden. Hoe maak je iets aantrekkelijk voor de jongere generatie zonder tradities te verliezen of te veel te veranderen?',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-8.png',
						att: []
					}
				]
			},
			{
				content: [
					{
						tag: 'h2',
						content: 'Na regen komt zonneschijn; het OLS',
						att: ['class', 'm-story__moreinfo__title']
					},
					{
						tag: 'blockquote',
						content: '“’t Is ech gezelligheid, fees en vrung he, doa zal noojt get mit gebeure”',
						att: ['class', 'm-story__moreinfo__quote']
					},
					{
						tag: 'p',
						content: 'De schutterij verkeerd overduidelijk in zwaar weer. Maar na regen komt zonneschijn. En ja, één zwaluw maakt nog geen zomer, maar toch. Sinds jaar en dag wordt er een jaarlijks een groots terugkerend evenement georganiseerd; het Oud Limburgs Schuttersfeest (OLS).',
						att: []
					},
					{
						tag: 'p',
						content: 'Op dit festijn komen vrijwel alle schutterijen uit Belgisch en Nederlands Limburg iedere zomer samen. De ongeveer 150 schutterijen die meedoen aan het OLS zijn stuk voor stuk aangesloten bij de Oud-Limburgse Schuttersfederatie, het overkoepelend orgaan voor alle schutterijen en schuttersgilden van Belgisch en Nederlands Limburg.',
						att: []
					},
					{
						tag: 'p',
						content: 'Het OLS start met een folkloristische optocht van alle schutterijen, met als hoogtepunt het defilé waarbij de schutterijen een eerbetoon brengen aan de aanwezigen. Tijdens de optocht worden de schutterijen op verschillende punten beoordeeld door een vakjury, zoals Beste Defilé en Mooiste Uniform. Na de optocht vinden tal van groeps- en individuele wedstrijden plaats. De drumbands spelen een muziekstuk; exercitiepelotons worden getoetst op bekwaamheid; vendeliers tonen hun kunsten, muziek solisten treden apart op. Ook zijn er schoonheidswedstrijden voor de koningen, koninginnen, keizers, keizerinnen, generaals, hofdames, bielemannen, sappeurs, marketentsters, soetelaarsters en hospitaalsoldaten.',
						att: []
					},
					{
						tag: 'p',
						content: 'De belangrijkste wedstrijd is de schietwedstrijd, waarbij de schutters houten bolletjes moeten afschieten uit een schietboom. De winnaar van de schietwedstrijden ontvangt de trofee den Um en mag het jaar daarop het OLS organiseren. Een winnende schutterij mag de eerstvolgende vijf jaren bij winst niet het OLS organiseren, ze schieten dan alleen mee voor de eer.',
						att: []
					},
					{
						tag: 'p',
						content: 'Het OLS heeft sinds 2008 de status van nationaal immaterieel cultureel erfgoed in Vlaanderen, en in Nederland sinds 2014. Het OLS trekt jaarlijks enkele tienduizenden bezoekers. Vanaf 2005 wordt er ook een Kinjer-OLS georganiseerd voor basisscholen. Met allerlei nieuwe activiteiten die ook voor de jongere generatie aantrekkelijk zijn wordt op deze manier geprobeerd om meer mensen bij de schutterijen te betrekken.',
						att: []
					},
					{
						tag: 'p',
						content: 'De ongekende populariteit van het OLS maakt duidelijk dat er wel degelijk een toekomst is voor de schutterij. En hoewel dit geen vaste of blijvende oplossing biedt voor de problemen waarmee ze kampen is het op z’n minst een bron van inspiratie en motivatie. De huidige maatschappij kan hoe dan ook een voorbeeld nemen aan de schutterij met zijn daden en doen. De schutterij; een eeuwenoude traditie die gekoesterd moet worden.',
						att: []
					},
					{
						tag: 'img',
						content: '/img/extrainfo-image-9.png',
						att: []
					}
				]
			}
		];

		// Navigation
		this.$navButton = document.getElementById('m-navigation__button');
		this.$navItems = document.getElementsByClassName('m-navigation__item');
		

		// FullPage instance
		this.$fullpageOptions = {
            licenseKey: '49DC2AC1-90EE4B99-807E2E82-35003862',
			navigation: false,
			anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			menu: '#m-navigation__list',
			sectionsColor:['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
			lazyLoading: true,
			afterLoad: (origin, destination, direction) => {
				this.$anchor = destination.anchor;
				this.clearTL(destination.anchor);
				TweenMax.killAll(false, true, false);
				if (origin) {
					this.stopVoiceOver();
					this.removeSVGObject(origin.anchor);
				}
				this.buildAll(Number(destination.anchor));
				if (!this.$initBool) {
					this.$initBtn.addEventListener('click', (e) => {
						e.preventDefault();
						if (Number(destination.anchor === 10)) {
							this.$audioMusic.play();
						} else {
							this.$audioMusic.play();
							this.$audioVoice.play();
						}
						this.$initBool = true;
						this.$init.remove();
					});
				}
			}
		};
        this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
		this.$fullpageCell = document.getElementsByClassName('fp-tableCell');

		// Flying object timeline
		this.$objectAnimation;

		// Audio elements
		this.$audioVoice = document.getElementsByClassName('m-story__voice')[0];
		this.$audioMusic = document.getElementsByClassName('m-story__music')[0];

		// Pole animation timeline
		this.$poleAnimationTimeline;

		// Switch lang button
		this.$switchBtn = document.getElementsByClassName('m-story__switch')[0];
		if (this.$switchBtn) {
			this.$switchBtn.innerText = this.$lang === 'lim' ? `Beleef in het Nederlands` : `Beleef in het Limburgs`;
		}
	}

	// Event listeners
	eventListeners() {
		if (this.$navItems) {
			for (let x = 0; x < this.$navItems.length; x++) {
				this.$navItems[x].addEventListener('click', this.handleRoute.bind(this));
			}
		}

		if (this.$moreInfoClose) {
			this.$moreInfoClose.addEventListener('click', (e) => {
				e.preventDefault();
				if (this.$moreInfo.classList.contains('is--active')) {
					this.$moreInfo.classList.remove('is--active');
					this.$navButton.style.display = 'block';
					this.rebuildAll(this.$anchor);
				}
			});
		}

		if (this.$navButton) {
			this.$navButton.addEventListener('click', this.disableScroll.bind(this));
		}

		if (this.$switchBtn) {
			this.$switchBtn.addEventListener('click', (e) => {
				e.preventDefault();
				const lang = this.$lang === 'nl' ? 'lim' : 'nl';
				window.location.href = `${window.location.origin}/story?lang=${lang}#1`;
			});
		}
	}

	// Reset fullpagecell display
	resetPosition() {
		for (let i = 0; i < this.$fullpageCell.length; i++) {
			this.$fullpageCell[i].style.display = 'block';
		}
	}

	// Disable scroll on navigation opening
	disableScroll(e) {
		if (e.target.classList.contains('is--active')) {
			this.destroyAll();
		} else {
			this.rebuildAll();
		}
	}

	// Handle nav-item kliks
	handleRoute(e) {
		this.rebuildAll(this.$anchor);
		if ($(e.target).attr('data-menuanchor')) {
			window.location.href = `/#${$(e.target).attr('data-menuanchor')}`;
		}
	}

	// Set text to opacity 0 initial
	clearTL(anchor) {
		const clearTextTimeline = new TimelineMax();

			if (document.getElementsByClassName('m-story__text')[anchor-1]) {
				const getChildCount = document.getElementsByClassName('m-story__text')[anchor-1].childElementCount;
		
				for (let i = 0; i < getChildCount; i++) {
					clearTextTimeline
						.set(document.getElementsByClassName(`m-story__text${anchor}-${i+1}`), {
							autoAlpha: 0
						});
				}
			}

		const clearPoletimeline = new TimelineMax();
		if (anchor === 7|| anchor === 8 || anchor === 9) {
			
			const elems = document.getElementsByClassName('m-story__paal');
			let el;
			for (let i = 0; i < elems.length; i++) {
				if (elems[i].src === `${window.location.origin}/img/paal8.svg`) {
					el = elems[i];
				}
			}

			if (el.getAttribute('style')) {
				el.removeAttribute('style');
				clearTextTimeline
					.set(el, {
						scaleY: 1,
						x: 0,
						rotation: 0,
						transformOrigin: '50%, 100%'
					});
			}
				
		}
	}

	// Build all main (fullpage) elementes
	buildAll(anchor) {
		this.clearTL(anchor);
		this.placeRightParagraph(anchor);
		this.fetchObjectSvg(anchor);
		this.removeText(anchor);
	}

	// Rebuild
	rebuildAll(anchor) {
		$('#m-story').css({
			display: 'block'
		});
		this.newFullpageInstance();
	}

	// make new fullpage instance
	newFullpageInstance() {
		this.$fullPageInstance = new fullpage('#m-story', this.$fullpageOptions);
	}

	// Place right text for animation per section
	placeRightParagraph(anchor) {
		let lang;

		if (this.$lang === 'nl') {
			lang = 'nl';
		} else if (this.$lang === 'lim') {
			lang = 'lim';
		}

			fetch(`/txt/text-${lang}-${anchor}.svg`)
				.then((response) => {
					return response.text();
				})
				.then((data) => {
					if (Number(document.getElementsByClassName('m-story__text')[anchor-1].getAttribute('data-id')) === anchor) {
						document.getElementsByClassName('m-story__text')[anchor-1].innerHTML = data;
					}
				});
			setTimeout(() => {
				this.runRightAnimation(anchor);
			}, 500);

	}

	// Run animation for right paragraph
	runRightAnimation(anchor) {

		const textTimeLine = new TimelineMax();

		if (document.getElementsByClassName('m-story__text')[anchor-1]) {
			const getChildCount = document.getElementsByClassName('m-story__text')[anchor-1].childElementCount;

			textTimeLine
				.fromTo(document.getElementsByClassName(`m-story__text${anchor}-1`), 1, {
					y: '-=50',
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					onStart: this.getRightAudio.bind(this),
					onStartParams:[anchor]
				}, '+=0.5');
	
			for (let i = 0; i < getChildCount; i++) {
				if (i + 1 !== 1) {
					textTimeLine
						.fromTo(document.getElementsByClassName(`m-story__text${anchor}-${i+1}`), 1, {
							y: '-=50',
							autoAlpha: 0
						}, {
							y: 0,
							autoAlpha: 1	
						}, '+=0.5');
				}
			}

		}

	}

	// Place right object per section
	fetchObjectSvg(anchor) {
		
		if (anchor !== 10) {
			fetch(`/img/object${anchor}.svg`)
				.then((response) => {
					return response.text();
				})
				.then((data) => {
					document.getElementsByClassName('m-story__object--container')[anchor - 1].innerHTML += data;
					this.placeObjectSVG(anchor);
				});
		}

	}

	placeObjectSVG(anchor) {
		// SVG element
		const svgEl = document.getElementsByClassName(`m-story__object${anchor}`)[0];
		svgEl.setAttribute('viewBox', `0, 0, ${window.innerWidth}, ${(window.innerHeight / 2)}`);

		// Object path + object plus
		const el = document.getElementsByClassName(`object${anchor}`)[0];
		el.style.transform = 'scale(0.5)';
		el.style.opacity = '1';

		// Object path
		const elObject = document.getElementsByClassName(`object__object${anchor}`)[0];
		elObject.style.opacity = '1';

		// object plus
		const elPlus = document.getElementsByClassName(`object__plus${anchor}`)[0];
		elPlus.style.opacity = '1';

		el.addEventListener('click', (e) => {
			if (!this.$moreInfo.classList.contains('is--active')) {
				this.$moreInfo.classList.add('is--active');
				this.$navButton.style.display = 'none';
				this.$moreInfoContent.scrollTop = 0;
				this.destroyAll();
			}
		});

		this.animateObject(el);
	}

	// Animate section specific object
	animateObject(element) {
		let speed;

		if (window.innerWidth > 1200) {
			speed = 10;
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
			speed = 5;
		} else {
			speed = 3;
		}

		this.$objectAnimation = new TimelineMax();
		this.$objectAnimation
			.to(element, speed, {
				x: Math.round(Math.random() * (window.innerWidth - element.getBoundingClientRect().width)),
				y: Math.round(Math.random() * ((window.innerHeight / 2) - element.getBoundingClientRect().height)), 
				ease:Power0.easeInOut,
				onComplete: this.animateObject.bind(this),
				onCompleteParams:[element]
			});
	}

	getPole() {
		const poles = document.getElementsByClassName('m-story__paal');
		let pole;

		for (let i = 0; i < poles.length; i++) {
			if (poles[i].src === `${window.location.origin}/img/paal8.svg`) {
				pole = poles[i];
			}
		}

		const VOInterval = setInterval(() => {
			if (this.$audioVoice.currentTime > 17) {
				this.animatePole(pole);
				stopInterval();
			}
		}, 500);

		const stopInterval = () => {
			clearInterval(VOInterval);
		};

	}

	animatePole(el) {
		this.$poleAnimationTimeline = new TimelineMax();
		this.$poleAnimationTimeline
			// 1
			.to(el, 0.3, {
				x: 5
			})
			.to(el, 0.3, {
				x: -5
			})
			.to(el, 0.3, {
				x: 0
			})
			// 2
			.to(el, 0.3, {
				x: 5
			})
			.to(el, 0.3, {
				x: -5
			})
			.to(el, 0.3, {
				x: 0
			})
			// 3
			.to(el, 0.3, {
				x: 5
			})
			.to(el, 0.3, {
				x: -5
			})
			.to(el, 0.3, {
				x: 0
			})
			// 4
			.to(el, 0.3, {
				x: 5,
				scaleY: 1.1
			})
			.to(el, 0.3, {
				x: -5
			})
			.to(el, 0.3, {
				x: 0
			})
			.to(el, 6, {
				transformOrigin:'100% 100%',
				rotation: -60
			})
			.to(el, 2, {
				transformOrigin:'100% 100%',
				rotation: -90
			},'-=1');
	}

	removeText(anchor) {
		if (this.$moreInfoContent.children.length > 0) {
			for (let i = this.$moreInfoContent.children.length; i >= 0; i--) {
				if (i > 0) {
					this.$moreInfoContent.children[i-1].remove();
				}
			}
		}
		this.placeRightText(anchor);
	}

	// Place right additional text
	placeRightText(anchor) {
		const index = anchor - 1;

		if (this.$moreInfoTextPerSection[index]) {
			for (let i = 0; i < this.$moreInfoTextPerSection[index].content.length; i++) {
				// Create right element
				const el = document.createElement(this.$moreInfoTextPerSection[index].content[i].tag);

				if (this.$moreInfoTextPerSection[index].content[i].tag === 'img') {
					el.src = this.$moreInfoTextPerSection[index].content[i].content;
				} else if (this.$moreInfoTextPerSection[index].content[i].tag === 'ul') {
					// set text
					el.innerHTML = this.$moreInfoTextPerSection[index].content[i].content;
				} else {
					// set text
					el.innerText = this.$moreInfoTextPerSection[index].content[i].content;
				}
				// set attribute if there is one
				if (this.$moreInfoTextPerSection[index].content[i].att.length > 0) {
					el.setAttribute(this.$moreInfoTextPerSection[index].content[i].att[0], this.$moreInfoTextPerSection[index].content[i].att[1]);
				}

				// Append to content section
				this.$moreInfoContent.appendChild(el);
			}
		}
	}

	// Place right audio paths + play
	getRightAudio(anchor) {
		if (anchor !== 10) {
			this.$audioVoice.src = `/audio/voiceover/${this.$lang}/${anchor}.mp3`;
			setTimeout(() => {
				if (this.$initBool) {
					this.$audioVoice.play();
				}
			}, 50);
		}

		if (anchor === 7) {
			setTimeout(() => {
				this.$audioMusic.removeAttribute('src');
				this.$audioMusic.pause();
				this.$audioMusic.currentTime = 0.1;
			}, 50);
		} else if (anchor === 8) {
			this.$audioMusic.src = '/audio/music/8.mp3';
			setTimeout(() => {
				if (this.$initBool) {
					this.$audioMusic.play();
				}
			}, 50);
			this.getPole();
		} else if ((anchor === 9 || anchor === 10) && this.$audioMusic.src !== `${window.location.origin}/audio/music/9.mp3`) {
			this.$audioMusic.src = '/audio/music/9.mp3';
			setTimeout(() => {
				if (this.$initBool) {
					this.$audioMusic.play();
				}
			}, 50);
		} else if ((anchor < 7) && this.$audioMusic.src !== `${window.location.origin}/audio/music/1.mp3`) {
			this.$audioMusic.src = '/audio/music/1.mp3';
			setTimeout(() => {
				if (this.$initBool) {
					this.$audioMusic.play();
				}
			}, 50);
		}
		setTimeout(() => {
			if (this.$audioMusic.currentTime === 0 && this.$initBool) {
				this.$audioMusic.play();
			}
		}, 1000);
	}

	// Stop audio on destroy
	stopAudio() {
		this.$audioMusic.pause();
		this.$audioMusic.currentTime = '0';
		this.$audioMusic.src = '/';
		this.$audioVoice.pause();
		this.$audioVoice.currentTime = '0';
		this.$audioVoice.src = '/';
	}

	// Stop audio voiceover on change slide
	stopVoiceOver() {
		this.$audioVoice.pause();
		this.$audioVoice.currentTime = '0';
	}

	// Remove objects
	removeSVGObject(anchor) {
		const allObj = document.getElementsByClassName('m-story__object');
		let allObjLength = allObj.length;
		while (allObjLength--) {
			allObj[allObjLength].remove();
		}
	}

	// Destory fullpage
	destroyFullpageInstance() {
		this.$fullPageInstance.destroy();
	}

	// Destroy all main (fullpage) elementes
	destroyAll() {
		$('#m-story').css({
			display: 'none'
		});
		this.stopAudio();
		this.destroyFullpageInstance();
		this.removeSVGObject();
		this.$objectAnimation = null;
	}

	// Init
	initialize() {
		this.setup();
		this.eventListeners();
		this.resetPosition();
	}
}

new Story();
