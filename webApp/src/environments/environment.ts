// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
    production: false,
    apiUrl: 'http://localhost:8762/',

    manufacturers : [
        'Mercedes-Benz',
        'Volkswagen',
        'Audi',
        'BMW',
        'Toyota',
        'Fiat',
        'Ford',
        'Hyundai',

        'Acura',
        'Aixam',
        'Alfa Romeo',
        'Alpina',
        'Artega',
        'Asia Motors',
        'Aston Martin',
        'Bentley',
        'Brilliance',
        'Bugatti',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        'Citroën',
        'Corvette',
        'Dacia',
        'Daewoo',
        'Daihatsu',
        'Dodge',
        'Ferrari',
        'GMC',
        'Honda',
        'Hummer',
        'Infiniti',
        'Isuzu',
        'Jaguar',
        'Jeep',
        'Kia',
        'Königsegg',
        'KTM',
        'Lada',
        'Lamborghini',
        'Lancia',
        'Land Rover',
        'Landwind',
        'Lexus',
        'Ligier',
        'Lincoln',
        'Lotus',
        'Maserati',
        'Maybach',
        'Mazda',
        'MG',
        'MINI',
        'Mitsubishi',
        'Morgan',
        'Nissan',
        'Oldsmobile',
        'Opel',
        'Peugeot',
        'Piaggio',
        'Plymouth',
        'Pontiac',
        'Porsche',
        'Proton',
        'Renault',
        'Rolls Royce',
        'Rover',
        'Saab',
        'Seat',
        'Škoda',
        'Smart',
        'Spyker',
        'Ssangyong',
        'Subaru',
        'Suzuki',
        'Talbot',
        'Tata',
        'TVR',
        'Volvo'
    ],

    models : {
        'Acura' : ["MDX","NSX","RL","RSX","TL","TSX","Other"],
        'Aixam' : ["City","Crossline","Roadline","Scouty R","Other"],
        'Alfa Romeo' : ["4C","8C","Alfa 145","Alfa 146","Alfa 147","Alfa 149","Alfa 155","Alfa 156","Alfa 159","Alfa 164","Alfa 166","Alfa 33","Alfa 75","Alfa 90","Alfasud","Alfetta","Brera","Crosswagon","GT","GTV","Giulia","Giulietta","Junior","MiTo","RZ/SZ","Spider","Sprint", "Stelvio","Other"],
        'Alpina' : ["B10","B12","B3","B4","B5","B6","B7","B8","D10","D3","D4","D5","Roadster S","XD3","Other"],
        'Asia Motors' : ["Rocsta", "Other"],
        'Aston Martin' : ["AR1","Cygnet","DB","DB7","DB9","DB11","DBS","Lagonda","Rapide","V12 Vantage","V8 ","V8 Vantage","Vanquish","Vantage","Virage","Volante","Other"],
        'Audi' : ["100","200","80","90","A1","A2","A3","A4","A5","A6","A7","A8","Allroad","Cabriolet","Coupé","Q3","Q5","Q7","QUATTRO","R8","RS2","RS3","RS4","RS5","RS6","RS7","RSQ3","S1","S2","S3","S4","S5","S6","S7","S8","SQ5","TT","TT RS","TTS","V8","Other"],
        'Bentley' : ["Arnage","Azure","Brooklands","Continental","Eight","Flying Spur","Mulsanne","Turbo R","Turbo RT","Turbo S","Other"],
        'BMW' : ["114","116","118","120","123","125","130","135","Seri 1 M Coupé","2002","214","216","218","220","225","228","315","316","318","320","323","324","325","328","330","335","ActiveHybrid 3","418","420","425","428","430","435","518","520","523","524","525","528","530","535","540","545","550","ActiveHybrid 5","628","630","633","635","640","645","650","725","728","730","732","735","740","745","750","760","ActiveHybrid 7","840","850","i3","i8","M135","M2","M235","M3","M4","M550","M5","M6","X5 M","X6 M","Z3 M","Z4 M","ActiveHybrid X6","X1","X3","X4","X5","X6","Z1","Z3","Z4","Z8","Other"],
        'Brilliance' : ["BC3","BS2","BS4","BS6","Other"],
        'Bugatti': ['Veyron', "Chiron", "Other"],
        'Buick' : ["Century","Electra","Enclave","La Crosse","Le Sabre","Park Avenue","Regal","Riviera","Roadmaster","Skylark","Other"],
        'Cadillac' : ["Allante","ATS","BLS","CT6","CTS","Deville","Eldorado","Escalade","Fleetwood","Seville","SRX","STS","XLR","Other"],
        'Chevrolet' : ["2500","Alero","Astro","Avalanche","Aveo","Beretta","Blazer","C1500","Camaro","Caprice","Captiva","Cavalier","Chevelle","Chevy Van","Citation","Colorado","Corsica","Cruze","El Camino","Epica","Evanda","Express","G","HHR","Impala","K1500","K30","Kalos","Lacetti","Lumina","Malibu","Matiz","Nubira","Orlando","Rezzo","S-10","SSR","Silverado","Spark","Suburban","Tahoe","Trailblazer","Trans Sport","Trax","Venture","Volt","Other"],
        'Chrysler': ["300C","300 M","Aspen","Crossfire","Daytona","ES","Grand Voyager","GS","GTS","Imperial","Le Baron","Neon","New Yorker","Pacifica","PT Cruiser","Saratoga","Sebring","Stratus","Valiant","Viper","Vision","Voyager","Other"],
        'Citroën' : ["2 CV","AX","Berlingo","BX","C1","C2","C3","C4","C5","C6","C8","C-Crosser","C-Elysée","CX","C-Zero","DS","DS3","DS4","DS5","Evasion","Grand C4 Picasso","GSA","Jumper","Jumpy","Nemo","SAXO","SM","Visa","Xantia","XM","Xsara","Xsara Picasso","ZX","Other"],
        'Corvette': ["C1","C2","C3","C4","C5","C6","C7","Z06","ZR 1","Other"],
        'Dacia' : ["Dokker","Duster","Lodgy","Logan","Pick Up","Logan Pick-Up","Sandero","Other"],
        'Daewoo': ["Espero","Evanda","Kalos","Korando","Lacetti","Lanos","Leganza","Matiz","Musso","Nexia","Nubira","Racer","Rezzo","Tacuma","Tico","Other"],
        'Daihatsu' : ["Applause","Charade","Charmant","Copen","Cuore","Feroza/Sportrak","Freeclimber","Gran Move","Hijet","MATERIA","Move","Rocky/Fourtrak","Sirion","Terios","TREVIS","YRV","Other"],
        'Dodge': ["Avenger","Caliber","Challenger","Charger","Dakota","Demon","Durango","Grand Caravan","Hornet","Journey","Magnum","Neon","Nitro","RAM","Stealth","Viper","Other"],
        'Ferrari': ["208","246","250","275","288","308","328","330","348","360","365","400","412","456","458","488 GTB","512","550","575","599 GTB","612","750","California","Daytona","Dino GT4","Enzo Ferrari","F12","F355","F40","F430","F50","FF","LaFerrari","Mondial","Superamerica","Testarossa","Other"],
        'Fiat': ["124","126","127","130","131","500","500C","500L","500L Living","500L Trekking","500X","500 Abarth","Barchetta","Brava","Bravo","Cinquecento","Coupe","Croma","Dino","Doblo","Ducato","Fiorino","Freemont","Grande Punto","Grande Punto Abarth","Idea","Linea","Marea","Marengo","Multipla","New Panda","Palio","Panda","Punto","Punto Evo","Qubo","Regata","Ritmo","Scudo","Sedici","Seicento","Spider Europa","Stilo","Strada","Tempra","Tipo","Ulysse","Uno","X 1/9","Other"],
        'Ford': ["Aerostar","B-Max","Bronco","Capri","C-Max","Cougar","Courier","Crown","Econoline","Econovan","EcoSport","Edge","Escape","Escort","Excursion","Expedition","Explorer","Express","F 150","F 250","F 350 ","Fairlane","Falcon","Fiesta","Flex","Focus","Focus C-Max","Fusion","Galaxy","Granada","Grand  C-Max","Grand Tourneo","GT","Ka","Kuga","Maverick","Mercury","Mondeo","Mustang","Orion","Probe","Puma","Ranger","Raptor","Scorpio","Sierra","S-Max","Sportka","Streetka","Taunus","Taurus","Thunderbird","Tourneo","Transit","Windstar","Other"],
        'GMC' : ["Acadia","Envoy","Safari","Savana","Sierra","Sonoma","Syclone","Typhoon","Vandura","Yukon","Other"],
        'Honda' : ["Accord","Aerodeck","CR-V","CR-Z","CRX","Civic","Concerto","Element","FR-V","HR-V","Insight","Integra","Jazz","Legend","Logo","NSX","Odyssey","Prelude","S2000","Shuttle","Stream","Other"],
        'Hummer': ["H1","H2","H3","Other"],
        'Hyundai' : ["Accent","Atos","Azera","Coupe","Elantra","Excel","Galloper","Genesis","Getz","Grandeur","Grand Santa Fe","H-1","H 100","H-1 Starex","H 200","Lantra","Matrix","Pony","S-Coupe","Santa Fe","Santamo","Sonata","Terracan","Trajet","Tucson","Veloster","Veracruz","XG 30","XG 350","i10","i20","i30","i40","i50","ix20","ix35","ix55","Other"],
        'Infiniti' : ["EX30","EX35","EX37","FX","G35","G37","M30","M35","M37","Q30","Q45","Q50","Q60","Q70","QX50","QX56","QX70","Other"],
        'Isuzu' : ["Campo","D-Max","Gemini","Midi","PICK UP","Trooper","Other"],
        'Jaguar' : ["Daimler","F-Pace","F-Type","MK II","S-Type","XE","XF","XJ","XJ12","E-Type","XJ40","XJ6","XJ8","XJR","XJS","XJSC","XK","XKR","X-Type","Other"],
        'Jeep': ["CJ","Cherokee","Comanche","Commander","Compass","Grand Cherokee","Patriot","Renegade","Wagoneer","Willys","Wrangler","Other"],
        'Kia' : ["Besta","Borrego","Capital","Carens","Carnival","Cerato","Clarus","Elan","Joice","K2500","K2700","Leo","Magentis","Mentor","Mini","Opirus","Optima","Picanto","Pregio","Pride","Retona","Rio","Roadster","Rocsta","Sephia","Shuma","Sorento","Soul","Sportage","Venga","cee´d","cee´d Sporty Wagon","pro_cee´d","Other"],
        'Königsegg' : ["CCR", "CCXR", "Agera", "Regera", "Other"],
        'KTM' : ["X-BOW", "Other"],
        'Lada' : ["110","111","112","1200","2107","2110","2111","2112","Aleko","Forma","Granta","Kalina","Niva","Nova","Priora","Samara","Vesta","Other"],
        'Lamborghini' : ["Aventador","Countach","Diablo","Espada","Gallardo","Huracán","Jalpa","LM","Miura","Murciélago","Urraco","Other"],
        'Lancia' : ["Beta","Dedra","Delta","Flaminia","Flavia","Fulvia","Gamma","Kappa","Lybra","MUSA","Phedra","Prisma","Stratos","Thema","Thesis","Voyager","Ypsilon","Zeta","Other"],
        'Land Rover' : ["Defender","Discovery","Discovery Sport","Freelander","Range Rover","Range Rover Evoque","Range Rover Sport","Serie I","Serie II","Serie III","Other"],
        'Landwind' : ["CV-9","S","SC2","SC4","Other"],
        'Lexus' : ["CT 200h","ES 300","ES 330","ES 350","GS 250","GS 300","GS 350","GS 430","GS 450","GS 460","GX 470","IS 200","IS 220","IS 250","IS 300","IS 350","IS-F","LS 400","LS 430","LS 460","LS 600","LX 470","LX 570","NX 200","NX 300","RC 200","RC F","RX 300","RX 330","RX 350","RX 400","RX 430","SC 400","SC 430","Other"],
        'Ligier' : ["Ambra","Be Sun","JS 50","JS 50 L","JS RC","Nova","Optima","X - Too","Other"],
        'Lincoln' : ["Aviator","Continental","LS","Mark","Navigator","Town Car","Other"],
        'Lotus' : ["340 R","Cortina","Elan","Elise","Elite","Esprit","Europa","Evora","Excel","Exige","Super Seven ","V8","Other"],
        'Maserati' : ["222","224","228","3200","418","420","4200","422","424","430","Biturbo","Ghibli","GranCabrio","Gransport","Granturismo","Indy","Karif","Levante","MC12","Merak","Quattroporte","Shamal","Spyder","Other"],
        'Maybach' : ["57","62","Other"],
        'Mazda' : ["121","2","3","323","5","6","626","929","B series","BT-50","Bongo","CX-3","CX-5","CX-7","CX-9","Demio","E series","Millenia","MPV","MX-3","MX-5","MX-6","Mazda2","Mazda3","Mazda5","Millenia","Premacy","Protege","RX-6 ","RX-7","RX-8","Tribute","Xedos","Other"],
        'Mercedes-Benz' : ["Sprinter","190","200","220","230","240","250","260","270","280","290","300","320","350","380","400","416","420","450","500","560","600","A 140","A 150","A 160","A 170","A 180","A 190","A 200","A 210","A 220","A 250","A 45 AMG","AMG GT","AMG GT S","B 150","B 160","B 170","B 180","B 200","B 220","B 250","B Electric Drive","C 160","C 180","C 200","C 220","C 230","C 240","C 250","C 270","C 280","C 30 AMG","C 300","C 32 AMG","C 320","C 350","C 36 AMG","C 400","C 43 AMG","C 450 AMG","C 55 AMG","C 63 AMG","CE 200","CE 220","CE 300","CL 160","CL 180","CL 200","CL 220","CL 230","CL 320","CL 420","CL 500","CL 55 AMG","CL 600","CL 63 AMG","CL 65 AMG","CLA 180","CLA 180 Shooting Brake","CLA 200","CLA 200 Shooting Brake","CLA 250","CLA 250 Shootig Brake","CLA 45 AMG","CLA 45 AMG Shooting Brake","CLA Shooting Brake","CLC 160","CLC 180","CLC 200","CLC 220","CLC 230","CLC 250","CLC 350","CLK 200","CLK 220","CLK 230","CLK 240","CLK 270","CLK 280","CLK 320","CLK 350","CLK 430","CLK 500","CLK 55 AMG","CLK 63 AMG","CLS 220","CLS 220 Shooting Brake","CLS 250","CLS 250 Shooting Brake","CLS 280","CLS 300","CLS 320","CLS 350","CLS 350 Shooting Brake","CLS 400","CLS 400 Shooting Brake","CLS 500","CLS 500 Shooting Brake","CLS 55 AMG","CLS 63 AMG","CLS Shooting Brake","E 200","E 220","E 230","E 240","E 250","E 260","E 270","E 280","E 290","E 300","E 320","E 350","E 36 AMG","E 400","E 420","E 430","E 50","E 500","E 55 AMG","E 60 AMG","E 63 AMG","G 230","G 240","G 250","G 270","G 280","G 290","G 300","G 320","G 350","G 400","G 500","G 55 AMG","G 63 AMG","G 65 AMG","GL 320","GL 350","GL 400","GL 420","GL 450","GL 500","GL 55 AMG","GL 63 AMG","GLA 180","GLA 200","GLA 220","GLA 250","GLA 45 AMG","GLC 220","GLC 250","GLE 250","GLE 350","GLE 400","GLE 450 AMG","GLE 500","GLE 63 AMG","GLK 200","GLK 220","GLK 250","GLK 280","GLK 300","GLK 320","GLK 350","GLS 350","GLS 400","GLS 500","GLS 63","MB 100","ML 230","ML 250","ML 270","ML 280","ML 300","ML 320","ML 350","ML 400","ML 420","ML 430","ML 450","ML 500","ML 55 AMG","ML 63 AMG","R 280","R 300","R 320","R 350","R 500","R 63 AMG","S 250","S 260","S 280","S 300","S 320","S 350","S 400","S 420","S 430","S 450","S 500","S 55","S 550","S 600","S 63 AMG","S 65 AMG","SL 280","SL 300","SL 320","SL 350","SL 380","SL 400","SL 420","SL 450","SL 500","SL 55 AMG","SL 560","SL 60 AMG","SL 600","SL 63 AMG","SL 65 AMG","SL 70 AMG","SL 73 AMG","SLK 200","SLK 230","SLK 250","SLK 280","SLK 300","SLK 32 AMG","SLK 320","SLK 350","SLK 55 AMG","SLR","SLS AMG","V 200","V 220","V 230","V 250","V 280","Vaneo","Vario","Viano","Other"],
        'MG' : ["MGA","MGB","MGF","Midget","Montego","TD","TF","ZR","ZS","ZT","Other"],
        'MINI' : ["1000","1300","Clubman","Cooper","Cooper D","Cooper S","Cooper SD","Countryman","John Cooper Works","ONE","One D","One First","Other"],
        'Mitsubishi' : ["3000 GT","ASX","Canter","Carisma","Colt","Cordia","Cosmos","Diamante","Eclipse","Electric Vehicle (i-MiEV)","Galant","Galloper","Grandis","L200","L300","L400","Lancer","Mirage","Montero","Outlander","Pajero","Pajero Pinin","Pick-up","Plug-in Hybrid Outlander","Santamo","Sapporo","Sigma","Space Gear","Space Runner","Space Star","Space Wagon","Starion","Tredia","Other"],
        'Morgan' : ["4/4","Aero 8","Plus 4","Plus 8","Roadster","Other"],
        'Nissan' : ["100 NX","200 SX","240 SX","280 ZX","300 ZX","350Z","370Z","Almera","Almera Tino","Altima","Armada","Bluebird","Cabstar","Cargo","Cherry","Cube","e-NV200","Evalia","Frontier","GT-R","Interstar","Juke","King Cab","Kubistar","Laurel","Leaf","Maxima","Micra","Murano","Navara","Note","NP 300","NV200","NV400","Pathfinder","Patrol","PickUp","Pixo","Prairie","Primastar","Primera","Pulsar","Qashqai","Qashqai+2","Quest","Sentra","Serena","Silvia","Skyline","Sunny","Terrano","Tiida","Titan","Trade","Urvan","Vanette","X-Trail","Other"],
        'Oldsmobile' : ["Bravada","Custom Cruiser","Cutlass","Delta 88","Silhoutte","Supreme","Toronado","Other"],
        'Opel': ["Adam","Agila","Ampera","Antara","Arena","Ascona","Astra","Calibra","Campo","Cascada","Cavalier","Combo","Commodore","Corsa","Diplomat","Frontera","GT","Insignia","Insignia CT","Kadett","Karl","Manta","Meriva","Mokka","Monterey","Monza","Movano","Nova","Omega","Pick Up Sportscap","Rekord","Senator","Signum","Sintra","Speedster","Tigra","Vectra","Vivaro","Zafira","Zafira Tourer","Other"],
        'Peugeot' : ["1007","104","106","107","108","2008","204","205","206","207","208","3008","301","304","305","306","307","308","309","4007","4008","404","405","406","407","5008","504","505","508","604","605","607","806","807","Bipper","Bipper Tepee","Boxer","Expert","Expert Tepee","iOn","J5","Partner","Partner Tepee","RCZ","TePee","Other"],
        'Piaggio' : ["APE","APE TM","Porter","Other"],
        'Plymouth' : ["Prowler","Other"],
        'Pontiac' : ["6000","Bonneville","Fiero","Firebird","G6","GTO","Grand-Am","Grand-Prix","Montana","Solstice","Sunbird","Sunfire","Targa","Trans Am","Trans Sport","Vibe","Model tjetër"],
        'Porsche' : ["356","911","930","964","991","993","996","997","912","914","918","924","928","944","959","962","968","Boxster","Carrera GT","Cayenne","Cayman","Macan","Panamera","Other"],
        'Proton' : ["300 Serie","400 Serie","Other"],
        'Renault' : ["Alpine A110","Alpine A310","Alpine V6","Avantime","Capture","Clio","Coupe","Espace","Express","Fluence","Fuego","Grand Espace","Grand Modus","Grand Scenic","Kadjar","Kangoo","Koleos","Laguna","Latitude","Mascott","Master","Megane","Modus","P 1400","R 11","R 14","R 18","R 19","R 20","R 21","R 25","R 30","R 4","R 5","R 6","R 9","Rapid","Safrane","Scenic","Spider","Talisman","Thalia","Trafic","Twingo","Twizy","Vel Satis","Wind","Other"],
        'Rolls Royce' : ["Corniche","Flying Spur","Gost","Park Ward","Phantom","Silver Cloud","Silver Dawn","Silver Seraph","Silver Shadow","Silver Spirit","Silver Spur","Wraith","Other"],
        'Rover' : ["100","111","114","115","200","213","214","216","218","220","25","400","414","416","418","420","45","600","618","620","623","75","800","820","825","827","City Rover","Metro","Montego","SD","Streetwise","Other"],
        'Saab' : ["9-3","9-4X","9-5","9-7X","90","900","9000","96","99","Other"],
        'Seat' : ["Alhambra","Altea","Arosa","Cordoba","Exeo","Ibiza","Inca","Leon","Malaga","Marbella","Mii","Terra","Toledo","Other"],
        'Škoda' : ["105","120","130","135","Citigo","Fabia","Favorit","Felicia","Forman","Octavia","Pick-up","Praktik","Rapid","Roomster","Superb","Yeti","Other"],
        'Smart' : ["Crossblade","ForFour","ForTwo","Roadster","Other"],
        'Spyker' : ["C8","C8 AILERON","C8 DOUBLE 12 S","C8 LAVIOLETTE SWB","C8 SPYDER SWB","Other"],
        'Ssangyong' : ["Actyon","Family","Korando","Kyron","MUSSO","REXTON","Rodius","Tivoli","Other"],
        'Subaru' : ["B9 Tribeca","Baja","BRZ","Forester","Impreza","Justy","Legacy","Levorg","Libero","OUTBACK","SVX","Trezia","Tribeca","Vivio","XT","XV","Other"],
        'Suzuki': ["Alto","Baleno","Cappucino","Carry","Celerio","Grand Vitara","Ignis","iK-2","Jimny","Kizashi","Liana","LJ","Maruti","SJ Samurai","Splash","Supper-Carry","Swift","SX4","SX4 S-Cross","Vitara","Wagon R+","X-90","Other"],
        'Talbot' : ["Horizon", "Samba", "Other"],
        'Tata' : ["Indica","Indigo","Nano","Safari","Sumo","Telcoline","Telcosport","Xenon","Other"],
        'Toyota' : ["4-Runner","Auris","Auris Touring Sports","Avalon","Avensis","Avensis Verso","Aygo","Camry","Carina","Celicia","Corolla","Corolla Verso","Cressida","Crown","Dyna","FCV","FJ","GT86","Hiace","Highlander","Hilux","IQ","Land Crusier","Lite-Ace","Mirai","MR 2","Paseo","Picnic","Previa","Prius","Prius+","Proace","RAV 4","Sequoia","Sienna","Starlet","Supra","Tacoma","Tercel","Tundra","Urban Cruiser","Verso","Verso-S","Yaris","Other"],
        'TVR' : ["Chimaera","Griffith","Tuscan","Other"],
        'Volkswagen' : ["181","Amarok","Beetle","Bora","Buggy","Caddy","CC","Corrado","Crafter","Eos","Fox","Golf","Golf Plus","Golf Sportvan","Iltis","Jetta","Karmann Ghia","Käfer","Karmann Gnia","LT","Lupo","New Beetle","Passat","Passat CC","Phaeton","Polo","Routan","Santana","Scirocco","Sharan","T1","T2","T3 Caravelle","T3 Kombi","T3 Multivan","T3 të tjera","T4 California","T4 Caravelle","T4 Kombi","T4 Multivan","T4 të tjera","T5 California","T5 Caravelle","T5 Kombi","T5 Multivan","T5 Shuttle","T5 Transporter","T5 të tjera","T6 California","T6 Caravelle","T6 Kombi","T6 Multivan","T6 Transporter","Taro","Tiguan","Touareg","Touran","up!","Vento","XL1","Other"],
        'Volvo' : ["240","244","245","262","264","340","360","440","460","480","740","744","745","760","780","850","855","940","944","945","960","965","Amazon","C30","C70","Polar","S40","S60","S60 CC","S70","S80","S90","V40","V40 CC","V50","V60","V60 CC","V70","V90","XC 60","XC 70","XC 90","Other"]
    },

    carManufacturers: [
        {
            "id": "5d6240e5623c171996a797cd",
            "brand_id": "1",
            "name": "Acura"
        },
        {
            "id": "5d6240e5623c171996a797ce",
            "brand_id": "2",
            "name": "Alfa Romeo"
        },
        {
            "id": "5d6240e5623c171996a797cf",
            "brand_id": "3",
            "name": "AMC"
        },
        {
            "id": "5d6240e5623c171996a797d0",
            "brand_id": "4",
            "name": "Aston Martin"
        },
        {
            "id": "5d6240e5623c171996a797d1",
            "brand_id": "5",
            "name": "Audi"
        },
        {
            "id": "5d6240e5623c171996a797d2",
            "brand_id": "6",
            "name": "Avanti"
        },
        {
            "id": "5d6240e5623c171996a797d3",
            "brand_id": "7",
            "name": "Bentley"
        },
        {
            "id": "5d6240e5623c171996a797d4",
            "brand_id": "8",
            "name": "BMW"
        },
        {
            "id": "5d6240e5623c171996a797d5",
            "brand_id": "9",
            "name": "Buick"
        },
        {
            "id": "5d6240e5623c171996a797d6",
            "brand_id": "10",
            "name": "Cadillac"
        },
        {
            "id": "5d6240e5623c171996a797d7",
            "brand_id": "11",
            "name": "Chevrolet"
        },
        {
            "id": "5d6240e5623c171996a797d8",
            "brand_id": "12",
            "name": "Chrysler"
        },
        {
            "id": "5d6240e5623c171996a797d9",
            "brand_id": "13",
            "name": "Daewoo"
        },
        {
            "id": "5d6240e5623c171996a797da",
            "brand_id": "14",
            "name": "Daihatsu"
        },
        {
            "id": "5d6240e5623c171996a797db",
            "brand_id": "15",
            "name": "Datsun"
        },
        {
            "id": "5d6240e5623c171996a797dc",
            "brand_id": "16",
            "name": "DeLorean"
        },
        {
            "id": "5d6240e5623c171996a797dd",
            "brand_id": "17",
            "name": "Dodge"
        },
        {
            "id": "5d6240e5623c171996a797de",
            "brand_id": "18",
            "name": "Eagle"
        },
        {
            "id": "5d6240e5623c171996a797df",
            "brand_id": "19",
            "name": "Ferrari"
        },
        {
            "id": "5d6240e5623c171996a797e0",
            "brand_id": "20",
            "name": "FIAT"
        },
        {
            "id": "5d6240e5623c171996a797e1",
            "brand_id": "21",
            "name": "Fisker"
        },
        {
            "id": "5d6240e5623c171996a797e2",
            "brand_id": "22",
            "name": "Ford"
        },
        {
            "id": "5d6240e5623c171996a797e3",
            "brand_id": "23",
            "name": "Freightliner"
        },
        {
            "id": "5d6240e5623c171996a797e4",
            "brand_id": "24",
            "name": "Geo"
        },
        {
            "id": "5d6240e5623c171996a797e5",
            "brand_id": "25",
            "name": "GMC"
        },
        {
            "id": "5d6240e5623c171996a797e6",
            "brand_id": "26",
            "name": "Honda"
        },
        {
            "id": "5d6240e5623c171996a797e7",
            "brand_id": "27",
            "name": "HUMMER"
        },
        {
            "id": "5d6240e5623c171996a797e8",
            "brand_id": "28",
            "name": "Hyundai"
        },
        {
            "id": "5d6240e5623c171996a797e9",
            "brand_id": "29",
            "name": "Infiniti"
        },
        {
            "id": "5d6240e5623c171996a797ea",
            "brand_id": "30",
            "name": "Isuzu"
        },
        {
            "id": "5d6240e5623c171996a797eb",
            "brand_id": "31",
            "name": "Jaguar"
        },
        {
            "id": "5d6240e5623c171996a797ec",
            "brand_id": "32",
            "name": "Jeep"
        },
        {
            "id": "5d6240e5623c171996a797ed",
            "brand_id": "33",
            "name": "Kia"
        },
        {
            "id": "5d6240e5623c171996a797ee",
            "brand_id": "34",
            "name": "Lamborghini"
        },
        {
            "id": "5d6240e5623c171996a797ef",
            "brand_id": "35",
            "name": "Lancia"
        },
        {
            "id": "5d6240e5623c171996a797f0",
            "brand_id": "36",
            "name": "Land Rover"
        },
        {
            "id": "5d6240e5623c171996a797f1",
            "brand_id": "37",
            "name": "Lexus"
        },
        {
            "id": "5d6240e5623c171996a797f2",
            "brand_id": "38",
            "name": "Lincoln"
        },
        {
            "id": "5d6240e5623c171996a797f3",
            "brand_id": "39",
            "name": "Lotus"
        },
        {
            "id": "5d6240e5623c171996a797f4",
            "brand_id": "40",
            "name": "Maserati"
        },
        {
            "id": "5d6240e5623c171996a797f5",
            "brand_id": "41",
            "name": "Maybach"
        },
        {
            "id": "5d6240e5623c171996a797f6",
            "brand_id": "42",
            "name": "Mazda"
        },
        {
            "id": "5d6240e5623c171996a797f7",
            "brand_id": "43",
            "name": "McLaren"
        },
        {
            "id": "5d6240e5623c171996a797f8",
            "brand_id": "44",
            "name": "Mercedes-Benz"
        },
        {
            "id": "5d6240e5623c171996a797f9",
            "brand_id": "45",
            "name": "Mercury"
        },
        {
            "id": "5d6240e5623c171996a797fa",
            "brand_id": "46",
            "name": "Merkur"
        },
        {
            "id": "5d6240e5623c171996a797fb",
            "brand_id": "47",
            "name": "MINI"
        },
        {
            "id": "5d6240e5623c171996a797fc",
            "brand_id": "48",
            "name": "Mitsubishi"
        },
        {
            "id": "5d6240e5623c171996a797fd",
            "brand_id": "49",
            "name": "Nissan"
        },
        {
            "id": "5d6240e5623c171996a797fe",
            "brand_id": "50",
            "name": "Oldsmobile"
        },
        {
            "id": "5d6240e5623c171996a797ff",
            "brand_id": "51",
            "name": "Peugeot"
        },
        {
            "id": "5d6240e5623c171996a79800",
            "brand_id": "52",
            "name": "Plymouth"
        },
        {
            "id": "5d6240e5623c171996a79801",
            "brand_id": "53",
            "name": "Pontiac"
        },
        {
            "id": "5d6240e5623c171996a79802",
            "brand_id": "54",
            "name": "Porsche"
        },
        {
            "id": "5d6240e5623c171996a79803",
            "brand_id": "55",
            "name": "RAM"
        },
        {
            "id": "5d6240e5623c171996a79804",
            "brand_id": "56",
            "name": "Renault"
        },
        {
            "id": "5d6240e5623c171996a79805",
            "brand_id": "57",
            "name": "Rolls-Royce"
        },
        {
            "id": "5d6240e5623c171996a79806",
            "brand_id": "58",
            "name": "Saab"
        },
        {
            "id": "5d6240e5623c171996a79807",
            "brand_id": "59",
            "name": "Saturn"
        },
        {
            "id": "5d6240e5623c171996a79808",
            "brand_id": "60",
            "name": "Scion"
        },
        {
            "id": "5d6240e5623c171996a79809",
            "brand_id": "61",
            "name": "smart"
        },
        {
            "id": "5d6240e5623c171996a7980a",
            "brand_id": "62",
            "name": "SRT"
        },
        {
            "id": "5d6240e5623c171996a7980b",
            "brand_id": "63",
            "name": "Sterling"
        },
        {
            "id": "5d6240e5623c171996a7980c",
            "brand_id": "64",
            "name": "Subaru"
        },
        {
            "id": "5d6240e5623c171996a7980d",
            "brand_id": "65",
            "name": "Suzuki"
        },
        {
            "id": "5d6240e5623c171996a7980e",
            "brand_id": "66",
            "name": "Tesla"
        },
        {
            "id": "5d6240e5623c171996a7980f",
            "brand_id": "67",
            "name": "Toyota"
        },
        {
            "id": "5d6240e5623c171996a79810",
            "brand_id": "68",
            "name": "Triumph"
        },
        {
            "id": "5d6240e5623c171996a79811",
            "brand_id": "69",
            "name": "Volkswagen"
        },
        {
            "id": "5d6240e5623c171996a79812",
            "brand_id": "70",
            "name": "Volvo"
        },
        {
            "id": "5d6240e5623c171996a79813",
            "brand_id": "71",
            "name": "Yugo"
        }
    ],

    carModels: [
        {
            "brand_id": "1",
            "id": "1",
            "name": "CL Models (4)"
        },
        {
            "brand_id": "1",
            "id": "2",
            "name": "2.2CL"
        },
        {
            "brand_id": "1",
            "id": "3",
            "name": "2.3CL"
        },
        {
            "brand_id": "1",
            "id": "4",
            "name": "3.0CL"
        },
        {
            "brand_id": "1",
            "id": "5",
            "name": "3.2CL"
        },
        {
            "brand_id": "1",
            "id": "6",
            "name": "ILX"
        },
        {
            "brand_id": "1",
            "id": "7",
            "name": "Integra"
        },
        {
            "brand_id": "1",
            "id": "8",
            "name": "Legend"
        },
        {
            "brand_id": "1",
            "id": "9",
            "name": "MDX"
        },
        {
            "brand_id": "1",
            "id": "10",
            "name": "NSX"
        },
        {
            "brand_id": "1",
            "id": "11",
            "name": "RDX"
        },
        {
            "brand_id": "1",
            "id": "12",
            "name": "RL Models (2)"
        },
        {
            "brand_id": "1",
            "id": "13",
            "name": "3.5 RL"
        },
        {
            "brand_id": "1",
            "id": "14",
            "name": "RL"
        },
        {
            "brand_id": "1",
            "id": "15",
            "name": "RSX"
        },
        {
            "brand_id": "1",
            "id": "16",
            "name": "SLX"
        },
        {
            "brand_id": "1",
            "id": "17",
            "name": "TL Models (3)"
        },
        {
            "brand_id": "1",
            "id": "18",
            "name": "2.5TL"
        },
        {
            "brand_id": "1",
            "id": "19",
            "name": "3.2TL"
        },
        {
            "brand_id": "1",
            "id": "20",
            "name": "TL"
        },
        {
            "brand_id": "1",
            "id": "21",
            "name": "TSX"
        },
        {
            "brand_id": "1",
            "id": "22",
            "name": "Vigor"
        },
        {
            "brand_id": "1",
            "id": "23",
            "name": "ZDX"
        },
        {
            "brand_id": "1",
            "id": "24",
            "name": "Other Acura Models"
        },
        {
            "brand_id": "2",
            "id": "25",
            "name": "164"
        },
        {
            "brand_id": "2",
            "id": "26",
            "name": "8C Competizione"
        },
        {
            "brand_id": "2",
            "id": "27",
            "name": "GTV-6"
        },
        {
            "brand_id": "2",
            "id": "28",
            "name": "Milano"
        },
        {
            "brand_id": "2",
            "id": "29",
            "name": "Spider"
        },
        {
            "brand_id": "2",
            "id": "30",
            "name": "Other Alfa Romeo Models"
        },
        {
            "brand_id": "3",
            "id": "31",
            "name": "Alliance"
        },
        {
            "brand_id": "3",
            "id": "32",
            "name": "Concord"
        },
        {
            "brand_id": "3",
            "id": "33",
            "name": "Eagle"
        },
        {
            "brand_id": "3",
            "id": "34",
            "name": "Encore"
        },
        {
            "brand_id": "3",
            "id": "35",
            "name": "Spirit"
        },
        {
            "brand_id": "3",
            "id": "36",
            "name": "Other AMC Models"
        },
        {
            "brand_id": "4",
            "id": "37",
            "name": "DB7"
        },
        {
            "brand_id": "4",
            "id": "38",
            "name": "DB9"
        },
        {
            "brand_id": "4",
            "id": "39",
            "name": "DBS"
        },
        {
            "brand_id": "4",
            "id": "40",
            "name": "Lagonda"
        },
        {
            "brand_id": "4",
            "id": "41",
            "name": "Rapide"
        },
        {
            "brand_id": "4",
            "id": "42",
            "name": "V12 Vantage"
        },
        {
            "brand_id": "4",
            "id": "43",
            "name": "V8 Vantage"
        },
        {
            "brand_id": "4",
            "id": "44",
            "name": "Vanquish"
        },
        {
            "brand_id": "4",
            "id": "45",
            "name": "Virage"
        },
        {
            "brand_id": "4",
            "id": "46",
            "name": "Other Aston Martin Models"
        },
        {
            "brand_id": "5",
            "id": "47",
            "name": "100"
        },
        {
            "brand_id": "5",
            "id": "48",
            "name": "200"
        },
        {
            "brand_id": "5",
            "id": "49",
            "name": "4000"
        },
        {
            "brand_id": "5",
            "id": "50",
            "name": "5000"
        },
        {
            "brand_id": "5",
            "id": "51",
            "name": "80"
        },
        {
            "brand_id": "5",
            "id": "52",
            "name": "90"
        },
        {
            "brand_id": "5",
            "id": "53",
            "name": "A3"
        },
        {
            "brand_id": "5",
            "id": "54",
            "name": "A4"
        },
        {
            "brand_id": "5",
            "id": "55",
            "name": "A5"
        },
        {
            "brand_id": "5",
            "id": "56",
            "name": "A6"
        },
        {
            "brand_id": "5",
            "id": "57",
            "name": "A7"
        },
        {
            "brand_id": "5",
            "id": "58",
            "name": "A8"
        },
        {
            "brand_id": "5",
            "id": "59",
            "name": "allroad"
        },
        {
            "brand_id": "5",
            "id": "60",
            "name": "Cabriolet"
        },
        {
            "brand_id": "5",
            "id": "61",
            "name": "Coupe"
        },
        {
            "brand_id": "5",
            "id": "62",
            "name": "Q3"
        },
        {
            "brand_id": "5",
            "id": "63",
            "name": "Q5"
        },
        {
            "brand_id": "5",
            "id": "64",
            "name": "Q7"
        },
        {
            "brand_id": "5",
            "id": "65",
            "name": "Quattro"
        },
        {
            "brand_id": "5",
            "id": "66",
            "name": "R8"
        },
        {
            "brand_id": "5",
            "id": "67",
            "name": "RS 4"
        },
        {
            "brand_id": "5",
            "id": "68",
            "name": "RS 5"
        },
        {
            "brand_id": "5",
            "id": "69",
            "name": "RS 6"
        },
        {
            "brand_id": "5",
            "id": "70",
            "name": "S4"
        },
        {
            "brand_id": "5",
            "id": "71",
            "name": "S5"
        },
        {
            "brand_id": "5",
            "id": "72",
            "name": "S6"
        },
        {
            "brand_id": "5",
            "id": "73",
            "name": "S7"
        },
        {
            "brand_id": "5",
            "id": "74",
            "name": "S8"
        },
        {
            "brand_id": "5",
            "id": "75",
            "name": "TT"
        },
        {
            "brand_id": "5",
            "id": "76",
            "name": "TT RS"
        },
        {
            "brand_id": "5",
            "id": "77",
            "name": "TTS"
        },
        {
            "brand_id": "5",
            "id": "78",
            "name": "V8 Quattro"
        },
        {
            "brand_id": "5",
            "id": "79",
            "name": "Other Audi Models"
        },
        {
            "brand_id": "6",
            "id": "80",
            "name": "Convertible"
        },
        {
            "brand_id": "6",
            "id": "81",
            "name": "Coupe"
        },
        {
            "brand_id": "6",
            "id": "82",
            "name": "Sedan"
        },
        {
            "brand_id": "6",
            "id": "83",
            "name": "Other Avanti Models"
        },
        {
            "brand_id": "7",
            "id": "84",
            "name": "Arnage"
        },
        {
            "brand_id": "7",
            "id": "85",
            "name": "Azure"
        },
        {
            "brand_id": "7",
            "id": "86",
            "name": "Brooklands"
        },
        {
            "brand_id": "7",
            "id": "87",
            "name": "Continental"
        },
        {
            "brand_id": "7",
            "id": "88",
            "name": "Corniche"
        },
        {
            "brand_id": "7",
            "id": "89",
            "name": "Eight"
        },
        {
            "brand_id": "7",
            "id": "90",
            "name": "Mulsanne"
        },
        {
            "brand_id": "7",
            "id": "91",
            "name": "Turbo R"
        },
        {
            "brand_id": "7",
            "id": "92",
            "name": "Other Bentley Models"
        },
        {
            "brand_id": "8",
            "id": "93",
            "name": "1 Series (3)"
        },
        {
            "brand_id": "8",
            "id": "94",
            "name": "128i"
        },
        {
            "brand_id": "8",
            "id": "95",
            "name": "135i"
        },
        {
            "brand_id": "8",
            "id": "96",
            "name": "135is"
        },
        {
            "brand_id": "8",
            "id": "97",
            "name": "3 Series (29)"
        },
        {
            "brand_id": "8",
            "id": "98",
            "name": "318i"
        },
        {
            "brand_id": "8",
            "id": "99",
            "name": "318iC"
        },
        {
            "brand_id": "8",
            "id": "100",
            "name": "318iS"
        },
        {
            "brand_id": "8",
            "id": "101",
            "name": "318ti"
        },
        {
            "brand_id": "8",
            "id": "102",
            "name": "320i"
        },
        {
            "brand_id": "8",
            "id": "103",
            "name": "323ci"
        },
        {
            "brand_id": "8",
            "id": "104",
            "name": "323i"
        },
        {
            "brand_id": "8",
            "id": "105",
            "name": "323is"
        },
        {
            "brand_id": "8",
            "id": "106",
            "name": "323iT"
        },
        {
            "brand_id": "8",
            "id": "107",
            "name": "325Ci"
        },
        {
            "brand_id": "8",
            "id": "108",
            "name": "325e"
        },
        {
            "brand_id": "8",
            "id": "109",
            "name": "325es"
        },
        {
            "brand_id": "8",
            "id": "110",
            "name": "325i"
        },
        {
            "brand_id": "8",
            "id": "111",
            "name": "325is"
        },
        {
            "brand_id": "8",
            "id": "112",
            "name": "325iX"
        },
        {
            "brand_id": "8",
            "id": "113",
            "name": "325xi"
        },
        {
            "brand_id": "8",
            "id": "114",
            "name": "328Ci"
        },
        {
            "brand_id": "8",
            "id": "115",
            "name": "328i"
        },
        {
            "brand_id": "8",
            "id": "116",
            "name": "328iS"
        },
        {
            "brand_id": "8",
            "id": "117",
            "name": "328xi"
        },
        {
            "brand_id": "8",
            "id": "118",
            "name": "330Ci"
        },
        {
            "brand_id": "8",
            "id": "119",
            "name": "330i"
        },
        {
            "brand_id": "8",
            "id": "120",
            "name": "330xi"
        },
        {
            "brand_id": "8",
            "id": "121",
            "name": "335d"
        },
        {
            "brand_id": "8",
            "id": "122",
            "name": "335i"
        },
        {
            "brand_id": "8",
            "id": "123",
            "name": "335is"
        },
        {
            "brand_id": "8",
            "id": "124",
            "name": "335xi"
        },
        {
            "brand_id": "8",
            "id": "125",
            "name": "ActiveHybrid 3"
        },
        {
            "brand_id": "8",
            "id": "126",
            "name": "325"
        },
        {
            "brand_id": "8",
            "id": "127",
            "name": "5 Series (19)"
        },
        {
            "brand_id": "8",
            "id": "128",
            "name": "524td"
        },
        {
            "brand_id": "8",
            "id": "129",
            "name": "525i"
        },
        {
            "brand_id": "8",
            "id": "130",
            "name": "525xi"
        },
        {
            "brand_id": "8",
            "id": "131",
            "name": "528e"
        },
        {
            "brand_id": "8",
            "id": "132",
            "name": "528i"
        },
        {
            "brand_id": "8",
            "id": "133",
            "name": "528iT"
        },
        {
            "brand_id": "8",
            "id": "134",
            "name": "528xi"
        },
        {
            "brand_id": "8",
            "id": "135",
            "name": "530i"
        },
        {
            "brand_id": "8",
            "id": "136",
            "name": "530iT"
        },
        {
            "brand_id": "8",
            "id": "137",
            "name": "530xi"
        },
        {
            "brand_id": "8",
            "id": "138",
            "name": "533i"
        },
        {
            "brand_id": "8",
            "id": "139",
            "name": "535i"
        },
        {
            "brand_id": "8",
            "id": "140",
            "name": "535i Gran Turismo"
        },
        {
            "brand_id": "8",
            "id": "141",
            "name": "535xi"
        },
        {
            "brand_id": "8",
            "id": "142",
            "name": "540i"
        },
        {
            "brand_id": "8",
            "id": "143",
            "name": "545i"
        },
        {
            "brand_id": "8",
            "id": "144",
            "name": "550i"
        },
        {
            "brand_id": "8",
            "id": "145",
            "name": "550i Gran Turismo"
        },
        {
            "brand_id": "8",
            "id": "146",
            "name": "ActiveHybrid 5"
        },
        {
            "brand_id": "8",
            "id": "147",
            "name": "6 Series (8)"
        },
        {
            "brand_id": "8",
            "id": "148",
            "name": "633CSi"
        },
        {
            "brand_id": "8",
            "id": "149",
            "name": "635CSi"
        },
        {
            "brand_id": "8",
            "id": "150",
            "name": "640i"
        },
        {
            "brand_id": "8",
            "id": "151",
            "name": "640i Gran Coupe"
        },
        {
            "brand_id": "8",
            "id": "152",
            "name": "645Ci"
        },
        {
            "brand_id": "8",
            "id": "153",
            "name": "650i"
        },
        {
            "brand_id": "8",
            "id": "154",
            "name": "650i Gran Coupe"
        },
        {
            "brand_id": "8",
            "id": "155",
            "name": "L6"
        },
        {
            "brand_id": "8",
            "id": "156",
            "name": "7 Series (15)"
        },
        {
            "brand_id": "8",
            "id": "157",
            "name": "733i"
        },
        {
            "brand_id": "8",
            "id": "158",
            "name": "735i"
        },
        {
            "brand_id": "8",
            "id": "159",
            "name": "735iL"
        },
        {
            "brand_id": "8",
            "id": "160",
            "name": "740i"
        },
        {
            "brand_id": "8",
            "id": "161",
            "name": "740iL"
        },
        {
            "brand_id": "8",
            "id": "162",
            "name": "740Li"
        },
        {
            "brand_id": "8",
            "id": "163",
            "name": "745i"
        },
        {
            "brand_id": "8",
            "id": "164",
            "name": "745Li"
        },
        {
            "brand_id": "8",
            "id": "165",
            "name": "750i"
        },
        {
            "brand_id": "8",
            "id": "166",
            "name": "750iL"
        },
        {
            "brand_id": "8",
            "id": "167",
            "name": "750Li"
        },
        {
            "brand_id": "8",
            "id": "168",
            "name": "760i"
        },
        {
            "brand_id": "8",
            "id": "169",
            "name": "760Li"
        },
        {
            "brand_id": "8",
            "id": "170",
            "name": "ActiveHybrid 7"
        },
        {
            "brand_id": "8",
            "id": "171",
            "name": "Alpina B7"
        },
        {
            "brand_id": "8",
            "id": "172",
            "name": "8 Series (4)"
        },
        {
            "brand_id": "8",
            "id": "173",
            "name": "840Ci"
        },
        {
            "brand_id": "8",
            "id": "174",
            "name": "850Ci"
        },
        {
            "brand_id": "8",
            "id": "175",
            "name": "850CSi"
        },
        {
            "brand_id": "8",
            "id": "176",
            "name": "850i"
        },
        {
            "brand_id": "8",
            "id": "177",
            "name": "L Series (1)"
        },
        {
            "brand_id": "8",
            "id": "178",
            "name": "L7"
        },
        {
            "brand_id": "8",
            "id": "179",
            "name": "M Series (8)"
        },
        {
            "brand_id": "8",
            "id": "180",
            "name": "1 Series M"
        },
        {
            "brand_id": "8",
            "id": "181",
            "name": "M Coupe"
        },
        {
            "brand_id": "8",
            "id": "182",
            "name": "M Roadster"
        },
        {
            "brand_id": "8",
            "id": "183",
            "name": "M3"
        },
        {
            "brand_id": "8",
            "id": "184",
            "name": "M5"
        },
        {
            "brand_id": "8",
            "id": "185",
            "name": "M6"
        },
        {
            "brand_id": "8",
            "id": "186",
            "name": "X5 M"
        },
        {
            "brand_id": "8",
            "id": "187",
            "name": "X6 M"
        },
        {
            "brand_id": "8",
            "id": "188",
            "name": "X Series (5)"
        },
        {
            "brand_id": "8",
            "id": "189",
            "name": "ActiveHybrid X6"
        },
        {
            "brand_id": "8",
            "id": "190",
            "name": "X1"
        },
        {
            "brand_id": "8",
            "id": "191",
            "name": "X3"
        },
        {
            "brand_id": "8",
            "id": "192",
            "name": "X5"
        },
        {
            "brand_id": "8",
            "id": "193",
            "name": "X6"
        },
        {
            "brand_id": "8",
            "id": "194",
            "name": "Z Series (3)"
        },
        {
            "brand_id": "8",
            "id": "195",
            "name": "Z3"
        },
        {
            "brand_id": "8",
            "id": "196",
            "name": "Z4"
        },
        {
            "brand_id": "8",
            "id": "197",
            "name": "Z8"
        },
        {
            "brand_id": "8",
            "id": "198",
            "name": "Other BMW Models"
        },
        {
            "brand_id": "9",
            "id": "199",
            "name": "Century"
        },
        {
            "brand_id": "9",
            "id": "200",
            "name": "Electra"
        },
        {
            "brand_id": "9",
            "id": "201",
            "name": "Enclave"
        },
        {
            "brand_id": "9",
            "id": "202",
            "name": "Encore"
        },
        {
            "brand_id": "9",
            "id": "203",
            "name": "LaCrosse"
        },
        {
            "brand_id": "9",
            "id": "204",
            "name": "Le Sabre"
        },
        {
            "brand_id": "9",
            "id": "205",
            "name": "Lucerne"
        },
        {
            "brand_id": "9",
            "id": "206",
            "name": "Park Avenue"
        },
        {
            "brand_id": "9",
            "id": "207",
            "name": "Rainier"
        },
        {
            "brand_id": "9",
            "id": "208",
            "name": "Reatta"
        },
        {
            "brand_id": "9",
            "id": "209",
            "name": "Regal"
        },
        {
            "brand_id": "9",
            "id": "210",
            "name": "Rendezvous"
        },
        {
            "brand_id": "9",
            "id": "211",
            "name": "Riviera"
        },
        {
            "brand_id": "9",
            "id": "212",
            "name": "Roadmaster"
        },
        {
            "brand_id": "9",
            "id": "213",
            "name": "Skyhawk"
        },
        {
            "brand_id": "9",
            "id": "214",
            "name": "Skylark"
        },
        {
            "brand_id": "9",
            "id": "215",
            "name": "Somerset"
        },
        {
            "brand_id": "9",
            "id": "216",
            "name": "Terraza"
        },
        {
            "brand_id": "9",
            "id": "217",
            "name": "Verano"
        },
        {
            "brand_id": "9",
            "id": "218",
            "name": "Other Buick Models"
        },
        {
            "brand_id": "10",
            "id": "219",
            "name": "Allante"
        },
        {
            "brand_id": "10",
            "id": "220",
            "name": "ATS"
        },
        {
            "brand_id": "10",
            "id": "221",
            "name": "Brougham"
        },
        {
            "brand_id": "10",
            "id": "222",
            "name": "Catera"
        },
        {
            "brand_id": "10",
            "id": "223",
            "name": "Cimarron"
        },
        {
            "brand_id": "10",
            "id": "224",
            "name": "CTS"
        },
        {
            "brand_id": "10",
            "id": "225",
            "name": "De Ville"
        },
        {
            "brand_id": "10",
            "id": "226",
            "name": "DTS"
        },
        {
            "brand_id": "10",
            "id": "227",
            "name": "Eldorado"
        },
        {
            "brand_id": "10",
            "id": "228",
            "name": "Escalade"
        },
        {
            "brand_id": "10",
            "id": "229",
            "name": "Escalade ESV"
        },
        {
            "brand_id": "10",
            "id": "230",
            "name": "Escalade EXT"
        },
        {
            "brand_id": "10",
            "id": "231",
            "name": "Fleetwood"
        },
        {
            "brand_id": "10",
            "id": "232",
            "name": "Seville"
        },
        {
            "brand_id": "10",
            "id": "233",
            "name": "SRX"
        },
        {
            "brand_id": "10",
            "id": "234",
            "name": "STS"
        },
        {
            "brand_id": "10",
            "id": "235",
            "name": "XLR"
        },
        {
            "brand_id": "10",
            "id": "236",
            "name": "XTS"
        },
        {
            "brand_id": "10",
            "id": "237",
            "name": "Other Cadillac Models"
        },
        {
            "brand_id": "11",
            "id": "238",
            "name": "Astro"
        },
        {
            "brand_id": "11",
            "id": "239",
            "name": "Avalanche"
        },
        {
            "brand_id": "11",
            "id": "240",
            "name": "Aveo"
        },
        {
            "brand_id": "11",
            "id": "241",
            "name": "Aveo5"
        },
        {
            "brand_id": "11",
            "id": "242",
            "name": "Beretta"
        },
        {
            "brand_id": "11",
            "id": "243",
            "name": "Blazer"
        },
        {
            "brand_id": "11",
            "id": "244",
            "name": "Camaro"
        },
        {
            "brand_id": "11",
            "id": "245",
            "name": "Caprice"
        },
        {
            "brand_id": "11",
            "id": "246",
            "name": "Captiva Sport"
        },
        {
            "brand_id": "11",
            "id": "247",
            "name": "Cavalier"
        },
        {
            "brand_id": "11",
            "id": "248",
            "name": "Celebrity"
        },
        {
            "brand_id": "11",
            "id": "249",
            "name": "Chevette"
        },
        {
            "brand_id": "11",
            "id": "250",
            "name": "Citation"
        },
        {
            "brand_id": "11",
            "id": "251",
            "name": "Cobalt"
        },
        {
            "brand_id": "11",
            "id": "252",
            "name": "Colorado"
        },
        {
            "brand_id": "11",
            "id": "253",
            "name": "Corsica"
        },
        {
            "brand_id": "11",
            "id": "254",
            "name": "Corvette"
        },
        {
            "brand_id": "11",
            "id": "255",
            "name": "Cruze"
        },
        {
            "brand_id": "11",
            "id": "256",
            "name": "El Camino"
        },
        {
            "brand_id": "11",
            "id": "257",
            "name": "Equinox"
        },
        {
            "brand_id": "11",
            "id": "258",
            "name": "Express Van"
        },
        {
            "brand_id": "11",
            "id": "259",
            "name": "G Van"
        },
        {
            "brand_id": "11",
            "id": "260",
            "name": "HHR"
        },
        {
            "brand_id": "11",
            "id": "261",
            "name": "Impala"
        },
        {
            "brand_id": "11",
            "id": "262",
            "name": "Kodiak C4500"
        },
        {
            "brand_id": "11",
            "id": "263",
            "name": "Lumina"
        },
        {
            "brand_id": "11",
            "id": "264",
            "name": "Lumina APV"
        },
        {
            "brand_id": "11",
            "id": "265",
            "name": "LUV"
        },
        {
            "brand_id": "11",
            "id": "266",
            "name": "Malibu"
        },
        {
            "brand_id": "11",
            "id": "267",
            "name": "Metro"
        },
        {
            "brand_id": "11",
            "id": "268",
            "name": "Monte Carlo"
        },
        {
            "brand_id": "11",
            "id": "269",
            "name": "Nova"
        },
        {
            "brand_id": "11",
            "id": "270",
            "name": "Prizm"
        },
        {
            "brand_id": "11",
            "id": "271",
            "name": "S10 Blazer"
        },
        {
            "brand_id": "11",
            "id": "272",
            "name": "S10 Pickup"
        },
        {
            "brand_id": "11",
            "id": "273",
            "name": "Silverado and other C/K1500"
        },
        {
            "brand_id": "11",
            "id": "274",
            "name": "Silverado and other C/K2500"
        },
        {
            "brand_id": "11",
            "id": "275",
            "name": "Silverado and other C/K3500"
        },
        {
            "brand_id": "11",
            "id": "276",
            "name": "Sonic"
        },
        {
            "brand_id": "11",
            "id": "277",
            "name": "Spark"
        },
        {
            "brand_id": "11",
            "id": "278",
            "name": "Spectrum"
        },
        {
            "brand_id": "11",
            "id": "279",
            "name": "Sprint"
        },
        {
            "brand_id": "11",
            "id": "280",
            "name": "SSR"
        },
        {
            "brand_id": "11",
            "id": "281",
            "name": "Suburban"
        },
        {
            "brand_id": "11",
            "id": "282",
            "name": "Tahoe"
        },
        {
            "brand_id": "11",
            "id": "283",
            "name": "Tracker"
        },
        {
            "brand_id": "11",
            "id": "284",
            "name": "TrailBlazer"
        },
        {
            "brand_id": "11",
            "id": "285",
            "name": "TrailBlazer EXT"
        },
        {
            "brand_id": "11",
            "id": "286",
            "name": "Traverse"
        },
        {
            "brand_id": "11",
            "id": "287",
            "name": "Uplander"
        },
        {
            "brand_id": "11",
            "id": "288",
            "name": "Venture"
        },
        {
            "brand_id": "11",
            "id": "289",
            "name": "Volt"
        },
        {
            "brand_id": "11",
            "id": "290",
            "name": "Other Chevrolet Models"
        },
        {
            "brand_id": "12",
            "id": "291",
            "name": "200"
        },
        {
            "brand_id": "12",
            "id": "292",
            "name": "300"
        },
        {
            "brand_id": "12",
            "id": "293",
            "name": "300M"
        },
        {
            "brand_id": "12",
            "id": "294",
            "name": "Aspen"
        },
        {
            "brand_id": "12",
            "id": "295",
            "name": "Caravan"
        },
        {
            "brand_id": "12",
            "id": "296",
            "name": "Cirrus"
        },
        {
            "brand_id": "12",
            "id": "297",
            "name": "Concorde"
        },
        {
            "brand_id": "12",
            "id": "298",
            "name": "Conquest"
        },
        {
            "brand_id": "12",
            "id": "299",
            "name": "Cordoba"
        },
        {
            "brand_id": "12",
            "id": "300",
            "name": "Crossfire"
        },
        {
            "brand_id": "12",
            "id": "301",
            "name": "E Class"
        },
        {
            "brand_id": "12",
            "id": "302",
            "name": "Fifth Avenue"
        },
        {
            "brand_id": "12",
            "id": "303",
            "name": "Grand Voyager"
        },
        {
            "brand_id": "12",
            "id": "304",
            "name": "Imperial"
        },
        {
            "brand_id": "12",
            "id": "305",
            "name": "Intrepid"
        },
        {
            "brand_id": "12",
            "id": "306",
            "name": "Laser"
        },
        {
            "brand_id": "12",
            "id": "307",
            "name": "LeBaron"
        },
        {
            "brand_id": "12",
            "id": "308",
            "name": "LHS"
        },
        {
            "brand_id": "12",
            "id": "309",
            "name": "Neon"
        },
        {
            "brand_id": "12",
            "id": "310",
            "name": "New Yorker"
        },
        {
            "brand_id": "12",
            "id": "311",
            "name": "Newport"
        },
        {
            "brand_id": "12",
            "id": "312",
            "name": "Pacifica"
        },
        {
            "brand_id": "12",
            "id": "313",
            "name": "Prowler"
        },
        {
            "brand_id": "12",
            "id": "314",
            "name": "PT Cruiser"
        },
        {
            "brand_id": "12",
            "id": "315",
            "name": "Sebring"
        },
        {
            "brand_id": "12",
            "id": "316",
            "name": "TC by Maserati"
        },
        {
            "brand_id": "12",
            "id": "317",
            "name": "Town & Country"
        },
        {
            "brand_id": "12",
            "id": "318",
            "name": "Voyager"
        },
        {
            "brand_id": "12",
            "id": "319",
            "name": "Other Chrysler Models"
        },
        {
            "brand_id": "13",
            "id": "320",
            "name": "Lanos"
        },
        {
            "brand_id": "13",
            "id": "321",
            "name": "Leganza"
        },
        {
            "brand_id": "13",
            "id": "322",
            "name": "Nubira"
        },
        {
            "brand_id": "13",
            "id": "323",
            "name": "Other Daewoo Models"
        },
        {
            "brand_id": "14",
            "id": "324",
            "name": "Charade"
        },
        {
            "brand_id": "14",
            "id": "325",
            "name": "Rocky"
        },
        {
            "brand_id": "14",
            "id": "326",
            "name": "Other Daihatsu Models"
        },
        {
            "brand_id": "15",
            "id": "327",
            "name": "200SX"
        },
        {
            "brand_id": "15",
            "id": "328",
            "name": "210"
        },
        {
            "brand_id": "15",
            "id": "329",
            "name": "280ZX"
        },
        {
            "brand_id": "15",
            "id": "330",
            "name": "300ZX"
        },
        {
            "brand_id": "15",
            "id": "331",
            "name": "310"
        },
        {
            "brand_id": "15",
            "id": "332",
            "name": "510"
        },
        {
            "brand_id": "15",
            "id": "333",
            "name": "720"
        },
        {
            "brand_id": "15",
            "id": "334",
            "name": "810"
        },
        {
            "brand_id": "15",
            "id": "335",
            "name": "Maxima"
        },
        {
            "brand_id": "15",
            "id": "336",
            "name": "Pickup"
        },
        {
            "brand_id": "15",
            "id": "337",
            "name": "Pulsar"
        },
        {
            "brand_id": "15",
            "id": "338",
            "name": "Sentra"
        },
        {
            "brand_id": "15",
            "id": "339",
            "name": "Stanza"
        },
        {
            "brand_id": "15",
            "id": "340",
            "name": "Other Datsun Models"
        },
        {
            "brand_id": "16",
            "id": "341",
            "name": "DMC-12"
        },
        {
            "brand_id": "17",
            "id": "342",
            "name": "400"
        },
        {
            "brand_id": "17",
            "id": "343",
            "name": "600"
        },
        {
            "brand_id": "17",
            "id": "344",
            "name": "Aries"
        },
        {
            "brand_id": "17",
            "id": "345",
            "name": "Avenger"
        },
        {
            "brand_id": "17",
            "id": "346",
            "name": "Caliber"
        },
        {
            "brand_id": "17",
            "id": "347",
            "name": "Caravan"
        },
        {
            "brand_id": "17",
            "id": "348",
            "name": "Challenger"
        },
        {
            "brand_id": "17",
            "id": "349",
            "name": "Charger"
        },
        {
            "brand_id": "17",
            "id": "350",
            "name": "Colt"
        },
        {
            "brand_id": "17",
            "id": "351",
            "name": "Conquest"
        },
        {
            "brand_id": "17",
            "id": "352",
            "name": "D/W Truck"
        },
        {
            "brand_id": "17",
            "id": "353",
            "name": "Dakota"
        },
        {
            "brand_id": "17",
            "id": "354",
            "name": "Dart"
        },
        {
            "brand_id": "17",
            "id": "355",
            "name": "Daytona"
        },
        {
            "brand_id": "17",
            "id": "356",
            "name": "Diplomat"
        },
        {
            "brand_id": "17",
            "id": "357",
            "name": "Durango"
        },
        {
            "brand_id": "17",
            "id": "358",
            "name": "Dynasty"
        },
        {
            "brand_id": "17",
            "id": "359",
            "name": "Grand Caravan"
        },
        {
            "brand_id": "17",
            "id": "360",
            "name": "Intrepid"
        },
        {
            "brand_id": "17",
            "id": "361",
            "name": "Journey"
        },
        {
            "brand_id": "17",
            "id": "362",
            "name": "Lancer"
        },
        {
            "brand_id": "17",
            "id": "363",
            "name": "Magnum"
        },
        {
            "brand_id": "17",
            "id": "364",
            "name": "Mirada"
        },
        {
            "brand_id": "17",
            "id": "365",
            "name": "Monaco"
        },
        {
            "brand_id": "17",
            "id": "366",
            "name": "Neon"
        },
        {
            "brand_id": "17",
            "id": "367",
            "name": "Nitro"
        },
        {
            "brand_id": "17",
            "id": "368",
            "name": "Omni"
        },
        {
            "brand_id": "17",
            "id": "369",
            "name": "Raider"
        },
        {
            "brand_id": "17",
            "id": "370",
            "name": "Ram 1500 Truck"
        },
        {
            "brand_id": "17",
            "id": "371",
            "name": "Ram 2500 Truck"
        },
        {
            "brand_id": "17",
            "id": "372",
            "name": "Ram 3500 Truck"
        },
        {
            "brand_id": "17",
            "id": "373",
            "name": "Ram 4500 Truck"
        },
        {
            "brand_id": "17",
            "id": "374",
            "name": "Ram 50 Truck"
        },
        {
            "brand_id": "17",
            "id": "375",
            "name": "RAM C/V"
        },
        {
            "brand_id": "17",
            "id": "376",
            "name": "Ram SRT-10"
        },
        {
            "brand_id": "17",
            "id": "377",
            "name": "Ram Van"
        },
        {
            "brand_id": "17",
            "id": "378",
            "name": "Ram Wagon"
        },
        {
            "brand_id": "17",
            "id": "379",
            "name": "Ramcharger"
        },
        {
            "brand_id": "17",
            "id": "380",
            "name": "Rampage"
        },
        {
            "brand_id": "17",
            "id": "381",
            "name": "Shadow"
        },
        {
            "brand_id": "17",
            "id": "382",
            "name": "Spirit"
        },
        {
            "brand_id": "17",
            "id": "383",
            "name": "Sprinter"
        },
        {
            "brand_id": "17",
            "id": "384",
            "name": "SRT-4"
        },
        {
            "brand_id": "17",
            "id": "385",
            "name": "St. Regis"
        },
        {
            "brand_id": "17",
            "id": "386",
            "name": "Stealth"
        },
        {
            "brand_id": "17",
            "id": "387",
            "name": "Stratus"
        },
        {
            "brand_id": "17",
            "id": "388",
            "name": "Viper"
        },
        {
            "brand_id": "17",
            "id": "389",
            "name": "Other Dodge Models"
        },
        {
            "brand_id": "18",
            "id": "390",
            "name": "Medallion"
        },
        {
            "brand_id": "18",
            "id": "391",
            "name": "Premier"
        },
        {
            "brand_id": "18",
            "id": "392",
            "name": "Summit"
        },
        {
            "brand_id": "18",
            "id": "393",
            "name": "Talon"
        },
        {
            "brand_id": "18",
            "id": "394",
            "name": "Vision"
        },
        {
            "brand_id": "18",
            "id": "395",
            "name": "Other Eagle Models"
        },
        {
            "brand_id": "19",
            "id": "396",
            "name": "308 GTB Quattrovalvole"
        },
        {
            "brand_id": "19",
            "id": "397",
            "name": "308 GTBI"
        },
        {
            "brand_id": "19",
            "id": "398",
            "name": "308 GTS Quattrovalvole"
        },
        {
            "brand_id": "19",
            "id": "399",
            "name": "308 GTSI"
        },
        {
            "brand_id": "19",
            "id": "400",
            "name": "328 GTB"
        },
        {
            "brand_id": "19",
            "id": "401",
            "name": "328 GTS"
        },
        {
            "brand_id": "19",
            "id": "402",
            "name": "348 GTB"
        },
        {
            "brand_id": "19",
            "id": "403",
            "name": "348 GTS"
        },
        {
            "brand_id": "19",
            "id": "404",
            "name": "348 Spider"
        },
        {
            "brand_id": "19",
            "id": "405",
            "name": "348 TB"
        },
        {
            "brand_id": "19",
            "id": "406",
            "name": "348 TS"
        },
        {
            "brand_id": "19",
            "id": "407",
            "name": "360"
        },
        {
            "brand_id": "19",
            "id": "408",
            "name": "456 GT"
        },
        {
            "brand_id": "19",
            "id": "409",
            "name": "456M GT"
        },
        {
            "brand_id": "19",
            "id": "410",
            "name": "458 Italia"
        },
        {
            "brand_id": "19",
            "id": "411",
            "name": "512 BBi"
        },
        {
            "brand_id": "19",
            "id": "412",
            "name": "512M"
        },
        {
            "brand_id": "19",
            "id": "413",
            "name": "512TR"
        },
        {
            "brand_id": "19",
            "id": "414",
            "name": "550 Maranello"
        },
        {
            "brand_id": "19",
            "id": "415",
            "name": "575M Maranello"
        },
        {
            "brand_id": "19",
            "id": "416",
            "name": "599 GTB Fiorano"
        },
        {
            "brand_id": "19",
            "id": "417",
            "name": "599 GTO"
        },
        {
            "brand_id": "19",
            "id": "418",
            "name": "612 Scaglietti"
        },
        {
            "brand_id": "19",
            "id": "419",
            "name": "California"
        },
        {
            "brand_id": "19",
            "id": "420",
            "name": "Enzo"
        },
        {
            "brand_id": "19",
            "id": "421",
            "name": "F355"
        },
        {
            "brand_id": "19",
            "id": "422",
            "name": "F40"
        },
        {
            "brand_id": "19",
            "id": "423",
            "name": "F430"
        },
        {
            "brand_id": "19",
            "id": "424",
            "name": "F50"
        },
        {
            "brand_id": "19",
            "id": "425",
            "name": "FF"
        },
        {
            "brand_id": "19",
            "id": "426",
            "name": "Mondial"
        },
        {
            "brand_id": "19",
            "id": "427",
            "name": "Testarossa"
        },
        {
            "brand_id": "19",
            "id": "428",
            "name": "Other Ferrari Models"
        },
        {
            "brand_id": "20",
            "id": "429",
            "name": "2000 Spider"
        },
        {
            "brand_id": "20",
            "id": "430",
            "name": "500"
        },
        {
            "brand_id": "20",
            "id": "431",
            "name": "Bertone X1/9"
        },
        {
            "brand_id": "20",
            "id": "432",
            "name": "Brava"
        },
        {
            "brand_id": "20",
            "id": "433",
            "name": "Pininfarina Spider"
        },
        {
            "brand_id": "20",
            "id": "434",
            "name": "Strada"
        },
        {
            "brand_id": "20",
            "id": "435",
            "name": "X1/9"
        },
        {
            "brand_id": "20",
            "id": "436",
            "name": "Other Fiat Models"
        },
        {
            "brand_id": "21",
            "id": "437",
            "name": "Karma"
        },
        {
            "brand_id": "22",
            "id": "438",
            "name": "Aerostar"
        },
        {
            "brand_id": "22",
            "id": "439",
            "name": "Aspire"
        },
        {
            "brand_id": "22",
            "id": "440",
            "name": "Bronco"
        },
        {
            "brand_id": "22",
            "id": "441",
            "name": "Bronco II"
        },
        {
            "brand_id": "22",
            "id": "442",
            "name": "C-MAX"
        },
        {
            "brand_id": "22",
            "id": "443",
            "name": "Club Wagon"
        },
        {
            "brand_id": "22",
            "id": "444",
            "name": "Contour"
        },
        {
            "brand_id": "22",
            "id": "445",
            "name": "Courier"
        },
        {
            "brand_id": "22",
            "id": "446",
            "name": "Crown Victoria"
        },
        {
            "brand_id": "22",
            "id": "447",
            "name": "E-150 and Econoline 150"
        },
        {
            "brand_id": "22",
            "id": "448",
            "name": "E-250 and Econoline 250"
        },
        {
            "brand_id": "22",
            "id": "449",
            "name": "E-350 and Econoline 350"
        },
        {
            "brand_id": "22",
            "id": "450",
            "name": "Edge"
        },
        {
            "brand_id": "22",
            "id": "451",
            "name": "Escape"
        },
        {
            "brand_id": "22",
            "id": "452",
            "name": "Escort"
        },
        {
            "brand_id": "22",
            "id": "453",
            "name": "Excursion"
        },
        {
            "brand_id": "22",
            "id": "454",
            "name": "EXP"
        },
        {
            "brand_id": "22",
            "id": "455",
            "name": "Expedition"
        },
        {
            "brand_id": "22",
            "id": "456",
            "name": "Expedition EL"
        },
        {
            "brand_id": "22",
            "id": "457",
            "name": "Explorer"
        },
        {
            "brand_id": "22",
            "id": "458",
            "name": "Explorer Sport Trac"
        },
        {
            "brand_id": "22",
            "id": "459",
            "name": "F100"
        },
        {
            "brand_id": "22",
            "id": "460",
            "name": "F150"
        },
        {
            "brand_id": "22",
            "id": "461",
            "name": "F250"
        },
        {
            "brand_id": "22",
            "id": "462",
            "name": "F350"
        },
        {
            "brand_id": "22",
            "id": "463",
            "name": "F450"
        },
        {
            "brand_id": "22",
            "id": "464",
            "name": "Fairmont"
        },
        {
            "brand_id": "22",
            "id": "465",
            "name": "Festiva"
        },
        {
            "brand_id": "22",
            "id": "466",
            "name": "Fiesta"
        },
        {
            "brand_id": "22",
            "id": "467",
            "name": "Five Hundred"
        },
        {
            "brand_id": "22",
            "id": "468",
            "name": "Flex"
        },
        {
            "brand_id": "22",
            "id": "469",
            "name": "Focus"
        },
        {
            "brand_id": "22",
            "id": "470",
            "name": "Freestar"
        },
        {
            "brand_id": "22",
            "id": "471",
            "name": "Freestyle"
        },
        {
            "brand_id": "22",
            "id": "472",
            "name": "Fusion"
        },
        {
            "brand_id": "22",
            "id": "473",
            "name": "Granada"
        },
        {
            "brand_id": "22",
            "id": "474",
            "name": "GT"
        },
        {
            "brand_id": "22",
            "id": "475",
            "name": "LTD"
        },
        {
            "brand_id": "22",
            "id": "476",
            "name": "Mustang"
        },
        {
            "brand_id": "22",
            "id": "477",
            "name": "Probe"
        },
        {
            "brand_id": "22",
            "id": "478",
            "name": "Ranger"
        },
        {
            "brand_id": "22",
            "id": "479",
            "name": "Taurus"
        },
        {
            "brand_id": "22",
            "id": "480",
            "name": "Taurus X"
        },
        {
            "brand_id": "22",
            "id": "481",
            "name": "Tempo"
        },
        {
            "brand_id": "22",
            "id": "482",
            "name": "Thunderbird"
        },
        {
            "brand_id": "22",
            "id": "483",
            "name": "Transit Connect"
        },
        {
            "brand_id": "22",
            "id": "484",
            "name": "Windstar"
        },
        {
            "brand_id": "22",
            "id": "485",
            "name": "ZX2 Escort"
        },
        {
            "brand_id": "22",
            "id": "486",
            "name": "Other Ford Models"
        },
        {
            "brand_id": "23",
            "id": "487",
            "name": "Sprinter"
        },
        {
            "brand_id": "24",
            "id": "488",
            "name": "Metro"
        },
        {
            "brand_id": "24",
            "id": "489",
            "name": "Prizm"
        },
        {
            "brand_id": "24",
            "id": "490",
            "name": "Spectrum"
        },
        {
            "brand_id": "24",
            "id": "491",
            "name": "Storm"
        },
        {
            "brand_id": "24",
            "id": "492",
            "name": "Tracker"
        },
        {
            "brand_id": "24",
            "id": "493",
            "name": "Other Geo Models"
        },
        {
            "brand_id": "25",
            "id": "494",
            "name": "Acadia"
        },
        {
            "brand_id": "25",
            "id": "495",
            "name": "Caballero"
        },
        {
            "brand_id": "25",
            "id": "496",
            "name": "Canyon"
        },
        {
            "brand_id": "25",
            "id": "497",
            "name": "Envoy"
        },
        {
            "brand_id": "25",
            "id": "498",
            "name": "Envoy XL"
        },
        {
            "brand_id": "25",
            "id": "499",
            "name": "Envoy XUV"
        },
        {
            "brand_id": "25",
            "id": "500",
            "name": "Jimmy"
        },
        {
            "brand_id": "25",
            "id": "501",
            "name": "Rally Wagon"
        },
        {
            "brand_id": "25",
            "id": "502",
            "name": "S15 Jimmy"
        },
        {
            "brand_id": "25",
            "id": "503",
            "name": "S15 Pickup"
        },
        {
            "brand_id": "25",
            "id": "504",
            "name": "Safari"
        },
        {
            "brand_id": "25",
            "id": "505",
            "name": "Savana"
        },
        {
            "brand_id": "25",
            "id": "506",
            "name": "Sierra C/K1500"
        },
        {
            "brand_id": "25",
            "id": "507",
            "name": "Sierra C/K2500"
        },
        {
            "brand_id": "25",
            "id": "508",
            "name": "Sierra C/K3500"
        },
        {
            "brand_id": "25",
            "id": "509",
            "name": "Sonoma"
        },
        {
            "brand_id": "25",
            "id": "510",
            "name": "Suburban"
        },
        {
            "brand_id": "25",
            "id": "511",
            "name": "Syclone"
        },
        {
            "brand_id": "25",
            "id": "512",
            "name": "Terrain"
        },
        {
            "brand_id": "25",
            "id": "513",
            "name": "TopKick C4500"
        },
        {
            "brand_id": "25",
            "id": "514",
            "name": "Typhoon"
        },
        {
            "brand_id": "25",
            "id": "515",
            "name": "Vandura"
        },
        {
            "brand_id": "25",
            "id": "516",
            "name": "Yukon"
        },
        {
            "brand_id": "25",
            "id": "517",
            "name": "Yukon XL"
        },
        {
            "brand_id": "25",
            "id": "518",
            "name": "Other GMC Models"
        },
        {
            "brand_id": "26",
            "id": "519",
            "name": "Accord"
        },
        {
            "brand_id": "26",
            "id": "520",
            "name": "Civic"
        },
        {
            "brand_id": "26",
            "id": "521",
            "name": "CR-V"
        },
        {
            "brand_id": "26",
            "id": "522",
            "name": "CR-Z"
        },
        {
            "brand_id": "26",
            "id": "523",
            "name": "CRX"
        },
        {
            "brand_id": "26",
            "id": "524",
            "name": "Crosstour and Accord Crosstour Models (2)"
        },
        {
            "brand_id": "26",
            "id": "525",
            "name": "Accord Crosstour"
        },
        {
            "brand_id": "26",
            "id": "526",
            "name": "Crosstour"
        },
        {
            "brand_id": "26",
            "id": "527",
            "name": "Del Sol"
        },
        {
            "brand_id": "26",
            "id": "528",
            "name": "Element"
        },
        {
            "brand_id": "26",
            "id": "529",
            "name": "Fit"
        },
        {
            "brand_id": "26",
            "id": "530",
            "name": "Insight"
        },
        {
            "brand_id": "26",
            "id": "531",
            "name": "Odyssey"
        },
        {
            "brand_id": "26",
            "id": "532",
            "name": "Passport"
        },
        {
            "brand_id": "26",
            "id": "533",
            "name": "Pilot"
        },
        {
            "brand_id": "26",
            "id": "534",
            "name": "Prelude"
        },
        {
            "brand_id": "26",
            "id": "535",
            "name": "Ridgeline"
        },
        {
            "brand_id": "26",
            "id": "536",
            "name": "S2000"
        },
        {
            "brand_id": "26",
            "id": "537",
            "name": "Other Honda Models"
        },
        {
            "brand_id": "27",
            "id": "538",
            "name": "H1"
        },
        {
            "brand_id": "27",
            "id": "539",
            "name": "H2"
        },
        {
            "brand_id": "27",
            "id": "540",
            "name": "H3"
        },
        {
            "brand_id": "27",
            "id": "541",
            "name": "H3T"
        },
        {
            "brand_id": "27",
            "id": "542",
            "name": "Other Hummer Models"
        },
        {
            "brand_id": "28",
            "id": "543",
            "name": "Accent"
        },
        {
            "brand_id": "28",
            "id": "544",
            "name": "Azera"
        },
        {
            "brand_id": "28",
            "id": "545",
            "name": "Elantra"
        },
        {
            "brand_id": "28",
            "id": "546",
            "name": "Elantra Coupe"
        },
        {
            "brand_id": "28",
            "id": "547",
            "name": "Elantra Touring"
        },
        {
            "brand_id": "28",
            "id": "548",
            "name": "Entourage"
        },
        {
            "brand_id": "28",
            "id": "549",
            "name": "Equus"
        },
        {
            "brand_id": "28",
            "id": "550",
            "name": "Excel"
        },
        {
            "brand_id": "28",
            "id": "551",
            "name": "Genesis"
        },
        {
            "brand_id": "28",
            "id": "552",
            "name": "Genesis Coupe"
        },
        {
            "brand_id": "28",
            "id": "553",
            "name": "Santa Fe"
        },
        {
            "brand_id": "28",
            "id": "554",
            "name": "Scoupe"
        },
        {
            "brand_id": "28",
            "id": "555",
            "name": "Sonata"
        },
        {
            "brand_id": "28",
            "id": "556",
            "name": "Tiburon"
        },
        {
            "brand_id": "28",
            "id": "557",
            "name": "Tucson"
        },
        {
            "brand_id": "28",
            "id": "558",
            "name": "Veloster"
        },
        {
            "brand_id": "28",
            "id": "559",
            "name": "Veracruz"
        },
        {
            "brand_id": "28",
            "id": "560",
            "name": "XG300"
        },
        {
            "brand_id": "28",
            "id": "561",
            "name": "XG350"
        },
        {
            "brand_id": "28",
            "id": "562",
            "name": "Other Hyundai Models"
        },
        {
            "brand_id": "29",
            "id": "563",
            "name": "EX Models (2)"
        },
        {
            "brand_id": "29",
            "id": "564",
            "name": "EX35"
        },
        {
            "brand_id": "29",
            "id": "565",
            "name": "EX37"
        },
        {
            "brand_id": "29",
            "id": "566",
            "name": "FX Models (4)"
        },
        {
            "brand_id": "29",
            "id": "567",
            "name": "FX35"
        },
        {
            "brand_id": "29",
            "id": "568",
            "name": "FX37"
        },
        {
            "brand_id": "29",
            "id": "569",
            "name": "FX45"
        },
        {
            "brand_id": "29",
            "id": "570",
            "name": "FX50"
        },
        {
            "brand_id": "29",
            "id": "571",
            "name": "G Models (4)"
        },
        {
            "brand_id": "29",
            "id": "572",
            "name": "G20"
        },
        {
            "brand_id": "29",
            "id": "573",
            "name": "G25"
        },
        {
            "brand_id": "29",
            "id": "574",
            "name": "G35"
        },
        {
            "brand_id": "29",
            "id": "575",
            "name": "G37"
        },
        {
            "brand_id": "29",
            "id": "576",
            "name": "I Models (2)"
        },
        {
            "brand_id": "29",
            "id": "577",
            "name": "I30"
        },
        {
            "brand_id": "29",
            "id": "578",
            "name": "I35"
        },
        {
            "brand_id": "29",
            "id": "579",
            "name": "J Models (1)"
        },
        {
            "brand_id": "29",
            "id": "580",
            "name": "J30"
        },
        {
            "brand_id": "29",
            "id": "581",
            "name": "JX Models (1)"
        },
        {
            "brand_id": "29",
            "id": "582",
            "name": "JX35"
        },
        {
            "brand_id": "29",
            "id": "583",
            "name": "M Models (6)"
        },
        {
            "brand_id": "29",
            "id": "584",
            "name": "M30"
        },
        {
            "brand_id": "29",
            "id": "585",
            "name": "M35"
        },
        {
            "brand_id": "29",
            "id": "586",
            "name": "M35h"
        },
        {
            "brand_id": "29",
            "id": "587",
            "name": "M37"
        },
        {
            "brand_id": "29",
            "id": "588",
            "name": "M45"
        },
        {
            "brand_id": "29",
            "id": "589",
            "name": "M56"
        },
        {
            "brand_id": "29",
            "id": "590",
            "name": "Q Models (1)"
        },
        {
            "brand_id": "29",
            "id": "591",
            "name": "Q45"
        },
        {
            "brand_id": "29",
            "id": "592",
            "name": "QX Models (2)"
        },
        {
            "brand_id": "29",
            "id": "593",
            "name": "QX4"
        },
        {
            "brand_id": "29",
            "id": "594",
            "name": "QX56"
        },
        {
            "brand_id": "29",
            "id": "595",
            "name": "Other Infiniti Models"
        },
        {
            "brand_id": "30",
            "id": "596",
            "name": "Amigo"
        },
        {
            "brand_id": "30",
            "id": "597",
            "name": "Ascender"
        },
        {
            "brand_id": "30",
            "id": "598",
            "name": "Axiom"
        },
        {
            "brand_id": "30",
            "id": "599",
            "name": "Hombre"
        },
        {
            "brand_id": "30",
            "id": "600",
            "name": "i-280"
        },
        {
            "brand_id": "30",
            "id": "601",
            "name": "i-290"
        },
        {
            "brand_id": "30",
            "id": "602",
            "name": "i-350"
        },
        {
            "brand_id": "30",
            "id": "603",
            "name": "i-370"
        },
        {
            "brand_id": "30",
            "id": "604",
            "name": "I-Mark"
        },
        {
            "brand_id": "30",
            "id": "605",
            "name": "Impulse"
        },
        {
            "brand_id": "30",
            "id": "606",
            "name": "Oasis"
        },
        {
            "brand_id": "30",
            "id": "607",
            "name": "Pickup"
        },
        {
            "brand_id": "30",
            "id": "608",
            "name": "Rodeo"
        },
        {
            "brand_id": "30",
            "id": "609",
            "name": "Stylus"
        },
        {
            "brand_id": "30",
            "id": "610",
            "name": "Trooper"
        },
        {
            "brand_id": "30",
            "id": "611",
            "name": "Trooper II"
        },
        {
            "brand_id": "30",
            "id": "612",
            "name": "VehiCROSS"
        },
        {
            "brand_id": "30",
            "id": "613",
            "name": "Other Isuzu Models"
        },
        {
            "brand_id": "31",
            "id": "614",
            "name": "S-Type"
        },
        {
            "brand_id": "31",
            "id": "615",
            "name": "X-Type"
        },
        {
            "brand_id": "31",
            "id": "616",
            "name": "XF"
        },
        {
            "brand_id": "31",
            "id": "617",
            "name": "XJ Series (10)"
        },
        {
            "brand_id": "31",
            "id": "618",
            "name": "XJ12"
        },
        {
            "brand_id": "31",
            "id": "619",
            "name": "XJ6"
        },
        {
            "brand_id": "31",
            "id": "620",
            "name": "XJR"
        },
        {
            "brand_id": "31",
            "id": "621",
            "name": "XJR-S"
        },
        {
            "brand_id": "31",
            "id": "622",
            "name": "XJS"
        },
        {
            "brand_id": "31",
            "id": "623",
            "name": "XJ Vanden Plas"
        },
        {
            "brand_id": "31",
            "id": "624",
            "name": "XJ"
        },
        {
            "brand_id": "31",
            "id": "625",
            "name": "XJ8"
        },
        {
            "brand_id": "31",
            "id": "626",
            "name": "XJ8 L"
        },
        {
            "brand_id": "31",
            "id": "627",
            "name": "XJ Sport"
        },
        {
            "brand_id": "31",
            "id": "628",
            "name": "XK Series (3)"
        },
        {
            "brand_id": "31",
            "id": "629",
            "name": "XK8"
        },
        {
            "brand_id": "31",
            "id": "630",
            "name": "XK"
        },
        {
            "brand_id": "31",
            "id": "631",
            "name": "XKR"
        },
        {
            "brand_id": "31",
            "id": "632",
            "name": "Other Jaguar Models"
        },
        {
            "brand_id": "32",
            "id": "633",
            "name": "Cherokee"
        },
        {
            "brand_id": "32",
            "id": "634",
            "name": "CJ"
        },
        {
            "brand_id": "32",
            "id": "635",
            "name": "Comanche"
        },
        {
            "brand_id": "32",
            "id": "636",
            "name": "Commander"
        },
        {
            "brand_id": "32",
            "id": "637",
            "name": "Compass"
        },
        {
            "brand_id": "32",
            "id": "638",
            "name": "Grand Cherokee"
        },
        {
            "brand_id": "32",
            "id": "639",
            "name": "Grand Wagoneer"
        },
        {
            "brand_id": "32",
            "id": "640",
            "name": "Liberty"
        },
        {
            "brand_id": "32",
            "id": "641",
            "name": "Patriot"
        },
        {
            "brand_id": "32",
            "id": "642",
            "name": "Pickup"
        },
        {
            "brand_id": "32",
            "id": "643",
            "name": "Scrambler"
        },
        {
            "brand_id": "32",
            "id": "644",
            "name": "Wagoneer"
        },
        {
            "brand_id": "32",
            "id": "645",
            "name": "Wrangler"
        },
        {
            "brand_id": "32",
            "id": "646",
            "name": "Other Jeep Models"
        },
        {
            "brand_id": "33",
            "id": "647",
            "name": "Amanti"
        },
        {
            "brand_id": "33",
            "id": "648",
            "name": "Borrego"
        },
        {
            "brand_id": "33",
            "id": "649",
            "name": "Forte"
        },
        {
            "brand_id": "33",
            "id": "650",
            "name": "Forte Koup"
        },
        {
            "brand_id": "33",
            "id": "651",
            "name": "Optima"
        },
        {
            "brand_id": "33",
            "id": "652",
            "name": "Rio"
        },
        {
            "brand_id": "33",
            "id": "653",
            "name": "Rio5"
        },
        {
            "brand_id": "33",
            "id": "654",
            "name": "Rondo"
        },
        {
            "brand_id": "33",
            "id": "655",
            "name": "Sedona"
        },
        {
            "brand_id": "33",
            "id": "656",
            "name": "Sephia"
        },
        {
            "brand_id": "33",
            "id": "657",
            "name": "Sorento"
        },
        {
            "brand_id": "33",
            "id": "658",
            "name": "Soul"
        },
        {
            "brand_id": "33",
            "id": "659",
            "name": "Spectra"
        },
        {
            "brand_id": "33",
            "id": "660",
            "name": "Spectra5"
        },
        {
            "brand_id": "33",
            "id": "661",
            "name": "Sportage"
        },
        {
            "brand_id": "33",
            "id": "662",
            "name": "Other Kia Models"
        },
        {
            "brand_id": "34",
            "id": "663",
            "name": "Aventador"
        },
        {
            "brand_id": "34",
            "id": "664",
            "name": "Countach"
        },
        {
            "brand_id": "34",
            "id": "665",
            "name": "Diablo"
        },
        {
            "brand_id": "34",
            "id": "666",
            "name": "Gallardo"
        },
        {
            "brand_id": "34",
            "id": "667",
            "name": "Jalpa"
        },
        {
            "brand_id": "34",
            "id": "668",
            "name": "LM002"
        },
        {
            "brand_id": "34",
            "id": "669",
            "name": "Murcielago"
        },
        {
            "brand_id": "34",
            "id": "670",
            "name": "Other Lamborghini Models"
        },
        {
            "brand_id": "35",
            "id": "671",
            "name": "Beta"
        },
        {
            "brand_id": "35",
            "id": "672",
            "name": "Zagato"
        },
        {
            "brand_id": "35",
            "id": "673",
            "name": "Other Lancia Models"
        },
        {
            "brand_id": "36",
            "id": "674",
            "name": "Defender"
        },
        {
            "brand_id": "36",
            "id": "675",
            "name": "Discovery"
        },
        {
            "brand_id": "36",
            "id": "676",
            "name": "Freelander"
        },
        {
            "brand_id": "36",
            "id": "677",
            "name": "LR2"
        },
        {
            "brand_id": "36",
            "id": "678",
            "name": "LR3"
        },
        {
            "brand_id": "36",
            "id": "679",
            "name": "LR4"
        },
        {
            "brand_id": "36",
            "id": "680",
            "name": "Range Rover"
        },
        {
            "brand_id": "36",
            "id": "681",
            "name": "Range Rover Evoque"
        },
        {
            "brand_id": "36",
            "id": "682",
            "name": "Range Rover Sport"
        },
        {
            "brand_id": "36",
            "id": "683",
            "name": "Other Land Rover Models"
        },
        {
            "brand_id": "37",
            "id": "684",
            "name": "CT Models (1)"
        },
        {
            "brand_id": "37",
            "id": "685",
            "name": "CT 200h"
        },
        {
            "brand_id": "37",
            "id": "686",
            "name": "ES Models (5)"
        },
        {
            "brand_id": "37",
            "id": "687",
            "name": "ES 250"
        },
        {
            "brand_id": "37",
            "id": "688",
            "name": "ES 300"
        },
        {
            "brand_id": "37",
            "id": "689",
            "name": "ES 300h"
        },
        {
            "brand_id": "37",
            "id": "690",
            "name": "ES 330"
        },
        {
            "brand_id": "37",
            "id": "691",
            "name": "ES 350"
        },
        {
            "brand_id": "37",
            "id": "692",
            "name": "GS Models (6)"
        },
        {
            "brand_id": "37",
            "id": "693",
            "name": "GS 300"
        },
        {
            "brand_id": "37",
            "id": "694",
            "name": "GS 350"
        },
        {
            "brand_id": "37",
            "id": "695",
            "name": "GS 400"
        },
        {
            "brand_id": "37",
            "id": "696",
            "name": "GS 430"
        },
        {
            "brand_id": "37",
            "id": "697",
            "name": "GS 450h"
        },
        {
            "brand_id": "37",
            "id": "698",
            "name": "GS 460"
        },
        {
            "brand_id": "37",
            "id": "699",
            "name": "GX Models (2)"
        },
        {
            "brand_id": "37",
            "id": "700",
            "name": "GX 460"
        },
        {
            "brand_id": "37",
            "id": "701",
            "name": "GX 470"
        },
        {
            "brand_id": "37",
            "id": "702",
            "name": "HS Models (1)"
        },
        {
            "brand_id": "37",
            "id": "703",
            "name": "HS 250h"
        },
        {
            "brand_id": "37",
            "id": "704",
            "name": "IS Models (6)"
        },
        {
            "brand_id": "37",
            "id": "705",
            "name": "IS 250"
        },
        {
            "brand_id": "37",
            "id": "706",
            "name": "IS 250C"
        },
        {
            "brand_id": "37",
            "id": "707",
            "name": "IS 300"
        },
        {
            "brand_id": "37",
            "id": "708",
            "name": "IS 350"
        },
        {
            "brand_id": "37",
            "id": "709",
            "name": "IS 350C"
        },
        {
            "brand_id": "37",
            "id": "710",
            "name": "IS F"
        },
        {
            "brand_id": "37",
            "id": "711",
            "name": "LFA"
        },
        {
            "brand_id": "37",
            "id": "712",
            "name": "LS Models (4)"
        },
        {
            "brand_id": "37",
            "id": "713",
            "name": "LS 400"
        },
        {
            "brand_id": "37",
            "id": "714",
            "name": "LS 430"
        },
        {
            "brand_id": "37",
            "id": "715",
            "name": "LS 460"
        },
        {
            "brand_id": "37",
            "id": "716",
            "name": "LS 600h"
        },
        {
            "brand_id": "37",
            "id": "717",
            "name": "LX Models (3)"
        },
        {
            "brand_id": "37",
            "id": "718",
            "name": "LX 450"
        },
        {
            "brand_id": "37",
            "id": "719",
            "name": "LX 470"
        },
        {
            "brand_id": "37",
            "id": "720",
            "name": "LX 570"
        },
        {
            "brand_id": "37",
            "id": "721",
            "name": "RX Models (5)"
        },
        {
            "brand_id": "37",
            "id": "722",
            "name": "RX 300"
        },
        {
            "brand_id": "37",
            "id": "723",
            "name": "RX 330"
        },
        {
            "brand_id": "37",
            "id": "724",
            "name": "RX 350"
        },
        {
            "brand_id": "37",
            "id": "725",
            "name": "RX 400h"
        },
        {
            "brand_id": "37",
            "id": "726",
            "name": "RX 450h"
        },
        {
            "brand_id": "37",
            "id": "727",
            "name": "SC Models (3)"
        },
        {
            "brand_id": "37",
            "id": "728",
            "name": "SC 300"
        },
        {
            "brand_id": "37",
            "id": "729",
            "name": "SC 400"
        },
        {
            "brand_id": "37",
            "id": "730",
            "name": "SC 430"
        },
        {
            "brand_id": "37",
            "id": "731",
            "name": "Other Lexus Models"
        },
        {
            "brand_id": "38",
            "id": "732",
            "name": "Aviator"
        },
        {
            "brand_id": "38",
            "id": "733",
            "name": "Blackwood"
        },
        {
            "brand_id": "38",
            "id": "734",
            "name": "Continental"
        },
        {
            "brand_id": "38",
            "id": "735",
            "name": "LS"
        },
        {
            "brand_id": "38",
            "id": "736",
            "name": "Mark LT"
        },
        {
            "brand_id": "38",
            "id": "737",
            "name": "Mark VI"
        },
        {
            "brand_id": "38",
            "id": "738",
            "name": "Mark VII"
        },
        {
            "brand_id": "38",
            "id": "739",
            "name": "Mark VIII"
        },
        {
            "brand_id": "38",
            "id": "740",
            "name": "MKS"
        },
        {
            "brand_id": "38",
            "id": "741",
            "name": "MKT"
        },
        {
            "brand_id": "38",
            "id": "742",
            "name": "MKX"
        },
        {
            "brand_id": "38",
            "id": "743",
            "name": "MKZ"
        },
        {
            "brand_id": "38",
            "id": "744",
            "name": "Navigator"
        },
        {
            "brand_id": "38",
            "id": "745",
            "name": "Navigator L"
        },
        {
            "brand_id": "38",
            "id": "746",
            "name": "Town Car"
        },
        {
            "brand_id": "38",
            "id": "747",
            "name": "Zephyr"
        },
        {
            "brand_id": "38",
            "id": "748",
            "name": "Other Lincoln Models"
        },
        {
            "brand_id": "39",
            "id": "749",
            "name": "Elan"
        },
        {
            "brand_id": "39",
            "id": "750",
            "name": "Elise"
        },
        {
            "brand_id": "39",
            "id": "751",
            "name": "Esprit"
        },
        {
            "brand_id": "39",
            "id": "752",
            "name": "Evora"
        },
        {
            "brand_id": "39",
            "id": "753",
            "name": "Exige"
        },
        {
            "brand_id": "39",
            "id": "754",
            "name": "Other Lotus Models"
        },
        {
            "brand_id": "40",
            "id": "755",
            "name": "430"
        },
        {
            "brand_id": "40",
            "id": "756",
            "name": "Biturbo"
        },
        {
            "brand_id": "40",
            "id": "757",
            "name": "Coupe"
        },
        {
            "brand_id": "40",
            "id": "758",
            "name": "GranSport"
        },
        {
            "brand_id": "40",
            "id": "759",
            "name": "GranTurismo"
        },
        {
            "brand_id": "40",
            "id": "760",
            "name": "Quattroporte"
        },
        {
            "brand_id": "40",
            "id": "761",
            "name": "Spyder"
        },
        {
            "brand_id": "40",
            "id": "762",
            "name": "Other Maserati Models"
        },
        {
            "brand_id": "41",
            "id": "763",
            "name": "57"
        },
        {
            "brand_id": "41",
            "id": "764",
            "name": "62"
        },
        {
            "brand_id": "41",
            "id": "765",
            "name": "Other Maybach Models"
        },
        {
            "brand_id": "42",
            "id": "766",
            "name": "323"
        },
        {
            "brand_id": "42",
            "id": "767",
            "name": "626"
        },
        {
            "brand_id": "42",
            "id": "768",
            "name": "929"
        },
        {
            "brand_id": "42",
            "id": "769",
            "name": "B-Series Pickup"
        },
        {
            "brand_id": "42",
            "id": "770",
            "name": "CX-5"
        },
        {
            "brand_id": "42",
            "id": "771",
            "name": "CX-7"
        },
        {
            "brand_id": "42",
            "id": "772",
            "name": "CX-9"
        },
        {
            "brand_id": "42",
            "id": "773",
            "name": "GLC"
        },
        {
            "brand_id": "42",
            "id": "774",
            "name": "MAZDA2"
        },
        {
            "brand_id": "42",
            "id": "775",
            "name": "MAZDA3"
        },
        {
            "brand_id": "42",
            "id": "776",
            "name": "MAZDA5"
        },
        {
            "brand_id": "42",
            "id": "777",
            "name": "MAZDA6"
        },
        {
            "brand_id": "42",
            "id": "778",
            "name": "MAZDASPEED3"
        },
        {
            "brand_id": "42",
            "id": "779",
            "name": "MAZDASPEED6"
        },
        {
            "brand_id": "42",
            "id": "780",
            "name": "Miata MX5"
        },
        {
            "brand_id": "42",
            "id": "781",
            "name": "Millenia"
        },
        {
            "brand_id": "42",
            "id": "782",
            "name": "MPV"
        },
        {
            "brand_id": "42",
            "id": "783",
            "name": "MX3"
        },
        {
            "brand_id": "42",
            "id": "784",
            "name": "MX6"
        },
        {
            "brand_id": "42",
            "id": "785",
            "name": "Navajo"
        },
        {
            "brand_id": "42",
            "id": "786",
            "name": "Protege"
        },
        {
            "brand_id": "42",
            "id": "787",
            "name": "Protege5"
        },
        {
            "brand_id": "42",
            "id": "788",
            "name": "RX-7"
        },
        {
            "brand_id": "42",
            "id": "789",
            "name": "RX-8"
        },
        {
            "brand_id": "42",
            "id": "790",
            "name": "Tribute"
        },
        {
            "brand_id": "42",
            "id": "791",
            "name": "Other Mazda Models"
        },
        {
            "brand_id": "43",
            "id": "792",
            "name": "MP4-12C"
        },
        {
            "brand_id": "44",
            "id": "793",
            "name": "190 Class (2)"
        },
        {
            "brand_id": "44",
            "id": "794",
            "name": "190D"
        },
        {
            "brand_id": "44",
            "id": "795",
            "name": "190E"
        },
        {
            "brand_id": "44",
            "id": "796",
            "name": "240 Class (1)"
        },
        {
            "brand_id": "44",
            "id": "797",
            "name": "240D"
        },
        {
            "brand_id": "44",
            "id": "798",
            "name": "300 Class / E Class (6)"
        },
        {
            "brand_id": "44",
            "id": "799",
            "name": "300CD"
        },
        {
            "brand_id": "44",
            "id": "800",
            "name": "300CE"
        },
        {
            "brand_id": "44",
            "id": "801",
            "name": "300D"
        },
        {
            "brand_id": "44",
            "id": "802",
            "name": "300E"
        },
        {
            "brand_id": "44",
            "id": "803",
            "name": "300TD"
        },
        {
            "brand_id": "44",
            "id": "804",
            "name": "300TE"
        },
        {
            "brand_id": "44",
            "id": "805",
            "name": "C Class (13)"
        },
        {
            "brand_id": "44",
            "id": "806",
            "name": "C220"
        },
        {
            "brand_id": "44",
            "id": "807",
            "name": "C230"
        },
        {
            "brand_id": "44",
            "id": "808",
            "name": "C240"
        },
        {
            "brand_id": "44",
            "id": "809",
            "name": "C250"
        },
        {
            "brand_id": "44",
            "id": "810",
            "name": "C280"
        },
        {
            "brand_id": "44",
            "id": "811",
            "name": "C300"
        },
        {
            "brand_id": "44",
            "id": "812",
            "name": "C320"
        },
        {
            "brand_id": "44",
            "id": "813",
            "name": "C32 AMG"
        },
        {
            "brand_id": "44",
            "id": "814",
            "name": "C350"
        },
        {
            "brand_id": "44",
            "id": "815",
            "name": "C36 AMG"
        },
        {
            "brand_id": "44",
            "id": "816",
            "name": "C43 AMG"
        },
        {
            "brand_id": "44",
            "id": "817",
            "name": "C55 AMG"
        },
        {
            "brand_id": "44",
            "id": "818",
            "name": "C63 AMG"
        },
        {
            "brand_id": "44",
            "id": "819",
            "name": "CL Class (6)"
        },
        {
            "brand_id": "44",
            "id": "820",
            "name": "CL500"
        },
        {
            "brand_id": "44",
            "id": "821",
            "name": "CL550"
        },
        {
            "brand_id": "44",
            "id": "822",
            "name": "CL55 AMG"
        },
        {
            "brand_id": "44",
            "id": "823",
            "name": "CL600"
        },
        {
            "brand_id": "44",
            "id": "824",
            "name": "CL63 AMG"
        },
        {
            "brand_id": "44",
            "id": "825",
            "name": "CL65 AMG"
        },
        {
            "brand_id": "44",
            "id": "826",
            "name": "CLK Class (7)"
        },
        {
            "brand_id": "44",
            "id": "827",
            "name": "CLK320"
        },
        {
            "brand_id": "44",
            "id": "828",
            "name": "CLK350"
        },
        {
            "brand_id": "44",
            "id": "829",
            "name": "CLK430"
        },
        {
            "brand_id": "44",
            "id": "830",
            "name": "CLK500"
        },
        {
            "brand_id": "44",
            "id": "831",
            "name": "CLK550"
        },
        {
            "brand_id": "44",
            "id": "832",
            "name": "CLK55 AMG"
        },
        {
            "brand_id": "44",
            "id": "833",
            "name": "CLK63 AMG"
        },
        {
            "brand_id": "44",
            "id": "834",
            "name": "CLS Class (4)"
        },
        {
            "brand_id": "44",
            "id": "835",
            "name": "CLS500"
        },
        {
            "brand_id": "44",
            "id": "836",
            "name": "CLS550"
        },
        {
            "brand_id": "44",
            "id": "837",
            "name": "CLS55 AMG"
        },
        {
            "brand_id": "44",
            "id": "838",
            "name": "CLS63 AMG"
        },
        {
            "brand_id": "44",
            "id": "839",
            "name": "E Class (18)"
        },
        {
            "brand_id": "44",
            "id": "840",
            "name": "260E"
        },
        {
            "brand_id": "44",
            "id": "841",
            "name": "280CE"
        },
        {
            "brand_id": "44",
            "id": "842",
            "name": "280E"
        },
        {
            "brand_id": "44",
            "id": "843",
            "name": "400E"
        },
        {
            "brand_id": "44",
            "id": "844",
            "name": "500E"
        },
        {
            "brand_id": "44",
            "id": "845",
            "name": "E300"
        },
        {
            "brand_id": "44",
            "id": "846",
            "name": "E320"
        },
        {
            "brand_id": "44",
            "id": "847",
            "name": "E320 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "848",
            "name": "E320 CDI"
        },
        {
            "brand_id": "44",
            "id": "849",
            "name": "E350"
        },
        {
            "brand_id": "44",
            "id": "850",
            "name": "E350 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "851",
            "name": "E400 Hybrid"
        },
        {
            "brand_id": "44",
            "id": "852",
            "name": "E420"
        },
        {
            "brand_id": "44",
            "id": "853",
            "name": "E430"
        },
        {
            "brand_id": "44",
            "id": "854",
            "name": "E500"
        },
        {
            "brand_id": "44",
            "id": "855",
            "name": "E550"
        },
        {
            "brand_id": "44",
            "id": "856",
            "name": "E55 AMG"
        },
        {
            "brand_id": "44",
            "id": "857",
            "name": "E63 AMG"
        },
        {
            "brand_id": "44",
            "id": "858",
            "name": "G Class (4)"
        },
        {
            "brand_id": "44",
            "id": "859",
            "name": "G500"
        },
        {
            "brand_id": "44",
            "id": "860",
            "name": "G550"
        },
        {
            "brand_id": "44",
            "id": "861",
            "name": "G55 AMG"
        },
        {
            "brand_id": "44",
            "id": "862",
            "name": "G63 AMG"
        },
        {
            "brand_id": "44",
            "id": "863",
            "name": "GL Class (5)"
        },
        {
            "brand_id": "44",
            "id": "864",
            "name": "GL320 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "865",
            "name": "GL320 CDI"
        },
        {
            "brand_id": "44",
            "id": "866",
            "name": "GL350 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "867",
            "name": "GL450"
        },
        {
            "brand_id": "44",
            "id": "868",
            "name": "GL550"
        },
        {
            "brand_id": "44",
            "id": "869",
            "name": "GLK Class (1)"
        },
        {
            "brand_id": "44",
            "id": "870",
            "name": "GLK350"
        },
        {
            "brand_id": "44",
            "id": "871",
            "name": "M Class (11)"
        },
        {
            "brand_id": "44",
            "id": "872",
            "name": "ML320"
        },
        {
            "brand_id": "44",
            "id": "873",
            "name": "ML320 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "874",
            "name": "ML320 CDI"
        },
        {
            "brand_id": "44",
            "id": "875",
            "name": "ML350"
        },
        {
            "brand_id": "44",
            "id": "876",
            "name": "ML350 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "877",
            "name": "ML430"
        },
        {
            "brand_id": "44",
            "id": "878",
            "name": "ML450 Hybrid"
        },
        {
            "brand_id": "44",
            "id": "879",
            "name": "ML500"
        },
        {
            "brand_id": "44",
            "id": "880",
            "name": "ML550"
        },
        {
            "brand_id": "44",
            "id": "881",
            "name": "ML55 AMG"
        },
        {
            "brand_id": "44",
            "id": "882",
            "name": "ML63 AMG"
        },
        {
            "brand_id": "44",
            "id": "883",
            "name": "R Class (6)"
        },
        {
            "brand_id": "44",
            "id": "884",
            "name": "R320 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "885",
            "name": "R320 CDI"
        },
        {
            "brand_id": "44",
            "id": "886",
            "name": "R350"
        },
        {
            "brand_id": "44",
            "id": "887",
            "name": "R350 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "888",
            "name": "R500"
        },
        {
            "brand_id": "44",
            "id": "889",
            "name": "R63 AMG"
        },
        {
            "brand_id": "44",
            "id": "890",
            "name": "S Class (30)"
        },
        {
            "brand_id": "44",
            "id": "891",
            "name": "300SD"
        },
        {
            "brand_id": "44",
            "id": "892",
            "name": "300SDL"
        },
        {
            "brand_id": "44",
            "id": "893",
            "name": "300SE"
        },
        {
            "brand_id": "44",
            "id": "894",
            "name": "300SEL"
        },
        {
            "brand_id": "44",
            "id": "895",
            "name": "350SD"
        },
        {
            "brand_id": "44",
            "id": "896",
            "name": "350SDL"
        },
        {
            "brand_id": "44",
            "id": "897",
            "name": "380SE"
        },
        {
            "brand_id": "44",
            "id": "898",
            "name": "380SEC"
        },
        {
            "brand_id": "44",
            "id": "899",
            "name": "380SEL"
        },
        {
            "brand_id": "44",
            "id": "900",
            "name": "400SE"
        },
        {
            "brand_id": "44",
            "id": "901",
            "name": "400SEL"
        },
        {
            "brand_id": "44",
            "id": "902",
            "name": "420SEL"
        },
        {
            "brand_id": "44",
            "id": "903",
            "name": "500SEC"
        },
        {
            "brand_id": "44",
            "id": "904",
            "name": "500SEL"
        },
        {
            "brand_id": "44",
            "id": "905",
            "name": "560SEC"
        },
        {
            "brand_id": "44",
            "id": "906",
            "name": "560SEL"
        },
        {
            "brand_id": "44",
            "id": "907",
            "name": "600SEC"
        },
        {
            "brand_id": "44",
            "id": "908",
            "name": "600SEL"
        },
        {
            "brand_id": "44",
            "id": "909",
            "name": "S320"
        },
        {
            "brand_id": "44",
            "id": "910",
            "name": "S350"
        },
        {
            "brand_id": "44",
            "id": "911",
            "name": "S350 Bluetec"
        },
        {
            "brand_id": "44",
            "id": "912",
            "name": "S400 Hybrid"
        },
        {
            "brand_id": "44",
            "id": "913",
            "name": "S420"
        },
        {
            "brand_id": "44",
            "id": "914",
            "name": "S430"
        },
        {
            "brand_id": "44",
            "id": "915",
            "name": "S500"
        },
        {
            "brand_id": "44",
            "id": "916",
            "name": "S550"
        },
        {
            "brand_id": "44",
            "id": "917",
            "name": "S55 AMG"
        },
        {
            "brand_id": "44",
            "id": "918",
            "name": "S600"
        },
        {
            "brand_id": "44",
            "id": "919",
            "name": "S63 AMG"
        },
        {
            "brand_id": "44",
            "id": "920",
            "name": "S65 AMG"
        },
        {
            "brand_id": "44",
            "id": "921",
            "name": "SL Class (13)"
        },
        {
            "brand_id": "44",
            "id": "922",
            "name": "300SL"
        },
        {
            "brand_id": "44",
            "id": "923",
            "name": "380SL"
        },
        {
            "brand_id": "44",
            "id": "924",
            "name": "380SLC"
        },
        {
            "brand_id": "44",
            "id": "925",
            "name": "500SL"
        },
        {
            "brand_id": "44",
            "id": "926",
            "name": "560SL"
        },
        {
            "brand_id": "44",
            "id": "927",
            "name": "600SL"
        },
        {
            "brand_id": "44",
            "id": "928",
            "name": "SL320"
        },
        {
            "brand_id": "44",
            "id": "929",
            "name": "SL500"
        },
        {
            "brand_id": "44",
            "id": "930",
            "name": "SL550"
        },
        {
            "brand_id": "44",
            "id": "931",
            "name": "SL55 AMG"
        },
        {
            "brand_id": "44",
            "id": "932",
            "name": "SL600"
        },
        {
            "brand_id": "44",
            "id": "933",
            "name": "SL63 AMG"
        },
        {
            "brand_id": "44",
            "id": "934",
            "name": "SL65 AMG"
        },
        {
            "brand_id": "44",
            "id": "935",
            "name": "SLK Class (8)"
        },
        {
            "brand_id": "44",
            "id": "936",
            "name": "SLK230"
        },
        {
            "brand_id": "44",
            "id": "937",
            "name": "SLK250"
        },
        {
            "brand_id": "44",
            "id": "938",
            "name": "SLK280"
        },
        {
            "brand_id": "44",
            "id": "939",
            "name": "SLK300"
        },
        {
            "brand_id": "44",
            "id": "940",
            "name": "SLK320"
        },
        {
            "brand_id": "44",
            "id": "941",
            "name": "SLK32 AMG"
        },
        {
            "brand_id": "44",
            "id": "942",
            "name": "SLK350"
        },
        {
            "brand_id": "44",
            "id": "943",
            "name": "SLK55 AMG"
        },
        {
            "brand_id": "44",
            "id": "944",
            "name": "SLR Class (1)"
        },
        {
            "brand_id": "44",
            "id": "945",
            "name": "SLR"
        },
        {
            "brand_id": "44",
            "id": "946",
            "name": "SLS Class (1)"
        },
        {
            "brand_id": "44",
            "id": "947",
            "name": "SLS AMG"
        },
        {
            "brand_id": "44",
            "id": "948",
            "name": "Sprinter Class (1)"
        },
        {
            "brand_id": "44",
            "id": "949",
            "name": "Sprinter"
        },
        {
            "brand_id": "44",
            "id": "950",
            "name": "Other Mercedes-Benz Models"
        },
        {
            "brand_id": "45",
            "id": "951",
            "name": "Capri"
        },
        {
            "brand_id": "45",
            "id": "952",
            "name": "Cougar"
        },
        {
            "brand_id": "45",
            "id": "953",
            "name": "Grand Marquis"
        },
        {
            "brand_id": "45",
            "id": "954",
            "name": "Lynx"
        },
        {
            "brand_id": "45",
            "id": "955",
            "name": "Marauder"
        },
        {
            "brand_id": "45",
            "id": "956",
            "name": "Mariner"
        },
        {
            "brand_id": "45",
            "id": "957",
            "name": "Marquis"
        },
        {
            "brand_id": "45",
            "id": "958",
            "name": "Milan"
        },
        {
            "brand_id": "45",
            "id": "959",
            "name": "Montego"
        },
        {
            "brand_id": "45",
            "id": "960",
            "name": "Monterey"
        },
        {
            "brand_id": "45",
            "id": "961",
            "name": "Mountaineer"
        },
        {
            "brand_id": "45",
            "id": "962",
            "name": "Mystique"
        },
        {
            "brand_id": "45",
            "id": "963",
            "name": "Sable"
        },
        {
            "brand_id": "45",
            "id": "964",
            "name": "Topaz"
        },
        {
            "brand_id": "45",
            "id": "965",
            "name": "Tracer"
        },
        {
            "brand_id": "45",
            "id": "966",
            "name": "Villager"
        },
        {
            "brand_id": "45",
            "id": "967",
            "name": "Zephyr"
        },
        {
            "brand_id": "45",
            "id": "968",
            "name": "Other Mercury Models"
        },
        {
            "brand_id": "46",
            "id": "969",
            "name": "Scorpio"
        },
        {
            "brand_id": "46",
            "id": "970",
            "name": "XR4Ti"
        },
        {
            "brand_id": "46",
            "id": "971",
            "name": "Other Merkur Models"
        },
        {
            "brand_id": "47",
            "id": "972",
            "name": "Cooper Clubman Models (2)"
        },
        {
            "brand_id": "47",
            "id": "973",
            "name": "Cooper Clubman"
        },
        {
            "brand_id": "47",
            "id": "974",
            "name": "Cooper S Clubman"
        },
        {
            "brand_id": "47",
            "id": "975",
            "name": "Cooper Countryman Models (2)"
        },
        {
            "brand_id": "47",
            "id": "976",
            "name": "Cooper Countryman"
        },
        {
            "brand_id": "47",
            "id": "977",
            "name": "Cooper S Countryman"
        },
        {
            "brand_id": "47",
            "id": "978",
            "name": "Cooper Coupe Models (2)"
        },
        {
            "brand_id": "47",
            "id": "979",
            "name": "Cooper Coupe"
        },
        {
            "brand_id": "47",
            "id": "980",
            "name": "Cooper S Coupe"
        },
        {
            "brand_id": "47",
            "id": "981",
            "name": "Cooper Models (2)"
        },
        {
            "brand_id": "47",
            "id": "982",
            "name": "Cooper"
        },
        {
            "brand_id": "47",
            "id": "983",
            "name": "Cooper S"
        },
        {
            "brand_id": "47",
            "id": "984",
            "name": "Cooper Roadster Models (2)"
        },
        {
            "brand_id": "47",
            "id": "985",
            "name": "Cooper Roadster"
        },
        {
            "brand_id": "47",
            "id": "986",
            "name": "Cooper S Roadster"
        },
        {
            "brand_id": "48",
            "id": "987",
            "name": "3000GT"
        },
        {
            "brand_id": "48",
            "id": "988",
            "name": "Cordia"
        },
        {
            "brand_id": "48",
            "id": "989",
            "name": "Diamante"
        },
        {
            "brand_id": "48",
            "id": "990",
            "name": "Eclipse"
        },
        {
            "brand_id": "48",
            "id": "991",
            "name": "Endeavor"
        },
        {
            "brand_id": "48",
            "id": "992",
            "name": "Expo"
        },
        {
            "brand_id": "48",
            "id": "993",
            "name": "Galant"
        },
        {
            "brand_id": "48",
            "id": "994",
            "name": "i"
        },
        {
            "brand_id": "48",
            "id": "995",
            "name": "Lancer"
        },
        {
            "brand_id": "48",
            "id": "996",
            "name": "Lancer Evolution"
        },
        {
            "brand_id": "48",
            "id": "997",
            "name": "Mighty Max"
        },
        {
            "brand_id": "48",
            "id": "998",
            "name": "Mirage"
        },
        {
            "brand_id": "48",
            "id": "999",
            "name": "Montero"
        },
        {
            "brand_id": "48",
            "id": "1000",
            "name": "Montero Sport"
        },
        {
            "brand_id": "48",
            "id": "1001",
            "name": "Outlander"
        },
        {
            "brand_id": "48",
            "id": "1002",
            "name": "Outlander Sport"
        },
        {
            "brand_id": "48",
            "id": "1003",
            "name": "Precis"
        },
        {
            "brand_id": "48",
            "id": "1004",
            "name": "Raider"
        },
        {
            "brand_id": "48",
            "id": "1005",
            "name": "Sigma"
        },
        {
            "brand_id": "48",
            "id": "1006",
            "name": "Starion"
        },
        {
            "brand_id": "48",
            "id": "1007",
            "name": "Tredia"
        },
        {
            "brand_id": "48",
            "id": "1008",
            "name": "Van"
        },
        {
            "brand_id": "48",
            "id": "1009",
            "name": "Other Mitsubishi Models"
        },
        {
            "brand_id": "49",
            "id": "1010",
            "name": "200SX"
        },
        {
            "brand_id": "49",
            "id": "1011",
            "name": "240SX"
        },
        {
            "brand_id": "49",
            "id": "1012",
            "name": "300ZX"
        },
        {
            "brand_id": "49",
            "id": "1013",
            "name": "350Z"
        },
        {
            "brand_id": "49",
            "id": "1014",
            "name": "370Z"
        },
        {
            "brand_id": "49",
            "id": "1015",
            "name": "Altima"
        },
        {
            "brand_id": "49",
            "id": "1016",
            "name": "Armada"
        },
        {
            "brand_id": "49",
            "id": "1017",
            "name": "Axxess"
        },
        {
            "brand_id": "49",
            "id": "1018",
            "name": "Cube"
        },
        {
            "brand_id": "49",
            "id": "1019",
            "name": "Frontier"
        },
        {
            "brand_id": "49",
            "id": "1020",
            "name": "GT-R"
        },
        {
            "brand_id": "49",
            "id": "1021",
            "name": "Juke"
        },
        {
            "brand_id": "49",
            "id": "1022",
            "name": "Leaf"
        },
        {
            "brand_id": "49",
            "id": "1023",
            "name": "Maxima"
        },
        {
            "brand_id": "49",
            "id": "1024",
            "name": "Murano"
        },
        {
            "brand_id": "49",
            "id": "1025",
            "name": "Murano CrossCabriolet"
        },
        {
            "brand_id": "49",
            "id": "1026",
            "name": "NV"
        },
        {
            "brand_id": "49",
            "id": "1027",
            "name": "NX"
        },
        {
            "brand_id": "49",
            "id": "1028",
            "name": "Pathfinder"
        },
        {
            "brand_id": "49",
            "id": "1029",
            "name": "Pickup"
        },
        {
            "brand_id": "49",
            "id": "1030",
            "name": "Pulsar"
        },
        {
            "brand_id": "49",
            "id": "1031",
            "name": "Quest"
        },
        {
            "brand_id": "49",
            "id": "1032",
            "name": "Rogue"
        },
        {
            "brand_id": "49",
            "id": "1033",
            "name": "Sentra"
        },
        {
            "brand_id": "49",
            "id": "1034",
            "name": "Stanza"
        },
        {
            "brand_id": "49",
            "id": "1035",
            "name": "Titan"
        },
        {
            "brand_id": "49",
            "id": "1036",
            "name": "Van"
        },
        {
            "brand_id": "49",
            "id": "1037",
            "name": "Versa"
        },
        {
            "brand_id": "49",
            "id": "1038",
            "name": "Xterra"
        },
        {
            "brand_id": "49",
            "id": "1039",
            "name": "Other Nissan Models"
        },
        {
            "brand_id": "50",
            "id": "1040",
            "name": "88"
        },
        {
            "brand_id": "50",
            "id": "1041",
            "name": "Achieva"
        },
        {
            "brand_id": "50",
            "id": "1042",
            "name": "Alero"
        },
        {
            "brand_id": "50",
            "id": "1043",
            "name": "Aurora"
        },
        {
            "brand_id": "50",
            "id": "1044",
            "name": "Bravada"
        },
        {
            "brand_id": "50",
            "id": "1045",
            "name": "Custom Cruiser"
        },
        {
            "brand_id": "50",
            "id": "1046",
            "name": "Cutlass"
        },
        {
            "brand_id": "50",
            "id": "1047",
            "name": "Cutlass Calais"
        },
        {
            "brand_id": "50",
            "id": "1048",
            "name": "Cutlass Ciera"
        },
        {
            "brand_id": "50",
            "id": "1049",
            "name": "Cutlass Supreme"
        },
        {
            "brand_id": "50",
            "id": "1050",
            "name": "Firenza"
        },
        {
            "brand_id": "50",
            "id": "1051",
            "name": "Intrigue"
        },
        {
            "brand_id": "50",
            "id": "1052",
            "name": "Ninety-Eight"
        },
        {
            "brand_id": "50",
            "id": "1053",
            "name": "Omega"
        },
        {
            "brand_id": "50",
            "id": "1054",
            "name": "Regency"
        },
        {
            "brand_id": "50",
            "id": "1055",
            "name": "Silhouette"
        },
        {
            "brand_id": "50",
            "id": "1056",
            "name": "Toronado"
        },
        {
            "brand_id": "50",
            "id": "1057",
            "name": "Other Oldsmobile Models"
        },
        {
            "brand_id": "51",
            "id": "1058",
            "name": "405"
        },
        {
            "brand_id": "51",
            "id": "1059",
            "name": "504"
        },
        {
            "brand_id": "51",
            "id": "1060",
            "name": "505"
        },
        {
            "brand_id": "51",
            "id": "1061",
            "name": "604"
        },
        {
            "brand_id": "51",
            "id": "1062",
            "name": "Other Peugeot Models"
        },
        {
            "brand_id": "52",
            "id": "1063",
            "name": "Acclaim"
        },
        {
            "brand_id": "52",
            "id": "1064",
            "name": "Arrow"
        },
        {
            "brand_id": "52",
            "id": "1065",
            "name": "Breeze"
        },
        {
            "brand_id": "52",
            "id": "1066",
            "name": "Caravelle"
        },
        {
            "brand_id": "52",
            "id": "1067",
            "name": "Champ"
        },
        {
            "brand_id": "52",
            "id": "1068",
            "name": "Colt"
        },
        {
            "brand_id": "52",
            "id": "1069",
            "name": "Conquest"
        },
        {
            "brand_id": "52",
            "id": "1070",
            "name": "Gran Fury"
        },
        {
            "brand_id": "52",
            "id": "1071",
            "name": "Grand Voyager"
        },
        {
            "brand_id": "52",
            "id": "1072",
            "name": "Horizon"
        },
        {
            "brand_id": "52",
            "id": "1073",
            "name": "Laser"
        },
        {
            "brand_id": "52",
            "id": "1074",
            "name": "Neon"
        },
        {
            "brand_id": "52",
            "id": "1075",
            "name": "Prowler"
        },
        {
            "brand_id": "52",
            "id": "1076",
            "name": "Reliant"
        },
        {
            "brand_id": "52",
            "id": "1077",
            "name": "Sapporo"
        },
        {
            "brand_id": "52",
            "id": "1078",
            "name": "Scamp"
        },
        {
            "brand_id": "52",
            "id": "1079",
            "name": "Sundance"
        },
        {
            "brand_id": "52",
            "id": "1080",
            "name": "Trailduster"
        },
        {
            "brand_id": "52",
            "id": "1081",
            "name": "Voyager"
        },
        {
            "brand_id": "52",
            "id": "1082",
            "name": "Other Plymouth Models"
        },
        {
            "brand_id": "53",
            "id": "1083",
            "name": "1000"
        },
        {
            "brand_id": "53",
            "id": "1084",
            "name": "6000"
        },
        {
            "brand_id": "53",
            "id": "1085",
            "name": "Aztek"
        },
        {
            "brand_id": "53",
            "id": "1086",
            "name": "Bonneville"
        },
        {
            "brand_id": "53",
            "id": "1087",
            "name": "Catalina"
        },
        {
            "brand_id": "53",
            "id": "1088",
            "name": "Fiero"
        },
        {
            "brand_id": "53",
            "id": "1089",
            "name": "Firebird"
        },
        {
            "brand_id": "53",
            "id": "1090",
            "name": "G3"
        },
        {
            "brand_id": "53",
            "id": "1091",
            "name": "G5"
        },
        {
            "brand_id": "53",
            "id": "1092",
            "name": "G6"
        },
        {
            "brand_id": "53",
            "id": "1093",
            "name": "G8"
        },
        {
            "brand_id": "53",
            "id": "1094",
            "name": "Grand Am"
        },
        {
            "brand_id": "53",
            "id": "1095",
            "name": "Grand Prix"
        },
        {
            "brand_id": "53",
            "id": "1096",
            "name": "GTO"
        },
        {
            "brand_id": "53",
            "id": "1097",
            "name": "J2000"
        },
        {
            "brand_id": "53",
            "id": "1098",
            "name": "Le Mans"
        },
        {
            "brand_id": "53",
            "id": "1099",
            "name": "Montana"
        },
        {
            "brand_id": "53",
            "id": "1100",
            "name": "Parisienne"
        },
        {
            "brand_id": "53",
            "id": "1101",
            "name": "Phoenix"
        },
        {
            "brand_id": "53",
            "id": "1102",
            "name": "Safari"
        },
        {
            "brand_id": "53",
            "id": "1103",
            "name": "Solstice"
        },
        {
            "brand_id": "53",
            "id": "1104",
            "name": "Sunbird"
        },
        {
            "brand_id": "53",
            "id": "1105",
            "name": "Sunfire"
        },
        {
            "brand_id": "53",
            "id": "1106",
            "name": "Torrent"
        },
        {
            "brand_id": "53",
            "id": "1107",
            "name": "Trans Sport"
        },
        {
            "brand_id": "53",
            "id": "1108",
            "name": "Vibe"
        },
        {
            "brand_id": "53",
            "id": "1109",
            "name": "Other Pontiac Models"
        },
        {
            "brand_id": "54",
            "id": "1110",
            "name": "911"
        },
        {
            "brand_id": "54",
            "id": "1111",
            "name": "924"
        },
        {
            "brand_id": "54",
            "id": "1112",
            "name": "928"
        },
        {
            "brand_id": "54",
            "id": "1113",
            "name": "944"
        },
        {
            "brand_id": "54",
            "id": "1114",
            "name": "968"
        },
        {
            "brand_id": "54",
            "id": "1115",
            "name": "Boxster"
        },
        {
            "brand_id": "54",
            "id": "1116",
            "name": "Carrera GT"
        },
        {
            "brand_id": "54",
            "id": "1117",
            "name": "Cayenne"
        },
        {
            "brand_id": "54",
            "id": "1118",
            "name": "Cayman"
        },
        {
            "brand_id": "54",
            "id": "1119",
            "name": "Panamera"
        },
        {
            "brand_id": "54",
            "id": "1120",
            "name": "Other Porsche Models"
        },
        {
            "brand_id": "55",
            "id": "1121",
            "name": "1500"
        },
        {
            "brand_id": "55",
            "id": "1122",
            "name": "2500"
        },
        {
            "brand_id": "55",
            "id": "1123",
            "name": "3500"
        },
        {
            "brand_id": "55",
            "id": "1124",
            "name": "4500"
        },
        {
            "brand_id": "56",
            "id": "1125",
            "name": "18i"
        },
        {
            "brand_id": "56",
            "id": "1126",
            "name": "Fuego"
        },
        {
            "brand_id": "56",
            "id": "1127",
            "name": "Le Car"
        },
        {
            "brand_id": "56",
            "id": "1128",
            "name": "R18"
        },
        {
            "brand_id": "56",
            "id": "1129",
            "name": "Sportwagon"
        },
        {
            "brand_id": "56",
            "id": "1130",
            "name": "Other Renault Models"
        },
        {
            "brand_id": "57",
            "id": "1131",
            "name": "Camargue"
        },
        {
            "brand_id": "57",
            "id": "1132",
            "name": "Corniche"
        },
        {
            "brand_id": "57",
            "id": "1133",
            "name": "Ghost"
        },
        {
            "brand_id": "57",
            "id": "1134",
            "name": "Park Ward"
        },
        {
            "brand_id": "57",
            "id": "1135",
            "name": "Phantom"
        },
        {
            "brand_id": "57",
            "id": "1136",
            "name": "Silver Dawn"
        },
        {
            "brand_id": "57",
            "id": "1137",
            "name": "Silver Seraph"
        },
        {
            "brand_id": "57",
            "id": "1138",
            "name": "Silver Spirit"
        },
        {
            "brand_id": "57",
            "id": "1139",
            "name": "Silver Spur"
        },
        {
            "brand_id": "57",
            "id": "1140",
            "name": "Other Rolls-Royce Models"
        },
        {
            "brand_id": "58",
            "id": "1141",
            "name": "9-2X"
        },
        {
            "brand_id": "58",
            "id": "1142",
            "name": "9-3"
        },
        {
            "brand_id": "58",
            "id": "1143",
            "name": "9-4X"
        },
        {
            "brand_id": "58",
            "id": "1144",
            "name": "9-5"
        },
        {
            "brand_id": "58",
            "id": "1145",
            "name": "9-7X"
        },
        {
            "brand_id": "58",
            "id": "1146",
            "name": "900"
        },
        {
            "brand_id": "58",
            "id": "1147",
            "name": "9000"
        },
        {
            "brand_id": "58",
            "id": "1148",
            "name": "Other Saab Models"
        },
        {
            "brand_id": "59",
            "id": "1149",
            "name": "Astra"
        },
        {
            "brand_id": "59",
            "id": "1150",
            "name": "Aura"
        },
        {
            "brand_id": "59",
            "id": "1151",
            "name": "ION"
        },
        {
            "brand_id": "59",
            "id": "1152",
            "name": "L Series (3)"
        },
        {
            "brand_id": "59",
            "id": "1153",
            "name": "L100"
        },
        {
            "brand_id": "59",
            "id": "1154",
            "name": "L200"
        },
        {
            "brand_id": "59",
            "id": "1155",
            "name": "L300"
        },
        {
            "brand_id": "59",
            "id": "1156",
            "name": "LS"
        },
        {
            "brand_id": "59",
            "id": "1157",
            "name": "LW Series (4)"
        },
        {
            "brand_id": "59",
            "id": "1158",
            "name": "LW1"
        },
        {
            "brand_id": "59",
            "id": "1159",
            "name": "LW2"
        },
        {
            "brand_id": "59",
            "id": "1160",
            "name": "LW200"
        },
        {
            "brand_id": "59",
            "id": "1161",
            "name": "LW300"
        },
        {
            "brand_id": "59",
            "id": "1162",
            "name": "Outlook"
        },
        {
            "brand_id": "59",
            "id": "1163",
            "name": "Relay"
        },
        {
            "brand_id": "59",
            "id": "1164",
            "name": "SC Series (2)"
        },
        {
            "brand_id": "59",
            "id": "1165",
            "name": "SC1"
        },
        {
            "brand_id": "59",
            "id": "1166",
            "name": "SC2"
        },
        {
            "brand_id": "59",
            "id": "1167",
            "name": "Sky"
        },
        {
            "brand_id": "59",
            "id": "1168",
            "name": "SL Series (3)"
        },
        {
            "brand_id": "59",
            "id": "1169",
            "name": "SL"
        },
        {
            "brand_id": "59",
            "id": "1170",
            "name": "SL1"
        },
        {
            "brand_id": "59",
            "id": "1171",
            "name": "SL2"
        },
        {
            "brand_id": "59",
            "id": "1172",
            "name": "SW Series (2)"
        },
        {
            "brand_id": "59",
            "id": "1173",
            "name": "SW1"
        },
        {
            "brand_id": "59",
            "id": "1174",
            "name": "SW2"
        },
        {
            "brand_id": "59",
            "id": "1175",
            "name": "Vue"
        },
        {
            "brand_id": "59",
            "id": "1176",
            "name": "Other Saturn Models"
        },
        {
            "brand_id": "60",
            "id": "1177",
            "name": "FR-S"
        },
        {
            "brand_id": "60",
            "id": "1178",
            "name": "iQ"
        },
        {
            "brand_id": "60",
            "id": "1179",
            "name": "tC"
        },
        {
            "brand_id": "60",
            "id": "1180",
            "name": "xA"
        },
        {
            "brand_id": "60",
            "id": "1181",
            "name": "xB"
        },
        {
            "brand_id": "60",
            "id": "1182",
            "name": "xD"
        },
        {
            "brand_id": "61",
            "id": "1183",
            "name": "fortwo"
        },
        {
            "brand_id": "61",
            "id": "1184",
            "name": "Other smart Models"
        },
        {
            "brand_id": "62",
            "id": "1185",
            "name": "Viper"
        },
        {
            "brand_id": "63",
            "id": "1186",
            "name": "825"
        },
        {
            "brand_id": "63",
            "id": "1187",
            "name": "827"
        },
        {
            "brand_id": "63",
            "id": "1188",
            "name": "Other Sterling Models"
        },
        {
            "brand_id": "64",
            "id": "1189",
            "name": "Baja"
        },
        {
            "brand_id": "64",
            "id": "1190",
            "name": "Brat"
        },
        {
            "brand_id": "64",
            "id": "1191",
            "name": "BRZ"
        },
        {
            "brand_id": "64",
            "id": "1192",
            "name": "Forester"
        },
        {
            "brand_id": "64",
            "id": "1193",
            "name": "Impreza"
        },
        {
            "brand_id": "64",
            "id": "1194",
            "name": "Impreza WRX"
        },
        {
            "brand_id": "64",
            "id": "1195",
            "name": "Justy"
        },
        {
            "brand_id": "64",
            "id": "1196",
            "name": "L Series"
        },
        {
            "brand_id": "64",
            "id": "1197",
            "name": "Legacy"
        },
        {
            "brand_id": "64",
            "id": "1198",
            "name": "Loyale"
        },
        {
            "brand_id": "64",
            "id": "1199",
            "name": "Outback"
        },
        {
            "brand_id": "64",
            "id": "1200",
            "name": "SVX"
        },
        {
            "brand_id": "64",
            "id": "1201",
            "name": "Tribeca"
        },
        {
            "brand_id": "64",
            "id": "1202",
            "name": "XT"
        },
        {
            "brand_id": "64",
            "id": "1203",
            "name": "XV Crosstrek"
        },
        {
            "brand_id": "64",
            "id": "1204",
            "name": "Other Subaru Models"
        },
        {
            "brand_id": "65",
            "id": "1205",
            "name": "Aerio"
        },
        {
            "brand_id": "65",
            "id": "1206",
            "name": "Equator"
        },
        {
            "brand_id": "65",
            "id": "1207",
            "name": "Esteem"
        },
        {
            "brand_id": "65",
            "id": "1208",
            "name": "Forenza"
        },
        {
            "brand_id": "65",
            "id": "1209",
            "name": "Grand Vitara"
        },
        {
            "brand_id": "65",
            "id": "1210",
            "name": "Kizashi"
        },
        {
            "brand_id": "65",
            "id": "1211",
            "name": "Reno"
        },
        {
            "brand_id": "65",
            "id": "1212",
            "name": "Samurai"
        },
        {
            "brand_id": "65",
            "id": "1213",
            "name": "Sidekick"
        },
        {
            "brand_id": "65",
            "id": "1214",
            "name": "Swift"
        },
        {
            "brand_id": "65",
            "id": "1215",
            "name": "SX4"
        },
        {
            "brand_id": "65",
            "id": "1216",
            "name": "Verona"
        },
        {
            "brand_id": "65",
            "id": "1217",
            "name": "Vitara"
        },
        {
            "brand_id": "65",
            "id": "1218",
            "name": "X-90"
        },
        {
            "brand_id": "65",
            "id": "1219",
            "name": "XL7"
        },
        {
            "brand_id": "65",
            "id": "1220",
            "name": "Other Suzuki Models"
        },
        {
            "brand_id": "66",
            "id": "1221",
            "name": "Roadster"
        },
        {
            "brand_id": "67",
            "id": "1222",
            "name": "4Runner"
        },
        {
            "brand_id": "67",
            "id": "1223",
            "name": "Avalon"
        },
        {
            "brand_id": "67",
            "id": "1224",
            "name": "Camry"
        },
        {
            "brand_id": "67",
            "id": "1225",
            "name": "Celica"
        },
        {
            "brand_id": "67",
            "id": "1226",
            "name": "Corolla"
        },
        {
            "brand_id": "67",
            "id": "1227",
            "name": "Corona"
        },
        {
            "brand_id": "67",
            "id": "1228",
            "name": "Cressida"
        },
        {
            "brand_id": "67",
            "id": "1229",
            "name": "Echo"
        },
        {
            "brand_id": "67",
            "id": "1230",
            "name": "FJ Cruiser"
        },
        {
            "brand_id": "67",
            "id": "1231",
            "name": "Highlander"
        },
        {
            "brand_id": "67",
            "id": "1232",
            "name": "Land Cruiser"
        },
        {
            "brand_id": "67",
            "id": "1233",
            "name": "Matrix"
        },
        {
            "brand_id": "67",
            "id": "1234",
            "name": "MR2"
        },
        {
            "brand_id": "67",
            "id": "1235",
            "name": "MR2 Spyder"
        },
        {
            "brand_id": "67",
            "id": "1236",
            "name": "Paseo"
        },
        {
            "brand_id": "67",
            "id": "1237",
            "name": "Pickup"
        },
        {
            "brand_id": "67",
            "id": "1238",
            "name": "Previa"
        },
        {
            "brand_id": "67",
            "id": "1239",
            "name": "Prius"
        },
        {
            "brand_id": "67",
            "id": "1240",
            "name": "Prius C"
        },
        {
            "brand_id": "67",
            "id": "1241",
            "name": "Prius V"
        },
        {
            "brand_id": "67",
            "id": "1242",
            "name": "RAV4"
        },
        {
            "brand_id": "67",
            "id": "1243",
            "name": "Sequoia"
        },
        {
            "brand_id": "67",
            "id": "1244",
            "name": "Sienna"
        },
        {
            "brand_id": "67",
            "id": "1245",
            "name": "Solara"
        },
        {
            "brand_id": "67",
            "id": "1246",
            "name": "Starlet"
        },
        {
            "brand_id": "67",
            "id": "1247",
            "name": "Supra"
        },
        {
            "brand_id": "67",
            "id": "1248",
            "name": "T100"
        },
        {
            "brand_id": "67",
            "id": "1249",
            "name": "Tacoma"
        },
        {
            "brand_id": "67",
            "id": "1250",
            "name": "Tercel"
        },
        {
            "brand_id": "67",
            "id": "1251",
            "name": "Tundra"
        },
        {
            "brand_id": "67",
            "id": "1252",
            "name": "Van"
        },
        {
            "brand_id": "67",
            "id": "1253",
            "name": "Venza"
        },
        {
            "brand_id": "67",
            "id": "1254",
            "name": "Yaris"
        },
        {
            "brand_id": "67",
            "id": "1255",
            "name": "Other Toyota Models"
        },
        {
            "brand_id": "68",
            "id": "1256",
            "name": "TR7"
        },
        {
            "brand_id": "68",
            "id": "1257",
            "name": "TR8"
        },
        {
            "brand_id": "68",
            "id": "1258",
            "name": "Other Triumph Models"
        },
        {
            "brand_id": "69",
            "id": "1259",
            "name": "Beetle"
        },
        {
            "brand_id": "69",
            "id": "1260",
            "name": "Cabrio"
        },
        {
            "brand_id": "69",
            "id": "1261",
            "name": "Cabriolet"
        },
        {
            "brand_id": "69",
            "id": "1262",
            "name": "CC"
        },
        {
            "brand_id": "69",
            "id": "1263",
            "name": "Corrado"
        },
        {
            "brand_id": "69",
            "id": "1264",
            "name": "Dasher"
        },
        {
            "brand_id": "69",
            "id": "1265",
            "name": "Eos"
        },
        {
            "brand_id": "69",
            "id": "1266",
            "name": "Eurovan"
        },
        {
            "brand_id": "69",
            "id": "1267",
            "name": "Fox"
        },
        {
            "brand_id": "69",
            "id": "1268",
            "name": "GLI"
        },
        {
            "brand_id": "69",
            "id": "1269",
            "name": "Golf R"
        },
        {
            "brand_id": "69",
            "id": "1270",
            "name": "GTI"
        },
        {
            "brand_id": "69",
            "id": "1271",
            "name": "Golf and Rabbit Models (2)"
        },
        {
            "brand_id": "69",
            "id": "1272",
            "name": "Golf"
        },
        {
            "brand_id": "69",
            "id": "1273",
            "name": "Rabbit"
        },
        {
            "brand_id": "69",
            "id": "1274",
            "name": "Jetta"
        },
        {
            "brand_id": "69",
            "id": "1275",
            "name": "Passat"
        },
        {
            "brand_id": "69",
            "id": "1276",
            "name": "Phaeton"
        },
        {
            "brand_id": "69",
            "id": "1277",
            "name": "Pickup"
        },
        {
            "brand_id": "69",
            "id": "1278",
            "name": "Quantum"
        },
        {
            "brand_id": "69",
            "id": "1279",
            "name": "R32"
        },
        {
            "brand_id": "69",
            "id": "1280",
            "name": "Routan"
        },
        {
            "brand_id": "69",
            "id": "1281",
            "name": "Scirocco"
        },
        {
            "brand_id": "69",
            "id": "1282",
            "name": "Tiguan"
        },
        {
            "brand_id": "69",
            "id": "1283",
            "name": "Touareg"
        },
        {
            "brand_id": "69",
            "id": "1284",
            "name": "Vanagon"
        },
        {
            "brand_id": "69",
            "id": "1285",
            "name": "Other Volkswagen Models"
        },
        {
            "brand_id": "70",
            "id": "1286",
            "name": "240"
        },
        {
            "brand_id": "70",
            "id": "1287",
            "name": "260"
        },
        {
            "brand_id": "70",
            "id": "1288",
            "name": "740"
        },
        {
            "brand_id": "70",
            "id": "1289",
            "name": "760"
        },
        {
            "brand_id": "70",
            "id": "1290",
            "name": "780"
        },
        {
            "brand_id": "70",
            "id": "1291",
            "name": "850"
        },
        {
            "brand_id": "70",
            "id": "1292",
            "name": "940"
        },
        {
            "brand_id": "70",
            "id": "1293",
            "name": "960"
        },
        {
            "brand_id": "70",
            "id": "1294",
            "name": "C30"
        },
        {
            "brand_id": "70",
            "id": "1295",
            "name": "C70"
        },
        {
            "brand_id": "70",
            "id": "1296",
            "name": "S40"
        },
        {
            "brand_id": "70",
            "id": "1297",
            "name": "S60"
        },
        {
            "brand_id": "70",
            "id": "1298",
            "name": "S70"
        },
        {
            "brand_id": "70",
            "id": "1299",
            "name": "S80"
        },
        {
            "brand_id": "70",
            "id": "1300",
            "name": "S90"
        },
        {
            "brand_id": "70",
            "id": "1301",
            "name": "V40"
        },
        {
            "brand_id": "70",
            "id": "1302",
            "name": "V50"
        },
        {
            "brand_id": "70",
            "id": "1303",
            "name": "V70"
        },
        {
            "brand_id": "70",
            "id": "1304",
            "name": "V90"
        },
        {
            "brand_id": "70",
            "id": "1305",
            "name": "XC60"
        },
        {
            "brand_id": "70",
            "id": "1306",
            "name": "XC70"
        },
        {
            "brand_id": "70",
            "id": "1307",
            "name": "XC90"
        },
        {
            "brand_id": "70",
            "id": "1308",
            "name": "Other Volvo Models"
        },
        {
            "brand_id": "71",
            "id": "1309",
            "name": "GV"
        },
        {
            "brand_id": "71",
            "id": "1310",
            "name": "GVC"
        },
        {
            "brand_id": "71",
            "id": "1311",
            "name": "GVL"
        },
        {
            "brand_id": "71",
            "id": "1312",
            "name": "GVS"
        },
        {
            "brand_id": "71",
            "id": "1313",
            "name": "GVX"
        },
        {
            "brand_id": "71",
            "id": "1314",
            "name": "Other Yugo Models"
        }
    ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
