const utilities = {};

utilities.getDataProducts = async function (apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error; // Re-lanzar el error para que pueda ser capturado por el llamador
  }
};

utilities.getDataByIdCategory = async function (data, categoryId) {
  const dataByCategory = data.filter(
    (element) => element.category.id === Number(categoryId)
  );
  return dataByCategory;
};

utilities.productsByCategoryHtml = async function (data) {
  let grid;
  if (data.length > 0) {
    grid = '<div id="pro-display">';
    data.forEach((product) => {
      grid += `
      <section>
        <picture class="pro-picture">
            <img src="${product.images[0]}">
        </picture>
      </section>
      `
    });
    grid += "</div>";
  } else {
    grid += '<p class="notice">Sorry, no matching products could be found.</p>';
  }
  return grid;
};

/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
utilities.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

module.exports = utilities;
