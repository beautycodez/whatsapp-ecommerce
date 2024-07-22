const apiUrlComments = `https://fakestoreapi.com/products`;
const apiUrlUsers = "https://fakestoreapi.com/users";

async function getDataComments(apiUrlComments, apiUrlUsers) {
  try {
    const [responseComments, responseUsers] = await Promise.all([
      fetch(apiUrlComments),
      fetch(apiUrlUsers),
    ]);

    if (!responseComments.ok || !responseUsers.ok) {
      throw new Error("Error en una de las solicitudes");
    }

    const dataComments = await responseComments.json();
    const dataUsers = await responseUsers.json();

    console.log("Datos de los comentarios:", dataComments);
    console.log("Datos de los users:", dataUsers);

    // Asumiendo que `populateData` es una función que espera dos parámetros
    populateData(dataComments, dataUsers);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}
function populateData(data, data2) {
  const comentarios = document.querySelector(".comentarios");
  for (let i = 0; i < 4; i++) {
    let randomItem = Math.floor(Math.random() * data.length);
    if (randomItem >= 10) {
      randomItem = randomItem - 10;
    }
    const commentHtml = `
        <section>
            <div class="userInfo">
                <h4>${data2[randomItem].name.firstname} ${data2[randomItem].name.lastname} (${data2[randomItem].email}) commented:</h4>
            </div>
            <div class="userComment">
                <h3>About the ${data[randomItem].title}</h3>
                <p>${data[randomItem].description}</p>
                <span>My rate: ${data[randomItem].rating.rate}</span>
            </div>
        </section>
        `;
    //Contenedor temporal para evitar el issue con el node 
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = commentHtml.trim();
    comentarios.appendChild(tempDiv.firstChild);
  }
}
getDataComments(apiUrlComments, apiUrlUsers);
