const recentWorkContainer = document.getElementById('multi-post-grid');
const recentWork = [
  {
    picFile: 'work1.png',
    project_title: 'Multi-Post Stories',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skill: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    picFile: 'work2.png',
    project_title: 'Multi-Post Stories',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skill: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    picFile: 'work3.png',
    project_title: 'Multi-Post Stories',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skill: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    picFile: 'work4.png',
    project_title: 'Multi-Post Stories',
    description: 'A daily section of privately personalized reads; no accounts or sign-ups required. has been the industry&#x27;s standards dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    skill: ['css', 'html', 'bootstrap', 'Ruby'],
  },
];
const loadRecentWork = () => {
  let cardRecentWork = '';
  for (let recentWorkIndex = 0; recentWorkIndex < recentWork.length; recentWorkIndex += 1) {
    const card = `<div class="multi-post multi-post-${recentWorkIndex + 1}">
        <img class="image-placeholder image-${recentWorkIndex + 1}" src="./image/Recent-work/${recentWork[recentWorkIndex].picFile}" alt="work-image"></img>
        <div class="flex-container flex-container-${recentWorkIndex + 1}">
            <h2 class="multi-post-header">${recentWork[recentWorkIndex].project_title}</h2>
            <p class="multi-post-paragraph">${recentWork[recentWorkIndex].description}</p>
            <ul class="multi-post-skill">
                <li class="post-skill">
                    <p class="skill-lang">${recentWork[recentWorkIndex].skill[0]}</p>
                </li>
                <li class="post-skill">
                    <p class="skill-lang">${recentWork[recentWorkIndex].skill[1]}</p>
                </li>
                <li class="post-skill">
                    <p class="skill-lang">${recentWork[recentWorkIndex].skill[2]}</p>
                </li>
                <li class="post-skill">
                    <p class="skill-lang">${recentWork[recentWorkIndex].skill[3]}</p>
                </li>
            </ul>
            <button type="button" class="see-project">See Project</button>
        </div>
        </div>`;
    cardRecentWork += card;
  }
  recentWorkContainer.innerHTML = cardRecentWork;
};
loadRecentWork();

const popupResentWork = [
  {
    title: 'Multi-post story',
    img: 'popupPortfolio.png',
    image: 'SnapShootPortfolio-(2).png',
    pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    pageDescriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    skills: ['html', 'Ruby on rails', 'css', 'Github'],
    links: ['https://github.com/aron-helu', 'https://aron-helu.github.io/mobile-version'],
  },
];

const loadPopUp = (id) => {
  id = 0;
  const popUp = `<div class="popup-container">
        <div class="ar">
            <h2 class="title popup-header">${popupResentWork[id].title}
                <span class="material-symbols-outlined close-popup-img">close</span>
            </h2> 
            <div class="popupImg">
                <img class="img-mobile" src="./image/Background-image/${popupResentWork[id].image}">
                <img class="popup-Desktop" src="./image/Recent-work/${popupResentWork[id].img}">
            </div>
            <div class="popup-content">
                <p class="popup-text">${popupResentWork[id].pageDescription}</p>
                <p class="popup-text-Desktop">${popupResentWork[id].pageDescriptionDesktop}</p>
                <ul class="popup-skill-container tools">
                    <li class="popup-list">${popupResentWork[id].skills[0]}</li>
                    <li class="popup-list">${popupResentWork[id].skills[1]}</li>
                    <li class="popup-list">${popupResentWork[id].skills[2]}</li>
                    <li class="github-icon popup-list">${popupResentWork[id].skills[3]}</li>
                </ul>
                <div class="button-frames">
                    <a href="${popupResentWork[id].links[1]}" class="button-popup-1">See Live</a>
                    <a href="${popupResentWork[id].links[0]}" class="button-popup-2">See Source</a>
                </div>
            </div>
        </div>
    </div>`;
  const popUpContainer = document.getElementById('popupPage');
  popUpContainer.innerHTML = popUp;
};

loadPopUp();

const popUpPage = document.querySelector('.modal-popup');

const closePopup = document.querySelector('.close-popup-img');

const trigger = document.querySelectorAll('.see-project');

function openPage() {
  popUpPage.classList.toggle('show-modal');
}

function winOnClick(event) {
  if (event.target === popUpPage) {
    openPage();
  }
}

trigger.forEach((element) => {
  element.addEventListener('click', openPage);
});

closePopup.addEventListener('click', openPage);

window.addEventListener('click', winOnClick);