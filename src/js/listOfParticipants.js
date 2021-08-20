import * as basicLightbox from 'basiclightbox';
import spinner from './spinner';
import { listOfStudents } from '../js/refs';
import gitHub from '../images/gitHub.svg';
import alexander from '../images/team/Alexander.jpg';
import andrei from '../images/team/Andrei_2.jpg';
import ivanka from '../images/team/Ivanka.jpg';
import maria from '../images/team/Maria_2.jpg';
import nazar from '../images/team/Nazar_2.jpg';
import sergiy from '../images/team/Sergiy.jpg';
import natalia from '../images/team/Natalia_2.jpg';
import olexiiG from '../images/team/Olexii_G.jpg';
import olexiiSh from '../images/team/OlexiiSh.jpg';


import smileyFace from '../images/team/1568622546_2.jpeg';
import reklama from '../images/team/reklama.jpg';


const markup = `
<ul class="team-wrapper">
  <li class="team-card">
    <img src="${nazar}" alt="Nazar" class="team-image">
    <p class="team-name">Nazar</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/Nabiros" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${andrei}" alt="Andrei" class="team-image">
    <p class="team-name">Andrei</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/andreybulanov" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${ivanka}" alt="Ivanka" class="team-image">
    <p class="team-name">Ivanka</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/I-Dvorianska" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${natalia}" alt="Natalia" class="team-image">
    <p class="team-name">Natalia</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/NataliaSorokina" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${maria}" alt="Maria" class="team-image">
    <p class="team-name">Maria</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Maria-Tkh" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${sergiy}" alt="Sergiy" class="team-image">
    <p class="team-name">Sergiy</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Serhii-Chekalov" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${alexander}" alt="Alexander" class="team-image">
    <p class="team-name">Alexander</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/RaiderTs" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${olexiiG}" alt="Oleksii" class="team-image">
    <p class="team-name">Oleksii</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/OleksiiGasly" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
   </li>
  <li class="team-card">
    <img src="${olexiiSh}" alt="
Oleksii" class="team-image">
    <p class="team-name">
Oleksii</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Youralexey" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
   </li>
    <li class="team-card">
    <img src="${reklama}" alt="test" class="team-image">
    <p class="team-name">Here can be your </p>
    <p class="team-role">Advertising</p>
   </li>
</ul>`;

listOfStudents.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  spinner();
  modal.show();
  
  window.addEventListener('keydown', closeModalHandler);
  
  function closeModalHandler(event) {
    if (event.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
