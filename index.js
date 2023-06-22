/*una pagina donde el usuario pueda ver los distintos tipos de servicio que ofrece un diseñador y pedir un presupuesto aproximado. la idea es que seleccione servicios y se agreguen como un "carrito de compras", que pueda ver al final.
*/

let cotizaciones = []; 

const cotizarServicio = (servicio, precio) => {
  cotizaciones.push({ servicio, precio }); 
};

const verRender = () => {
  let servicio;
  servicio = parseInt(prompt("Elige el tipo de render que deseas para cotizar \n 1-Producto \n 2-Espacio \n 3-Realidad Virtual \n 4-Animacion \n 5-Volver atras"));

  while (servicio !== 5) {
    switch (servicio) {
      case 1:
        cotizarServicio("Producto", 100); 
        break;

      case 2:
        cotizarServicio("Espacio", 150); 
        break;

      case 3:
        cotizarServicio("Realidad Virtual", 200); 
        break;

      case 4:
        cotizarServicio("Animacion", 250); 
        break;

      default:
        alert("No ingresaste un servicio valido.");
        break;
    }

    servicio = parseInt(prompt("Elige el tipo de render que deseas para cotizar \n 1-Producto \n 2-Espacio \n 3-Realidad Virtual \n 4-Animacion \n 5-Volver atras"));
  }
};

const verWeb = () => {
  let servicio;
  servicio = parseInt(prompt("Elige el tipo de servicio que deseas para cotizar\n 1-Diseño y desarrollo \n 2-Diseño \n 3-Desarrollo \n 4-Volver atras"));

  while (servicio !== 4) {
    switch (servicio) {
      case 1:
        cotizarServicio("Diseño y desarrollo", 300); 
        break;

      case 2:
        cotizarServicio("Diseño", 200); 
        break;

      case 3:
        cotizarServicio("Desarrollo", 250); 
        break;

      default:
        alert("No ingresaste un servicio valido.");
        break;
    }

    servicio = parseInt(prompt("Elige el tipo de servicio que deseas para cotizar\n 1-Diseño y desarrollo \n 2-Diseño \n 3-Desarrollo \n 4-Volver atras"));
  }
};

const verVideo = () => {
  let servicio;
  servicio = parseInt(prompt("Elige el tipo de servicio que deseas para cotizar \n 1-Edición \n 2-Animación \n 3-Volver atras"));

  while (servicio !== 3) {
    switch (servicio) {
      case 1:
        cotizarServicio("Edición", 150); 
        break;

      case 2:
        cotizarServicio("Animación", 200); 
        break;

      default:
        alert("No ingresaste un servicio valido.");
        break;
    }

    servicio = parseInt(prompt("Elige el tipo de servicio que deseas para cotizar \n 1-Edición \n 2-Animación \n 3-Volver atras"));
  }
}

let servicio = parseInt(prompt("Elige el servicio que deseas \n 1-Render \n 2-Pagina Web \n 3-Edicion de video \n 4-Ninguno")); 

while (servicio !=4){
    switch(servicio){
        case 1: verRender();
            break;
        
        case 2: verWeb();
            break;

        case 3: verVideo();
            break;
        
        default:
            alert("No ingresaste un servicio valido.");
            break;
    }

    const agregarOtro = prompt("¿Deseas agregar otro servicio? (sí/no)");
    if (agregarOtro.toLowerCase() !== "sí") {
      break;
    }
  
    servicio = parseInt(prompt("Elige el servicio que deseas \n 1-Render \n 2-Pagina Web \n 3-Edicion de video \n 4-Ninguno"));
  }


console.log("Servicios cotizados:");
for (let i = 0; i < cotizaciones.length; i++) {
  const cotizacion = cotizaciones[i];
  console.log(`${cotizacion.servicio}: $${cotizacion.precio}`);
}
