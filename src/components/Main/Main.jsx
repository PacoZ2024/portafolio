import me_image from '../../assets/images/me.png';
import arrow from '../../assets/images/arrow.png';

export default function Main() {
  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__container-image'>
          <img className='main__image' alt='Imagen de avatar' src={me_image} />
        </div>
        <div className='main__container-text'>
          <img
            className='main__image-arrow'
            alt='Imagen de flecha'
            src={arrow}
          />
          <p className='main__text'>
            ¡Hola! Soy{' '}
            <span className='main__text-underlined'>Francisco Zepeda</span>
          </p>
          <p className='main__paragraph'>Un Desarrollador Web que</p>
          <p className='main__title'>
            Construye código{' '}
            <span className='main__title-underlined'>limpio</span> y{' '}
            <span className='main__title-underlined'>ordenado</span>
            ...
          </p>
          <p className='main__subtitle'>
            ... para funcionar hoy y programado para escalar mañana.
          </p>
        </div>
      </div>
    </main>
  );
}
