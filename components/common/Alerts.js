import Swal from 'sweetalert2';
/*-------------------------------------------------------------------
   Método: mostrarAlerta
   Descripción: Muestra un modal de alerta durante un tiempo
   Recibe: 
       icon -> string ("warning", "error")
       btn  -> bool (true: Muestra botón de cierre, false: No muestra botón de cierre)
       title-> string (Texto que aparece como título de Alert)
       text-> string (Texto que aparece en el cuerpo del modal)
       timer-> number (Tiempo en milisegundos para autocierre del modal )

   Devuelve: N/A
   --------------------------------------------------------------------*/
const mostrarAlerta = (icon, btn, title, text, timer) => {
    Swal.fire({
        icon: icon,
        showConfirmButton: btn,
        title: title,
        text: text,
        timer: timer
    })
}

/*-------------------------------------------------------------------
Método: beforeConfirm
Descripción: Muestra un modal con una ventana de confirmación
Recibe: 
    icon -> string ("warning", "error")
    btn  -> bool (true: Muestra botón de cierre, false: No muestra botón de cierre)
    title-> string (Texto que aparece como título de Alert)
    text-> string (Texto que aparece en el cuerpo del modal)
    timer-> number (Tiempo en milisegundos para autocierre del modal )

Devuelve: Promise
--------------------------------------------------------------------*/
const beforeConfirm = async (icon, title, text, confirmtext) => {
    const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmtext
    })
    return res;
}




/*-------------------------------------------------------------------
Método: mostrarAlertaImg
Descripción: Muestra un modal de alerta durante un tiempo con una imagen
Recibe: 
    imageUrl -> string con la URL de la imagen (tamaño fijo 200x200)
    btn  -> bool (true: Muestra botón de cierre, false: No muestra botón de cierre)
    title-> string (Texto que aparece como título de Alert)
    text-> string (Texto que aparece en el cuerpo del modal)
    timer-> number (Tiempo en milisegundos para autocierre del modal )

Devuelve: N/A
--------------------------------------------------------------------*/
const mostrarAlertaImg = (imageUrl, btn, title, text, timer) => {
    Swal.fire({
        imageUrl: imageUrl,
        imageWidth: 200,
        showConfirmButton: btn,
        title: title,
        text: text,
        timer: timer
    })
}

/*-------------------------------------------------------------------
Método: mostrarToast
Descripción: Muestra un toast de alerta durante un tiempo
Recibe: 
    icon -> string ("warning", "error")
    btn  -> bool (true: Muestra botón de cierre, false: No muestra botón de cierre)
    title-> string (Texto que aparece como título de Alert)
    timer-> number (Tiempo en milisegundos para autocierre del modal )

Devuelve: N/A
--------------------------------------------------------------------*/
const mostrarToast = (icon, btn, title, timer) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: btn,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: icon,
        title: title
    })
}
/**
 * Modal con un input text para escribir
 * @param {Object} obj Título y máximo caracteres permitidos del input
 * @param {String} obj.title Título del modal pop up 
 * @param {Number} obj.maxLength Total de caracteres permitidos en el input
 * @returns {Promise} El texto escrito
 */
const showAskForText = async ({ title, maxLength = 100 }) => {

    const { value: text } = await Swal.fire({
        title: title,
        input: 'text',
        inputAttributes: {
            maxlength: maxLength
        }
    });
    
    return text;
}
export { mostrarAlerta, mostrarAlertaImg, beforeConfirm, mostrarToast, showAskForText }