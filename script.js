const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start Game
    const startGame = () => {
        const playBtn = document.querySelector(".play");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".btn");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hand");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });

        const computerOptions = ["Rock", "Paper", "Scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    // Compare Hands
                    compareHands(this.textContent, computerChoice);

                    // Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)
                
                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".pla-score");
        const computerScore = document.querySelector(".com-score");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winnerTxt = document.querySelector(".winner");

        // Checking for a tie
        if(playerChoice === computerChoice){
            winnerTxt.textContent = "It's a tie";
            return;
        }

        // Check for rock
        if(playerChoice === "Rock"){
            if(computerChoice === "Scissors"){
                winnerTxt.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winnerTxt.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // Check for paper
        if(playerChoice === "Paper"){
            if(computerChoice === "Scissors"){
                winnerTxt.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winnerTxt.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        // Check for scissors
        if(playerChoice === "Scissors"){
            if(computerChoice === "Rock"){
                winnerTxt.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winnerTxt.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    playMatch();
}

game();