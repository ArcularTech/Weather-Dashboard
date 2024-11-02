# Weather-Dashboard
A simple, responsive weather dashboard that displays the current weather information for a specified city. This app uses the Weather API to fetch real-time weather data, including temperature, humidity, wind, pressure, and more. The design includes a glass-like effect with a hover effect for each weather detail.
Weather Dashboard
A simple, responsive weather dashboard that displays the current weather information for a specified city. This app uses the Weather API to fetch real-time weather data, including temperature, humidity, wind, pressure, and more. The design includes a glass-like effect with a hover effect for each weather detail.

Features
Displays weather details like temperature, humidity, wind, visibility, UV index, and more.
Allows users to search for any city to get the current weather.
Responsive design with glass-like and hover effects for a visually appealing UI.
Technologies Used
HTML
CSS
JavaScript
Weather API
Demo
![{9E9B7E1F-D8F6-49F9-948B-26C642AB2E8F}](https://github.com/user-attachments/assets/98271a7f-79ad-45fa-8dcc-4aee7c35a3cb)


Installation
Clone the repository:
git clone https://github.com/ArcularTech/Weather-Dashboard.git
cd weather-dashboard
API Key: Get an API key from WeatherAPI.

Configure API Key: In the script.js file, replace 'your_api_key' with your actual API key.

javascript

const apiKey = 'your_api_key'; // Replace with your API key
Usage
Open index.html in any web browser to load the weather dashboard.
Enter the city name in the input field and click the Search button.
The current weather information for the city will be displayed below.
Folder Structure

weather-dashboard/
├── index.html       # Main HTML file
├── style.css        # CSS for styling the app
├── script.js        # JavaScript for API requests and app functionality
└── images/          # (Optional) Folder for any background images used
Code Overview
HTML
The main structure includes an input field for the city name, a button for triggering the search, and containers for displaying weather details.

CSS
The CSS file includes:

Flexbox for layout alignment and centering.
Glass effect with transparency and hover transitions for weather information boxes.
Background image styling to create an immersive, polished look.
JavaScript
The JavaScript fetches data from the Weather API, processes it, and dynamically displays it within the containers.

Future Enhancements
Add hourly and daily forecasts.
Include historical weather data.
Implement animations for transitions between data refreshes.
Add support for multiple units (e.g., Celsius/Fahrenheit switch).
API Reference
The app uses the Weather API to fetch current weather data. The key fields utilized are:

temp_c / temp_f: Current temperature in Celsius/Fahrenheit.
humidity: Humidity percentage.
wind_mph / wind_kph: Wind speed in miles per hour/kilometers per hour.
pressure_mb: Atmospheric pressure in millibars.
feelslike_c / feelslike_f: Feels-like temperature.
vis_km: Visibility in kilometers.
uv: UV index.
For more details, visit the WeatherAPI Documentation.


Acknowledgments
WeatherAPI for providing reliable and comprehensive weather data.
