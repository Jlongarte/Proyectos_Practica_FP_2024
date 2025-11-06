import "./AboutMe.css";

const template = () => {
  return `
  <section id="aboutme">

    <h2>Formulario de Contacto</h2>
    <form action="#" method="post">
        <!-- Campo Nombre -->
        <div class="form-field">
            <input type="text" id="nombre" name="nombre" required placeholder=" ">
            <label for="nombre">Nombre</label>
        </div>

        <!-- Campo Email -->
        <div class="form-field">
            <input type="email" id="email" name="email" required placeholder=" ">
            <label for="email">Email</label>
        </div>

        <!-- Campo Asunto -->
        <div class="form-field">
            <input type="text" id="asunto" name="asunto" required placeholder=" ">
            <label for="asunto">Asunto</label>
        </div>

        <!-- Campo Mensaje -->
        <div class="form-field">
            <textarea id="mensaje" name="mensaje" rows="4" required placeholder=" "></textarea>
            <label for="mensaje">Mensaje</label>
        </div>

        <!-- Botón Enviar -->
        <button type="submit">Enviar Mensaje</button>
    </form>
    </section>
    `;
};

const AboutMe = () => {
  document.querySelector("main").innerHTML = template();
};

export default AboutMe;
