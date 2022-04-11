const CancionEnLista = ({ cancion, canciones, setCanciones, setCancionActual }) => {
   
  // Handler
  const manejoEleccionLista = () => {
    setCancionActual(cancion);

    // Modificar el atributo del booleano 'reproduciendo' de la cancion en la lista de objs js
    const nuevasCanciones = canciones.map( song => {
      if(song.id === cancion.id) 
        return {
          ...song,
          reproduciendo: true
        }
      else 
        return {
          ...song,
          reproduciendo: false
        }
    });

    // Setea la nueva lista con el atributo 'Reproduciendo' actualizado
    setCanciones(nuevasCanciones);
  }
  
  return (  
    <div className={`cancion-en-lista ${cancion.reproduciendo && 'seleccionada'}`} onClick={manejoEleccionLista}>
      <img className="no-selecionable" src={cancion.portada} alt="Portada del disco" />
      <div className="detalles-cancion">
        <h3>{cancion.nombre}</h3>
        <h4>{cancion.artista}</h4>
      </div>
    </div>
  );
}

export default CancionEnLista;