import skills from '../../assets/images/skills.png';

export default function aboutMe() {
  return (
    <section className='aboutme'>
      <h2 className='aboutme__title'>Soy un Desarrollador Web (MERN)</h2>
      <p className='aboutme__paragraph'>
        Con licenciatura en Ciencias de la Computación (Facultad de Ciencias,
        UNAM). Apasionado por crear experiencias interactivas basadas en
        componentes y buenas prácticas de UI. Enfocado en el desarrollo
        responsivo y accesible, y comprometido con entregar código limpio y
        eficiente.
      </p>
      <p className='aboutme__text'>
        Aquí te muestro las{' '}
        <span className='aboutme__text-underlined'>tecnologías</span> que uso
        para dar vida a grandes ideas.
      </p>
      <img
        className='aboutme__image'
        src={skills}
        alt='Imagen de skills técnicas'
      />
    </section>
  );
}
