module.config(function($routeProvider){
	$routeProvider.when('/', {
		
		templateUrl: 'etusivu.html'
	}).when('/ohjelmointi', {
		
		templateUrl: 'ohjelmointi.html'
	}).when('/harrastus', {
		
		templateUrl: 'harrastus.html'
	});
});

module.controller('Controller', function($scope){
					$scope.etusivu= function(){
						window.location.href='#/';
					};
					
					$scope.ohjelmointi = function(){
						
						window.location.href='#/ohjelmointi';
					};
					
					$scope.harrastus = function(){
						
						window.location.href='#/harrastus';
					};
					
					
					$scope.languages = english;	
					$scope.frontPageHeaders = frontPageEnglishHeader;
					$scope.frontPageTexts = frontPageEnglishText;
					
					$scope.programmingPageHeaders = programmingPageEnglishHeader;
					$scope.programmingPageText = programmingPageEnglishText;
					
					$scope.hobbyPageHeaders = hobbyPageEnglishHeader;
					$scope.hobbyPageTexts = hobbyPageEnglishText;
					
					$scope.languageSelect = function(language){
						switch(language){
							case 1:
							$scope.languages = english;
							$scope.frontPageHeaders = frontPageEnglishHeader;
							$scope.frontPageTexts = frontPageEnglishText;
							
							$scope.programmingPageHeaders = programmingPageEnglishHeader;
							$scope.programmingPageText = programmingPageEnglishText;
							
							$scope.hobbyPageHeaders = hobbyPageEnglishHeader;
							$scope.hobbyPageTexts = hobbyPageEnglishText;
							
							break;
							case 2:
							$scope.languages = finnish;
							$scope.frontPageHeaders = frontPageFinnishHeader;
							$scope.frontPageTexts = frontPageFinnishText;
							
							$scope.programmingPageHeaders = programmingPageFinnishHeader;
							$scope.programmingPageText = programmingPageFinnishText;
							
							$scope.hobbyPageHeaders = hobbyPageFinnishHeader;
							$scope.hobbyPageTexts = hobbyPageFinnishText;
							
							break;
							case 3:
							$scope.languages = swedish;
							$scope.frontPageHeaders = frontPageSwedishHeader;
							$scope.frontPageTexts = frontPageSwedishText;
							
							$scope.programmingPageHeaders = programmingPageSwedishHeader;
							$scope.programmingPageText = programmingPageSwedishText;
							
							$scope.hobbyPageHeaders = hobbyPageSwedishHeader;
							$scope.hobbyPageTexts = hobbyPageSwedishText;
							break;
						}
						
					};
					
});

var english = {title:"Smygmis troll cave", mainHeader:"Ville Hernesniemi's home page", frontPage:"Front page", programmingPage: "Programming page", hobbyPage:"Hobby page"};
var frontPageEnglishHeader = {siteHeader:"About myself", firstHeader:"My equipment",secondHeader:"Desktop pc",thirdHeader:"Laptop",fourthHeader:"Raspberry pi2 model B",fiftHeader:"Arduino Uno"};
var frontPageEnglishText = {siteHeadText:"I am a second year student at Oulu University of applied sciences. I have a hobby background of programming from nearly ten years. Now I am trying to get a career from the field, and as a part of my own training I have put up these web pages. The purpose of these pages is for me to train web programming, especially JavaScript (Angular) and the Bootstrap framework. I am also going to keep a blog about my programming and hobby projects.", 
							siteFirstText:"I decided to upgrade my old potato of a computer this Christmas. After looking at my old rig and seeing what would still be usable I ended up with memory and hard drive. One week later I ended up with the configuration shown below. While it is not the most powerful pc, it will serve me well and the price I got it for can’t be argued. ",
							siteSecondText:"This two year old Hp pavilion laptop serves me well in school programming projects, as a living room media pc and it is capable enough to do some light gaming on the move. Mainly Hearthstone, Heroes of the storm, Diablo3 and Civ5.",
							siteThirdText:"After being introduced to it at school I totally fell in love the raspberry pi2. This minicomputer offers awesome performance for its credit card size. It has been several years since my last Linux based computer so it’s good to do some catching up on Linux. I’m currently running Raspian Linux on another SD-card, and the retro pi emulation platform from another.",
							siteFourthText:"The Arduino is an easily accessible platform for controlling electronics with a microprocessor. At its core is the very capable 16 MHz Atmel 328p processor, with its I/O pins directly accessible. "};

