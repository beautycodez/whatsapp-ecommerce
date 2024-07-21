const apiUrlComments = `https://fakestoreapi.com/products`;
const apiUrlUsers = 'https://fakestoreapi.com/users'

async function getDataComments(apiUrlComments, apiUrlUsers) {
    try {
      const [responseComments, responseUsers] = await Promise.all([
        fetch(apiUrlComments),
        fetch(apiUrlUsers)
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
  for (let i = 0; i < 3; i++) {
    const randomItem = Math.floor(Math.random()*data.length);
    const comment = data[randomItem];

    const sectionComment = document.createElement("section"); 
  }
}
getDataComments(apiUrlComments, apiUrlUsers);
