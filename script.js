function generarCV() {

  let texto = document.getElementById("info").value;

  let cv = `
    <h2>Currículum Profesional</h2>

    <p>${texto}</p>

    <h3>Perfil Profesional</h3>

    <p>Persona responsable con habilidades y experiencia en distintas áreas.</p>
  `;

  document.getElementById("resultado").innerHTML = cv;
}
