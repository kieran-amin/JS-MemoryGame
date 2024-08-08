document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("resetButton").addEventListener("click", function() {
        resetGuessCount();
    });
    

    //card options
    const cardArray = [
        {   
            name: "fries", 
            img: 'images/fries.png'
        },
        {
            name: "fries", 
            img: 'images/fries.png'
        },
        {
            name: "cheeseburger", 
            img: 'images/cheeseburger.png'
        },
        {
            name: "cheeseburger", 
            img: 'images/cheeseburger.png'
        },
        {
            name: "hotdog", 
            img: 'images/hotdog.png'
        },
        {
            name: "hotdog", 
            img: 'images/hotdog.png'
        },
        {
            name: "ice-cream", 
            img: 'images/ice-cream.png'
        },
        {
            name: "ice-cream", 
            img: 'images/ice-cream.png'
        },
        {
            name: "milkshake", 
            img: 'images/milkshake.png'
        },
        {
            name: "milkshake", 
            img: 'images/milkshake.png'
        },
        {
            name: "pizza", 
            img: 'images/pizza.png'
        },
        {
            name: "pizza", 
            img: 'images/pizza.png'
        },
    ]

    

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const correctDisplay = document.querySelector('#correct')
    // const guessDisplay = document.getElementById('guess')
    // const guesses = parseInt(guessDisplay.getAttribute("data-guesses"))
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        grid.innerHTML = ''
        cardArray.sort(() => 0.5 - Math.random())
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        resultDisplay.textContent = 0;
        correctDisplay.textContent = "Select two pictures to begin!"
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            correctDisplay.textContent = "Correct!"
            // alert("You found a match!")
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            // alert("Sorry, try again")
            correctDisplay.textContent = "Wrong again."
            // wrongGuess++
            // correctDisplay.textContent = ""
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length/2) {
            resultDisplay.textContent = "Congratulations, you won!"
        }
        incrementGuessCount()
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    function incrementGuessCount() {
        var guessElement = document.getElementById("guessCount")
        var currentGuessCount = parseInt(guessElement.getAttribute("data-guesses"));
        currentGuessCount += 1
        guessElement.setAttribute("data-guesses", currentGuessCount)
        guessElement.textContent = currentGuessCount
    }

    function resetGuessCount(){
        var guessElement = document.getElementById("guessCount")
        guessElement.setAttribute("data-guesses", 0);
        guessElement.textContent = 0;
        createBoard();
    }

    createBoard();




})