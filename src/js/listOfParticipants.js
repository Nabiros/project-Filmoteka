import * as basicLightbox from 'basiclightbox';
import spinner from './spinner';
import { listOfStudents } from '../js/refs';
import test from '../images/poster-example.jpg';
import gitHub from '../images/gitHub.svg';

const markup = `
<ul class="team-wrapper">
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Team Lead</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Scrum Master</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
  </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
   </li>
  <li class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
   </li>
</ul>`;

listOfStudents.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  spinner();
  document.body.style.overflow = 'hidden';
  modal.show();
  
  window.addEventListener('keydown', closeModalHandler);
  
  function closeModalHandler(event) {
    if (event.code === 'Escape') {
      document.body.style.overflow = "";
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
