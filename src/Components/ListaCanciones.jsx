import CancionEnLista from './CancionEnLista';

const ListaCanciones = ({ canciones, setCanciones, setCancionActual, estadoLista, modoOscuro }) => {
  
  return ( 
    <div className={`lista-canciones ${estadoLista && 'lista-activa'} ${modoOscuro && 'lista-oscura'}`}>
      <h2>Playlist</h2>
      <div className="canciones-en-lista">
        {canciones.map( cancion => { 
          return <CancionEnLista 
            key={cancion.id}
            cancion={cancion} 
            canciones={canciones}
            setCanciones={setCanciones}
            setCancionActual={setCancionActual} 
          />
        })}
      </div>
    </div>
  );
}
 
export default ListaCanciones;