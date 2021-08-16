import * as basicLightbox from 'basiclightbox';
import spinner from './spinner';
import { listOfStudents } from '../js/refs';
import test from '../images/poster-example.jpg';
import gitHub from '../images/gitHub.svg';

const markup = `
<div class="team-wrapper">
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Team Lead</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Scrum Master</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${test}" alt="test" class="team-image">
    <p class="team-name">test</p>
    <p class="team-role">Developer</p>
    <a href="#" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${gitHub}#github"></use>
    </svg></a>
</div>
</div>`;

listOfStudents.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  spinner();
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
