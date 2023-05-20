
/* inicio Função do quiz.html */

function startQuiz(){
    console.log("iniciado");
}

/* Fim função quiz.html */


/* inicion Funnção quizQuestions.html*/
var pos = 0
var question = document.getElementById("question");
 /*    opc_0 = document.getElementById("opc-0"),
    opc_1 = document.getElementById("opc-1"),
    opc_2= document.getElementById("opc-2"),
    opc_3 = document.getElementById("opc-3"); */


var opcs = document.querySelectorAll("#opcs li button");
console.log(opcs);

function optionChose(opc) { // opc, e a posição da opções de quests[].options[opc]


    fetch('quests.json')
    .then(response => response.json())
    .then(quests => {
        const option = quests[pos].options[opc]
        
        //console.log(option)
        if(option === quests[pos].response) {
            console.log("\nopção correta\n");
        } 

        console.log(pos);
        pos++;
        console.log(pos);

        question.innerHTML = quests[pos].question;

        Array.from(opcs).map(function(opc, p) {
            console.log(`Nome: ${opc.innerHTML}  posição: ${p}`)
        
            opc.innerHTML = quests[pos].options[p]
        });  
        
    });
}
/* fim função quizQuestions.html */