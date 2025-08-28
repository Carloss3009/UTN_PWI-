const hiddenText = document.getElementById('hiddenText')
const btnOcultar = document.getElementById('btn-ocultar')


function toggleCartel(){
    hiddenText.classList.toggle('hidden')
    hiddenText.style.color = 'brown'
    hiddenText.style.fontWeight = 'bold'
    btnOcultar.innerText = btnOcultar.innerText === 'Ver más' ? 'Ver menos' : 'Ver más'
}


btnOcultar.addEventListener('click', toggleCartel)
