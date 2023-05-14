
/* inicio Função do quiz.html */

function startQuiz(){
    console.log("iniciado")
}

/* Fim função quiz.html */


/* inicion Funnção quizQuestions.html*/

function optionChose(opc) {
    fetch('quests.json')
    .then(response => response.json())
    .then(quests => {
        console.log(quests[0].options[opc])
    })
}

/* fim função quizQuestions.html */