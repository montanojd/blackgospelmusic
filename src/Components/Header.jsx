import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ( { estadoLista, setEstadoLista, modoOscuro, setModoOscuro } ) => {

  return (
    <nav className={modoOscuro ? 'header-oscuro' : ''}>
      <h1>Audio</h1>
      <div className="botones">
        <button className={estadoLista ? "boton-activado" : ''} onClick={ ()=> setEstadoLista(!estadoLista) }>
          Playlist
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <button className="boton-oscuro" onClick={ ()=> setModoOscuro(!modoOscuro) }>
          {modoOscuro ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
 
export default Header;

// El condicional {condicion && 'clase'} no funciona cuando no tiene otra clase antes 
//    esto es porque className quedara compuesta de un booleano con valor false
