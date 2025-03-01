document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetchWeather();
});

const elements = {
    error: document.getElementById('error'),
    location: document.getElementById('location'),
    coordinates: document.getElementById('coordinates'),
    temperature: document.getElementById('temperature'),
    feelsLike: document.getElementById('feelsLike'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    condition: document.getElementById('condition'),
    weatherInfo: document.getElementById('weather-info')
};

const fetchWeather = async () => {
    try {
        const address = document.getElementById('address').value.trim();
        if (!address) {
            elements.error.innerText = 'Please enter a location.';
            elements.weatherInfo.style.display = 'none';
            return;
        }

        elements.error.innerText = 'Loading...';
        elements.weatherInfo.style.display = 'none';

        const response = await fetch(`/weather?address=${address}`);
        const data = await response.json();

        if (data.error) {
            elements.error.innerText = data.error;
            elements.weatherInfo.style.display = 'none';
        } else {
            elements.error.innerText = '';

            elements.location.innerText = data.location;
            elements.coordinates.innerText = `${data.coordinates.latitude}, ${data.coordinates.longitude}`;
            elements.temperature.innerText = data.temperature;
            elements.feelsLike.innerText = data.feelsLike;
            elements.humidity.innerText = data.humidity;
            elements.windSpeed.innerText = data.windSpeed;
            elements.condition.innerText = data.condition;

            elements.weatherInfo.style.display = 'block';
        }
    } catch (error) {
        elements.error.innerText = 'Failed to fetch weather data. Please try again.';
        console.error(error);
    }
};
