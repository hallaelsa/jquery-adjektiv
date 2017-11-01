

var overskrift = "halla";
var elText1 = document.getElementById('text1');
var username = "";
var kjonn;
var elKjonn = document.getElementsByName('kjonn');
var elHeading = document.getElementById('heading');
var elName = document.getElementById('name');
var msg = document.getElementById('feedback');
var btn = document.getElementById('btn');
var elInput1 = document.getElementById('inputArea1');
var elInput2 = document.getElementById('inputArea2');






//Sette greeting som overskrift
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow >= 18) {
    greeting = 'God kveld';
} else if(hourNow >= 12) {
    greeting = 'God ettermiddag';
} else if(hourNow > 5) {
    greeting = 'God morgen';
} else {
    greeting = 'Velkommen!!!';
}


elHeading.textContent = greeting;

//input feltet hvor man skriver navnet sitt
function tip() {
    msg.className = 'tip';
    msg.innerHTML = 'f.eks: <i>"Tore"</i>';
}

function check() {
    username = elName.value;
    
    var check = 0;
    for(i = 0; i < elKjonn.length; i++) {
        if(elKjonn[i].checked) {
            check++;
        }
    }

    if(username.length < 2 || !check) {
        msg.textContent = 'Navn og kjønn må fylles ut!';
        return false;
    } else {
        msg.textContent = '';
        return true;
    }
}

elName.addEventListener('focus', tip, false);
elName.addEventListener('blur', check, false);


//lagre navn når man trykker OK
btn.addEventListener('click', btnOnClick, false);

function btnOnClick() {
    if(check()){
        elInput1.className = 'hide';
        if(elKjonn[0].checked) {
            kjonn = 'mann'
        } else {
            kjonn = 'kvinne';
        }
        elText1.textContent = "Hei på deg, " + username + "!";


        elInput2.className = 'show';
    } 
}





    // Fra side 2





