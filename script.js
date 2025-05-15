document.getElementById("buscar").addEventListener("click", function() {
    const city = document.getElementById("cidade").value;
    const apiKey = "89e3ec96c12801b6e2aef86e7357c2f9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Cidade não encontrada");
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById("resultado");
            resultDiv.innerHTML = ""; 
            const temperatura = data.main.temp;
            const descricao = data.weather[0].description;
            const umidade = data.main.humidity;
            const vento = data.wind.speed;
            const pais = data.sys.country;
            const cidade = data.name;

            document.getElementById("resultado").innerHTML = `
                <h2>${cidade}, ${pais}</h2>
                <p>Temperatura: ${temperatura}°C</p>
                <p>Descrição: ${descricao}</p>
                <p>Umidade: ${umidade}%</p>
                <p>Vento: ${vento} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById("resultado").innerHTML = `<p>${error.message}</p>`;
        });
});