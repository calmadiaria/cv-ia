function generarCV() {

  const texto = document.getElementById("input").value;

  const resultado = `
    <h2>Currículum Vitae</h2>

    <h3>Perfil Profesional</h3>
    <p>${texto}</p>

    <h3>Habilidades</h3>
    <ul>
      <li>Trabajo en equipo</li>
      <li>Responsabilidad</li>
      <li>Manejo de sistemas</li>
      <li>Atención al cliente</li>
    </ul>

    <h3>Experiencia</h3>
    <p>
      Técnico en sistemas con conocimientos en mantenimiento,
      soporte técnico y herramientas informáticas.
    </p>

    <h3>Educación</h3>
    <p>Técnico en Sistemas</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}
