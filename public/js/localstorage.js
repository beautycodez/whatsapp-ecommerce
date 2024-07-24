function firstVisit() {
    // Obtener el número de visitas del localStorage y convertirlo a número
    let visitNumber = parseInt(localStorage.getItem("visit"), 10);
    const firstVisitDiv = document.querySelector(".firstVisit");

    // Comprobar si visitNumber es NaN o null (cuando no hay visitas previas)
    if (isNaN(visitNumber) || visitNumber === null) {
        firstVisitDiv.innerHTML = `Thank you for visiting for the first time, we have many promotions for you!`;
        visitNumber = 1; // Inicializar el número de visitas en 1
        localStorage.setItem("visit", visitNumber); // Guardar en localStorage
    } else {
        visitNumber++;
        firstVisitDiv.innerHTML = `Hey! nice to see you again. You've visited ${visitNumber} times.`;
        // Incrementar el número de visitas correctamente
        localStorage.setItem("visit", visitNumber); // Actualizar en localStorage
    }
}

firstVisit();