import 'bootstrap';
import '../styles/main.scss';

console.error('jay');
const projects = [
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/okaformark', // Towards the latter part of the class, you will learn how to host your projects and
    // people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },

];
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const showPage = (e) => {
  const navId = e.target.id;
  const pageElements = document.getElementsByClassName('fullPage');
  for (let i = 0; i < pageElements.length; i += 1) {
    pageElements[i].classList.add('hidePage');
  }
  switch (navId) {
    case 'navToBio':
      document.getElementById('bioPage').classList.remove('hidePage');
      break;
    case 'navToTechnologies':
      document.getElementById('technologiesPage').classList.remove('hidePage');
      break;
    case 'navToProjects':
      document.getElementById('projectsPage').classList.remove('hidePage');
      break;
    default:
  }
};

const addClickEvents = () => {
  const navElements = document.getElementsByClassName('nav-item');
  for (let i = 0; i < navElements.length; i += 1) {
    navElements[i].addEventListener('click', showPage);
  }
};


const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i += 1) {
    domString += '<div class =fullPage>';
    domString += `<h1> ${projects[i].title}</h1>`;
    domString += `<img src = "${projects[i].screenshot}">`;
    domString += `<p> ${projects[i].description}</p>`;
    domString += `<p> ${projects[i].technologiesUsed} </p>`;
    domString += `<a href = ${projects[i].url}> <h3>GitHub Account</h3></a>`;
    domString += `<a href = ${projects[i].githubUrl}> <h3>My GitHub URL</h3></a>`;
    // domString += `<p>${projects[i].available}`;
    domString += '</div>';
    if (projects[i].available === true) {
      printToDom('projectsPage', domString);
    }
  }
};
const init = () => {
  createProjectCards();
  addClickEvents();
};
init();
