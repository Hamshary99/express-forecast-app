
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const coordinatesF = document.getElementById('coordinates')
const temperatureF = document.getElementById('temperature')
const feelsLikeF = document.getElementById('feelsLike')
const humidityF = document.getElementById('humidity')
const windSpeedF = document.getElementById('windSpeed')
const conditionF = document.getElementById('condition')

// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText = ''
            coordinatesF.innerText = ''
            temperatureF.innerText = ''
            feelsLikeF.innerText = ''
            humidityF.innerText = ''
            windSpeedF.innerText = ''
            conditionF.innerText = ''
        }
        else {
            locationF.innerText = data.location
            coordinatesF.innerText = data.coordinates.latitude + ', ' + data.coordinates.longitude
            temperatureF.innerText = data.temperature
            feelsLikeF.innerText = data.feelsLike
            humidityF.innerText = data.humidity
            windSpeedF.innerText = data.windSpeed
            conditionF.innerText = data.condition
            errorF.innerText = ''

            //display all
            locationF.parentElement.style.display = 'block';
            coordinatesF.parentElement.style.display = 'block';
            temperatureF.parentElement.style.display = 'block';
            feelsLikeF.parentElement.style.display = 'block';
            humidityF.parentElement.style.display = 'block';
            windSpeedF.parentElement.style.display = 'block';
            conditionF.parentElement.style.display = 'block';

        }
    }
    catch(e){
        console.log(e)
    }
}