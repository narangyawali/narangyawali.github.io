var typing = document.querySelector(".typing");

var wordlink = "https://narangyawali.github.io/worldListGen/";
var word = document.querySelector("#word");
var llist ="https://narangyawali.github.io/linesGen/";
const btext = "HELLO WORLD";
let index =0;


function goto(link){
    window.open(wordlink);
}

function dino(){

    window.open("https://narangyawali.github.io/dino_game/");

}


function sub(){

    window.open("https://narangyawali.github.io/subway/");
}


function scb(){

    window.open("https://narangyawali.github.io/scrollbar-in-js/");

}

function wl(){

    window.open(wordlink);

}

function ll(){
window.open(llist);
}


function type(){
if (index < btext.length){

    typing.textContent += btext.charAt(index);
    index ++;
    setTimeout(type,500);

}
else{
	setTimeout(erase ,1000);
   	
}
function erase(){
	if (index >0){
	typing.textContent = btext.substring(0,index-1);
    index--;
    setTimeout(erase, 250);
    }
    else{
        type();
    }
    
}

}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type,2500);


});
