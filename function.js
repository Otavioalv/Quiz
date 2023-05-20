var pos = 0 // Posição da pergunta da varialvel
var percent = 0 
var ponts = 0 // pontuação
var place
const question = document.getElementById("question"); 
const opcs = document.querySelectorAll("#opcs li button");
const processBar = document.getElementById("IProcessBarLiB");
const colors = { //Objeto de cores do ProcessBar
    error: '#da1e28',
    warning: '#fdd13a',
    success: '#24a148'
};

const color = ((val) => { //Definie as cores a serem usadas de acordo com a variavel percent
    //de 0 a 40, de 40 a 80
    if(val >= 0 && val < 40) 
        return colors.error
    else if(val >= 40 && val < 80)
        return colors.warning
    else
        return colors.success

})



function optionChose(opc) { // opc, e a posição da opções de quests[].options[opc]

    fetch('quests.json')
    .then(response => response.json())
    .then(quests => {
        
        const option = quests[pos].options[opc]
        
        //console.log(option)
        if(option === quests[pos].response) {
            ponts++
            console.log(`\nPontos: ${ponts}\n`)
        } 

        if(ponts >= 0 && ponts <= 4)
            place = "RUIM";
        else if(ponts >= 5 && ponts <= 7)
            place = "BOA";
        else
            place = "OTIMA";
        
        pos++;
        percent = (pos * 100) / 10

        processBar.style.width = `${percent}%`;
        processBar.style.backgroundColor = `${color(percent)}` 

        if(pos != 10) {
            question.innerHTML = quests[pos].question;

            Array.from(opcs).map(function(opc, p) {
                //console.log(`Nome: ${opc.innerHTML}  posição: ${p}`)
                opc.innerHTML = quests[pos].options[p]
            });
        }
        else 
            endQuests();
    });
}
/* fim função quizQuestions.html */
function endQuests(){
    console.log("Fim da questoes");

    const endQuest = document.querySelectorAll("#typeScreen");
    var percentCircle = 0;
    var percentProgress = 0;
    
    console.log(ponts)

    if(ponts != 0) {
        percentCircle = (ponts * 100) / 10;
        percentProgress = 3.6 * percentCircle;

        console.log("porcento progresso: ", percentProgress);
    }

    endQuest[0].innerHTML = `
        <h1>Aproveitamento: <span style="color: ${color(percentCircle)}">${percentCircle}%</span></h1>
        
        <div class="container">
            <div class="circular-progress" style="background: conic-gradient(${color(percentCircle)} ${percentProgress}deg, #ededed 0deg)">
                <span class="progress-value" style="color: ${color(percentCircle)}">${percentCircle}%</span>
            </div>
        </div>

        <h1>Classificação: <span style="color: ${color(percentCircle)}">${place}</span></h1>
        <p>
            <div>
                <a href="./about.html" class="btn" onclick="startQuiz()">SAIR</a>
            </div>
        </p>`
}