/*
  Desarrollo: José Miguel Molina Rondón
  BrusaCrea.com

  - En contrucción

*/

///////////////////////////////////////////////////////////////
//                  SINGLE PAGE APPLICATION                  //
///////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)

//CON AJAX

const PaginaAjaxTestimonios = {
    render: function () {
        $.ajax({
            type: 'GET',
            url: 'js/testimonios.json',
            dataType: 'json',
            success: function (data, status, jqXHR) {
                console.log(jqXHR)
                let llenado = ''
                for (const persona of data) {

                    llenado += `
                    <div>
                        <h1 class="first"><br>${persona.first_name} ${persona.last_name}</h1>
                        <p class="testimonios">"${persona.testimonio}"</p>
                        <h2 class="first">${persona.email}</h2><br>
                    </div>`

                }

                $('#pages').html(`
                <div class="frame resaltadoTestimonios">
                ${llenado}
                </div>
                <div class="frame">
                <br><img src="image/thankyouline.png" alt="">
                </div>
                `)

                console.log(`AJAX Testimonios -> Status: ${status}`)

            },
            error: function (jqXHR) {
                console.log(jqXHR)
            }
        })

    }
}

const PaginaAbout = {
    render: function () {
        //return formularioHTML;
        return acercaDe;
    }
}

const HomePage = {
    render: function () {
        return `
        <div id="inicio">
        </div>
        `;
    }
}

const ErrorComponent = {
    render: function () {
        return `
        <div id="error">
            <br>
            <h1 class="first">:(</h1>
            <p class="footer">--- Contenido no encontrado ---</p>
            <br>
            <br>
        </div>
        `;
    }
}

const MensajeNoEnviado = {
    render: function () {
        return `
        <div id="notSent" class="mostrarTodo">
            <h1 class="first">:(</h1><br><br>
            <p class="footer">--- Mensaje no enviado ---</p><br><br>
            <button id="volver" name="back" class="custom-btn-back btn-2" onclick="location.href='#/about'">Volver</button><br><br>
        </div>
        `;
    }
}

const Enviado = {
    render: function () {
        return `
        <div id="sent" class="mostrarTodo">
            <h1 class="first">¡Enviado exitosamente!</h1><br><br>
            <button id="volver" name="back" class="custom-btn-back btn-2" onclick="location.href='#/about'">Volver</button><br><br>
        </div>
        `;
    }
}

const routes = [
    { path: '/about', component: PaginaAbout },
    { path: '/', component: HomePage },
    { path: '/skills', component: PaginaAjaxTestimonios },
    { path: '/notsent', component: MensajeNoEnviado },
    { path: '/sent', component: Enviado }
]

// Return explicito sin poner function ni llaves
// y devuelve el resultado de la comparación OR
// Nos dice dónde estamos ubicados
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

const findComponent = function (path, routes) {
    return routes.find(routes => routes.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
}

function router() {

    const path = parseLocation();
    console.log("SPA - este es el path: " + path)
    const { component = ErrorComponent } = findComponent(path, routes) || {}
    // si en component no encuentra nada le asigna ErrorComponent que lo tenemos arriba definido
    $('#pages').html(component.render())
    return path;

}

// EJECUTO UNA FUNCIÓN ADICIONAL PARA VALIDAR EMAIL
function validarEmail(valor) {
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(valor)) {
        return true;
    } else {
        return false;
    }
}

