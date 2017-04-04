// JavaScript File
var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 90;
};

var cards = document.querySelectorAll(".card");

//array with all of the back of the card pictures
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

var animals = [
    "match-img/bear.jpg",
    "match-img/bird.jpg",
    "match-img/cat.jpg",
    "match-img/chicken.jpg",
    "match-img/cow.jpg",
    "match-img/dog.jpg",
    "match-img/giraffe.jpg",
    "match-img/monkey.jpg",
    "match-img/penguin.jpg",
    "match-img/turtle.jpg",
    "match-img/bear.jpg",
    "match-img/bird.jpg",
    "match-img/cat.jpg",
    "match-img/chicken.jpg",
    "match-img/cow.jpg",
    "match-img/dog.jpg",
    "match-img/giraffe.jpg",
    "match-img/monkey.jpg",
    "match-img/penguin.jpg",
    "match-img/turtle.jpg",
];
shuffle(animals);

var cardsOpen = 0;
var card1 = {
    image: "blueCard",
    element: undefined,
    id: undefined
};

var card2 = {
    image: "blueCard",
    element: undefined,
    id: undefined
};

// var blueCard = document.getElementById("blueCard");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(evt) {
        // alert(parseInt(evt.target.id));
        evt.target.src = animals[parseInt(evt.target.id)];

        cardsOpen++;
        
        if (cardsOpen === 2) {
            card2.element = evt.target;
            card2.id = card2.element.id;
            card2.image = card2.element.src;
            if (card2.image === card1.image) {
            }
            else if (card2.image !== card1.image) {
                setTimeout(function() {
                    //do what you need here
                    card2.element.src = "blueCard.png";
                    card1.element.src = "blueCard.png";
                }, 1000);
            }
            cardsOpen = 0;
        }
        else if (cardsOpen === 1) {
            card1.element = evt.target;
            card1.id = card1.element.id;
            card1.image = card1.element.src;
            card1.element!== card2.element;
            //make sure card 1 element is different than "card 2" element
            
        }
        //are we on card 1 or 2 and place info for each card into card variables
        
        // if (cardsOpen === 2 && parseInt(evt.target.id) !== parseInt(evt.target.id)) {
        //     evt.target.src = blueCard.png;
        // }
        // if (cardsOpen === 2 && evt.target.id === evt.target.id){
        //     // alert("test");
        // }
        // alert(cardsOpen);
    });
}
