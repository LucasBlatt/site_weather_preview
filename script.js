function previsaoTempo() {
  const formBuscaCep = document.getElementById("formCidade");
  const infosApi = document.getElementById("infosApi");

  formBuscaCep.addEventListener("submit", async function (event) {
    event.preventDefault();

    const cidade = event.target.txtCidade.value;

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=dd4b51881dd54b618c7224232240511&q=${cidade}&aqi=no&lang=pt`
      );

      const data = await response.json();

      infosApi.innerHTML = ` 
        <p> ${data.location.name}  -  ${data.location.region}  -  ${data.location.country}</p>
        <p>${data.location.localtime}</p>
        <br>
        <img src="${data.current.condition.icon}" alt="Ícone do tempo">
        <p class="temperatura">${data.current.temp_c}°C</p>
        <p>${data.current.condition.text}</p>
        <br>
        <p>Vento: ${data.current.wind_kph} km/h  -  ${data.current.wind_dir}</p>
        <p>Índice UV: ${data.current.uv}</p>
        <p>Umidade: ${data.current.humidity}%</p>
      `;
    } catch (error) {
      infosApi.innerText =
        "Erro ao buscar a previsão do tempo para a cidade informada. Tente novamente.";
    }
  });
}

previsaoTempo();
