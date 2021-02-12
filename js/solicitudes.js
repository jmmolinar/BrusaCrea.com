var acercaDe = `<form id="formulario" method="post" action="sendMail.php">
  <div id="superior" class="frame">
    <img class="circular--square" src="image/Sabri.jpg">
    <h1 class="first">Sabrina Leañez</h1>
    <p class="profesion">Diseñadora Gráfica UX&UI</p>
  </div>
  <legend id="contacto" class="legend-contacto btn-2">Contáctame</legend>
  <br>
  <div id="componentes" class="hidden">
      <br>
      <!--<label for="nombre" class="contacto">Nombre</label>-->
      <input type="text" id="nombre" name="nombre" value="" placeholder="Nombre y Apellido" maxlength="30" required>
      <input type="email" id="correo" name="correo" placeholder="usuario@dominio.com" maxlength="40" required>
      <input type="text" id="asunto" name="asunto" placeholder="Asunto" maxlength="40" required>
      <textarea id="mensaje" name="mensaje" rows="10" placeholder="Escribe tu mensaje" maxlength="500" required></textarea>
      <button id="enviar" class="custom-btn-send btn-2" type="submit">Enviar</button>
      <br>
  </div>
</form>
<div id="adicional" class="hidden">
</div>
`;
