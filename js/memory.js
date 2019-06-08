var Memory = {};

Memory.deck = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6"];
Memory.deckLength = Memory.deck.length;
Memory.cards = document.querySelectorAll(".back");

Memory.dealCards = function () {
    Memory.cards.forEach(function (card, index) {
        var dealRandomCard = randomizeCards(Memory.deck);
        card.setAttribute('img-path', "./img/" + dealRandomCard + ".jpg");
        card.addEventListener('click', function (event) {
            var card = event.target;
            flipCard(card, index);
        });
    })
}

var clickCounter = 0;
var isFlipped = false;
var card1;
var card2;
var isMatched = 0;

function flipCard(card, index) {
    if (isFlipped == false && clickCounter < 2) {
        card.setAttribute("src", card.getAttribute('img-path'));
        card1 = card;
        clickCounter ++;
        isFlipped = true;
    } else if (isFlipped == true && clickCounter < 2) {
        card.setAttribute("src", card.getAttribute('img-path'));
        card2 = card;
        clickCounter ++;
        if (card1.getAttribute("src") == card2.getAttribute("src")) {
            isFlipped = false;
            clickCounter = 0;
            if (isMatched < Memory.deckLength / 2) {
                isMatched++;
            } if (isMatched == Memory.deckLength / 2) {
                console.log("You've won the game!")
            }
        } else {
            setTimeout(function () {
                card1.setAttribute("src", "./img/backcard.jpg");
                card2.setAttribute("src", "./img/backcard.jpg");
                isFlipped = false;
                clickCounter = 0;
            }, 1000)
        }
    }
}

function randomizeCards(deck) {
    var randomIndex = Math.floor((Math.random() * deck.length));
    var card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
}

window.addEventListener('load', Memory.dealCards);