
let art = document.getElementById("act");
let elem;

createArt.addEventListener("click", function (){
    elem = document.createElement("div");
    art.innerHTML = "<div class=\"article-text\">\n" +
        "                </div>";
    elem.classList = "article-maker-content";
    elem.setAttribute("contenteditable", "true");
    elem.setAttribute("width", "500px");
    elem.setAttribute("height", "200px");
    elem.innerHTML = "<div class=\"article-text\">\n" +
        "                </div>";
});

let colorCh = document.getElementById("clStyle");

let cursive = document.getElementById("curStyle");
let bold = document.getElementById("boldStyle");
let underl = document.getElementById("underlineStyle");

let pType = document.getElementById("pType");
let hType = document.getElementById("hType");

hType.addEventListener("click", function (){
   art.innerHTML += "<h2 class=\"article-header\">Header</h2>";
   elem.innerHTML += "<h2 class=\"article-header\">Header</h2>";
});

pType.addEventListener("click", function () {
    art.innerHTML += "<div class='article-text'><p>Текст</p></div>";
    elem.innerHTML += "<div class='article-text'><p>Текст</p></div>";
});

colorCh.addEventListener("input", function (){
    console.log(colorCh.value)
    document.execCommand('foreColor', false, colorCh.value);
});

cursive.addEventListener("click", function (){
   makeItalic();
});

bold.addEventListener("click", function (){
    makeBold();
});

underl.addEventListener("click", function (){
    makeUnderline()
});

function makeBold() {
    document.execCommand('bold');
}

function makeItalic() {
    document.execCommand('italic');
}

function makeUnderline() {
    document.execCommand('underline');
}

let chBtn = document.getElementById("numPage");

document.addEventListener("keydown", function (e){
    if(e.keyCode == 13){
        let maker = document.querySelector(".sec-menu");
        maker.style.visibility = "hidden";
        let cont = document.querySelector(".container");
        elem.innerHTML = art.innerHTML;
        if(chBtn.innerText == "1"){
            let toElem= document.getElementById("firstArticle");
            elem.classList = "article right-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "firstArticle";
        }
        else if(chBtn.innerText == "2"){
            let toElem = document.getElementById("secondArticle");
            elem.classList = "article left-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "secondArticle";
        }
        else if(chBtn.innerText == "3"){
            let toElem = document.getElementById("thirdArticle");
            elem.classList = "article right-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "thirdArticle";
        }
        else if(chBtn.innerText == "4"){
            let toElem = document.getElementById("fourthArticle");
            elem.classList = "article left-art";
            toElem.parentNode.replaceChild(elem, toElem);
            elem.id = "fourthArticle";
        }


        const url = 'https://kotya333.github.io/test/server.js';

        let q1 = document.getElementById("firstArticle").innerHTML;
        let q2 = document.getElementById("secondArticle").innerHTML;
        let q3 = document.getElementById("thirdArticle").innerHTML;
        let q4 = document.getElementById("fourthArticle").innerHTML;

        const data = {
            element1: q1,
            element2: q2,
            element3: q3,
            element4: q4
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        elem.setAttribute("contenteditable", "false")
    }
})


chBtn.addEventListener("click", function () {
   let vl = Number(chBtn.innerText);
    console.log(vl);
   if(vl == 1){
       chBtn.innerText = 2;
   }
    if(vl == 2){
        chBtn.innerText = 3;
    }
    if(vl == 3){
        chBtn.innerText = 4;
    }
    if(vl == 4){
        chBtn.innerText = 1;
    }
});
