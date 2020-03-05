
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
resultbtn.style.display = 'none';
partijen.style.display = 'none';



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

    if (partijen.style.display === "none") {
        partijen.style.display = "block";
    } else {
        partijen.style.display = "none";
    }



    subjects[vraag]['parties'].forEach(function (value, key) {
        var PartyName = document.createElement('h1');
        var PartyPosition = document.createElement('p');
        var PartyOpinion = document.createElement('p');
        PartyName.innerText = "Partij: " + value['name'];
        PartyPosition.innerText = "Positie: " + value['position'];
        PartyOpinion.innerText = value['opinion'];
        partijen.appendChild(PartyName);
        partijen.appendChild(PartyPosition);
        partijen.appendChild(PartyOpinion);



    })

}

finish = () => {
    console.log(votes);
    var vraagid = 0;
    oneensbtn.style.display = 'none';
    geenbtn.style.display = 'none';
    eensbtn.style.display = 'none';
    backbtn.style.display = 'none';
    partijbtn.style.display = 'none';
    finishbtn.style.display = 'none';
    titel.style.display = 'none';
    mening.style.display = 'none';
    resultbtn.style.display = 'inline-block';
    subjects.forEach(function(value){
        var vraagtitel = document.createElement('p');
        vraagtitel.setAttribute('id', vraagid);
        vraagtitel.innerText = value['title'];
        vraagtitel.addEventListener( 'click', function(){
            var elemid = vraagtitel.getAttribute('id')
            weighted(elemid)
          } );
        titeldiv.appendChild(vraagtitel);
        vraagid++;
    })

}
 

function weighted(vraagid){
    if(weightedquestions.indexOf(vraagid) == -1){
        weightedquestions.push(vraagid);
    }else{
        var remove = weightedquestions.indexOf(vraagid);
        weightedquestions.splice(remove, 1);
    }
    console.log(weightedquestions);




}

function results() {

    console.log('ik was hier')

}


