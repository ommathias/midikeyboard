function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        alert('Elemento nao encontrado');
    }
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const som = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(som);
    }

    tecla.onkeydown = function (event) {
        console.log(event);
        if (event.code == "Enter" || event.code === "Space")
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
