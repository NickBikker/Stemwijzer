
var titel = document.getElementById('titel');
var mening = document.getElementById('mening')

var vraag = 0;
var votes = [];





function laadvraag(question){
    titel.innerText = subjects[question]["title"];
    mening.innerText = subjects[question]["statement"];

}

function stem(vote){
    votes[vraag] = vote;
    vraag++;
    laadvraag(vraag);

}

function terug(){
    if(vraag>0){
        vraag--;
        laadvraag(vraag);
    }
}


function partijmening(){
   
    partijbox = document.getElementById('partijen');

    subjects[vraag]['parties'].forEach(function(value, key){
        PartyName = document.createElement('h1');
        PartyPosition = document.createElement('p');
        PartyOpinion = document.createElement('p');
        PartyName.innerText = "Partij: " + value['name'];
        PartyPosition.innerText = "Positie: " + value['position'];
        PartyOpinion.innerText = value['opinion'];
        partijbox.appendChild(PartyName);
        partijbox.appendChild(PartyPosition);
        partijbox.appendChild(PartyOpinion);



    })

}



laadvraag(vraag);