var programmingPageEnglishHeader = {siteHeader:"Programming/tech blog", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var programmingPageEnglishText = {siteHeadText:"This is a blog about programming and tech projects.", 
								siteFirstText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
								siteSecondText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
								siteThirdText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
								siteFourthText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English"};
								
var hobbyPageEnglishHeader = {siteHeader:"Hobby blog", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var hobbyPageEnglishText = {siteHeadText:"This is my hobby blog.", 
							siteFirstText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
							siteSecondText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
							siteThirdText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English",
							siteFourthText:"Lores ipsumi English English English English English English English English diipadaapa English kolkyn plaa English plaa English ipsumi English holkyn kolkyn English plaa plaa English ipsumi English holkyn English"};								

								
var finnish = {title:"Smygmin peikkoluola", mainHeader:"Ville Hernesniemen kotisivu",frontPage:"Etusivu", programmingPage: "Ohjelmointi sivu", hobbyPage:"Harrastus sivu"};
var frontPageFinnishHeader = {siteHeader:"Vähän itsestani", firstHeader:"Laitteet joilla tyoskentelen",secondHeader:"Pöytäkone",thirdHeader:"Kannettava",fourthHeader:"Raspberry PI2 malli B",fiftHeader:"Arduino Uno"};
var frontPageFinnishText = {siteHeadText:"Olen toisen vuoden opiskelija Oulun ammattikorkeakoulussa. Harrastustaustaa ohjelmoinnista minulla on takanani jo melkein kymmenen vuotta. Nyt olen pyrkimässä alalle töihin, ja osana omia harjoituksiani pistin pystyyn nämä sivut. Näiden sivujen tarkoituksena on harjoitella web-ohjelmointia, erityisesti JavaScriptin (Angular) ja Bootstap kehyksen käyttöä. Aion samalla myös pitää blogia ohjelmistoprojekteistani sekä harrastuksistani.", 
							siteFirstText:"Päätin päivittää vanhan perunan tasoisen tietokoneeni tänä jouluna. Katsottuani vanhan tietokoneeni sisuksiin ja päättelin että käyttökelpoisia osia olivat keskusmuisti ja kovalevy. Viikkoa myöhemmin minulla oli kasassa alla näkyvä kokoonpano. Vaikka tietokoneeni ei ole maailman tehokkain se soveltuu tarpeisiini ja oli hintalaatu suhteeltaan voittamaton ratkaisu.",
							siteSecondText:"Tämä kaksi vuotta vanha Hp pavilion kannettava palvelee minua koulun ohjelmistoprojekteissa, olohuoneen media-pc:nä ja pystyy kevyeen pelaamiseen. Pääasiassa Hearthstone, Heroes of the storm, Diablo3 ja Civ5.",
							siteThirdText:"Tutustuttuani Raspberry pi2;n opinnoissani rakastuin siihen täysin. Tämä pankkikortin kokoinen mini pc on uskomattoman tehokas kokoonsa nähden. On kulunut useita vuosia siitä kuin minulla on viimeksi ollut Linux tietokone, joten on aika tutustua siihen mitä Linuxille nykyään kuuluu. Tällä hetkellä  minulla on yhdellä SD-kortilla pyörimässä Raspian Linux ja toisella Retro pi emulaattori alusta.",
							siteFourthText:"Arduino on helposti lähestyttävä alusta, jolla voit ohjata elektroniikkaa mikroprosessorilla. Arduinon ytimessä on erittäin kyvykäs 16 MHz:n Atmel 328p prosessori, jonka I/O liitäntöihin on suora pääsy."};

var programmingPageFinnishHeader = {siteHeader:"Ohjelmointi/teknologia blogi", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var programmingPageFinnishText = {siteHeadText:"Tämä on blogi ohjelmointi/teknologia projektestani.", 
								siteFirstText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
								siteSecondText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
								siteThirdText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
								siteFourthText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish"};
								
var hobbyPageFinnishHeader = {siteHeader:"Harrastus blogi", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var hobbyPageFinnishText = {siteHeadText:"Tämä on harrastusblogini.", 
							siteFirstText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
							siteSecondText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
							siteThirdText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish",
							siteFourthText:"Lores ipsumi finnish finnish finnish finnish finnish finnish finnish finnish diipadaapa finnish kolkyn plaa finnish plaa finnish ipsumi finnish holkyn kolkyn finnish plaa plaa finnish ipsumi finnish holkyn finnish"};
								
var swedish = {title:"Smygmin troll grotta", mainHeader:"Ville Hernesniemi hemsida",frontPage:"Framsida", programmingPage: "Programmering sida", hobbyPage:"Hobby sida"};
var frontPageSwedishHeader = {siteHeader:"Om mig", firstHeader:"Min utrustning",secondHeader:"Stationär dator",thirdHeader:"Bärbar dator",fourthHeader:"Raspberry PI2 modell B",fiftHeader:"Arduino Uno"};
var frontPageSwedishText = {siteHeadText:"Jag är en andra årets studerande i Oulu University of applied sciences. Jag har en bakgrund av programmering från nästan tio år. Nu försöker jag få en karriär från fältet, och som en del av min egen utbildning jag har lagt upp dessa webbsidor. Syftet med dessa sidor är för mig att träna webbprogrammering, speciellt JavaScript (Angular) och de ramar Bootstrap. Jag kommer också att hålla en blogg om min programmering och hobbyprojekt. Jag kommer också att hålla en blogg om min programmering och hobbyprojekt.", 
							siteFirstText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteSecondText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteThirdText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteFourthText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish"};

var programmingPageSwedishHeader = {siteHeader:"Programmering / teknik blogg", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var programmingPageSwedishText = {siteHeadText:"Detta är en blogg om min programmering och teknikprojekt.", 
								siteFirstText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
								siteSecondText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
								siteThirdText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
								siteFourthText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish"};

var hobbyPageSwedishHeader = {siteHeader:"Hobby blogg", firstHeader:"",secondHeader:"",thirdHeader:"",fourthHeader:"",fiftHeader:""};
var hobbyPageSwedishText = {siteHeadText:"Detta är min hobby blogg.", 
							siteFirstText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteSecondText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteThirdText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish",
							siteFourthText:"Lores ipsumi swedish swedish swedish swedish swedish swedish swedish swedish diipadaapa swedish kolkyn plaa swedish plaa swedish ipsumi swedish holkyn kolkyn swedish plaa plaa swedish ipsumi swedish holkyn swedish"};








