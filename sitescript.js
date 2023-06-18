var fm=document.forms.form1;
var el=fm.elements

function check(){
    //Nova Pagina
    //var opened = window.open("");
    /*.appendChild(div1);
    opened.document.write("<html><head><title>teste</title></head><body></body></html>");*/
    //CSS
    let css=document.createElement('link');
    css.rel='stylesheet';
    css.type='text/css';
    css.href='style.css';
    let css2=document.createElement('link');
    css2.rel='stylesheet';
    css2.type='text/css';
    css2.href='style2.css';
    //head
    /*let head=document.createElement('head');
    let title=document.createElement('title');
    let textotitle=document.createTextNode("Nova Pagina");
    head.appendChild(title);

    let body = createElement('body');*/

    //header
    let linkpag=document.createElement('a');
    linkpag.setAttribute("href", "pag.html");
    let textopag= document.createTextNode("Página inicial");
    linkpag.appendChild(textopag);
    let header=document.createElement('header');
    header.setAttribute("background-color","#333");
    header.setAttribute("display","inline");
    header.setAttribute("color","white");
    header.appendChild(linkpag);
    let br1=document.createElement('br');
    header.appendChild(br1);
    let linkform=document.createElement('a');
    linkform.setAttribute("href", "formulario.html");
    let textoform= document.createTextNode("Refazer Formulário");
    linkform.appendChild(textoform);
    header.appendChild(linkform);
    let br2=document.createElement('br');
    header.appendChild(br2);
    header.appendChild(css2);
    //header.style.backgroundColor="black"
    //document.write(header.innerHTML);
    //novaPagina.appendChild(header);

    if(el[3].checked === true){
        let div1=document.createElement('div');
        let titulo2=document.createElement('h1');
        div1.appendChild(titulo2);
        let textotitulo2=document.createTextNode('Ação');
        titulo2.appendChild(textotitulo2);
        //Naruto
        let p =document.createElement('p');
        let linknaruto=document.createElement('a');
        linknaruto.setAttribute("class","nomes");
        linknaruto.setAttribute("href", "naruto.html");
        let textonaruto= document.createTextNode("Naruto");
        linknaruto.appendChild(textonaruto);
        //p.appendChild(linknaruto);
        let imgnaruto=document.createElement('img');
        imgnaruto.setAttribute("class","capas");
        imgnaruto.setAttribute("src","./imagens/naruto.jpg");
        imgnaruto.setAttribute("width","200");
        imgnaruto.setAttribute("heigth","250");
        div1.appendChild(linknaruto);
        div1.appendChild(imgnaruto);
        //div1.appendChild(p);
        //Black Clover
        let linkcover=document.createElement('a');
        linkcover.setAttribute("class","nomes");
        linkcover.setAttribute("href", "blackclover.html");
        let textocover= document.createTextNode("Black Clover");
        linkcover.appendChild(textocover);
        let imgcover=document.createElement('img');
        imgcover.setAttribute("class","capas");
        imgcover.setAttribute("src","./imagens/black.jpeg");
        imgcover.setAttribute("width","200");
        imgcover.setAttribute("heigth","250");
        div1.appendChild(linkcover);
        div1.appendChild(imgcover);
        //Bleach
        let linkbleach=document.createElement('a');
        linkbleach.setAttribute("href","bleach.html");
        let textobleach=document.createTextNode("Bleach");
        linkbleach.appendChild(textobleach);
        let imgbleach=document.createElement('img');
        imgbleach.setAttribute("class","capas");
        imgbleach.setAttribute("src","./imagens/bleach.jpg");
        imgbleach.setAttribute("width","200");
        imgbleach.setAttribute("heigth","250");
        div1.appendChild(linkbleach);
        div1.appendChild(imgbleach);
        //////////
        div1.appendChild(css);
        div1.appendChild(css2);
        //opened.appendChild(div1);
        //opened.document.write(div1.innerHTM);
        document.write(div1.innerHTML);

    }
    if(el[4].checked === true){
        let div2=document.createElement('div');
        let titulo1=document.createElement('h1');
        let textotitulo1=document.createTextNode('Romance');
        titulo1.appendChild(textotitulo1);
        div2.appendChild(titulo1);
        //Fruits Basket
        let linkfruits=document.createElement('a');
        linkfruits.setAttribute("href", "fruits.html");
        let textofruits= document.createTextNode("Fruits Basket");
        linkfruits.appendChild(textofruits);
        let imgfruits=document.createElement('img');
        imgfruits.setAttribute("class","capas");
        imgfruits.setAttribute("src","./imagens/Fruits Basket.jpe");
        imgfruits.setAttribute("width","200");
        imgfruits.setAttribute("heigth","250");
        div2.appendChild(linkfruits);
        div2.appendChild(imgfruits);
        //Kimi ni Todoke
        let linkkimi=document.createElement('a');
        linkkimi.setAttribute("href", "kimi.html");
        let textokimi= document.createTextNode("Kimi ni Todoke");
        linkkimi.appendChild(textokimi);
        let imgkimi=document.createElement('img');
        imgkimi.setAttribute("class","capas");
        imgkimi.setAttribute("src","./imagens/Kimi ni Todoke.jpg");
        imgkimi.setAttribute("width","200");
        imgkimi.setAttribute("heigth","250");
        div2.appendChild(linkkimi);
        div2.appendChild(imgkimi);
        //Wotaku ni Koi..
        let linkwotaku=document.createElement('a');
        linkwotaku.setAttribute("href","Wotaku.html");
        let textowotaku=document.createTextNode("Wotaku ni Koi..");
        linkwotaku.appendChild(textowotaku);
        let imgwotaku=document.createElement('img');
        imgwotaku.setAttribute("class","capas");
        imgwotaku.setAttribute("src","./imagens/Wotaku ni Koi wa Muzukashii.jpg");
        imgwotaku.setAttribute("width","200");
        imgwotaku.setAttribute("heigth","250");
        div2.appendChild(linkwotaku);
        div2.appendChild(imgwotaku);
        //////////
        div2.appendChild(css);
        div2.appendChild(css2);
        document.write(div2.innerHTML)

    }
    if(el[5].checked === true){
        let div3=document.createElement('div');
        let titulo3=document.createElement('h1');
        let textotitulo3=document.createTextNode('Yaoi');
        titulo3.appendChild(textotitulo3);
        div3.appendChild(titulo3);
        //Junjou Romantica
        let linkjunjou=document.createElement('a');
        linkjunjou.setAttribute("href", "junjou.html");
        let textojunjou= document.createTextNode("Junjou Romantica");
        linkjunjou.appendChild(textojunjou);
        let imgjunjou=document.createElement('img');
        imgjunjou.setAttribute("class","capas");
        imgjunjou.setAttribute("src","./imagens/Junjou Romantica.jpg");
        imgjunjou.setAttribute("width","200");
        imgjunjou.setAttribute("heigth","250");
        div3.appendChild(linkjunjou);
        div3.appendChild(imgjunjou);
        //Love Stage!!
        let linklove=document.createElement('a');
        linklove.setAttribute("href", "Love Stage.html");
        let textolove= document.createTextNode("Love Stage!!");
        linklove.appendChild(textolove);
        let imglove=document.createElement('img');
        imglove.setAttribute("class","capas");
        imglove.setAttribute("src","./imagens/Love Stage!!.jpg");
        imglove.setAttribute("width","200");
        imglove.setAttribute("heigth","250");
        div3.appendChild(linklove);
        div3.appendChild(imglove);
        //Sekaiichi Hatsukoi
        let linksekaiichi=document.createElement('a');
        linksekaiichi.setAttribute("href","sekaiichi.html");
        let textosekaiichi=document.createTextNode("Sekaiichi Hatsukoi");
        linksekaiichi.appendChild(textosekaiichi);
        let imgsekaiichi=document.createElement('img');
        imgsekaiichi.setAttribute("class","capas");
        imgsekaiichi.setAttribute("src","./imagens/Sekaiichi Hatsukoi.jpg");
        imgsekaiichi.setAttribute("width","200");
        imgsekaiichi.setAttribute("heigth","250");
        div3.appendChild(linksekaiichi);
        div3.appendChild(imgsekaiichi);
        //////////
        div3.appendChild(css);
        div3.appendChild(css2);
        document.write(div3.innerHTML)

    }
    if(el[6].checked === true){
        let div4=document.createElement('div');
        let titulo4=document.createElement('h1');
        let textotitulo4=document.createTextNode('Yuri');
        titulo4.appendChild(textotitulo4);
        div4.appendChild(titulo4);
         //Bloom Into You
         let linkbloom=document.createElement('a');
         linkbloom.setAttribute("href", "");
         let textobloom= document.createTextNode("Bloom Into You");
         linkbloom.appendChild(textobloom);
         let imgbloom=document.createElement('img');
         imgbloom.setAttribute("class","capas");
         imgbloom.setAttribute("src","./imagens/Bloom Into You.jpg");
         imgbloom.setAttribute("width","200");
         imgbloom.setAttribute("heigth","250");
         div4.appendChild(linkbloom);
         div4.appendChild(imgbloom);
         //Citrus
         let linkcitrus=document.createElement('a');
         linkcitrus.setAttribute("href", "");
         let textocitrus= document.createTextNode("Citrus");
         linkcitrus.appendChild(textocitrus);
         let imgcitrus=document.createElement('img');
         imgcitrus.setAttribute("class","capas");
         imgcitrus.setAttribute("src","./imagens/Citrus.jpe");
         imgcitrus.setAttribute("width","200");
         imgcitrus.setAttribute("heigth","250");
         div4.appendChild(linkcitrus);
         div4.appendChild(imgcitrus);
         //Asagao to Kase-san
         let linkasagao=document.createElement('a');
         linkasagao.setAttribute("href","");
         let textoasagao=document.createTextNode("Asagao to Kase-san");
         linkasagao.appendChild(textoasagao);
         let imgasagao=document.createElement('img');
         imgasagao.setAttribute("class","capas");
         imgasagao.setAttribute("src","./imagens/Asagao to Kase-san.jpg");
         imgasagao.setAttribute("width","200");
         imgasagao.setAttribute("heigth","250");
         div4.appendChild(linkasagao);
         div4.appendChild(imgasagao);
         //////////
         div4.appendChild(css);
         div4.appendChild(css2);
        document.write(div4.innerHTML)
 
    }
}
