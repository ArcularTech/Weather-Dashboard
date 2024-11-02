async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '76ac879988c7486796f71504240211'; // Replace 'your_api_key' with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // If response is not OK, throw an error
        if (!response.ok) {
            throw new Error("City not found or invalid API request");
        }

        const data = await response.json();
        
        // Debugging: Check data received
        console.log("Weather data:", data);

        // Update location information
        const locationInfo = document.getElementById('locationInfo');
        const locationName = document.getElementById('locationName');
        locationName.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
        locationInfo.style.display = "block";

        // Update weather details
        document.getElementById('temperature').textContent = `${data.current.temp_c} °C (${data.current.temp_f} °F)`;
        document.getElementById('weather').textContent = data.current.condition.text;
        document.getElementById('humidity').textContent = `${data.current.humidity}%`;
        document.getElementById('wind').textContent = `${data.current.wind_mph} mph (${data.current.wind_kph} kph) ${data.current.wind_dir}`;
        document.getElementById('pressure').textContent = `${data.current.pressure_mb} mb (${data.current.pressure_in} in)`;
        document.getElementById('feelsLike').textContent = `${data.current.feelslike_c} °C (${data.current.feelslike_f} °F)`;
        document.getElementById('visibility').textContent = `${data.current.vis_km} km (${data.current.vis_miles} miles)`;
        document.getElementById('uvIndex').textContent = data.current.uv;

        // Show the weather container
        document.getElementById('weatherContainer').style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching data. Please check the city name or API key.");
    }
}
