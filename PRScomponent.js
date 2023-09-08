let UserPoints = 0;
let PCPoints = 0;

let instructions = document.querySelector("#instructions");
let containerUser = document.querySelector("#user-points");
let containerPC = document.querySelector("#pc-points");
let message = document.querySelector("#message");
let pointContainer = document.querySelector("#win-point");
let weapon = document.querySelector("#weapon");

let containerUserMove = document.querySelector("#user-move");
let containerPCMove = document.querySelector("#pc-move");
let restart = document.querySelector("#restart")

let weapons = document.querySelectorAll(".pick");
weapons.forEach(b => {
    b.addEventListener("click", Start);
});

function Start(e) {
    
    let PCMove = Math.floor(Math.random() * 3);
    let userMove = e.currentTarget.id;



    if (PCMove === 0) {
        PCMove = "piedra";
    } else if (PCMove === 1) {
        PCMove = "papel"
    } else if (PCMove === 2) {
        PCMove = "tijera"
    }

  

    if (
        (userMove === "rock-btn" && PCMove === "tijera") ||
        (userMove === "scissors-btn" && PCMove === "papel") ||
        (userMove === "paper-btn" && PCMove === "piedra")
    ) {
        UserWins();
    } else if (
        (PCMove === "piedra" && userMove === "scissors-btn") ||
        (PCMove === "tijera" && userMove === "paper-btn") ||
        (PCMove === "papel" && userMove === "rock-btn")
    ) {
        PCWins();
    } else {
        Draw();
    }

    message.classList.remove("disabled");
    
    if (userMove === "paper-btn")
    {
    containerUserMove.innerText = "papel";
    }
    else if (userMove === "rock-btn")
    {
    containerUserMove.innerText = "piedra";
    }
    else if (userMove === "scissors-btn")
    {
        containerUserMove.innerText = "tijera";
    }

    containerPCMove.innerText = PCMove;

    if (UserPoints === 5 || PCPoints === 5) {

        if (UserPoints === 5) {
            instructions.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }

        if (PCPoints === 5) {
            instructions.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        weapon.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", Restart);
    }


}

function UserWins() {
    UserPoints++;
    containerUser.innerText = UserPoints;
    pointContainer.innerText = "¡Ganaste un punto!"
}

function PCWins() {
    PCPoints++;
    containerPC.innerText = PCPoints;
    pointContainer.innerText = "¡La computadora ganó un punto!"
}

function Draw() {
    pointContainer.innerText = "¡Empate! "
}

function Restart() {
    restart.classList.add("disabled");
    weapon.classList.remove("disabled");
    message.classList.add("disabled");

    UserPoints = 0;
    PCPoints = 0;
    
    containerUser.innerText = UserPoints;
    containerPC.innerText = PCPoints;

    instructions.innerText = "El primero en llegar a 5 puntos gana."
}