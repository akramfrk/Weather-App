# WEATHER FORECAST WEB APP

This project is a simple, beautiful, and functional weather forecast web application built with HTML, CSS, and JavaScript. It allows users to search for any city and get real-time weather information along with a 5-day forecast — all powered by the OpenWeatherMap API.

Note: This is **my very first time dealing with APIs**, and I created this project to understand how to connect to external services, retrieve live data, and present it dynamically on the page.

---

## Preview
[Home Screenshot](/assets/readme/preview.png)

## FEATURES

- Search weather information by city name
    
- Display current weather data including:
    
    - Temperature (°C)
        
    - Weather condition (e.g., Clear, Rainy)
        
    - Wind speed (km/h)
        
    - Humidity (%)
        
- Shows 5-day weather forecast at 12:00 PM each day
    
- Handles invalid or empty input with a "Not Found" error section
    
- Clean and modern **glassmorphism** user interface
    
- Fully responsive layout for both desktop and mobile devices
    

---

## TECHNOLOGIES USED

- HTML5
    
- CSS3
    
- JavaScript (ES6+)
    
- OpenWeatherMap API
    

---

## HOW TO USE

1. Download or clone this project to your local machine.
    
2. Go to [https://openweathermap.org/api](https://openweathermap.org/api) and create a free account to get your API key.
    
3. Open the `script.js` file and replace the default API key with your own:
    
    `const apiKey = 'YOUR_API_KEY_HERE';`
    
4. Open the `index.html` file in your browser to use the app.
    
5. Type any city name and click the search button (or press Enter) to get the weather.
    

---

## FOLDER STRUCTURE

- `assets/`
    
    - `weather/` → Weather icons (SVG format)
    - message/ → messages images (Serch & Not Found)
    
- `script.js` → JavaScript logic: API fetch, DOM update, and event handling
- `index.html` → Main HTML file of the application
- `style.css` → All styles for layout, animations, and responsiveness
    
- `README.txt` → This instruction and documentation file
    

---

## WHAT I LEARNED

- How to make an API request using the `fetch()` method
    
- How to read and extract useful data from JSON responses
    
- How to handle async behavior using `async/await`
    
- How to dynamically update the DOM with real data
    
- How to insert HTML using `.insertAdjacentHTML()`
    
- How to gracefully handle empty inputs or invalid responses
    

---

## POSSIBLE FUTURE IMPROVEMENTS

- Add support for Fahrenheit/Celsius toggle
    
- Show local time for the selected city
    
- Add loading animations during API requests
    
- Use Geolocation API to detect the user’s current city
    
- Add theme switcher: light mode / dark mode
    

---

## License

This project is open-source and free to use for learning or inspiration.

---

## AUTHOR

FERKIOUI Akram
