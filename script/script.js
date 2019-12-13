// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
};

const game = {
    playerHand: '',
    aiHand: ''
};

const hands = [...document.querySelectorAll('.select img')];  //operator rest...
console.log(hands);

const handSelection = (e) => {
    hands.forEach(hand => {
        hand.style.opacity = '0.3';
        hand.style.boxShadow = '';
    });
    const current = e.currentTarget;
    game.playerHand = current.dataset.option;
    // console.log(game.playerHand);
    current.style.opacity = '1';
    current.style.boxShadow = '0 0 0 5px red';
};

hands.forEach(hand => {
   hand.addEventListener('click', handSelection);
});

// console.log(game.playerHand);

const aiChoice = () => {
    const aiChoise = Math.floor(Math.random() * 3);
    game.aiHand = hands[aiChoise];
    return game.aiHand.dataset.option;
};

const startGame = () => {
    //(game.playerHand ? console.log(game.playerHand) : console.log('wybierz jedna z trzech opcji')) // test ternary operator
    if (game.playerHand) {
        game.aiHand = aiChoice();
    } else {
        console.log('wybierz jedna z trzech opcji');
    }
};

document.querySelector('button.start').addEventListener('click', startGame);;
