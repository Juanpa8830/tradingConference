// dinamyc cards

const cards = [
  {
    id: 'card1',
    name: 'Oliver L. Velez',
    position: 'Co-founder of Pristine Capital Holdings, Inc.',
    featImage: './images/oliverlogo.png',
    description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`,
  },

  {
    id: 'card2',
    name: 'Marcello Arrambide',
    position: 'Founder of Day Trading Academy.',
    featImage: './images/marcellologo.png',
    description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`,
  },

  {
    id: 'card3',
    name: 'Steve Cohen',
    position: 'Co-founder of Pristine Capital Holdings, Inc.',
    featImage: './images/steveCohen.png',
    description: `His company was called S. A. C. Capital advisors and started with a capital of 20 million dollars.
     Currently, Cohen is in the thirtieth place among the people with the most money in the United States.`,
  },

  {
    id: 'card4',
    name: 'David Tepper',
    position: 'President and founder of Appaloosa Management.',
    featImage: './images/DavidTepper.png',
    description: `He also made several investments in which he generated profits, but it was not until 2009 that he won 
    another quite considerable sum, which was close to 7 billion dollars.`,
  },

  {
    id: 'card5',
    name: 'Roberto A. Ruarte',
    position: 'forerunner of Technical Analysis in Argentina and Latin America and founder of the company Ruarte Reports in 1991.',
    featImage: './images/RobertoDuarte.png',
    description: 'Fresh and relevant financial instruments based on Elliott Wave Theory and Technical Analysis',
  },

  {
    id: 'card6',
    name: 'John Bollinger',
    position: 'Technical analyst and television commentator. Chairman and founder of Bollinger Capital Management Inc.',
    featImage: './images/JohnBollinger.png',
    description: `he is the creator of the "Bollinger Bands" and other related tools that have been integrated into most
     graphics platforms and analytical software.`,
  },
];

const cardsList = document.getElementById('featcards');

for (let i = 0; i < 2; i += 1) {
  const cardMobileTemplate = `
    
    <div class="${cards[i].id} showmobile">

        <img class="oliver" src="${cards[i].featImage}" alt="Oliver Image">

        <div class="card1rs">
            <h4 class="feat1h4">${cards[i].name}</h4>
            <p class="feat1p1">${cards[i].position}</p>
            <hr class="division-c1">
            <p class="feat1p2">${cards[i].description}</p>
        </div>

    </div>`;

  cardsList.innerHTML += cardMobileTemplate;
}

for (let i = 2; i < cards.length; i += 1) {
  const cardMobileTemplate = `
    
    <div class="${cards[i].id} hidemobile">

        <img class="oliver" src="${cards[i].featImage}" alt="Oliver Image">

        <div class="card1rs">
            <h4 class="feat1h4">${cards[i].name}</h4>
            <p class="feat1p1">${cards[i].position}</p>
            <hr class="division-c1">
            <p class="feat1p2">${cards[i].description}</p>
        </div>

    </div>`;

  cardsList.innerHTML += cardMobileTemplate;
}

// about section

const hbutton = document.querySelector('.hamb');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('.topx');
const contentMenu = document.querySelector('#content');
const libutton1 = document.querySelector('.top-a1');
const libutton2 = document.querySelector('.top-a2');
const morebutton = document.querySelector('.f1bdown');
const lessbutton = document.querySelector('.f1bup');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');

hbutton.addEventListener('click', () => {
  mobileMenu.classList.replace('hidemobile', 'showmobile');
  contentMenu.classList.replace('showcontent', 'hidemobile');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.replace('showmobile', 'hidemobile');
  contentMenu.classList.replace('hidemobile', 'showcontent');
});

libutton1.addEventListener('click', () => {
  mobileMenu.classList.replace('showmobile', 'hidemobile');
  contentMenu.classList.replace('hidemobile', 'showcontent');
});

libutton2.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
});

morebutton.addEventListener('click', () => {
  card3.classList.replace('hidemobile', 'showmobile');
  card4.classList.replace('hidemobile', 'showmobile');
  card5.classList.replace('hidemobile', 'showmobile');
  card6.classList.replace('hidemobile', 'showmobile');
  morebutton.classList.replace('showcontent', 'hidemobile');
  lessbutton.classList.replace('hidemobile', 'showcontent');
});

lessbutton.addEventListener('click', () => {
  card3.classList.replace('showmobile', 'hidemobile');
  card4.classList.replace('showmobile', 'hidemobile');
  card5.classList.replace('showmobile', 'hidemobile');
  card6.classList.replace('showmobile', 'hidemobile');
  morebutton.classList.replace('hidemobile', 'showcontent');
  lessbutton.classList.replace('showcontent', 'hidemobile');
});
