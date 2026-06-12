import iconLink from '../../assets/images/icon-link.png';
import portadaNewsExplorer from '../../assets/images/portada-news-explorer.jpg';

export default function projects() {
  return (
    <section className='projects'>
      <div className='projects__resumen'>
        <div>
          <p className='projects__featured'>Proyecto del Bootcamp, TripleTen</p>
          <h4 className='projects__title'>
            Aplicación Full Stack News Explorer
          </h4>
          <div className='projects__container-description'>
            <p className='projects__text'>
              Desarrollé una aplicación web full-stack, bajo especificaciones de
              diseño, que permite a los usuarios buscar artículos de noticias
              recientes y almacenarlos en sus perfiles.
            </p>
          </div>
          <div className='projects__container-links'>
            <a
              className='projects__link'
              href='https://www.news-explorer-2026.mooo.com'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Aplicación
            </a>
            <a
              className='projects__link'
              href='https://github.com/PacoZ2024/news-explorer-frontend'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Frontend
            </a>
            <a
              className='projects__link'
              href='https://github.com/PacoZ2024/news-explorer-backend'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Backend
            </a>
          </div>
        </div>
        <img
          className='projects__portrait'
          src={portadaNewsExplorer}
          alt='Portada del proyecto News Explorer'
        />
      </div>
    </section>
  );
}