//FUNCION QUE VERIFICA EL FORMULARIO PARA HACER EL ENVÍO
//Es llamado en el botón Enviar del HTML
function enviarMensaje() {

    if (($('#nombre').val().trim().length > 0 && $('#correo').val().trim().length > 0 && $('#asunto').val().trim().length > 0 && $('#mensaje').val().trim().length > 0) && validarEmail($('#correo').val()) == true) {
        return true;
    } else {
        if (!$('#nombre').val().trim().length) {
            $('#nombre').focus().val("");
        } else {
            if (!$('#correo').val().trim().length) {
                $('#correo').focus().val("");
            } else {
                if (validarEmail($('#correo').val()) == false) {
                    //alert("Email incorrecto");
                    $('#correo').focus().val("Agrega el email correctamente");
                } else {
                    if (!$('#asunto').val().trim().length) {
                        $('#asunto').focus().val("");
                    } else {
                        if (!$('#mensaje').val().trim().length) {
                            $('#mensaje').focus().val("");
                        }
                    }
                }
            }
        }
        // $('#enviar').click(function (e) {
        //     e.preventDefault();
        // });
        return false;
    }
    //return false;
}

//LIMPIA EL FORMULARIO
function remover() {
    $("#formulario")[0].reset();
    console.log("JQUERY - Se reinicia el formulario")
}

//////////////////////////////////////////////////////////////////////
// EVENTOS JQUERY 
//////////////////////////////////////////////////////////////////////

$(function () {

    //TENIENDO CARGADA LA PÁGINA
    //CAPTURANDO  input con la tecla ENTER
    $('html body').on({
        keypress: function (event) {
            if (event.keyCode === 13) {
                if ($('#nombre').val().length == "") {
                    console.log("JQUERY - Debe ingresar su nombre")
                    $('#nombre').focus();
                } else {
                    if ($('#correo').val().length == "") {
                        console.log("JQUERY - Debe ingresar un correo electrónico")
                        $('#correo').focus();
                    } else {
                        if ($('#asunto').val().length == "") {
                            console.log("JQUERY - Debe ingresar su asunto")
                            $('#asunto').focus();
                        } else {
                            if ($('#mensaje').val().length == "") {
                                console.log("JQUERY - Debe ingresar su mensaje")
                                $('#mensaje').focus();
                            }
                        }
                    }
                }
            }
        }
    });

    $('div #pages').on("focus", 'input#nombre', function () {
        $(this).css("background-color", 'beige')// Doy focus al input nombre
    });

    $('div #pages').on("blur", 'input#nombre', function () {
        $(this).css("background-color", '#E0F2F1')// Quito focus y agrego blur al input nombre
    });

    $('div #pages').on("focus", 'input#correo', function () {
        $(this).css("background-color", 'beige')// Doy focus al input correo
    });

    $('div #pages').on("blur", 'input#correo', function () {
        $(this).css("background-color", '#E0F2F1')// Quito focus y agrego blur al input correo
    });

    $('div #pages').on("focus", 'input#asunto', function () {
        $(this).css("background-color", 'beige')// Doy focus al input asunto
    });

    $('div #pages').on("blur", 'input#asunto', function () {
        $(this).css("background-color", '#E0F2F1')// Quito focus y agrego blur al input asunto
    });

    $('div #pages').on("focus", 'textarea#mensaje', function () {
        $(this).css("background-color", 'beige')// Doy focus al textarea mensaje
    });

    $('div #pages').on("blur", 'textarea#mensaje', function () {
        $(this).css("background-color", '#E0F2F1')// Quito focus y agrego blur al textarea mensaje
    });

    //MODIFICANDO PARA EL BOTÓN DE CONTACTO
    $('div #pages').on('click', 'legend#contacto', function () {
        console.log("JQUERY - Activo Ventana para enviar mensaje")

        //Transición habia abajo al mostrar los componentes que se pueden solicitar
        $('#componentes').toggle(1000, function () {
            console.log('JQUERY - Mostrando los componentes del mensaje');
            $('html, body').animate({
                scrollTop: $("#componentes").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a los componenetes")
        });

        // $('#adicional').fadeOut(1000);
        $("#formulario")[0].reset();

    });

    // EVENTOS AL PRESIONAR ENVIAR
    $('div #pages').on('click', 'button#enviar', function () {
        if (enviarMensaje()) {
            //Limpio el formulario luego de enviar
            //$("#formulario")[0].reset();
            //Oculto el div componentes del formulario después de enviar
            $('#componentes').fadeOut('slow');
        }

    });

})