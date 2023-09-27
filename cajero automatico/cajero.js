let cuentas = [
    { nameUser: "Mali", saldo: 200 },
    { nameUser: "Gera", saldo: 290 },
    { nameUser: "Maui", saldo: 67 }
];

let select;
let saldoActualElement = document.getElementById("saldoActual");

document.getElementById("cuentas").addEventListener("change", function(event) {
    select = event.target.value;
    document.getElementById("passwordForm").style.display = "block";
});

document.getElementById("passwordSubmit").addEventListener("click", function() {
    let password = document.getElementById("password").value;
    if (verificarPassword(select, password)) {
        document.getElementById("passwordForm").style.display = "none";
        document.getElementById("operaciones").style.display = "block";
        saldoActualElement.innerText = "Saldo actual: $" + cuentas[select].saldo;
    } else {
        document.getElementById("passwordError").style.display = "block";
    }
    });

document.getElementById("saldo").addEventListener("click", function() {
    saldoActualElement.innerText = "Saldo actual: $" + cuentas[select].saldo;
});

document.getElementById("ingresar").addEventListener("click", function() {
    let monto = prompt("Ingrese el monto a ingresar:");
    monto = parseInt(monto);
    if (!isNaN(monto) && monto > 0) {
        let nuevoSaldo = cuentas[select].saldo + monto;
        if (nuevoSaldo <= 990) {
        cuentas[select].saldo = nuevoSaldo;
        saldoActualElement.innerText = "Monto ingresado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo;
        } else {
        saldoActualElement.innerText = "No se puede ingresar ese monto. Saldo máximo permitido: $990";
        }
    } else {
        saldoActualElement.innerText = "Monto inválido.";
    }
    });

document.getElementById("retirar").addEventListener("click", function() {
    let monto = prompt("Ingrese el monto a retirar:");
    monto = parseInt(monto);
    if (!isNaN(monto) && monto > 0) {
        var nuevoSaldo = cuentas[select].saldo - monto;
        if (nuevoSaldo >= 10) {
        cuentas[select].saldo = nuevoSaldo;
        saldoActualElement.innerText = "Monto retirado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo;
        } else {
        saldoActualElement.innerText = "No se puede retirar ese monto. Saldo mínimo permitido: $10";
        }
    } else {
        saldoActualElement.innerText = "Monto inválido.";
    }
    });

function verificarPassword(cuenta, password) {
    // Aquí puedes implementar tu lógica para verificar el password
    // En este ejemplo, simplemente se compara con una cadena fija
    return password === "1234";
}
