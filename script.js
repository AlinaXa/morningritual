"use strict";

const PRODUCTS = [
  {id:'guji',name:'Ethiopia Guji — Washed',price:15,image:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'washed',methods:['filter','immersion'],badge:'Washed',meta:'Floral · Citrus · Tea-like',details:'Washed · Arabica Heirloom',stock:18},
  {id:'huila',name:'Colombia Huila — Honey',price:14,image:'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'honey',methods:['filter','espresso'],badge:'Honey',meta:'Caramel · Red fruit · Cocoa',details:'Honey · Caturra',stock:14},
  {id:'cerrado',name:'Brazil Cerrado — Natural',price:12,image:'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'natural',methods:['espresso','immersion'],badge:'Natural',meta:'Nutty · Chocolate · Smooth',details:'Natural · Bourbon',stock:22},
  {id:'sumatra',name:'Sumatra Gayo — Wet-hulled',price:16,image:'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'wet-hulled',methods:['espresso','immersion'],badge:'Wet-hulled',meta:'Herbal · Cocoa · Full body',details:'Wet-hulled · Catimor',stock:9},
  {id:'house',name:'Morning House Blend',price:13,image:'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'washed',methods:['espresso'],badge:'House favourite',meta:'Chocolate · Caramel · Balanced',details:'Brazil & Colombia blend',stock:26},
  {id:'coldbrew',name:'Cold Brew Blend',price:13.5,image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=84',category:'coffee',process:'natural',methods:['cold'],badge:'Cold brew',meta:'Berries · Cocoa · Sweet finish',details:'Natural blend',stock:17},
  {id:'sencha',name:'Japanese Sencha',price:12,image:'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=84',category:'tea',process:'tea',methods:['tea'],badge:'Green tea',meta:'Fresh · Vegetal · Umami',details:'Loose leaf · Shizuoka',stock:19},
  {id:'earlgrey',name:'Earl Grey Supreme',price:11,image:'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=84',category:'tea',process:'tea',methods:['tea'],badge:'Black tea',meta:'Bergamot · Malt · Citrus',details:'Loose leaf · Bergamot',stock:20},
  {id:'matcha',name:'Ceremonial Matcha',price:24,image:'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=900&q=84',category:'tea',process:'tea',methods:['tea'],badge:'Matcha',meta:'Creamy · Sweet · Umami',details:'Stone-ground · Uji',stock:8},
  {id:'v60',name:'V60 Ceramic Dripper',price:28,image:'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=900&q=84',category:'gear',process:'all',methods:['filter'],badge:'Brewing gear',meta:'Ceramic · Size 02',details:'Clear, aromatic cups',stock:12},
  {id:'chemex',name:'Chemex 6-Cup Brewer',price:46,image:'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=84',category:'gear',process:'all',methods:['filter'],badge:'Brewing gear',meta:'Glass · Wood collar',details:'Clean, refined filter coffee',stock:7},
  {id:'aeropress',name:'AeroPress Original',price:39,image:'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=84',category:'gear',process:'all',methods:['filter','immersion'],badge:'Brewing gear',meta:'Portable · Fast · Versatile',details:'Paper or metal filter',stock:10},
  {id:'frenchpress',name:'French Press',price:32,image:'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?auto=format&fit=crop&w=900&q=84',category:'gear',process:'all',methods:['immersion'],badge:'Brewing gear',meta:'Glass · Steel · Full body',details:'Immersion brewer',stock:11},
  {id:'shirt',name:'Morning Ritual T-shirt',price:25,sizes:['XS','S','M','L','XL','XXL'],image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=84',category:'merch',process:'all',methods:['all'],badge:'Organic cotton',meta:'Unisex · Embroidered',details:'XS–XXL',stock:28},
  {id:'knittote',name:'Hand-knitted Ritual Tote',price:32,image:'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=84',category:'merch',process:'all',methods:['all'],badge:'Handmade',meta:'Recycled cotton · Bucharest',details:'Small-batch handmade',stock:6},
  {id:'skateboard',name:'Morning Ritual Skateboard Deck',price:69,image:'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=84',category:'merch',process:'all',methods:['all'],badge:'Limited edition',meta:'7-ply maple · 8.25 inch',details:'Morning Ritual artwork',stock:5},
  {id:'communitycup',name:'Community Cup Donation',price:5,image:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=84',category:'charity',process:'all',methods:['all'],badge:'100% donated',meta:'Fund a hot drink locally',details:'Community support',stock:999},
  {id:'artisttote',name:'Charity Artist Tote',price:22,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=84',category:'charity',process:'all',methods:['all'],badge:'30% donated',meta:'Local artist · Cotton canvas',details:'Limited charity collection',stock:10}
];

const GUIDES = {
coffee:[
{id:'espresso',name:'Espresso',img:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1000&q=84',ratio:'1:2',dose:'18 g',water:'36 g yield',temp:'92–94°C',grind:'Fine',time:'25–32 sec',bloom:'No separate bloom. Use 5–8 seconds of pre-infusion if the machine supports it.',tools:['Espresso machine','Portafilter','Burr grinder','Scale','Tamper','Timer'],steps:['Warm the machine, portafilter and cup.','Grind 18 g fine and distribute evenly.','Tamp level and firmly.','Flush the group and start extraction.','Stop near 36 g in 25–32 seconds.','Taste and adjust one variable at a time.'],tips:['Fast and sour: grind finer.','Slow and dry: grind coarser.','Uneven flow: improve distribution.','For milk drinks, choose a chocolate-forward coffee.']},
{id:'aeropress',name:'AeroPress',img:'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1000&q=84',ratio:'1:15',dose:'16 g',water:'240 g',temp:'85–92°C',grind:'Medium-fine',time:'2:00–2:30',bloom:'Optional: add 40 g water, stir gently and wait 20–30 seconds.',tools:['AeroPress','Paper or metal filter','Kettle','Scale','Timer','Grinder','Sturdy mug'],steps:['Rinse the paper filter.','Add 16 g medium-fine coffee.','Bloom with 40 g water.','Pour to 240 g and insert the plunger.','At 1:45, press slowly.','Taste and adjust temperature or grind.'],tips:['Weak: grind finer or steep longer.','Bitter: use cooler water.','Paper gives clarity; metal gives body.','Press over a sturdy cup.']},
{id:'v60',name:'V60',img:'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=1000&q=84',ratio:'1:16.7',dose:'15 g',water:'250 g',temp:'92–96°C',grind:'Medium-fine',time:'2:40–3:20',bloom:'Pour 45 g, wet every ground and wait 35–45 seconds.',tools:['V60 dripper','Paper filter','Gooseneck kettle','Scale','Timer','Grinder','Server'],steps:['Rinse the filter and preheat the brewer.','Add 15 g coffee and level the bed.','Bloom with 45 g for 40 seconds.','Pour gently to 150 g.','Continue to 250 g in pulses.','Swirl gently and allow a flat drawdown.'],tips:['Fast and sour: grind finer.','Slow and dry: grind coarser.','Keep the stream controlled.','Light washed coffee often likes hotter water.']},
{id:'chemex',name:'Chemex',img:'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=84',ratio:'1:16',dose:'30 g',water:'480 g',temp:'93–96°C',grind:'Medium-coarse',time:'4:00–5:00',bloom:'Pour 90 g and wait 45 seconds.',tools:['Chemex','Bonded filters','Gooseneck kettle','Scale','Timer','Grinder'],steps:['Place and rinse the filter.','Add 30 g coffee.','Bloom with 90 g for 45 seconds.','Pour slowly to 300 g.','Continue to 480 g.','Remove the filter and swirl.'],tips:['Stalled brew: grind coarser.','Rinse the filter well.','Best for clean aromatic coffee.','Keep the spout unblocked.']},
{id:'kalita',name:'Kalita Wave',img:'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1000&q=84',ratio:'1:16',dose:'20 g',water:'320 g',temp:'92–95°C',grind:'Medium',time:'3:00–3:40',bloom:'Pour 60 g and wait 35–45 seconds.',tools:['Kalita Wave','Wave filter','Gooseneck kettle','Scale','Timer','Grinder'],steps:['Rinse without collapsing the filter waves.','Add 20 g coffee.','Bloom with 60 g.','Pour in small controlled pulses.','Finish at 320 g.','Swirl the server before serving.'],tips:['Keep pours centred.','Protect the filter waves.','Medium grind is a safe start.','Flat-bottom brewers are forgiving.']},
{id:'french',name:'French Press',img:'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?auto=format&fit=crop&w=1000&q=84',ratio:'1:15',dose:'30 g',water:'450 g',temp:'93–96°C',grind:'Medium-coarse',time:'4 min + rest',bloom:'No separate bloom. Pour all water evenly and stir once.',tools:['French press','Kettle','Scale','Timer','Grinder','Spoon'],steps:['Preheat the press.','Add 30 g coffee.','Pour 450 g water.','Stir gently and place the lid.','Break the crust at 4 minutes.','Wait, press lightly and decant.'],tips:['Do not grind extremely coarse.','Decant immediately.','Do not force the plunger.','Natural coffee gives rich body.']},
{id:'moka',name:'Moka Pot',img:'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1000&q=84',ratio:'Full basket',dose:'15–22 g',water:'Below valve',temp:'Hot water',grind:'Medium-fine',time:'4–6 min',bloom:'No bloom. Start with hot water to reduce stove time.',tools:['Moka pot','Kettle','Grinder','Scale','Low heat','Towel'],steps:['Fill the base below the valve.','Fill the basket level; do not tamp.','Assemble carefully.','Heat on medium-low.','Remove when flow becomes pale.','Cool the base and stir.'],tips:['High heat creates harsh flavours.','Never cover the safety valve.','Do not tamp.','Dilute for an Americano style.']},
{id:'coldbrew',name:'Cold Brew',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=84',ratio:'1:8 concentrate',dose:'100 g',water:'800 g',temp:'Cold',grind:'Coarse',time:'12–18 h',bloom:'No bloom. Stir once so every particle is wet.',tools:['Large jar','Scale','Grinder','Paper or cloth filter','Refrigerator'],steps:['Combine coffee and water.','Stir thoroughly and cover.','Steep refrigerated.','Filter slowly.','Dilute to taste.','Use within about one week.'],tips:['Cloudy: filter through paper.','Bitter: shorten the steep.','Too strong: dilute more.','Use chocolate or fruit-forward coffee.']},
{id:'turkish',name:'Turkish Coffee',img:'https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=1000&q=84',ratio:'1:10',dose:'7 g',water:'70 g',temp:'Slow heat',grind:'Powder-fine',time:'2–3 min',bloom:'No bloom. Mix before heating, then do not stir.',tools:['Cezve','Very fine grinder','Scale','Small cup','Low heat'],steps:['Add cool water and coffee.','Mix before heating.','Heat slowly without stirring.','Remove as foam rises.','Pour gently.','Wait for grounds to settle.'],tips:['Do not violently boil.','Use powder-fine coffee.','Cardamom is optional.','Serve with water.']}
],
tea:[
{id:'green',name:'Green Tea',img:'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1000&q=84',ratio:'3 g / 250 ml',dose:'3 g',water:'250 ml',temp:'70–80°C',grind:'Whole leaf',time:'1–2 min',bloom:'No bloom. Warm the teaware first.',tools:['Temperature kettle','Scale or teaspoon','Teapot or infuser','Timer','Cup'],steps:['Heat water to 70–80°C.','Warm the pot.','Add 3 g leaves.','Steep 60–120 seconds.','Remove leaves completely.','Re-steep hotter and longer.'],tips:['Bitter: cooler water or shorter time.','Weak: use more leaf.','Japanese greens prefer lower temperatures.','Do not leave leaves in finished tea.']},
{id:'black',name:'Black Tea',img:'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1000&q=84',ratio:'3 g / 250 ml',dose:'3 g',water:'250 ml',temp:'92–98°C',grind:'Whole leaf',time:'3–5 min',bloom:'No bloom.',tools:['Kettle','Teapot or infuser','Scale','Timer','Cup'],steps:['Heat fresh water.','Warm the teapot.','Add 3 g tea.','Steep 3–5 minutes.','Strain completely.','Taste before adding milk.'],tips:['Broken leaves infuse faster.','Astringent: shorten time.','For milk use more leaf.','Preheat the cup.']},
{id:'white',name:'White Tea',img:'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=84',ratio:'4 g / 250 ml',dose:'4 g',water:'250 ml',temp:'80–90°C',grind:'Whole leaf',time:'3–5 min',bloom:'No bloom.',tools:['Kettle','Wide infuser','Scale','Timer','Cup'],steps:['Heat water to 80–90°C.','Use a roomy vessel.','Add 4 g leaves.','Steep 3–5 minutes.','Strain and taste.','Re-steep several times.'],tips:['Boiling water can flatten delicate tea.','Use more leaf before more time.','Store away from humidity.','Expect floral, hay or fruit notes.']},
{id:'oolong',name:'Oolong',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=84',ratio:'5 g / 150 ml',dose:'5 g',water:'150 ml',temp:'85–95°C',grind:'Rolled leaf',time:'30–90 sec',bloom:'Optional five-second rinse for tightly rolled leaves.',tools:['Gaiwan or teapot','Kettle','Scale','Timer','Small cups'],steps:['Warm all teaware.','Add 5 g leaves.','Optionally rinse.','Infuse 30–60 seconds.','Decant completely.','Repeat with longer times.'],tips:['Green oolong uses cooler water.','Never leave water on leaves.','Smell the warm leaves.','Use several short infusions.']},
{id:'matcha',name:'Matcha',img:'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=1000&q=84',ratio:'2 g / 70 ml',dose:'2 g',water:'70 ml',temp:'75–80°C',grind:'Powder',time:'15–20 sec',bloom:'No bloom. Sift the powder first.',tools:['Matcha bowl','Bamboo whisk','Fine sieve','Scoop or scale','Kettle'],steps:['Warm the bowl and whisk.','Sift 2 g matcha.','Add 70 ml water.','Whisk in a W motion.','Stop when fine foam appears.','Drink immediately.'],tips:['Large bubbles: lighter wrist.','Bitter: cooler water.','Clumps: sift first.','Keep matcha airtight and cold.']},
{id:'herbal',name:'Herbal Infusion',img:'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=84',ratio:'5 g / 250 ml',dose:'5 g',water:'250 ml',temp:'95–100°C',grind:'Dried herbs',time:'5–10 min',bloom:'No bloom.',tools:['Kettle','Covered mug','Infuser','Scale','Timer'],steps:['Use freshly boiled water.','Add herbs.','Pour and cover.','Steep 5–10 minutes.','Strain completely.','Sweeten after tasting.'],tips:['Cover to retain oils.','Roots need longer time.','Check ingredient safety.','Herbal infusions contain no tea leaf unless blended.']},
{id:'chai',name:'Masala Chai',img:'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=1000&q=84',ratio:'1:1 water + milk',dose:'4 g tea',water:'150 ml + 150 ml milk',temp:'Simmer',grind:'Tea + spices',time:'6–10 min',bloom:'No bloom.',tools:['Saucepan','Fine strainer','Scale','Spoon','Cup'],steps:['Simmer crushed spices.','Add black tea.','Add milk and sugar.','Bring close to a boil.','Lower heat and simmer.','Strain and serve.'],tips:['Add tea after hard spices.','Adjust ginger and cardamom.','Plant milk needs gentle heat.','Increase spices before tea.']},
{id:'coldtea',name:'Cold Brew Tea',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=84',ratio:'10 g / litre',dose:'10 g',water:'1 litre',temp:'Cold',grind:'Whole leaf',time:'6–12 h',bloom:'No bloom.',tools:['Bottle or pitcher','Infuser','Scale','Refrigerator'],steps:['Add tea to cold water.','Cover and refrigerate.','Steep green tea 4–8 hours.','Steep black or herbal 8–12 hours.','Strain completely.','Use within 2–3 days.'],tips:['Cold extraction reduces bitterness.','Use more leaf for strength.','Add citrus after brewing.','Keep refrigerated.']}
]};

const qs=(s,scope=document)=>scope.querySelector(s), qsa=(s,scope=document)=>[...scope.querySelectorAll(s)];
const KEYS={cart:'mr-delicate-v6-cart',stock:'mr-delicate-v6-stock',orders:'mr-delicate-v6-orders',journal:'mr-delicate-v6-journal',language:'mr-delicate-v8-language'};

const TRANSLATIONS={"ro":{"FREE SHIPPING ON ORDERS OVER $40 · SAME-DAY DELIVERY IN BUCHAREST":"LIVRARE GRATUITĂ PESTE 40 € · LIVRARE ÎN ACEEAȘI ZI ÎN BUCUREȘTI","Home":"Acasă","Shop":"Magazin","Our Ritual":"Ritualul nostru","Account":"Cont","Contact":"Contact","All products":"Toate produsele","Coffee beans":"Cafea boabe","Brewing guides":"Ghiduri de preparare","Cart":"Coș","Who we are":"Cine suntem","Sourcing":"Aprovizionare","Processing":"Procesare","Loyalty":"Fidelizare","Help":"Ajutor","Contact us":"Contactează-ne","Shipping & delivery":"Livrare","Returns":"Retururi","FAQ":"Întrebări frecvente","Learn":"Învață","Species & varieties":"Specii și varietăți","Coffee & Tea Journal":"Jurnal de cafea și ceai","Terms · Privacy · Accessibility":"Termeni · Confidențialitate · Accesibilitate","Specialty coffee, ethically sourced and thoughtfully roasted for your everyday ritual.":"Cafea de specialitate, aprovizionată responsabil și prăjită atent pentru ritualul tău zilnic.","Specialty coffee, selected tea, brewing knowledge and carefully made objects for your everyday ritual.":"Cafea de specialitate, ceai selectat, cunoștințe de preparare și obiecte realizate atent pentru ritualul tău zilnic.","© 2026 Morning Ritual. Portfolio concept by Alina Bratu.":"© 2026 Morning Ritual. Concept de portofoliu realizat de Alina Bratu.","Add":"Adaugă","Add to cart":"Adaugă în coș","Choose size":"Alege mărimea","Open preparation guide":"Deschide ghidul de preparare","Category":"Categorie","Process":"Procesare","Best for":"Recomandat pentru","Stock":"Stoc","Collection":"Colecție","Profile":"Profil","Option":"Opțiune","Preferred preparation":"Preparare preferată","Size":"Mărime","Fit":"Croială","Width":"Lățime","Setup":"Configurație","Standard":"Standard","Unisex regular fit":"Croială unisex regular","Deck only":"Doar deck","Complete setup":"Setup complet","Whole bean":"Boabe","Loose leaf":"Frunze vrac","Tea bags":"Plicuri de ceai","Espresso machine":"Espressor","French press":"Presă franceză","Moka pot":"Moka","Cold brew":"Cold brew","Filter / Pour-over":"Filtru / Pour-over","Immersion":"Imersie","filter":"filtru","immersion":"imersie","espresso":"espresso","cold":"rece","coffee":"cafea","tea":"ceai","gear":"echipament","merch":"merchandise","charity":"caritate","washed":"washed","honey":"honey","natural":"natural","wet-hulled":"wet-hulled","Free":"Gratuit","Remove":"Elimină","Your cart is empty.":"Coșul este gol.","Your future coffee is currently living a quieter life.":"Viitoarea ta cafea duce momentan o viață mai liniștită.","Shop coffee":"Cumpără cafea","No more demo stock available.":"Nu mai există stoc demonstrativ disponibil.","A product no longer has enough demo stock.":"Un produs nu mai are suficient stoc demonstrativ.","Demo order placed. Local stock was updated.":"Comanda demonstrativă a fost plasată. Stocul local a fost actualizat.","Journal entry saved.":"Înregistrarea a fost salvată în jurnal.","product":"produs","products":"produse","Coffee preparation":"Prepararea cafelei","Tea preparation":"Prepararea ceaiului","A practical starting recipe. Adjust after tasting and save the result in your Coffee & Tea Journal.":"O rețetă practică de pornire. Ajustează după degustare și salvează rezultatul în Jurnalul de cafea și ceai.","Preparation overview":"Prezentarea preparării","Ratio":"Raport","Dose":"Dozaj","Water":"Apă","Temperature":"Temperatură","Grind":"Măcinare","Leaf":"Frunză","Total time":"Timp total","Blooming / pre-infusion":"Blooming / pre-infuzie","Tools for":"Instrumente pentru","method":"metodă","Adjust the result":"Ajustează rezultatul","Try this":"Încearcă asta","Specialty coffee · Bucharest":"Cafea de specialitate · București","Brew your moment.":"Prepară-ți momentul.","Live your ritual.":"Trăiește-ți ritualul.","Ethically sourced coffees, fresh seasonal lots and clear brewing guidance—made for people who care about taste without turning breakfast into laboratory theatre.":"Cafea aprovizionată responsabil, loturi sezoniere proaspete și ghidaj clar de preparare—pentru oameni cărora le pasă de gust fără să transforme micul dejun într-un laborator.","Our ritual":"Ritualul nostru","Freshly roasted":"Proaspăt prăjită","Traceable origins":"Origini trasabile","Guides for every method":"Ghiduri pentru fiecare metodă","Specialty coffee":"Cafea de specialitate","Sourced with care":"Aprovizionată cu grijă","Small batches":"Loturi mici","Ethical & traceable":"Responsabilă și trasabilă","Transparent origins":"Origini transparente","Loyalty rewards":"Recompense de fidelitate","Earn, enjoy, repeat":"Câștigă, savurează, repetă","Fresh arrivals":"Noutăți proaspete","Coffee worth slowing down for.":"Cafea pentru care merită să încetinești.","View all coffee →":"Vezi toată cafeaua →","More than a product":"Mai mult decât un produs","Know what you drink. Learn how to make it yours.":"Înțelege ce bei. Învață să o prepari în stilul tău.","Every coffee comes with its origin, species, variety, processing method, roast profile and practical preparation guides. Your account keeps the coffees you bought, your recipes and the rituals you want to repeat.":"Fiecare cafea vine cu origine, specie, varietate, metodă de procesare, profil de prăjire și ghiduri practice. Contul păstrează cafelele cumpărate, rețetele și ritualurile pe care vrei să le repeți.","Processing explained":"Procesare explicată","Washed, honey, natural and wet hulled.":"Washed, honey, natural și wet-hulled.","Method selector":"Selector de metodă","Espresso, AeroPress, V60, French press and more.":"Espresso, AeroPress, V60, presă franceză și altele.","Blooming guidance":"Ghid pentru blooming","Exact water, timing and purpose.":"Cantitate de apă, timp și scop explicate precis.","Personal journal":"Jurnal personal","Save ratios, temperature, grind and notes.":"Salvează raportul, temperatura, măcinarea și notițele.","Explore brewing guides":"Descoperă ghidurile de preparare","Choose your equipment":"Alege echipamentul","How do you brew?":"Cum prepari?","Scroll, select and open a step-by-step guide.":"Derulează, selectează și deschide ghidul pas cu pas.","Pressure, precision, balance.":"Presiune, precizie, echilibru.","Clean, flexible and forgiving.":"Curat, flexibil și tolerant.","Clarity and aromatic detail.":"Claritate și detaliu aromatic.","Texture and full body.":"Textură și corp plin.","Bold and comforting.":"Intens și reconfortant.","For offices & events":"Pentru birouri și evenimente","Bulk & same-day orders":"Comenzi mari și în aceeași zi","Flexible quantities, prepared carefully and confirmed before dispatch.":"Cantități flexibile, pregătite atent și confirmate înainte de expediere.","Request an order":"Solicită o comandă","Fast delivery":"Livrare rapidă","Order through Glovo":"Comandă prin Glovo","Get drinks and café favourites delivered in selected areas.":"Primește băuturile și produsele preferate ale cafenelei în zonele disponibile.","Order with Glovo":"Comandă cu Glovo","Coffee · tea · gear · objects":"Cafea · ceai · echipamente · obiecte","Shop the ritual.":"Cumpără ritualul.","Explore coffee, tea, brewing tools, handmade pieces, apparel, charity products and limited Morning Ritual objects.":"Descoperă cafea, ceai, instrumente de preparare, piese handmade, haine, produse caritabile și obiecte Morning Ritual în ediție limitată.","Filters":"Filtre","Type":"Tip","Coffee":"Cafea","Tea":"Ceai","Brewing gear":"Echipament de preparare","Objects & apparel":"Obiecte și haine","Charity":"Caritate","Washed":"Washed","Honey":"Honey","Natural / Dry":"Natural / Dry","Wet-hulled":"Wet-hulled","Method":"Metodă","Clear filters":"Resetează filtrele","Featured":"Recomandate","Price: low to high":"Preț: crescător","Price: high to low":"Preț: descrescător","Name":"Nume","No products match these filters.":"Niciun produs nu corespunde filtrelor.","Try clearing one or more selections.":"Încearcă să resetezi una sau mai multe selecții.","Search product, origin or flavour":"Caută produs, origine sau aromă","Who we are · what we do · how we work":"Cine suntem · ce facem · cum lucrăm","Our ritual.":"Ritualul nostru.","Morning Ritual connects specialty coffee, transparent sourcing, practical education and a customer experience that continues after the purchase.":"Morning Ritual conectează cafeaua de specialitate, aprovizionarea transparentă, educația practică și o experiență care continuă după cumpărare.","Coffee with a story, shared with care.":"Cafea cu poveste, împărtășită cu grijă.","We curate coffees with clear provenance and explain what changes flavour: species, variety, altitude, processing, roast and preparation. Customers can buy in the café or online, connect purchases to their account and keep useful guides in their Ritual Library.":"Selectăm cafele cu proveniență clară și explicăm ce schimbă gustul: specia, varietatea, altitudinea, procesarea, prăjirea și prepararea. Clienții pot cumpăra din cafenea sau online, își pot asocia cumpărăturile contului și pot păstra ghidurile utile în Biblioteca Ritualului.","Supply & traceability":"Aprovizionare și trasabilitate","From origin to cup.":"De la origine la ceașcă.","Each listing identifies the producing country, region, altitude, species, variety and processing method.":"Fiecare produs indică țara producătoare, regiunea, altitudinea, specia, varietatea și metoda de procesare.","Origin partners":"Parteneri de origine","Lots selected through transparent specialty importers and responsible suppliers.":"Loturi selectate prin importatori transparenți și furnizori responsabili.","Small-batch roasting":"Prăjire în loturi mici","Roast profiles designed around each coffee’s structure and intended methods.":"Profiluri de prăjire construite în jurul structurii fiecărei cafele și metodelor recomandate.","Fresh stock":"Stoc proaspăt","Availability reflects current inventory and decreases when orders are confirmed.":"Disponibilitatea reflectă stocul actual și scade când comenzile sunt confirmate.","Careful fulfilment":"Pregătire atentă","Grinding, packing and delivery options are matched to the customer’s needs.":"Opțiunile de măcinare, ambalare și livrare sunt adaptate nevoilor clientului.","Processing methods":"Metode de procesare","How the fruit changes the cup.":"Cum schimbă fructul rezultatul din ceașcă.","Fruit is removed before drying. Usually clean, bright and transparent.":"Fructul este îndepărtat înainte de uscare. De obicei rezultă o cafea curată, luminoasă și transparentă.","Some mucilage remains during drying. Often sweet, rounded and balanced.":"O parte din mucilagiu rămâne în timpul uscării. De obicei oferă dulceață, rotunjime și echilibru.","Whole cherries dry around the seed. Often fruity, full and expressive.":"Cireșele întregi se usucă în jurul bobului. De obicei rezultă profiluri fructate, pline și expresive.","A regional method associated with earthy depth, body and lower acidity.":"O metodă regională asociată cu profunzime pământie, corp și aciditate mai redusă.","Loyalty philosophy":"Filosofia fidelizării","A ritual that grows gently with you.":"Un ritual care crește încet, odată cu tine.","Purchases earn points, unlock useful recommendations and build a personal library of coffees and preparation guides. Repeat what worked, adjust what did not and receive relevant suggestions instead of random promotional noise.":"Cumpărăturile aduc puncte, deblochează recomandări utile și construiesc o bibliotecă personală de cafele și ghiduri. Repetă ce a funcționat, ajustează ce nu a funcționat și primește sugestii relevante în loc de promoții aleatorii.","View account concept":"Vezi conceptul contului","Personal account prototype":"Prototip de cont personal","Welcome back, Alina.":"Bine ai revenit, Alina.","Your orders, loyalty points, saved coffees, brewing guides and journal live here.":"Aici se află comenzile, punctele de fidelitate, cafelele salvate, ghidurile și jurnalul tău.","Overview":"Prezentare","My orders":"Comenzile mele","Reorder":"Comandă din nou","Favourites":"Favorite","My Ritual Library":"Biblioteca Ritualului","My Coffee Journal":"Jurnalul meu de cafea","Addresses & settings":"Adrese și setări","Gold member":"Membru Gold","You have 320 points":"Ai 320 de puncte","180 points until your next reward.":"Mai ai 180 de puncte până la următoarea recompensă.","Recent orders":"Comenzi recente","Delivered":"Livrată","Collected":"Ridicată","Favourite coffees":"Cafele favorite","Shop favourites →":"Cumpără favoritele →","Purchased coffee & preparation":"Produse cumpărate și preparare","All guides →":"Toate ghidurile →","Home version · Milk texture · Serve":"Versiune pentru acasă · Textura laptelui · Servire","Your recipes":"Rețetele tale","Saved ratios, notes and ratings":"Rapoarte, notițe și evaluări salvate","My Coffee & Tea Journal":"Jurnalul meu de cafea și ceai","Keep the recipes that worked.":"Păstrează rețetele care au funcționat.","Save coffee, method, ratio, grind, water temperature, extraction time and your actual opinion—rather than trusting future-you to remember it.":"Salvează cafeaua, metoda, raportul, măcinarea, temperatura apei, timpul de extracție și părerea ta reală—în loc să ai încredere că îți vei aminti.","Purchased coffees":"Cafele cumpărate","New journal entry":"Înregistrare nouă","Water temperature":"Temperatura apei","Rating":"Evaluare","5 stars":"5 stele","4 stars":"4 stele","3 stars":"3 stele","Notes":"Notițe","Save entry":"Salvează înregistrarea","Recent entries":"Înregistrări recente","Bloom, drawdown, taste, what to change next time...":"Blooming, timp de scurgere, gust și ce vrei să schimbi data viitoare...","Interactive preparation library":"Bibliotecă interactivă de preparare","Choose how you brew.":"Alege cum prepari.","Choose coffee or tea, then select a method. Every guide includes the tools, temperature, dose, time, blooming or pre-infusion, full steps and troubleshooting.":"Alege cafea sau ceai, apoi selectează metoda. Fiecare ghid include instrumentele, temperatura, dozajul, timpul, blooming sau pre-infuzie, pașii compleți și soluții.","Coffee methods":"Metode de cafea","Tea methods":"Metode de ceai","Tools":"Instrumente","Step by step":"Pas cu pas","Tips & fixes":"Sfaturi și soluții","Preparation knowledge":"Cunoștințe de preparare","Blooming, temperature and better repetition.":"Blooming, temperatură și rezultate mai ușor de repetat.","Open your journal →":"Deschide jurnalul →","Fresh coffee releases carbon dioxide. Wetting all grounds first improves even extraction.":"Cafeaua proaspătă eliberează dioxid de carbon. Umezirea tuturor particulelor la început ajută la o extracție uniformă.","Tea temperature":"Temperatura ceaiului","Green and white teas usually need cooler water; black tea and herbal infusions generally need hotter water.":"Ceaiurile verzi și albe au de obicei nevoie de apă mai rece; ceaiul negru și infuziile din plante preferă temperaturi mai ridicate.","A scale, timer and temperature control make recipes easier to repeat without turning breakfast into a thesis.":"Un cântar, un timer și controlul temperaturii fac rețetele mai ușor de repetat fără să transforme micul dejun într-o teză.","Journal":"Jurnal","Save ratio, grind or leaf dose, temperature, time and tasting notes for the next attempt.":"Salvează raportul, măcinarea sau dozajul frunzelor, temperatura, timpul și notițele de degustare.","Shop · Cart":"Magazin · Coș","Your cart.":"Coșul tău.","Review coffee, grind and quantity before checkout.":"Verifică produsele, măcinarea și cantitatea înainte de checkout.","Order summary":"Sumar comandă","Subtotal":"Subtotal","Shipping":"Livrare","Loyalty points":"Puncte de fidelitate","Total":"Total","Checkout":"Checkout demonstrativ","Bulk / same-day order":"Comandă mare / în aceeași zi","Single origin · seasonal lot":"Origine unică · lot sezonier","Origin":"Origine","Species":"Specie","Variety":"Varietate","Altitude":"Altitudine","Bean grade":"Clasificarea bobului","Specialty, screen 15+":"Specialty, screen 15+","Preferred brewing method":"Metodă de preparare preferată","Taste profile":"Profil aromatic","How to brew":"Cum se prepară","How to serve":"Cum se servește","Pairings":"Asocieri","Origin & supply":"Origine și aprovizionare","A floral and tea-like washed coffee with high clarity and gentle citrus acidity.":"O cafea washed florală, asemănătoare ceaiului, cu claritate ridicată și aciditate citrică delicată.","Open complete brewing guide →":"Deschide ghidul complet de preparare →","VISIT · ORDER · COLLABORATE":"VIZITEAZĂ · COMANDĂ · COLABOREAZĂ","Let’s talk about your next ritual.":"Hai să vorbim despre următorul tău ritual.","Questions, same-day orders, bulk coffee, collaborations, events or a simple hello.":"Întrebări, comenzi în aceeași zi, cafea în cantități mari, colaborări, evenimente sau un simplu salut.","DIRECT CONTACT":"CONTACT DIRECT","Write to Morning Ritual.":"Scrie către Morning Ritual.","Use the form or contact us directly by email.":"Folosește formularul sau contactează-ne direct prin email.","Same-day orders":"Comenzi în aceeași zi","For coffee, tea, prepared drinks and local delivery questions.":"Pentru cafea, ceai, băuturi preparate și întrebări despre livrarea locală.","Bulk & office orders":"Comenzi mari și pentru birouri","For offices, events, studios, hospitality and recurring supply.":"Pentru birouri, evenimente, studiouri, HoReCa și aprovizionare recurentă.","Collaborations":"Colaborări","For creative projects, local makers, charity products and partnerships.":"Pentru proiecte creative, producători locali, produse caritabile și parteneriate.","SEND A MESSAGE":"TRIMITE UN MESAJ","Tell us what you need.":"Spune-ne de ce ai nevoie.","Email":"Email","Subject":"Subiect","General question":"Întrebare generală","Same-day order":"Comandă în aceeași zi","Bulk or office order":"Comandă mare sau pentru birou","Glovo / delivery":"Glovo / livrare","Collaboration":"Colaborare","Website enquiry":"Întrebare despre website","Message":"Mesaj","I agree to be contacted regarding this message.":"Sunt de acord să fiu contactat(ă) în legătură cu acest mesaj.","Send message":"Trimite mesajul","Messages are sent securely through FormSubmit.":"Mesajele sunt trimise în siguranță prin FormSubmit.","MESSAGE SENT":"MESAJ TRIMIS","Thank you.":"Mulțumim.","Your message was sent successfully. We’ll get back to you as soon as possible.":"Mesajul tău a fost trimis cu succes. Vom răspunde cât mai curând.","Back home":"Înapoi acasă","Continue shopping":"Continuă cumpărăturile","Floral · Citrus · Tea-like":"Floral · Citrice · Asemănător ceaiului","Washed · Arabica Heirloom":"Washed · Arabica Heirloom","Caramel · Red fruit · Cocoa":"Caramel · Fructe roșii · Cacao","Honey · Caturra":"Honey · Caturra","Nutty · Chocolate · Smooth":"Nuci · Ciocolată · Catifelat","Natural · Bourbon":"Natural · Bourbon","Herbal · Cocoa · Full body":"Ierbaceu · Cacao · Corp plin","Wet-hulled · Catimor":"Wet-hulled · Catimor","Chocolate · Caramel · Balanced":"Ciocolată · Caramel · Echilibrat","Brazil & Colombia blend":"Blend Brazilia și Columbia","Berries · Cocoa · Sweet finish":"Fructe de pădure · Cacao · Final dulce","Natural blend":"Blend natural","Fresh · Vegetal · Umami":"Proaspăt · Vegetal · Umami","Loose leaf · Shizuoka":"Frunze vrac · Shizuoka","Bergamot · Malt · Citrus":"Bergamotă · Malț · Citrice","Loose leaf · Bergamot":"Frunze vrac · Bergamotă","Creamy · Sweet · Umami":"Cremos · Dulce · Umami","Stone-ground · Uji":"Măcinat pe piatră · Uji","Ceramic · Size 02":"Ceramică · Mărimea 02","Clear, aromatic cups":"Cești clare și aromate","Glass · Wood collar":"Sticlă · Guler din lemn","Clean, refined filter coffee":"Cafea la filtru curată și rafinată","Portable · Fast · Versatile":"Portabil · Rapid · Versatil","Paper or metal filter":"Filtru de hârtie sau metal","Glass · Steel · Full body":"Sticlă · Oțel · Corp plin","Immersion brewer":"Echipament de imersie","Organic cotton":"Bumbac organic","Unisex · Embroidered":"Unisex · Brodat","XS–XXL":"XS–XXL","Handmade":"Handmade","Recycled cotton · Bucharest":"Bumbac reciclat · București","Small-batch handmade":"Realizat manual în serie mică","Limited edition":"Ediție limitată","7-ply maple · 8.25 inch":"Arțar în 7 straturi · 8,25 inch","Morning Ritual artwork":"Grafică originală Morning Ritual","100% donated":"100% donat","Fund a hot drink locally":"Finanțează local o băutură caldă","Community support":"Sprijin pentru comunitate","30% donated":"30% donat","Local artist · Cotton canvas":"Artist local · Pânză de bumbac","Limited charity collection":"Colecție caritabilă limitată","House favourite":"Preferata casei","Green tea":"Ceai verde","Black tea":"Ceai negru","French Press":"Presă franceză","Moka Pot":"Moka","Turkish Coffee":"Cafea turcească","Green Tea":"Ceai verde","Black Tea":"Ceai negru","White Tea":"Ceai alb","Herbal Infusion":"Infuzie din plante","Masala Chai":"Masala Chai","Cold Brew Tea":"Ceai cold brew","Fine":"Fină","Medium-fine":"Medie-fină","Medium":"Medie","Medium-coarse":"Medie-grosieră","Coarse":"Grosieră","Powder-fine":"Foarte fină, ca pudra","Whole leaf":"Frunză întreagă","Rolled leaf":"Frunză rulată","Dried herbs":"Plante uscate","Tea + spices":"Ceai + condimente","Powder":"Pudră","Cold":"Rece","Hot water":"Apă fierbinte","Slow heat":"Foc mic","Simmer":"Fierbere lentă","Full basket":"Coș plin","Below valve":"Sub supapă","4 min + rest":"4 min + repaus","12–18 h":"12–18 ore","6–12 h":"6–12 ore","No separate bloom. Use 5–8 seconds of pre-infusion if the machine supports it.":"Nu este nevoie de blooming separat. Folosește 5–8 secunde de pre-infuzie dacă espressorul permite.","Optional: add 40 g water, stir gently and wait 20–30 seconds.":"Opțional: adaugă 40 g de apă, amestecă ușor și așteaptă 20–30 de secunde.","Pour 45 g, wet every ground and wait 35–45 seconds.":"Toarnă 45 g, umezește toată cafeaua și așteaptă 35–45 de secunde.","Pour 90 g and wait 45 seconds.":"Toarnă 90 g și așteaptă 45 de secunde.","Pour 60 g and wait 35–45 seconds.":"Toarnă 60 g și așteaptă 35–45 de secunde.","No separate bloom. Pour all water evenly and stir once.":"Nu este nevoie de blooming separat. Toarnă toată apa uniform și amestecă o singură dată.","No bloom. Start with hot water to reduce stove time.":"Nu este nevoie de blooming. Pornește cu apă fierbinte pentru a reduce timpul pe aragaz.","No bloom. Stir once so every particle is wet.":"Nu este nevoie de blooming. Amestecă o dată pentru ca toate particulele să fie umezite.","No bloom. Mix before heating, then do not stir.":"Nu este nevoie de blooming. Amestecă înainte de încălzire, apoi nu mai amesteca.","No bloom. Warm the teaware first.":"Nu este nevoie de blooming. Încălzește mai întâi vasele.","No bloom.":"Nu este nevoie de blooming.","Optional five-second rinse for tightly rolled leaves.":"Opțional, clătește timp de cinci secunde frunzele strâns rulate.","No bloom. Sift the powder first.":"Nu este nevoie de blooming. Cerne pudra înainte.","Portafilter":"Portafiltru","Burr grinder":"Râșniță cu discuri","Scale":"Cântar","Tamper":"Tamper","Timer":"Timer","Kettle":"Fierbător","Grinder":"Râșniță","Sturdy mug":"Cană solidă","V60 dripper":"Dripper V60","Paper filter":"Filtru de hârtie","Gooseneck kettle":"Fierbător cu gât de lebădă","Server":"Server","Bonded filters":"Filtre Chemex","Kalita Wave":"Kalita Wave","Wave filter":"Filtru Wave","Spoon":"Lingură","Low heat":"Foc mic","Towel":"Prosop","Large jar":"Borcan mare","Paper or cloth filter":"Filtru de hârtie sau pânză","Refrigerator":"Frigider","Cezve":"Ibric / cezve","Very fine grinder":"Râșniță pentru măcinare foarte fină","Small cup":"Ceașcă mică","Temperature kettle":"Fierbător cu controlul temperaturii","Scale or teaspoon":"Cântar sau linguriță","Teapot or infuser":"Ceainic sau infuzor","Cup":"Ceașcă","Wide infuser":"Infuzor larg","Gaiwan or teapot":"Gaiwan sau ceainic","Small cups":"Cești mici","Matcha bowl":"Bol pentru matcha","Bamboo whisk":"Tel din bambus","Fine sieve":"Sită fină","Scoop or scale":"Linguriță sau cântar","Covered mug":"Cană cu capac","Infuser":"Infuzor","Saucepan":"Crăticioară","Fine strainer":"Strecurătoare fină","Bottle or pitcher":"Sticlă sau carafă","Use it to repeat dose and water accurately.":"Folosește-l pentru a repeta precis dozajul și cantitatea de apă.","Control water temperature; gooseneck kettles improve pouring precision.":"Controlează temperatura apei; fierbătoarele cu gât de lebădă oferă precizie la turnare.","Grind immediately before brewing and adjust one step at a time.":"Macina imediat înainte de preparare și ajustează câte un pas.","Track blooming, steeping and total extraction.":"Cronometrează blooming-ul, infuzarea și extracția totală.","Rinse paper and clean reusable filters after each use.":"Clătește filtrele de hârtie și curăță filtrele reutilizabile după fiecare folosire.","Tamp espresso level and evenly.":"Tasează espresso-ul drept și uniform.","Use quick, light wrist movement for fine foam.":"Folosește mișcări rapide și ușoare ale încheieturii pentru o spumă fină.","Keep it clean, preheat it when relevant and use it consistently.":"Păstrează-l curat, preîncălzește-l când este cazul și folosește-l consecvent.","Warm the machine, portafilter and cup.":"Încălzește espressorul, portafiltrul și ceașca.","Grind 18 g fine and distribute evenly.":"Macina fin 18 g și distribuie uniform.","Tamp level and firmly.":"Tasează drept și ferm.","Flush the group and start extraction.":"Clătește grupul și pornește extracția.","Stop near 36 g in 25–32 seconds.":"Oprește în jur de 36 g, în 25–32 de secunde.","Taste and adjust one variable at a time.":"Gustă și ajustează câte o singură variabilă.","Fast and sour: grind finer.":"Curge repede și este acru: macină mai fin.","Slow and dry: grind coarser.":"Curge lent și este astringent: macină mai grosier.","Uneven flow: improve distribution.":"Curgere neuniformă: îmbunătățește distribuția.","For milk drinks, choose a chocolate-forward coffee.":"Pentru băuturile cu lapte, alege o cafea cu profil de ciocolată.","Rinse the paper filter.":"Clătește filtrul de hârtie.","Add 16 g medium-fine coffee.":"Adaugă 16 g de cafea măcinată mediu-fin.","Bloom with 40 g water.":"Fă blooming cu 40 g de apă.","Pour to 240 g and insert the plunger.":"Toarnă până la 240 g și introdu pistonul.","At 1:45, press slowly.":"La 1:45, apasă lent.","Taste and adjust temperature or grind.":"Gustă și ajustează temperatura sau măcinarea.","Weak: grind finer or steep longer.":"Prea slabă: macină mai fin sau prelungește infuzarea.","Bitter: use cooler water.":"Prea amară: folosește apă mai rece.","Paper gives clarity; metal gives body.":"Hârtia oferă claritate; metalul oferă corp.","Press over a sturdy cup.":"Apasă deasupra unei căni solide.","Rinse the filter and preheat the brewer.":"Clătește filtrul și preîncălzește dripperul.","Add 15 g coffee and level the bed.":"Adaugă 15 g de cafea și nivelează patul.","Bloom with 45 g for 40 seconds.":"Fă blooming cu 45 g timp de 40 de secunde.","Pour gently to 150 g.":"Toarnă ușor până la 150 g.","Continue to 250 g in pulses.":"Continuă până la 250 g în tranșe.","Swirl gently and allow a flat drawdown.":"Rotește ușor și lasă cafeaua să se scurgă într-un pat plat.","Keep the stream controlled.":"Menține jetul controlat.","Light washed coffee often likes hotter water.":"Cafeaua washed cu prăjire deschisă preferă adesea apă mai fierbinte.","Place and rinse the filter.":"Așază și clătește filtrul.","Add 30 g coffee.":"Adaugă 30 g de cafea.","Bloom with 90 g for 45 seconds.":"Fă blooming cu 90 g timp de 45 de secunde.","Pour slowly to 300 g.":"Toarnă lent până la 300 g.","Continue to 480 g.":"Continuă până la 480 g.","Remove the filter and swirl.":"Îndepărtează filtrul și rotește carafa.","Stalled brew: grind coarser.":"Scurgere blocată: macină mai grosier.","Rinse the filter well.":"Clătește bine filtrul.","Best for clean aromatic coffee.":"Potrivit pentru cafele curate și aromate.","Keep the spout unblocked.":"Nu bloca orificiul de turnare.","Rinse without collapsing the filter waves.":"Clătește fără să turtești pliurile filtrului.","Add 20 g coffee.":"Adaugă 20 g de cafea.","Bloom with 60 g.":"Fă blooming cu 60 g.","Pour in small controlled pulses.":"Toarnă în tranșe mici și controlate.","Finish at 320 g.":"Oprește la 320 g.","Swirl the server before serving.":"Rotește serverul înainte de servire.","Keep pours centred.":"Menține turnarea în centru.","Protect the filter waves.":"Păstrează pliurile filtrului intacte.","Medium grind is a safe start.":"Măcinarea medie este un punct bun de pornire.","Flat-bottom brewers are forgiving.":"Dripperele cu fund plat sunt mai tolerante.","Preheat the press.":"Preîncălzește presa.","Pour 450 g water.":"Toarnă 450 g de apă.","Stir gently and place the lid.":"Amestecă ușor și pune capacul.","Break the crust at 4 minutes.":"Rupe crusta la 4 minute.","Wait, press lightly and decant.":"Așteaptă, apasă ușor și toarnă imediat.","Do not grind extremely coarse.":"Nu măcina exagerat de grosier.","Decant immediately.":"Toarnă imediat în cești sau într-o carafă.","Do not force the plunger.":"Nu forța pistonul.","Natural coffee gives rich body.":"Cafeaua natural oferă un corp bogat.","Fill the base below the valve.":"Umple baza până sub supapă.","Fill the basket level; do not tamp.":"Umple coșul și nivelează; nu tasa.","Assemble carefully.":"Asamblează cu grijă.","Heat on medium-low.":"Încălzește la foc mediu-mic.","Remove when flow becomes pale.":"Oprește când jetul devine deschis la culoare.","Cool the base and stir.":"Răcește baza și amestecă băutura.","High heat creates harsh flavours.":"Focul mare produce gusturi aspre.","Never cover the safety valve.":"Nu acoperi niciodată supapa de siguranță.","Do not tamp.":"Nu tasa.","Dilute for an Americano style.":"Diluează pentru un rezultat în stil Americano.","Combine coffee and water.":"Combină cafeaua și apa.","Stir thoroughly and cover.":"Amestecă bine și acoperă.","Steep refrigerated.":"Lasă la infuzat în frigider.","Filter slowly.":"Filtrează lent.","Dilute to taste.":"Diluează după gust.","Use within about one week.":"Consumă în aproximativ o săptămână.","Cloudy: filter through paper.":"Tulbure: filtrează din nou prin hârtie.","Bitter: shorten the steep.":"Amară: scurtează timpul de infuzare.","Too strong: dilute more.":"Prea concentrată: diluează mai mult.","Use chocolate or fruit-forward coffee.":"Folosește cafea cu note de ciocolată sau fructe.","Add cool water and coffee.":"Adaugă apă rece și cafea.","Mix before heating.":"Amestecă înainte de încălzire.","Heat slowly without stirring.":"Încălzește lent fără să amesteci.","Remove as foam rises.":"Ia de pe foc când spuma începe să urce.","Pour gently.":"Toarnă ușor.","Wait for grounds to settle.":"Așteaptă să se depună zațul.","Do not violently boil.":"Nu lăsa să fiarbă violent.","Use powder-fine coffee.":"Folosește cafea măcinată foarte fin.","Cardamom is optional.":"Cardamomul este opțional.","Serve with water.":"Servește cu apă.","Heat water to 70–80°C.":"Încălzește apa la 70–80°C.","Warm the pot.":"Încălzește ceainicul.","Add 3 g leaves.":"Adaugă 3 g de frunze.","Steep 60–120 seconds.":"Infuzează 60–120 de secunde.","Remove leaves completely.":"Îndepărtează complet frunzele.","Re-steep hotter and longer.":"La următoarea infuzare folosește apă puțin mai fierbinte și timp mai lung.","Bitter: cooler water or shorter time.":"Amar: folosește apă mai rece sau un timp mai scurt.","Weak: use more leaf.":"Prea slab: folosește mai multe frunze.","Japanese greens prefer lower temperatures.":"Ceaiurile verzi japoneze preferă temperaturi mai scăzute.","Do not leave leaves in finished tea.":"Nu lăsa frunzele în ceaiul gata preparat.","Heat fresh water.":"Încălzește apă proaspătă.","Warm the teapot.":"Încălzește ceainicul.","Add 3 g tea.":"Adaugă 3 g de ceai.","Steep 3–5 minutes.":"Infuzează 3–5 minute.","Strain completely.":"Strecoară complet.","Taste before adding milk.":"Gustă înainte să adaugi lapte.","Broken leaves infuse faster.":"Frunzele mărunțite se infuzează mai repede.","Astringent: shorten time.":"Astringent: scurtează timpul.","For milk use more leaf.":"Pentru lapte, folosește mai multe frunze.","Preheat the cup.":"Preîncălzește ceașca.","Heat water to 80–90°C.":"Încălzește apa la 80–90°C.","Use a roomy vessel.":"Folosește un vas încăpător.","Add 4 g leaves.":"Adaugă 4 g de frunze.","Strain and taste.":"Strecoară și gustă.","Re-steep several times.":"Reinfuzează de mai multe ori.","Boiling water can flatten delicate tea.":"Apa clocotită poate estompa un ceai delicat.","Use more leaf before more time.":"Crește cantitatea de frunze înainte să prelungești timpul.","Store away from humidity.":"Păstrează departe de umiditate.","Expect floral, hay or fruit notes.":"Așteaptă-te la note florale, de fân sau fructe.","Warm all teaware.":"Încălzește toate vasele.","Add 5 g leaves.":"Adaugă 5 g de frunze.","Optionally rinse.":"Opțional, clătește frunzele.","Infuse 30–60 seconds.":"Infuzează 30–60 de secunde.","Decant completely.":"Toarnă complet infuzia.","Repeat with longer times.":"Repetă cu timpi progresiv mai lungi.","Green oolong uses cooler water.":"Oolong-ul verde folosește apă mai rece.","Never leave water on leaves.":"Nu lăsa apa pe frunze între infuzări.","Smell the warm leaves.":"Miroase frunzele calde.","Use several short infusions.":"Folosește mai multe infuzări scurte.","Warm the bowl and whisk.":"Încălzește bolul și telul.","Sift 2 g matcha.":"Cerne 2 g de matcha.","Add 70 ml water.":"Adaugă 70 ml de apă.","Whisk in a W motion.":"Amestecă în mișcare de W.","Stop when fine foam appears.":"Oprește când apare o spumă fină.","Drink immediately.":"Consumă imediat.","Large bubbles: lighter wrist.":"Bule mari: folosește o mișcare mai ușoară a încheieturii.","Bitter: cooler water.":"Amar: folosește apă mai rece.","Clumps: sift first.":"Cocoloașe: cerne pudra înainte.","Keep matcha airtight and cold.":"Păstrează matcha etanș și la rece.","Use freshly boiled water.":"Folosește apă proaspăt fiartă.","Add herbs.":"Adaugă plantele.","Pour and cover.":"Toarnă și acoperă.","Steep 5–10 minutes.":"Infuzează 5–10 minute.","Sweeten after tasting.":"Îndulcește după degustare.","Cover to retain oils.":"Acoperă pentru a păstra uleiurile aromatice.","Roots need longer time.":"Rădăcinile au nevoie de timp mai lung.","Check ingredient safety.":"Verifică siguranța ingredientelor.","Herbal infusions contain no tea leaf unless blended.":"Infuziile din plante nu conțin frunze de ceai decât dacă sunt amestecuri.","Simmer crushed spices.":"Fierbe lent condimentele zdrobite.","Add black tea.":"Adaugă ceaiul negru.","Add milk and sugar.":"Adaugă lapte și zahăr.","Bring close to a boil.":"Adu aproape de punctul de fierbere.","Lower heat and simmer.":"Redu focul și fierbe lent.","Strain and serve.":"Strecoară și servește.","Add tea after hard spices.":"Adaugă ceaiul după condimentele tari.","Adjust ginger and cardamom.":"Ajustează ghimbirul și cardamomul.","Plant milk needs gentle heat.":"Laptele vegetal are nevoie de încălzire blândă.","Increase spices before tea.":"Crește cantitatea de condimente înainte de a crește ceaiul.","Add tea to cold water.":"Adaugă ceaiul în apă rece.","Cover and refrigerate.":"Acoperă și pune la frigider.","Steep green tea 4–8 hours.":"Infuzează ceaiul verde 4–8 ore.","Steep black or herbal 8–12 hours.":"Infuzează ceaiul negru sau plantele 8–12 ore.","Use within 2–3 days.":"Consumă în 2–3 zile.","Cold extraction reduces bitterness.":"Extracția la rece reduce amăreala.","Use more leaf for strength.":"Folosește mai multe frunze pentru intensitate.","Add citrus after brewing.":"Adaugă citrice după preparare.","Keep refrigerated.":"Păstrează la frigider."}};

function getJSON(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}}
function getCart(){return getJSON(KEYS.cart,[])}
function setCart(c){localStorage.setItem(KEYS.cart,JSON.stringify(c));updateCartCount()}
function getStock(){let s=getJSON(KEYS.stock,null);if(!s){s=Object.fromEntries(PRODUCTS.map(p=>[p.id,p.stock]));localStorage.setItem(KEYS.stock,JSON.stringify(s))}return s}
function setStock(s){localStorage.setItem(KEYS.stock,JSON.stringify(s))}
function language(){const saved=localStorage.getItem(KEYS.language);return saved==='ro'?'ro':'en'}
function translate(text){return TRANSLATIONS[language()]?.[text]||text}
function currency(n){return `$${Number(n).toFixed(2)}`}
function updateCartCount(){const n=getCart().reduce((s,i)=>s+i.qty,0);qsa('.cart-count').forEach(e=>e.textContent=n)}
function showToast(m){let t=qs('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}
function productById(id){return PRODUCTS.find(p=>p.id===id)}

function translateTree(root=document){
  if(language()==='en'||!root)return;
  const dict=TRANSLATIONS[language()]||{};
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const value=node.nodeValue.trim();
    if(dict[value]){
      const left=node.nodeValue.match(/^\s*/)?.[0]||'';
      const right=node.nodeValue.match(/\s*$/)?.[0]||'';
      node.nodeValue=left+dict[value]+right;
    }
  });
  qsa('input[placeholder],textarea[placeholder]',root).forEach(input=>{
    if(dict[input.placeholder])input.placeholder=dict[input.placeholder];
  });
}

function deckArtwork(className='product-image'){
  return `<div class="${className} deck-artwork" role="img" aria-label="Morning Ritual skateboard deck artwork">
    <svg class="deck-svg" viewBox="0 0 260 680" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="deckCream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff8e8"/>
          <stop offset=".55" stop-color="#ead9b9"/>
          <stop offset="1" stop-color="#cba66a"/>
        </linearGradient>
        <linearGradient id="deckInk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0d3028"/>
          <stop offset="1" stop-color="#173f34"/>
        </linearGradient>
        <filter id="deckShadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#14261f" flood-opacity=".28"/>
        </filter>
      </defs>

      <path d="M130 10C82 10 52 42 48 92L22 585C18 643 59 670 130 670C201 670 242 643 238 585L212 92C208 42 178 10 130 10Z"
            fill="url(#deckCream)" stroke="#c49345" stroke-width="5" filter="url(#deckShadow)"/>

      <circle cx="92" cy="76" r="7" fill="#173f34"/>
      <circle cx="168" cy="76" r="7" fill="#173f34"/>
      <circle cx="92" cy="604" r="7" fill="#173f34"/>
      <circle cx="168" cy="604" r="7" fill="#173f34"/>

      <path d="M65 132C86 103 104 101 130 128C156 101 174 103 195 132"
            fill="none" stroke="#173f34" stroke-width="4" stroke-linecap="round"/>
      <circle cx="130" cy="178" r="47" fill="none" stroke="#c49345" stroke-width="4"/>
      <circle cx="130" cy="178" r="22" fill="#173f34"/>
      <g stroke="#c49345" stroke-width="4" stroke-linecap="round">
        <path d="M130 112V91"/><path d="M130 265V244"/>
        <path d="M64 178H43"/><path d="M217 178H196"/>
        <path d="M83 131L68 116"/><path d="M192 240L177 225"/>
        <path d="M177 131L192 116"/><path d="M68 240L83 225"/>
      </g>

      <path d="M67 286C116 321 142 333 194 296C179 352 181 394 202 448C155 424 108 424 58 451C80 397 83 344 67 286Z"
            fill="url(#deckInk)"/>
      <path d="M83 323C108 341 126 345 151 333C136 361 130 388 132 418"
            fill="none" stroke="#e5bc73" stroke-width="4" stroke-linecap="round"/>
      <path d="M132 418C149 390 165 375 187 366"
            fill="none" stroke="#e5bc73" stroke-width="4" stroke-linecap="round"/>
      <path d="M106 365C88 355 77 341 72 323M155 352C177 335 187 318 190 299"
            fill="none" stroke="#e5bc73" stroke-width="3" stroke-linecap="round"/>
      <path d="M105 365C90 378 82 395 80 416M155 352C169 367 177 388 178 413"
            fill="none" stroke="#e5bc73" stroke-width="3" stroke-linecap="round"/>

      <text x="130" y="494" text-anchor="middle" fill="#173f34"
            font-family="Georgia, serif" font-size="25" font-weight="700" letter-spacing="3">MORNING</text>
      <text x="130" y="526" text-anchor="middle" fill="#173f34"
            font-family="Georgia, serif" font-size="25" font-weight="700" letter-spacing="4">RITUAL</text>
      <path d="M76 546H184" stroke="#c49345" stroke-width="3"/>
      <text x="130" y="570" text-anchor="middle" fill="#7d5d2c"
            font-family="Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="4">BREW · RIDE · REPEAT</text>
    </svg>
  </div>`;
}

function productVisual(product,className='product-image'){
  if(product.id==='skateboard')return deckArtwork(className);
  return `<img class="${className}" src="${product.image}" alt="${product.name}">`;
}

function addToCart(id,option='Standard'){const p=productById(id);if(!p)return;const cart=getCart(),key=`${id}::${option}`,existing=cart.find(i=>i.key===key),stock=getStock();if((existing?.qty||0)>=(stock[id]??p.stock))return showToast('No more demo stock available.');existing?existing.qty++:cart.push({key,id,option,qty:1});setCart(cart);showToast(`${p.name} added to cart.`)}

function productCard(p){
  const actionLabel=p.id==='shirt'?translate('Choose size'):translate('Add');
  return `<article class="product-card reveal"><span class="badge">${translate(p.badge)}</span><a href="product.html?id=${p.id}">${productVisual(p,'product-image')}</a><div class="product-body"><h3>${p.name}</h3><p class="product-meta">${translate(p.meta)}<br>${translate(p.details)}</p><div class="product-foot"><span class="price">${currency(p.price)}</span><button class="add-btn" data-add="${p.id}" aria-label="${actionLabel}" title="${actionLabel}">+</button></div></div></article>`;
}
function bindAddButtons(root=document){
  qsa('[data-add]',root).forEach(button=>button.addEventListener('click',()=>{
    if(button.dataset.add==='shirt'){
      location.href='product.html?id=shirt';
      return;
    }
    addToCart(button.dataset.add);
  }));
}

function initShop(){const target=qs('#shopProducts');if(!target)return;const boxes=qsa('[data-filter-group]'),search=qs('#shopSearch'),sort=qs('#sortProducts'),count=qs('#productCount'),empty=qs('#emptyProducts');const category=new URLSearchParams(location.search).get('category');if(category){const box=boxes.find(b=>b.dataset.filterGroup==='category'&&b.value===category);if(box)box.checked=true}
function render(){const selected={category:new Set(),process:new Set(),method:new Set()};boxes.forEach(b=>b.checked&&selected[b.dataset.filterGroup].add(b.value));const q=search.value.trim().toLowerCase();let items=PRODUCTS.filter(p=>(!selected.category.size||selected.category.has(p.category))&&(!selected.process.size||selected.process.has(p.process))&&(!selected.method.size||p.methods.some(m=>selected.method.has(m))||p.methods.includes('all'))&&(!q||`${p.name} ${p.meta} ${p.details} ${p.badge}`.toLowerCase().includes(q)));if(sort.value==='price-low')items.sort((a,b)=>a.price-b.price);if(sort.value==='price-high')items.sort((a,b)=>b.price-a.price);if(sort.value==='name')items.sort((a,b)=>a.name.localeCompare(b.name));target.innerHTML=items.map(productCard).join('');count.textContent=`${items.length} ${translate(items.length===1?'product':'products')}`;empty.hidden=items.length!==0;bindAddButtons(target);translateTree(target);reveal()}
boxes.forEach(b=>b.addEventListener('change',render));search.addEventListener('input',render);sort.addEventListener('change',render);qs('#clearFilters').addEventListener('click',()=>{boxes.forEach(b=>b.checked=false);search.value='';sort.value='featured';render()});render()}

function initProduct(){
  const layout=qs('.product-layout');
  if(!layout)return;

  const product=productById(new URLSearchParams(location.search).get('id'))||PRODUCTS[0];
  const stock=getStock()[product.id]??product.stock;
  document.title=`${product.name} — Morning Ritual`;

  let firstLabel='Option';
  let firstOptions=['Standard'];
  let secondLabel='Preferred preparation';
  let secondOptions=product.methods;

  if(product.category==='coffee'){
    firstOptions=['Whole bean','Espresso','AeroPress','V60 / Chemex','French press','Moka pot','Cold brew'];
  }else if(product.category==='tea'){
    firstOptions=['Loose leaf','Tea bags'];
  }else if(product.id==='shirt'){
    firstLabel='Size';
    firstOptions=product.sizes;
    secondLabel='Fit';
    secondOptions=['Unisex regular fit'];
  }else if(product.id==='skateboard'){
    firstLabel='Setup';
    firstOptions=['Deck only','Complete setup'];
    secondLabel='Width';
    secondOptions=['8.25 inch'];
  }

  layout.innerHTML=`<div class="product-gallery">${productVisual(product,'product-main-image')}</div>
    <div class="product-info">
      <p class="product-kicker">${translate(product.badge)} · ${translate(product.category)}</p>
      <h1>${product.name}</h1>
      <p class="muted">${translate(product.meta)}. ${translate(product.details)}.</p>
      <div class="fact-grid">
        <div class="fact"><small>${translate('Category')}</small><strong>${translate(product.category)}</strong></div>
        <div class="fact"><small>${translate('Process')}</small><strong>${translate(product.process)}</strong></div>
        <div class="fact"><small>${translate('Best for')}</small><strong>${product.methods.map(translate).join(', ')}</strong></div>
        <div class="fact"><small>${translate('Stock')}</small><strong>${stock}</strong></div>
        <div class="fact"><small>${translate('Collection')}</small><strong>${translate(product.badge)}</strong></div>
        <div class="fact"><small>${translate('Profile')}</small><strong>${translate(product.meta)}</strong></div>
      </div>
      <h2>${currency(product.price)} <small style="font:400 .9rem DM Sans">${product.category==='coffee'?'/ 250g':''}</small></h2>
      <div class="product-controls">
        <label>${translate(firstLabel)}
          <select id="productOption" class="field">${firstOptions.map(option=>`<option>${translate(option)}</option>`).join('')}</select>
        </label>
        <label>${translate(secondLabel)}
          <select class="field">${secondOptions.map(option=>`<option>${translate(option)}</option>`).join('')}</select>
        </label>
      </div>
      <div class="qty-row">
        <button id="productAdd" class="btn btn-primary">${translate('Add to cart')}</button>
        ${['coffee','tea'].includes(product.category)?`<a class="btn btn-outline" href="brew-guide.html?type=${product.category}">${translate('Open preparation guide')}</a>`:''}
      </div>
    </div>`;

  updateProductTabs(product);
  translateTree(layout);
  qs('#productAdd').addEventListener('click',()=>addToCart(product.id,qs('#productOption').value));
}

function updateProductTabs(product){
  const buttons=qsa('.tabs button:not([data-brew-tab])');
  if(!buttons.length)return;

  let tabs;
  if(product.id==='shirt'){
    tabs=[
      ['Overview','An organic-cotton unisex T-shirt with discreet Morning Ritual embroidery.'],
      ['Materials & fit','Soft organic cotton, regular unisex fit and reinforced neckline.'],
      ['Size guide','Choose XS, S, M, L, XL or XXL before adding the product to the cart.'],
      ['Care','Wash inside out at 30°C and avoid tumble drying.'],
      ['Shipping','Packed carefully with the selected size shown in the cart.'],
      ['Reviews','A portfolio-ready product review section.']
    ];
  }else if(product.id==='skateboard'){
    tabs=[
      ['Overview','A limited Morning Ritual deck with original coded artwork in forest green, antique gold and warm cream.'],
      ['Artwork','The sun, botanical linework and Brew · Ride · Repeat composition are built directly with SVG and CSS.'],
      ['Construction','7-ply maple deck designed as an 8.25-inch all-round street shape.'],
      ['Size guide','8.25 inch width. Choose deck only or a complete setup.'],
      ['Care','Keep the deck dry and inspect hardware regularly.'],
      ['Reviews','A portfolio-ready product review section.']
    ];
  }else if(product.category==='gear'){
    tabs=[
      ['Overview',`${product.name} is selected to make the preparation process clearer and more repeatable.`],
      ['How to use','Open the preparation library for detailed tools, ratios, temperature and timing.'],
      ['Care','Clean after every use and dry completely before storage.'],
      ['Compatibility',product.meta],
      ['What is included',product.details],
      ['Reviews','A portfolio-ready product review section.']
    ];
  }else if(product.category==='tea'){
    tabs=[
      ['Overview',`${product.name}: ${product.meta}.`],
      ['Taste profile',product.meta],
      ['How to brew','Use the tea preparation library for leaf dosage, temperature and steeping time.'],
      ['How to serve','Serve in preheated teaware and remove the leaves after the recommended time.'],
      ['Pairings','Pair with light pastries, fruit or delicate savoury dishes.'],
      ['Origin & supply',product.details]
    ];
  }else{
    tabs=[
      ['Overview',`${product.name}: ${product.meta}.`],
      ['Taste profile',product.meta],
      ['How to brew','Select your equipment and open the complete preparation library.'],
      ['How to serve','Serve at an appropriate temperature and allow the cup to cool slightly.'],
      ['Pairings','Pair according to the coffee’s sweetness, acidity and body.'],
      ['Origin & supply',product.details]
    ];
  }

  buttons.forEach((button,index)=>{
    const tab=tabs[index]||tabs[0];
    button.textContent=translate(tab[0]);
    button.dataset.content=translate(tab[1]);
  });

  const panel=qs('#tabPanel');
  if(panel){
    panel.innerHTML=`<h3>${buttons[0].textContent}</h3><p class="muted">${buttons[0].dataset.content}</p>${['coffee','tea'].includes(product.category)?`<a class="text-link" href="brew-guide.html?type=${product.category}">${translate('Open complete brewing guide →')}</a>`:''}`;
  }
}

function initBrew(){const scroller=qs('#brewMethodScroller');if(!scroller)return;let type=new URLSearchParams(location.search).get('type')==='tea'?'tea':'coffee',guideId=GUIDES[type][0].id,tab='overview';const select=qs('#brewSelect'),sidebar=qs('#brewSidebar'),hero=qs('#brewHero'),panel=qs('#brewPanel'),typeBtns=qsa('[data-brew-type]'),tabBtns=qsa('[data-brew-tab]');
const guide=()=>GUIDES[type].find(g=>g.id===guideId)||GUIDES[type][0];
function methods(){if(!GUIDES[type].some(g=>g.id===guideId))guideId=GUIDES[type][0].id;select.innerHTML=GUIDES[type].map(g=>`<option value="${g.id}">${g.name}</option>`).join('');select.value=guideId;sidebar.innerHTML=GUIDES[type].map(g=>`<button class="${g.id===guideId?'active':''}" data-guide="${g.id}">${g.name}</button>`).join('');scroller.innerHTML=GUIDES[type].map(g=>`<button class="method-card ${g.id===guideId?'active':''}" data-guide="${g.id}"><img src="${g.img}" alt="${g.name}"><span>${g.name}</span></button>`).join('');qsa('[data-guide]').forEach(b=>b.addEventListener('click',()=>{guideId=b.dataset.guide;methods();content()}))}
function content(){const g=guide();hero.innerHTML=`<div><p class="eyebrow">${translate(type==='coffee'?'Coffee preparation':'Tea preparation')}</p><h2 style="font-size:clamp(2.5rem,5vw,4rem)">${g.name}</h2><p class="muted">${translate('A practical starting recipe. Adjust after tasting and save the result in your Coffee & Tea Journal.')}</p></div><img src="${g.img}" alt="${g.name}">`;if(tab==='overview')panel.innerHTML=`<h3>${translate('Preparation overview')}</h3><div class="recipe-grid brew-fact-grid">${fact(translate('Ratio'),translate(g.ratio))}${fact(translate('Dose'),translate(g.dose))}${fact(translate('Water'),translate(g.water))}${fact(translate('Temperature'),translate(g.temp))}${fact(translate(type==='coffee'?'Grind':'Leaf'),translate(g.grind))}${fact(translate('Total time'),translate(g.time))}</div><div class="bloom-note"><strong>${translate('Blooming / pre-infusion')}</strong><p class="muted">${translate(g.bloom)}</p></div>`;if(tab==='tools')panel.innerHTML=`<h3>${translate('Tools for')} ${g.name}</h3><div class="tool-list">${g.tools.map(x=>`<article><h3>${translate(x)}</h3><p class="muted">${translate(toolTip(x))}</p></article>`).join('')}</div>`;if(tab==='steps')panel.innerHTML=`<h3>${g.name} ${translate('method')}</h3><div class="steps">${g.steps.map(x=>`<div class="step"><p class="muted">${translate(x)}</p></div>`).join('')}</div>`;if(tab==='tips')panel.innerHTML=`<h3>${translate('Adjust the result')}</h3><div class="tips-list">${g.tips.map(x=>`<article><p class="muted">${translate(x)}</p></article>`).join('')}</div>`;translateTree(hero);translateTree(panel)}
function setType(v){type=v;guideId=GUIDES[type][0].id;typeBtns.forEach(b=>b.classList.toggle('active',b.dataset.brewType===type));methods();content()}
typeBtns.forEach(b=>b.addEventListener('click',()=>setType(b.dataset.brewType)));tabBtns.forEach(b=>b.addEventListener('click',()=>{tab=b.dataset.brewTab;tabBtns.forEach(x=>x.classList.toggle('active',x===b));content()}));select.addEventListener('change',()=>{guideId=select.value;methods();content()});setType(type)}
function fact(label,value){return `<div class="fact"><small>${label}</small><strong>${value}</strong></div>`}
function toolTip(x){const s=x.toLowerCase();if(s.includes('scale'))return'Use it to repeat dose and water accurately.';if(s.includes('kettle'))return'Control water temperature; gooseneck kettles improve pouring precision.';if(s.includes('grinder'))return'Grind immediately before brewing and adjust one step at a time.';if(s.includes('timer'))return'Track blooming, steeping and total extraction.';if(s.includes('filter'))return'Rinse paper and clean reusable filters after each use.';if(s.includes('tamper'))return'Tamp espresso level and evenly.';if(s.includes('whisk'))return'Use quick, light wrist movement for fine foam.';return'Keep it clean, preheat it when relevant and use it consistently.'}

function renderCart(){const wrap=qs('#cartItems');if(!wrap)return;const cart=getCart();if(!cart.length){wrap.innerHTML='<div class="panel"><h3>Your cart is empty.</h3><p class="muted">Your future coffee is currently living a quieter life.</p><a class="btn btn-primary" href="shop.html">Shop coffee</a></div>';summary([]);return}wrap.innerHTML=cart.map(i=>{const p=productById(i.id);return `<article class="cart-item">${productVisual(p,'cart-product-visual')}<div><h3>${p.name}</h3><p class="muted">${i.option}</p><button class="text-link remove-item" data-key="${i.key}">Remove</button></div><div><strong>${currency(p.price*i.qty)}</strong><div class="qty"><button data-action="minus" data-key="${i.key}">−</button><span>${i.qty}</span><button data-action="plus" data-key="${i.key}">+</button></div></div></article>`}).join('');summary(cart);translateTree(wrap)}
function summary(cart){const sub=cart.reduce((s,i)=>s+productById(i.id).price*i.qty,0),ship=sub&&sub<40?5:0;if(qs('#subtotal'))qs('#subtotal').textContent=currency(sub);if(qs('#shipping'))qs('#shipping').textContent=ship?currency(ship):'Free';if(qs('#total'))qs('#total').textContent=currency(sub+ship);if(qs('#points'))qs('#points').textContent=Math.floor(sub)}
function checkout(){const cart=getCart();if(!cart.length)return showToast('Your cart is empty.');const stock=getStock(),bad=cart.find(i=>(stock[i.id]??0)<i.qty);if(bad)return showToast('A product no longer has enough demo stock.');cart.forEach(i=>stock[i.id]-=i.qty);setStock(stock);const total=cart.reduce((s,i)=>s+productById(i.id).price*i.qty,0),orders=getJSON(KEYS.orders,[]);orders.unshift({id:`#${Math.floor(1000+Math.random()*8000)}`,date:new Date().toLocaleDateString(),total,items:cart});localStorage.setItem(KEYS.orders,JSON.stringify(orders));setCart([]);renderCart();showToast('Demo order placed. Local stock was updated.')}

function saveJournal(e){e.preventDefault();const form=e.currentTarget,entry=Object.fromEntries(new FormData(form).entries()),entries=getJSON(KEYS.journal,[]);entries.unshift({...entry,date:new Date().toLocaleDateString('en-GB')});localStorage.setItem(KEYS.journal,JSON.stringify(entries));form.reset();showToast('Journal entry saved.');renderJournal()}
function renderJournal(){const target=qs('#journalEntries');if(!target)return;const stored=getJSON(KEYS.journal,[]),fallback=[{coffee:'Ethiopia Guji — Washed',method:'V60',ratio:'15g / 250ml',temperature:'92°C',rating:'5',date:'24 Apr 2026'},{coffee:'Japanese Sencha',method:'Green Tea',ratio:'3g / 250ml',temperature:'75°C',rating:'4',date:'20 Apr 2026'}],entries=stored.length?stored:fallback;target.innerHTML=entries.map(e=>`<div class="journal-row"><span class="brand-mark">☕</span><div><strong>${e.coffee||'Session'}</strong><div class="muted">${e.method||''} · ${e.ratio||''} · ${e.temperature||''}</div></div><div><div>${'★'.repeat(Number(e.rating||5))}</div><small class="muted">${e.date}</small></div></div>`).join('')}

function initLanguage(){
  const lang=language();
  document.documentElement.lang=lang;
  qsa('.lang-select').forEach(select=>{
    select.value=lang;
    select.addEventListener('change',()=>{
      localStorage.setItem(KEYS.language,select.value);
      location.reload();
    });
  });
  translateTree(document.body);
}
function reveal(){const els=qsa('.reveal:not(.visible)');if(!('IntersectionObserver'in window))return els.forEach(e=>e.classList.add('visible'));const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>o.observe(e))}


function initDirectContactForm(){
  const form=document.getElementById('directContactForm');
  if(!form)return;

  const button=document.getElementById('contactSubmitButton');
  const status=document.getElementById('contactStatus');
  const statusTitle=document.getElementById('contactStatusTitle');
  const statusText=document.getElementById('contactStatusText');
  const defaultButtonText=button?.textContent.trim()||'Send message';

  const setStatus=(state,title,text)=>{
    if(!status)return;
    status.classList.remove('is-sending','is-success','is-error');
    if(state)status.classList.add(state);
    if(statusTitle)statusTitle.textContent=title;
    if(statusText)statusText.textContent=text;
  };

  form.addEventListener('submit',async event=>{
    event.preventDefault();

    const formData=new FormData(form);
    const name=(formData.get('name')||'').toString().trim();
    const email=(formData.get('email')||'').toString().trim();
    const message=(formData.get('message')||'').toString().trim();

    if(!name||!email||!message){
      const title=language()==='ro'?'Lipsesc informații':'Missing information';
      const text=language()==='ro'
        ? 'Completează numele, emailul și mesajul.'
        : 'Please complete your name, email and message.';
      setStatus('is-error',title,text);
      status?.scrollIntoView({behavior:'smooth',block:'nearest'});
      return;
    }

    formData.set('replyto',email);

    if(button){
      button.disabled=true;
      button.textContent=language()==='ro'?'Se trimite…':'Sending…';
    }

    setStatus(
      'is-sending',
      language()==='ro'?'Se trimite mesajul':'Sending your message',
      language()==='ro'
        ? 'Așteaptă câteva secunde.'
        : 'This usually takes only a few seconds.'
    );

    try{
      const response=await fetch('https://api.web3forms.com/submit',{
        method:'POST',
        body:formData
      });

      const result=await response.json();

      if(!response.ok||!result.success){
        throw new Error(result.message||'Submission failed');
      }

      const successTitle=language()==='ro'
        ? 'Mesaj trimis cu succes'
        : 'Message sent successfully';

      const successText=language()==='ro'
        ? 'Mulțumim pentru mesaj. A fost primit și vom răspunde cât mai curând.'
        : 'Thank you for your message. It has been received and we’ll reply as soon as possible.';

      setStatus('is-success',successTitle,successText);

      if(button){
        button.textContent=language()==='ro'?'Mesaj trimis':'Message sent';
      }

      form.reset();
      status?.scrollIntoView({behavior:'smooth',block:'center'});

      setTimeout(()=>{
        if(button){
          button.disabled=false;
          button.textContent=defaultButtonText;
        }
      },2500);

    }catch(error){
      console.error('Contact form error:',error);

      const errorTitle=language()==='ro'
        ? 'Mesajul nu a fost trimis'
        : 'Message not sent';

      const errorText=language()==='ro'
        ? 'Încearcă din nou peste câteva momente.'
        : 'Please try again in a moment.';

      setStatus('is-error',errorTitle,errorText);

      if(button){
        button.disabled=false;
        button.textContent=defaultButtonText;
      }

      status?.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
}


document.addEventListener('DOMContentLoaded',()=>{getStock();updateCartCount();const toggle=qs('.menu-toggle'),nav=qs('.nav-links');toggle?.addEventListener('click',()=>{nav.classList.toggle('open');document.body.classList.toggle('menu-open')});qsa('.search-shop').forEach(b=>b.addEventListener('click',()=>location.href='shop.html?focus=search'));bindAddButtons();initShop();initProduct();initBrew();renderCart();renderJournal();qs('#journalForm')?.addEventListener('submit',saveJournal);qs('#checkoutPrototype')?.addEventListener('click',checkout);document.addEventListener('click',e=>{const action=e.target.dataset.action,key=e.target.dataset.key;if(action&&key){const cart=getCart(),item=cart.find(i=>i.key===key);if(item){item.qty+=action==='plus'?1:-1;setCart(cart.filter(i=>i.qty>0));renderCart()}}if(e.target.classList.contains('remove-item')){setCart(getCart().filter(i=>i.key!==e.target.dataset.key));renderCart()}});qsa('.tabs button:not([data-brew-tab])').forEach(btn=>btn.addEventListener('click',()=>{qsa('.tabs button:not([data-brew-tab])').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const panel=qs('#tabPanel');if(panel)panel.innerHTML=`<h3>${btn.textContent}</h3><p class="muted">${btn.dataset.content||'Detailed product information, prepared for a calm and informed ritual.'}</p>`}));reveal();initLanguage();initDirectContactForm();if(new URLSearchParams(location.search).get('focus')==='search')setTimeout(()=>qs('#shopSearch')?.focus(),80)});
