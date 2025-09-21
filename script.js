

const key = "df49e27e4d61a8c35dcc33441178f131"


function colocarDadosNaTela(dados) {
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp-max").innerHTML = Math.floor(dados.main.temp_max) + "°C Max"
    document.querySelector(".temp-min").innerHTML = Math.floor (dados.main.temp_min) + "°C Min"
    document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description
    document.querySelector (".umidade").innerHTML = "Umidade: " +dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

    console.log(dados)
}



async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=>resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}