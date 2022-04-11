
const CancionSonando = ( {cancion, estaSonando, modoOscuro} ) => {
  return ( 
    <div className={`contenedor-cancion ${modoOscuro && 'cancion-oscura'}`}>
      {/* <img className='no-selecionable' src={cancion.portada} alt="Portada del disco" />       */}
      <img className={`no-selecionable ${estaSonando && 'imagen-pulso'}`} src={cancion.portada} alt="Portada del disco" />      
      <h2>{cancion.nombre}</h2>
      <h3>{cancion.artista}</h3>
    </div>
  );
}
 
export default CancionSonando;