const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

const numerosMenores = (numeros) => {
    const resultado = [];
    for (n of numeros) {
        if (n < 8) {
            resultado.push(n);
        }
    }
    return resultado;
}

const numerosMayores = (numeros) => {
    const resultado = [];
    for (n of numeros) {
        if (n >= 8) {
            resultado.push(n);
        }
    }
    return resultado;
}

const numeroElementos = (numeros) => {
    const numeroElementos = numeros.length;
    return numeroElementos;
}

const menores = numeroElementos(numerosMenores(fibonacci));
const mayores = numeroElementos(numerosMayores(fibonacci));

console.log(menores, mayores);

const container = document.querySelector('.container');
container.innerHTML = "<p>Existen " + menores + " numeros menores</p><p>Existen " + mayores + " numeros mayores o iguales que 8</p>";