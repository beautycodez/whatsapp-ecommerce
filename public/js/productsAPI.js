const apiUrl = `https://api.escuelajs.co/api/v1/products`;

async function getDataProducts(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos de la tienda virtual:", data);
      populateDataProducts(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos del clima:", error);
    });
}

function populateDataProducts(data) {
  const categorias = document.querySelector(".categorias");
  // Get all the categories from the API without repetition.
  let unicasCategorias = [];
  let unicasIdCategorias = [];
  data.forEach((element) => {
    const categoria = element.category.name;
    if (!unicasCategorias.includes(categoria)) {
      unicasCategorias.push(categoria);
      unicasIdCategorias.push(element.id);
      const sectionCategory = document.createElement("section");
      const linkCategory = document.createElement("a");
      const h4Category = document.createElement("h4");
      const pictureCategory = document.createElement("picture");
      const imgCategory = document.createElement("img");

      h4Category.innerHTML = element.category.name;
      imgCategory.setAttribute("src", element.category.image)
      imgCategory.setAttribute("alt", `imagen de ${element.category.name}`)
      linkCategory.setAttribute("href", `/product/category/${element.category.id}`)

      pictureCategory.appendChild(imgCategory);
      sectionCategory.appendChild(pictureCategory);
      sectionCategory.appendChild(h4Category);
      linkCategory.appendChild(sectionCategory)
      categorias.appendChild(linkCategory);
    }
  });
  console.log("Categorias unicas:", unicasCategorias);
  console.log("Ids por categoria:", unicasIdCategorias);
}
getDataProducts(apiUrl);
