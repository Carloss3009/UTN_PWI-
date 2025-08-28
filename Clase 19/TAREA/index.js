// Por cada elemento del array de contactos crear un div con la información de la siguiente manera:

const contactos = [
    {
        nombre: "Emanuel Carreira",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512",
        estado: "activo" 
    },
    {
        nombre: "Fede Rabbia",
        avatar:"https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-512",
        estado: "inactivo"
    },
    {
        nombre: "Lio Silman",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-512",
        estado: "activo"
    },
    {
        nombre: "Lucas Legor",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-512",
        estado: "activo"
    },
    {
        nombre: "Luciano Leone",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-512",
        estado: "inactivo"
    },
    {
        nombre: "Luciano Leone",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-512",
        estado: "inactivo"
    },
    {
        nombre: "Luciano Leone",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-512",
        estado: "inactivo"
    },
    {
        nombre: "Emanuel Carreira",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512",
        estado: "activo" 
    },
    {
        nombre: "Emanuel Carreira",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512",
        estado: "activo" 
    },
    {
        nombre: "Emanuel Carreira",
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512",
        estado: "activo" 
    },

]

const contactsContainerHTML = document.getElementById("contacts-container")

for (const contacto of contactos) {
    contactsContainerHTML.innerHTML += `
    <aside>
    <div class ="contact">
        <div class="contact-info">
            <div>
                <img class="avatar" src="${contacto.avatar}">
                <span class="estado">${contacto.estado === "activo" ? "<i class='bi bi-circle-fill'></i>" : "<i class='bi bi-circle'></i>"}</span>
            </div>
            <h2>${contacto.nombre}</h2>

        </div>
    </div>
    </aside>
    `
}





