  
        let conversacion = $('div.ventana ul'); // Ventana con la conversación
        let campoUsuario = $('input');          // Campo de texto del usuario

        document.write("My message");

        // Cuando se haga click en Enviar o se pulse intro en el campo
        $('form').submit(function() {

            
        let textoUsuario = campoUsuario.val();  // Texto introducido por el usuario

        // Añadir el texto del usuario a la conversación
        conversacion.append('<li><strong>Yo</strong>: ' + textoUsuario + '</li>');
        
        // Borrar lo que ha escrito el usuario
            //campoUsuario.val('');
        
        // Importante para que no se recargue la página
        return false;
        })