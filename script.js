
var titel = document.getElementById('titel');
var mening = document.getElementById('mening')

var vraag = 0;
var votes = [];
var weightedquestions = []

oneensbtn.style.display = 'none';
geenbtn.style.display = 'none';
eensbtn.style.display = 'none';
backbtn.style.display = 'none';
partijbtn.style.display = 'none';
finishbtn.style.display = 'none';



start = () => {
    startbtn.style.display = 'none';
    oneensbtn.style.display = 'inline-block';
    geenbtn.style.display = 'inline-block';
    eensbtn.style.display = 'inline-block';
    backbtn.style.display = 'inline-block';
    partijbtn.style.display = 'inline-block';
    laadvraag(vraag);
}



function laadvraag(question) {
    if (question < 29) {
        titel.innerText = subjects[question]["title"];
        mening.innerText = subjects[question]["statement"];
    } else {
        oneensbtn.style.display = 'none';
        geenbtn.style.display = 'none';
        eensbtn.style.display = 'none';
        finishbtn.style.display = 'inline-block';

    }


}

function stem(vote) {
    votes[vraag] = vote;
    vraag++;
    laadvraag(vraag);

}

function terug() {
    if (vraag > 0) {
        oneensbtn.style.display = 'inline-block';
        geenbtn.style.display = 'inline-block';
        eensbtn.style.display = 'inline-block';
        vraag--;
        laadvraag(vraag);
    }
}


function partijmening() {

    partijbox = document.getElementById('partijen');

    subjects[vraag]['parties'].forEach(function (value, key) {
        var PartyName = document.createElement('h1');
        var PartyPosition = document.createElement('p');
        var PartyOpinion = document.createElement('p');
        PartyName.innerText = "Partij: " + value['name'];
        PartyPosition.innerText = "Positie: " + value['position'];
        PartyOpinion.innerText = value['opinion'];
        partijbox.appendChild(PartyName);
        partijbox.appendChild(PartyPosition);
        partijbox.appendChild(PartyOpinion);



    })

}

finish = () => {
    var vraagid = 0
    oneensbtn.style.display = 'none';
    geenbtn.style.display = 'none';
    eensbtn.style.display = 'none';
    backbtn.style.display = 'none';
    partijbtn.style.display = 'none';
    finishbtn.style.display = 'none';
    titel.style.display = 'none';
    mening.style.display = 'none';
    subjects.forEach(function(value){
        var vraagtitel = document.createElement('p');
        var vraagtitel2 = document.createElement('a');
        vraagtitel.setAttribute('id', vraagid);
        vraagtitel.innerText = value['title'];
        vraagtitel2.onclick = weighted;
        maindiv.appendChild(vraagtitel);
        vraagtitel.appendChild(vraagtitel2);
        vraagid++;
    })

}
 

function weighted(vraagid){
console.log(vraagid);

}


