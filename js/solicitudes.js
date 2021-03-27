/*
  Desarrollo: José Miguel Molina Rondón
  BrusaCrea.com

  - En construccción

*/

var home = `<div class="slider2">
	<ul>
		<li>
      <img class="logos" src="image/logos/BrusaCrea.png">
    </li>
    <li>
    <img class="logos" src="image/logos/BrusaDesign.png">
    </li>
    <li>
    <img class="logos" src="image/logos/BrusaUXUI.png">
    </li>
    <li>
    <img class="logos" src="image/logos/Brusa.png">
    </li>
  </ul>
</div>
`;

var home2 = `<div class="profile">
  <!--<div class="image-Box"></div>-->
  <img class="mandala" src="image/home/branding1.jpg">
</div>
`;

var identity = `<form id="formulario" method="post" action="sendMail.php">
  <div id="superior" class="frame">
    <img id="designer" class="circular--square" src="image/identidad/Sabri.jpg">
    <h1 class="first">Sabrina Leañez</h1>
    <p class="profesion">Diseñadora Gráfica UX&UI</p>
    <p class="descripcion">Bienvenido a mi marca personal "Brusa". Por medio de este espacio podrás visualizar
    mis proyectos y conectar con mis redes sociales.  No dudes en contactarme para trabajar juntos, darle vida
    a tus ideas por medio del diseño y compartir experiencias dentro del apasionante mundo de la creación.</p>
  </div>
  <legend id="contacto" class="legend-skills btn-2">Contáctame</legend>
  <div id="componentes" class="hidden">
      <br><br>
      <input type="text" id="nombre" name="nombre" value="" placeholder="Nombre y Apellido" maxlength="30" required>
      <input type="email" id="correo" name="correo" placeholder="usuario@dominio.com" maxlength="40" required>
      <input type="text" id="asunto" name="asunto" placeholder="Asunto" maxlength="40" required>
      <textarea id="mensaje" name="mensaje" rows="10" placeholder="Escribe tu mensaje" maxlength="500" required></textarea>
      <!--<div id="rc-anchor-container" class="g-recaptcha" data-sitekey="6LcQEFsaAAAAAOOAu5dw7ancr3jwsleVIqS7PA6d"></div>
      <br>-->
      <button id="enviar" class="custom-btn-send btn-2" type="submit">Enviar</button>
      <br>
  </div>
</form>
`;

var skills = `<div id="skills" class="profile">
<div class="divSkillsOptions">
  <legend id="portfolio" class="legend-skills btn-2">Portafolio</legend>
</div>
<div id="imgPortfolio" class="hidden">
  <ul>
    <li>
      <!--<div class="divImage">-->
      <figure>
        <img id="imgLiBehance" class="imgLi" src="image/circle/behance.png">
        <figcaption>Behance</figcaption>
      </figure>
      <!--</div>-->
    </li>
    <li>
      <!--<div class="divImage">-->
      <figure>
        <img id="imgLiWix" class="imgLi" src="image/circle/wix.png">
        <figcaption>Wix</figcaption>
      </figure>
      <!--</div>-->
    </li>
  </ul>
</div>
<div class="divSkillsOptions">
  <legend id="designTools" class="legend-skills btn-2">Herramientas de Diseño</legend>
</div>
<div id="imgDesignTools" class="hidden">
  <figure>
    <img class="imgSkill" src="image/circle/ai.png">
    <figcaption>Illustrator</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/ps.png">
    <figcaption>Photoshop</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/xd.png">
    <figcaption>Adobe XD</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/id.png">
    <figcaption>Indesign</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/ae.png">
    <figcaption>After Effects</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/figma.png">
    <figcaption>Figma</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/sk.png">
    <figcaption>Sketch</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/marvel.png">
    <figcaption>Marvel</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/in.png">
    <figcaption>Invision</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/whimsical.png">
    <figcaption>Whimsical</figcaption>
  </figure>
  <figure>
    <img class="imgSkill" src="image/circle/ow.png">
    <figcaption>Optimal Workshop</figcaption>
  </figure>
</div>
<div class="divSkillsOptions">
  <legend id="descargarPerfil" class="legend-skills btn-2">Descargar CV <i class="fas fa-cloud-download-alt"></i></legend>
</div>
<div id="skills">
`;