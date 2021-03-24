/*
  Desarrollo: José Miguel Molina Rondón
  BrusaCrea.com

  - En construccción

*/

///////////////////////////////////////////////////////////////
//                  SINGLE PAGE APPLICATION                  //
///////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)

const About = {
    render: function () {
        return identity;
    }
}

const SkillsPage = {
    render: function () {
        return skills;
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
            <button id="volver" name="back" class="custom-btn-send custom-btn-back btn-2" onclick="location.href='#/about'">Volver</button><br><br>
        </div>
        `;
    }
}

const Enviado = {
    render: function () {
        return `
        <div id="sent" class="mostrarTodo">
            <h1 class="first">¡Enviado exitosamente!</h1><br><br>
            <button id="volver" name="back" class="custom-btn-send custom-btn-back btn-2" onclick="location.href='#/about'">Volver</button><br><br>
        </div>
        `;
    }
}

const routes = [
    { path: '/about', component: About },
    { path: '/', component: HomePage },
    { path: '/skills', component: SkillsPage },
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
        return false;
    }
}

//LIMPIA EL FORMULARIO
function remover() {
    $("#formulario")[0].reset();
    console.log("JQUERY - Se reinicia el formulario")
}


// function resizeReCaptcha() {
//     var width = $( ".g-recaptcha" ).parent().width();
//     if (width < 302) {
//         var scale = width / 302;
//     } else {
//         var scale = 1;
//     }
//     $( ".g-recaptcha" ).css('transform', 'scale(' + scale + ')');
//     $( ".g-recaptcha" ).css('-webkit-transform', 'scale(' + scale + ')');
//     $( ".g-recaptcha" ).css('transform-origin', '0 0');
//     $( ".g-recaptcha" ).css('-webkit-transform-origin', '0 0');
//   };

//////////////////////////////////////////////////////////////////////
// EVENTOS JQUERY 
//////////////////////////////////////////////////////////////////////

$(function () {

    // $(window).resize(function () {
    //     resizeReCaptcha();
    // });

    // resizeReCaptcha();

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


    //EVENTO AL PRESIONAR LA PRIMERA OPCIÓN DEL MENÚ
    $('div #all').on('click', 'a#optionA', function () {
        console.log("JQUERY - Activo Ventana de Identidad")

        //Transición habia abajo
        $('#formulario').show(1000, function () {
            console.log('JQUERY - Mostrando Identidad que está al inicio de Formulario');
            $('html, body').animate({
                scrollTop: $("#formulario").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a Identidad que está al inicio de Formulario")
        });

    });

    //EVENTO AL PRESIONAR LA SEGUNDA OPCIÓN DEL MENÚ
    $('div #all').on('click', 'a#optionB', function () {
        console.log("JQUERY - Activo Ventana de Perfil")

        //Transición habia abajo
        $('#skills').show(1000, function () {
            console.log('JQUERY - Mostrando el Contenido de Perfil que está al inicio de skills');
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll al contenido de Perfil que está al inicio de skills")
        });

    });

    //EVENTO AL PRESIONAR EL BOTÓN DE CONTACTO
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

    //EVENTO AL PRESIONAR EL PORTAFOLIO DE BEHANCE
    $('div #pages').on('click', 'img#imgTableBehance', function () {
        console.log("JQUERY - Behance en nueva ventana")
        $(location).attr('href');
        window.open("https://www.behance.net/sabrinaleanez", '_blank');
    });

    //EVENTO AL PRESIONAR EL PORTAFOLIO DE WIX
    $('div #pages').on('click', 'img#imgTableWix', function () {
        console.log("JQUERY - Wix en nueva ventana")
        $(location).attr('href');
        window.open("https://sabribruji.wixsite.com/sabrina-leanez", '_blank');
    });

    //EVENTO AL PRESIONAR EL BOTÓN DE CONTACTO DESDE PERFIL
    $('div #pages').on('click', 'legend#contactoPerfil', function () {
        console.log("JQUERY - Activo Ventana para enviar mensaje")
        redirigir = "#/about";
        $(location).attr('href', redirigir);

    });

    //EVENTO AL PRESIONAR EL BOTÓN DE CONTACTO DESDE PERFIL
    $('div #pages').on('click', 'legend#contactoPerfil', function () {
        console.log("JQUERY - Activo Ventana para enviar mensaje")
        redirigir = "#/about";
        $(location).attr('href', redirigir);

    });


    // EVENTOS AL PRESIONAR ENVIAR
    $('div #pages').on('click', 'button#enviar', function () {
        if (enviarMensaje()) {
            $('#componentes').fadeOut('slow');
        }

    });

    //EVENTO AL PRESIONAR OPCIÓN DE PORTAFOLOS
    $('div #pages').on('click', 'legend#portfolio', function () {
        console.log("JQUERY - Activo Ventana de Portafolios")

        //Transición habia abajo
        $('#imgPortfolio').toggle(1000, function () {
            console.log('JQUERY - Mostrando las imágenes de Portafolios');
            $("#imgPortfolio").addClass("divSkills");
            $('html, body').animate({
                scrollTop: $("#imgPortfolio").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a las imágenes de portafolios")
        });
    });

    //EVENTO AL PRESIONAR OPCIÓN DE HERRAMIENTAS DE DISEÑO
    $('div #pages').on('click', 'legend#designTools', function () {
        console.log("JQUERY - Activo Ventana de herramientas de diseño")

        //Transición habia abajo
        $('#imgDesignTools').toggle(1000, function () {
            console.log('JQUERY - Mostrando las imágenes de herramientas de diseño');
            $("#imgDesignTools").addClass("divSkills");
            $('html, body').animate({
                scrollTop: $("#imgDesignTools").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a las imágenes de herramientas de diseño")
        });
    });

    //EVENTO AL PRESIONAR OPCIÓN DE HERRAMIENTAS DE PROTOTIPADO
    $('div #pages').on('click', 'legend#prototypeTools', function () {
        console.log("JQUERY - Activo Ventana de herramientas de prototipado")

        //Transición habia abajo
        $('#imgPrototypeTools').toggle(1000, function () {
            console.log('JQUERY - Mostrando las imágenes de herramientas de prototipado');
            $("#imgPrototypeTools").addClass("divSkills");
            $('html, body').animate({
                scrollTop: $("#imgPrototypeTools").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a las imágenes de herramientas de prototipado")
        });
    });

    //EVENTO AL PRESIONAR OPCIÓN DE HERRAMIENTAS DE INVESTIGACIÓN
    $('div #pages').on('click', 'legend#researchTools', function () {
        console.log("JQUERY - Activo Ventana de herramientas de investigación")

        //Transición habia abajo
        $('#imgResearchTools').toggle(1000, function () {
            console.log('JQUERY - Mostrando las imágenes de herramientas de investigación');
            $("#imgResearchTools").addClass("divSkills");
            $('html, body').animate({
                scrollTop: $("#imgResearchTools").offset().top
            }, 1000)
            console.log("JQUERY - Bajando con scroll a las imágenes de herramientas de investigación")
        });
    });

})