



//CAmbiar le color de css a dark mode
const value_dark = document.getElementById('dark-mode');

value_dark.addEventListener('change', function() {
    if (value_dark.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});


//convertir la moneda
document.addEventListener("DOMContentLoaded", function () {

    const v_monto = document.getElementById("imonto");
    const v_cambio = document.getElementById("ivalor");
    const btConvertir = document.getElementById("btconvertir");



    //valores monedas
    const tasas = {
        usd: 0.27,
        eur: 0.25,
        gbp: 0.22
    };

    btConvertir.addEventListener("click", function () {
        const monto = parseFloat(v_monto.value);
        const moneda = v_cambio.value;

        if (isNaN(monto) || moneda === "seleccionar") {
            alert("ingrese un monto y seleccione una moneda");
            return;
        }

        const resultado = monto * tasas[moneda];
        alert(`la conversion es: ${resultado.toFixed(2)} ${moneda.toUpperCase()}`);
    });
    
});
