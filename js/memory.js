var Memory = {};

Memory.responsiveMeEasy = function (size) {
    if (size.matches) {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    } else {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    }
}

Memory.responsiveMeMedium = function (size) {
    if (size.matches) {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    } else {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    }
}

Memory.responsiveMeHard = function (size) {
    if (size.matches) {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    } else {
        document.getElementById("responsive").innerHTML = '<div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div class="row"><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div><div class="card"><img src="./img/backcard.jpg" class="back" /></div></div><div id="wrong-guesses"><h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5></div>';
    }
}



Memory.newGame = function () {
    var modal = document.getElementById("modal-wrapper");
    if (!this.playedGame) {
        modal.style = "display: absolute";
    }
    var logNewGame = document.getElementById("new-game");
    logNewGame.addEventListener('click', function clicked() {
        if (document.getElementById('easy').checked) {
            Memory.deck = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6"];
            Memory.deckLength = Memory.deck.length;
            Memory.mySize = window.matchMedia("(max-width: 420px)");
            Memory.responsiveMeEasy(Memory.mySize);
            Memory.mySize.addListener(Memory.responsiveMeEasy);
            modal.style = "display: none";
            Memory.dealCards();
        }
        if (document.getElementById('medium').checked) {
            Memory.deck = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca7", "ca8", "ca9", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca7", "ca8", "ca9"];
            Memory.deckLength = Memory.deck.length;
            Memory.mySize = window.matchMedia("(max-width: 420px)");
            Memory.responsiveMeMedium(Memory.mySize);
            Memory.mySize.addListener(Memory.responsiveMeMedium);
            modal.style = "display: none";
            Memory.dealCards();
        }
        if (document.getElementById('hard').checked) {
            Memory.deck = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca7", "ca8", "ca9", "ca10", "ca11", "ca12", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca7", "ca8", "ca9", "ca10", "ca11", "ca12"];
            Memory.deckLength = Memory.deck.length;
            Memory.mySize = window.matchMedia("(max-width: 420px)");
            Memory.responsiveMeHard(Memory.mySize);
            Memory.mySize.addListener(Memory.responsiveMeHard);
            modal.style = "display: none";
            Memory.dealCards();
        }
    })
}





Memory.randomizeCards = function (deck) {
    var randomIndex = Math.floor((Math.random() * deck.length));
    var card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
}

Memory.dealCards = function () {
    Memory.cards = document.querySelectorAll(".back");
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
Memory.playedGame = false;
Memory.wrongGuesses = 0;

Memory.displayWrongGuesses = function () {
   document.getElementById("wrong-guesses").innerHTML = '<h5>Wrong Guesses: ' + Memory.wrongGuesses + '</h5>';
}

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
                document.getElementById("modal-wrapper").innerHTML = '<div class="modal"><div class="modal-title">You Won!</div><h3>You had ' + Memory.wrongGuesses + ' wrong guesses</h3><h2>Wanna play again?</h2><div class="modal-content"><h3>Please select difficulty: </h3><div class="center"><div><label for="easy">Easy</label><input type="radio" id="easy" name="mode" /></div><div><label for="medium">Medium</label><input type="radio" id="medium" name="mode" /></div><div><label for="hard">Hard</label><input type="radio" id="hard" name="mode" /></div></div></div><br><button id="new-game">Play!</button></div>'
                var modal = document.getElementById("modal-wrapper");
                modal.style = "display: absolute";
                this.playedGame = true;
                Memory.isMatched = 0;
                Memory.wrongGuesses = 0;
                this.newGame();
            }
        } else {
            setTimeout(function () {
                Memory.card1.setAttribute("src", "./img/backcard.jpg");
                Memory.card2.setAttribute("src", "./img/backcard.jpg");
                Memory.wrongGuesses++;
                Memory.displayWrongGuesses();
                Memory.isFlipped = false;
                Memory.clickCounter = 0;
            }, 1000)
        }
    }
}

window.addEventListener('load', Memory.newGame);