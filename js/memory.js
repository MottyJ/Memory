function myFunction(x) {
    if (x.matches) {
      document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div>';
    } else {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div>';
    }
  }
  var x = window.matchMedia("(max-width: 400px)")
  myFunction(x)
  x.addListener(myFunction)


var Memory = {};

Memory.deck = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6"];
Memory.deckLength = Memory.deck.length;
Memory.cards = document.querySelectorAll(".back");

Memory.randomizeCards = function (deck) {
    var randomIndex = Math.floor((Math.random() * deck.length));
    var card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
}

Memory.dealCards = function () {
    Memory.cards.forEach(function (card, index) {
        var dealRandomCard = Memory.randomizeCards(Memory.deck);
        card.setAttribute('img-path', "./img/" + dealRandomCard + ".jpg");
        card.addEventListener('click', function (event) {
            var card = event.target;
            Memory.flipCard(card, index);
        });
    })
}

Memory.clickCounter = 0;
Memory.isFlipped = false;
Memory.isMatched = 0;

Memory.flipCard = function (card, index) {
    if (Memory.isFlipped == false && Memory.clickCounter < 2) {
        card.setAttribute("src", card.getAttribute('img-path'));
        Memory.card1 = card;
        Memory.i1 = index;
        Memory.clickCounter++;
        Memory.isFlipped = true;
    } else if (Memory.isFlipped == true && Memory.clickCounter < 2) {
        card.setAttribute("src", card.getAttribute('img-path'));
        Memory.card2 = card;
        Memory.i2 = index;
        Memory.clickCounter++;
        if (Memory.card1.getAttribute("src") == Memory.card2.getAttribute("src") && Memory.i1 !== Memory.i2) {
            Memory.isFlipped = false;
            Memory.clickCounter = 0;
            if (Memory.isMatched < Memory.deckLength / 2) {
                Memory.isMatched++;
            }
            if (Memory.isMatched == Memory.deckLength / 2) {
                console.log("You've won the game!")
            }
        } else {
            setTimeout(function () {
                Memory.card1.setAttribute("src", "./img/backcard.jpg");
                Memory.card2.setAttribute("src", "./img/backcard.jpg");
                Memory.isFlipped = false;
                Memory.clickCounter = 0;
            }, 1000)
        }
    }
}

window.addEventListener('load', Memory.dealCards);