import githubLogo from '../../assets/images/github-logo.svg';
import gmailLogo from '../../assets/images/gmail-logo.svg';
import linkedinLogo from '../../assets/images/linkedin-logo.svg';

export default function footer() {
  return (
    <footer class='footer' id='footer'>
      <div>
        <h4 class='footer__column-heading'>Contacto</h4>
        <p class='footer__column-text'>
          Actualmente busco unirme a un equipo multidisciplinario que valore
          mejorar la vida de las personas a través del diseño accesible. ¿Tienes
          algún proyecto en mente? ¡Conectemos!
        </p>
      </div>
      <div>
        <ul class='footer__list'>
          <li class='footer__list-item'>
            <a
              class='footer__column-link'
              href='https://linkedin.com/in/fcozepedadev'
              target='_blank'
            >
              <img
                class='footer__social-icon'
                src={linkedinLogo}
                alt='Logo LinkedIn'
              />
              LinkedIn
            </a>
          </li>
          <li class='footer__list-item'>
            <a
              class='footer__column-link'
              href='https://github.com/PacoZ2024'
              target='_blank'
            >
              <img
                class='footer__social-icon'
                src={githubLogo}
                alt='Logo GitHub'
              />
              GitHub
            </a>
          </li>
          <li class='footer__list-item'>
            <a
              class='footer__column-link'
              href='mailto:josefrancisco@ciencias.unam.mx'
            >
              <img
                class='footer__social-icon'
                src={gmailLogo}
                alt='Logo Gmail'
              />
              josefrancisco@ciencias.unam.mx
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
