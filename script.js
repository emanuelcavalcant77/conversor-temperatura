function clique() {
    let temp = parseFloat(document.getElementById("temp").value);
    let unidade = document.getElementById("unidade").value; 
    let C, K, F;

    if (isNaN(temp)) {
        alert("Digite a temperatura!");
        return;
    }

    if (unidade === "C") {
        C = temp;
        F = (temp * 9 / 5) + 32;
        K = temp + 273.15;
    } 
    else if (unidade === "K") {  
        C = temp - 273.15;
        F = (C * 9 / 5) + 32;
        K = temp;
    }
    else if (unidade === "F") {
        C = (temp - 32) * 5 / 9;
        K = C + 273.15;
        F = temp;
    }

    document.getElementById("celsius").innerText = `Celsius: ${C.toFixed(2)}°C`;
    document.getElementById("fahrenheit").innerText = `Fahrenheit: ${F.toFixed(2)}°F`;
    document.getElementById("kelvin").innerText = `Kelvin: ${K.toFixed(2)}K`;
}