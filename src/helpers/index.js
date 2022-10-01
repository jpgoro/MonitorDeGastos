export const generarId = ()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return  random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva =  new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES',opciones)
}


//grafico perrito
//<CircularProgressbarWithChildren value={porcentaje}>
  //        {/* Grafico con meme */}
    //      <img
      //      style={{ width: 80, marginTop: 130, marginLeft:-80}}
       //     src="https://i.imgur.com/b9NyUGm.png"
         //   alt="doge"
       //   />
       //   <div style={{ fontSize: 25, marginTop: 10,marginLeft:-80}}>
         //   <strong>{`${porcentaje}% Gastado`}</strong>
        //  </div>
       // </CircularProgressbarWithChildren>