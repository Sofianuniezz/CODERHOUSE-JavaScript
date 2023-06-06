/*una pagina donde el usuario pueda ver los distintos tipos de servicio que ofrece un diseñador y eventualmente cotizarlos.
*/

console.log("prueba")

const verRender = () => {
    let servicio;
    servicio = parseInt(prompt("Elige el tipo de render que deseas \n 1-Producto \n 2-Espacio \n 3-Realidad Virtual \n 4-Animacion \n 5-Volver atras")); 

    while (servicio !=5){

        switch(servicio){
            case 1: verProducto();
                break;
            
            case 2: verEspacio();
                break;
            
            case 3: verRealidadvirtual();
                break;

            case 4: verAnimacion();
                break;

            case 5: 
                break;
            
            default:
                alert("No ingresaste un servicio valido.");
                break;
        } 

    }
}

const verWeb = () => {
    let servicio;
    servicio = parseInt(prompt("Elige el tipo de servicio que deseas \n 1-Diseño y desarrollo \n 2-Diseño \n 3-Desarrollo \n 4-Volver atras")); 

    while (servicio !=4){

        switch(servicio){
            case 1: verPaquete();
                break;
            
            case 2: verDiseno();
                break;
            
            case 3: verDesarrollo();
                break;

            case 4: 
                break;
            
            default:
                alert("No ingresaste un servicio valido.");
                break;
        } 

    }
}

const verVideo = () => {
    let servicio;
    servicio = parseInt(prompt("Elige el tipo de servicio que deseas \n 1-Edición \n 2-Animación \n 3-Volver atras")); 

    while (servicio !=3){

        switch(servicio){
            case 1: verEdicion();
                break;
            
            case 2: verAnimacion();
                break;

            case 3: 
                break;
            
            default:
                alert("No ingresaste un servicio valido.");
                break;
        } 

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

    servicio = parseInt(prompt("Elige el servicio que deseas \n 1-Render \n 2-Pagina Web \n 3-Edicion de video \n 4-Ninguno")); 
}