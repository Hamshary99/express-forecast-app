
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
const labels = document.querySelectorAll('.labels')

// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerHTML = ''
            coordinatesF.innerHTML = ''
            temperatureF.innerHTML = ''
            feelsLikeF.innerHTML = ''
            humidityF.innerHTML = ''
            windSpeedF.innerHTML = ''
            conditionF.innerHTML = ''

            // locationF.parentElement.style.display = 'none';
            // coordinatesF.parentElement.style.display = 'none';
            // temperatureF.parentElement.style.display = 'none';
            // feelsLikeF.parentElement.style.display = 'none';
            // humidityF.parentElement.style.display = 'none';
            // windSpeedF.parentElement.style.display = 'none';
            // conditionF.parentElement.style.display = 'none';

            labels.forEach(label => {
                label.style.display = 'none';
            })
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