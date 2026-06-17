import iconLink from '../../assets/images/icon-link.png';
import portadaNewsExplorer from '../../assets/images/portada-news-explorer.jpg';
import portadaAroundTheUS from '../../assets/images/portada-around-the-us.png';
import portadaHomeland from '../../assets/images/portada-homeland.jpg';
import portadaCoffeeShop from '../../assets/images/portada-coffee-shop.jpg';
import portadaLibrary from '../../assets/images/portada-library.jpg';
import portadaAboutMe from '../../assets/images/portada-about-me.jpg';

export default function projects() {
  return (
    <main className='projects'>
      <section className='projects__resumen'>
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
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaNewsExplorer}
            alt='Portada del proyecto News Explorer'
          />
        </div>
      </section>
      <section className='projects__tutorial'>
        <h2 className='projects__tutorial-title'>Tutoriales</h2>
        <h3 className='projects__tutorial-subtitle'>
          Te invito a consultar los siguientes tutoriales que he preparado para
          resolver tus dudas
        </h3>
        <div className='projects__videos'>
          <div className='projects__video-item projects__video-item-left'>
            <iframe
              className='projects__iframe'
              src='https://www.youtube.com/embed/rGXtQ26b4O0?si=KChBDdYFwA7g5E6r'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <p className='projects__video-caption'>
              <span>Registro e inicio de sesión</span> <span>~1 min</span>
            </p>
          </div>
          <div className='projects__video-item projects__video-item-right'>
            <iframe
              className='projects__iframe'
              src='https://www.youtube.com/embed/Yar6DEw9vO0?si=1I1nwX_EI1-V_JnE'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <p className='projects__video-caption'>
              <span>Búsqueda de artículos</span> <span>~1 min</span>
            </p>
          </div>
          <div className='projects__video-item projects__video-item-left'>
            <iframe
              className='projects__iframe'
              src='https://www.youtube.com/embed/tRPZ3xG0GtM?si=DPMvz7rJAVgSljVm'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <p className='projects__video-caption'>
              <span>Guardar y eliminar artículos</span> <span>~2 mins</span>
            </p>
          </div>
        </div>
      </section>
      <section className='projects__resumen'>
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaAroundTheUS}
            alt='Portada del proyecto Alrededor de los Estados Unidos'
          />
        </div>
        <div>
          <p className='projects__featured-right'>
            Proyecto del Bootcamp, TripleTen
          </p>
          <h4 className='projects__title-right'>
            Alrededor de los Estados Unidos
          </h4>
          <div className='projects__container-description-right'>
            <p className='projects__text'>
              Red social para compartir fotografías de lugares emblemáticos de
              los Estados Unidos en la que los usuarios pueden visualizar,
              agregar, eliminar y dar “me gusta” a las tarjetas fotográficas en
              sus perfiles, además de poder editar su información.
            </p>
          </div>
          <div className='projects__container-links'>
            <a
              className='projects__link'
              href='https://www.around-the-us-2025.mooo.com'
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
              href='https://github.com/PacoZ2024/web_project_around_auth'
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
              href='https://github.com/PacoZ2024/web_project_api_full'
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
      </section>
      <section className='projects__tutorial'>
        <h2 className='projects__tutorial-title'>Tutoriales</h2>
        <h3 className='projects__tutorial-subtitle'>
          Te invito a consultar los siguientes tutoriales que he preparado para
          resolver tus dudas
        </h3>
        <div className='projects__videos'>
          <div className='projects__video-item projects__video-item-left'>
            <iframe
              className='projects__iframe'
              src='https://www.youtube.com/embed/wRER9oWY5bI?si=jNtCAX5yULtqFgSz'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <p className='projects__video-caption'>
              <span>Registro e inicio de sesión</span> <span>~2 mins</span>
            </p>
          </div>
          <div className='projects__video-item projects__video-item-right'>
            <iframe
              className='projects__iframe'
              src='https://www.youtube.com/embed/GarknWk30z8?si=nMdQyXruEVjmleDh'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <p className='projects__video-caption'>
              <span>Editar perfil y guardar imágenes</span> <span>~4 mins</span>
            </p>
          </div>
        </div>
      </section>
      <section className='projects__resumen'>
        <div>
          <p className='projects__featured'>Proyecto del Bootcamp, TripleTen</p>
          <h4 className='projects__title'>Homeland (De Patria a Patria)</h4>
          <div className='projects__container-description'>
            <p className='projects__text'>
              Desarrollé una landing page responsiva que mapea las ciudades
              natales del equipo de Triple Ten. Optimicé la carga integrando la
              tipografía localmente, logrando una interfaz adaptable y de alto
              rendimiento.
            </p>
          </div>
          <div className='projects__container-links projects__container-links-width'>
            <a
              className='projects__link'
              href='https://pacoz2024.github.io/web_project_homeland'
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
              href='https://github.com/PacoZ2024/web_project_homeland'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Frontend
            </a>
          </div>
        </div>
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaHomeland}
            alt='Portada del proyecto Homeland'
          />
        </div>
      </section>
      <section className='projects__resumen'>
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaCoffeeShop}
            alt='Portada del proyecto Cafetería Triple Espresso'
          />
        </div>
        <div>
          <p className='projects__featured-right'>
            Proyecto del Bootcamp, TripleTen
          </p>
          <h4 className='projects__title-right'>Cafetería Triple Espresso</h4>
          <div className='projects__container-description-right'>
            <p className='projects__text'>
              El sitio ofrece una experiencia interactiva que permite al usuario
              consultar recetas de café, reservar mesas y contactar al negocio a
              través de formularios personalizados con validación nativa.
            </p>
          </div>
          <div className='projects__container-links projects__container-links-width projects__container-links-right'>
            <a
              className='projects__link'
              href='https://pacoz2024.github.io/web_project_coffeeshop'
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
              href='https://github.com/PacoZ2024/web_project_coffeeshop'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Frontend
            </a>
          </div>
        </div>
      </section>
      <section className='projects__resumen'>
        <div>
          <p className='projects__featured'>Proyecto del Bootcamp, TripleTen</p>
          <h4 className='projects__title'>Biblioteca Triple Peaks</h4>
          <div className='projects__container-description'>
            <p className='projects__text'>
              Desarrollé una página web para la biblioteca Triple Peaks que
              permite al usuario conocer las publicaciones recomendadas, los
              próximos eventos, los pasos a seguir para ser miembro; así como
              los horarios de apertura y sus redes sociales.
            </p>
          </div>
          <div className='projects__container-links projects__container-links-width'>
            <a
              className='projects__link'
              href='https://pacoz2024.github.io/web_project_library_es'
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
              href='https://github.com/PacoZ2024/web_project_library_es'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Frontend
            </a>
          </div>
        </div>
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaLibrary}
            alt='Portada del proyecto Biblioteca Triple Peaks'
          />
        </div>
      </section>
      <section className='projects__resumen'>
        <div className='projects__container-portrait'>
          <img
            className='projects__portrait'
            src={portadaAboutMe}
            alt='Portada del proyecto Acerca de mí'
          />
        </div>
        <div>
          <p className='projects__featured-right'>
            Proyecto del Bootcamp, TripleTen
          </p>
          <h4 className='projects__title-right'>Acerca de mí</h4>
          <div className='projects__container-description-right'>
            <p className='projects__text'>
              Desarrollé mi primer proyecto independiente en el Bootcamp de
              Desarrollo Web en Triple Ten. En este proyecto hablo un poco sobre
              mí y mis aficiones.
            </p>
          </div>
          <div className='projects__container-links projects__container-links-width projects__container-links-right'>
            <a
              className='projects__link'
              href='https://pacoz2024.github.io/web_project_about_me'
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
              href='https://github.com/PacoZ2024/web_project_about_me'
              target='_blank'
            >
              <img
                className='projects__link-image'
                src={iconLink}
                alt='Icono para enlace'
              />
              Frontend
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
