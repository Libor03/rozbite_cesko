/* Speciální funkce, do níž se vkládá kód využívající knihovnu jQuery.
 * Je provedena ve chvíli, kdy je načten a připraven ("ready") celý dokument - tedy HTML stránka.
 * Pokud jste lenivější jako já, můžete používat zkrácenou formu $(function(){ //zde bude kód v jQuery }).
 */
/*   $(document).ready(function(){
        // zde bude kód v jQuery
     });
*/
$(function(){
    /* Syntax jQuery začíná typicky znakem $. Ten nahrazuje původní delší zápis pomocí identifikátoru jQuery 
     * Obojí stále funguje (viz níže), delší zápis už však nepoužívají ani masochisté :-)
     */
    /* Následující dva řádky dělají totéž - skrývají záhlaví stránky. Akce trvá 1000 ms (1 sekundu).  */
    // jQuery("header").hide(1000);
    
     //$("header").hide(1000).delay(1000);
    /* Po provedení tohoto řádku se záhlaví opět objeví, ale tentokrát pomaleji... */
     //$("header").show(2000);

    /* Možná už tušíte, že to, co je za dolarem v závorce, je tzv. selektor. Selektory byste už měli dobře znát z CSS. 
     * Stačí je jen správně používat a můžete pomocí jQuery podobně lehce manipulovat s jakýmkoliv prvkem na stránce:
     */
    /* Takto například se všemi nadpisy. Používáme k tomu tzv. hromadný selektor. Metoda text() v jQuery provede totéž
     * jako innerText() v čistém JS - nahradí obsah v určitém elementu.
     */
    //$("h1, h2, h3, h4, h5, h6").text("To jsem to krásně podělal");

    /* Funguje samozřejmě i tzv. kontextový selektor. V tomto příkladu provedu úpravu jen těcht napisů h2, 
     * které jsou součástí značky aside. Metoda html() odpovídá metodě innerHTML() v čistém JS:
    */
    // $("aside h2").html("Jen kousek nadpisu bude <i>nakloněný</i>");

    /* Můžete pochopitelně manipulovat i s jakýmkoliv prvkem označeným id, když správně použijete hashtag. 
     * Mou obětí je tentokrát sekce #uvod. Pomocí funkce css() můžu měnit styly oběti mnohem rychleji, než tomu je v čistém JS.
     * Je však třeba dodržet správný zápis:
     */
    // $("#uvod").css({"background-color":"yellow", "border":"5px solid black", "font-size":"2em"});
    
    /* Podobně zošklivit lze i kteroukoliv třídu (pochopitelně s čestnou výjimkou té vaší). 
     * Jistě si vzpomínáte, že správný třídní selektor je tečka:  
     */
    // $(".poznamka").css({"background-color":"pink", "color":"white", "font-size":"0.5em"});    

    /* Účinně selektovat je možné i prostřednictvím atributů prvků, a to když se použijí hranaté závorky.
     * Není nadto mít na stránce škaredě orámované a odsazené obrázky, že?
     */
    // $("[alt]").css({"border":"10px dotted black", "padding":"20px"});    

    /* Moc pěkně se dá také pokazit třeba jen první prvek v seznamu. */
    // $("li:first-child").text("První propadne peklu").css({"color":"red"});
    /* Nebo i poslední: */    
    // $("li:last-child").text("A poslední jakbysmet").css({"color":"red"});
    /* A také každý sudý. Ten prvek seznamu s nelichým indexem, včetně 0. 
     * Metoda append() něco do prvku přidá:
     */
    // $("li:even").append("<mark>Ani sudý osudu neujde</mark>");
    /* A všechny liché rovnou zlikvidujeme, protože metoda remove() nic lepšího neumí: */
    // $("li:odd").remove();

    /* A na úplný závěr si ještě trochu zablbneme s animací. Selektor hvězdička totiž vládne všemu (aspoň na této stránce). 
     * Metoda animate() provádí změny atributů CSS v čase. Když ji zřetězíte, můžete dosáhnout různých divů:
     */
    // $("*").animate({left: '500px', top: '500px', opacity: 0.5}, 5000).animate({left: '0px', top: '0px', opacity: 1}, 5000);
    
    /* Domácí úkol: 
     * 1. Najděte na stránce tajné a velmi nebezpečné tlačítko.
     * 2. Doplňte do následující události co nejoriginálněji kód jQuery tak, aby se stránka po stisku tlačítka proměnila k nepoznání.
     * Využijte k tomu co nejvíce různých kouzelných triků - tedy rozličných selektorů i metod.
     * 3. Nejoriginálnější a nejpropracovanější kouzlo něco vyhraje :-) 
     * 4. Zcela objektivně vše zhodnotí komise ve složení já a nová paní učitelka, kterou vám příště na dálku představím...
     * 5. Hodně zdaru! :-)
     */
    $(".btn-danger").on("click", ()=>{
        $("*").hide(5000).show(5000);
        $('button').animate({height: '500px', width: '800px'},5000);
        $('button').animate({left: '500px', bottom: '500px'}, 5000);
        $('nav').animate({bottom: '575px'}, 5000);
        $('nav').hide(5000);
        $('header').animate({height: '130px'}, 5000);
        $('p').css('background-color', 'yellow');
        $('main').hide(5000);
        $('main').animate({left: '400px'}, 1).show(5000);
        $('aside').animate({right: '760px'}, 5000);
        $('footer').hide(5000);
        $('div').animate({right: '400px', top: '300px'}, 5000).show(5000);
        $('#pryc').hide(1);
        $('#luc').html('<strong><big><big><big>Marek Lučný</strong></big></big></big>');
        $('#fact').html('<strong><big><big><big>Úžasný učitel</strong></big></big></big>');
        $('img:last').attr('src', 'img/cina.png');
        $('#matika').html('Geometrie');
        $('figcaption:last').html('Poloha Čínské republiky<br /><small>Autor: NuclearVacuum – File:Location European nation states.svg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=8105100</small>')
        $('#cinane').html('Číňané<span class="badge badge-primary badge-pill">64,3 %</span>');
        $('#mesto').html('Opava');
        $('#sspu').html('republika Střední Školy Průmyslové a umělecké v Opavě');

    });
})