// dinamyc cards

const cards = [
    {
        id: 'card1',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
    },

    {
        id: 'card2',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
    },

    {
        id: 'card3',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
    },

    {
        id: 'card4',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
    },

    {
        id: 'card5',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
    },

    {
        id: 'card6',
        name: 'Oliver L. Velez',
        position: 'Co-founder of Pristine Capital Holdings, Inc.',
        featImage: './images/oliverlogo.png',
        description: `has been the subject of numerous articles and books written about Wall Street&apos;s
        most successful traders, including popular books such as Bulls, Bears, and  Brains.`
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



