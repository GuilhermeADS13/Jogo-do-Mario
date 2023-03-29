let container = document.querySelector("#container");
let player = document.querySelector("#player");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaraçao de variavel
let interval = null;
let playerScore = 0;


//funçao da pontuaçao
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//começo do jogo
window.addEventListener("keydown", (start) => {
    //    console.log(começo);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 6s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //pontos
        let playerScore = 0;
        interval = setInterval(scoreCounter, 20);
    }
});


//Pulo do Mario
window.addEventListener("keydown", (e) => {
   

    if (e.key == "ArrowUp")
        if (player.classList != "playerActive") {
            player.classList.add("playerActive");

         
            setTimeout(() => {
                player.classList.remove("playerActive");
            }, 500);
        }
});


let result = setInterval(() => {
    let playerBottom = parseInt(getComputedStyle(player).getPropertyValue("bottom"));
    

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    

    if (playerBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
       

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
