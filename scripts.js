

const key ="93e9bf7f3b8f02bbe505100778e485cf"

function ColocarDadosNaTela(data) {
    console.log(data)
    document.querySelector(".tempo").innerHTML= "Tempo em " + data.name
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "°C"

    document.querySelector(".previsao").innerHTML= data.weather[0].description
    document.querySelector(".umidade").innerHTML= data.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function buscarCidade(cidade){

const dados= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(resposta=> resposta.json())
    
    
    ColocarDadosNaTela(dados)
}

function CliqueiNoBotao() {
    const cidade= document.querySelector (".entrada").value

    buscarCidade(cidade)
   
}