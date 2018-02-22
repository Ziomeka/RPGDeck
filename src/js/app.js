(function() {
  let deck = [{
      id: 0,
      title: 'Start',
      image: 'end.jpg'
    },
    {
      id: 1,
      title: 'The Paladin',
      image: 'card01.jpg'
    },
    {
      id: 2,
      title: 'The Keep',
      image: 'card02.png'
    },
    {
      id: 3,
      title: 'The Desert',
      image: 'card03.jpg'
    },
    {
      id: 4,
      title: 'The Wanderer',
      image: 'card04.jpg'
    },
    {
      id: 5,
      title: 'The Owl',
      character: 'neutral',
      image: 'card05.jpg'
    },
    {
      id: 6,
      title: 'Fontanna',
      image: 'card06.jpg'
    }
  ];

  function schuffle(a) {
    return a;
  };

  let currentIndex = 0;
  let nextButton = document.getElementById("nextCard");
  let title = document.getElementById("cardTitle");
  let image = document.getElementById("cardImage");

  function nextCard() {
    currentIndex++;
    currentIndex = currentIndex === deck.length ? 0 : currentIndex;
  };

  function display() {
    title.innerHTML = deck[currentIndex].title;
    image.innerHTML = "<img src='img/" + deck[currentIndex].image + "'>";
  }

  display();

  nextButton.addEventListener('click', function() {
    nextCard();
    display();
  });
})();
