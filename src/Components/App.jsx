import { useState, useRef } from 'react';

import ListaCanciones from './ListaCanciones';
import CancionSonando from './CancionSonando';
import Reproductor from './Reproductor';
import Header from './Header';
import '../Styles/App.scss'; // Contiene estilos importados de todos los componentes
import chillHop from '../cancionesChillHop'; 

const App = () => {
  // State
  const [canciones, setCanciones] = useState( chillHop() );
  const [cancionActual, setCancionActual] = useState( canciones[0] );
  const [estaSonando, setEstaSonando] = useState(false);  
  const [infoCancion, setInfoCancion] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [estadoLista, setEstadoLista] = useState(false); // Si el menu lista lateral esta abierto o no
  const [modoOscuro, setModoOscuro] = useState(false);

  // Handlers
  const manejoCambioTiempo = evento => {
    const {currentTime, duration} = evento.target;
    setInfoCancion( {...setInfoCancion, currentTime, duration} );
    if (estaSonando) audioRef.current.play();
  }

  const manejoFinCancion = () => {
    let indiceActual = canciones.findIndex( song => song.id === cancionActual.id );
    setCancionActual( canciones[(indiceActual + 1) % canciones.length] );
  }

  //Referencias
  const audioRef = useRef(null);
  
  return (
    <div className={`app ${estadoLista && "lista-abierta"}`}>
      <Header 
        estadoLista={estadoLista} 
        setEstadoLista={setEstadoLista} 
        modoOscuro={modoOscuro} 
        setModoOscuro={setModoOscuro}
      />
      <CancionSonando cancion={cancionActual} estaSonando={estaSonando} modoOscuro={modoOscuro} />
      <Reproductor 
        audioRef={audioRef}
        cancionActual={cancionActual} 
        setCancionActual={setCancionActual}
        canciones={canciones}
        setCanciones={setCanciones} 
        estaSonando={estaSonando}
        setEstaSonando={setEstaSonando}
        infoCancion={infoCancion}
        setInfoCancion={setInfoCancion}
        modoOscuro={modoOscuro}
      />
      <ListaCanciones 
        canciones={canciones} 
        setCanciones={setCanciones}
        cancionActual={cancionActual} 
        setCancionActual={setCancionActual} 
        estadoLista={estadoLista}
        modoOscuro={modoOscuro}
      />
      <audio 
        onTimeUpdate={manejoCambioTiempo} 
        onLoadedMetadata={manejoCambioTiempo}
        ref={audioRef} 
        src={cancionActual.audio} 
        onEnded={manejoFinCancion}
      />
    </div>
  );
}

export default App;