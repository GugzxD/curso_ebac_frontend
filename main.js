const form = document.getElementById('fValue');

formValido = false

function numeroValor (valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let valorA = parseFloat(document.getElementById('repA').value)
    let valorB = parseFloat(document.getElementById('repB').value)

    formValido = numeroValor(valorA, valorB)

        if(formValido) { 
            alert('Concluido, o campo B é maior que o campo A')   
        } else {
                alert('Não concluido, o valor do campo B precisa ser maior do que o valor do Campo A')
        }
    })

