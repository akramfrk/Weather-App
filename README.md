# WEATHER FORECAST WEB APP

This project is a simple, beautiful, and functional weather forecast web application built with HTML, CSS, and JavaScript. It allows users to search for any city and get real-time weather information along with a 5-day forecast — all powered by the OpenWeatherMap API.

Note: This is **my very first time dealing with APIs**, and I created this project to understand how to connect to external services, retrieve live data, and present it dynamically on the page.

---

## 🔍 Preview

[Home Screenshot](./assets/readme/preview.png)

---

## 🌦️ FEATURES

- 🔎 **Search weather information by city name**
    
- ✨ **Search suggestions while typing**  
    As you start typing a city name, the app suggests matching cities using the OpenWeather Geo API:  
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
    
- 📊 **Display current weather data including**:
    
    - Temperature (°C)
        
    - Weather condition (e.g., Clear, Rainy)
        
    - Wind speed (M/s)
        
    - Humidity (%)
        
- 📅 **5-day forecast** at 12:00 PM for each day
    
- 🚫 Handles invalid or empty input with a "City Not Found" error section
    
- 💎 **Glassmorphism user interface** for a clean and modern look
    
- 📱 **Fully responsive** layout for desktop and mobile devices
    

---

## 🧰 TECHNOLOGIES USED

- HTML5
    
- CSS3
    
- JavaScript (ES6+)
    
- OpenWeatherMap API (Weather + Geo)
    

---

## 🚀 HOW TO USE

1. Download or clone this project to your local machine.
    
2. Go to [https://openweathermap.org/api](https://openweathermap.org/api) and create a free account to get your API key.
    
3. Open the `script.js` file and replace the default API key with your own:
    
    `const apiKey = 'YOUR_API_KEY_HERE';`
    
4. Open the `index.html` file in your browser to launch the app.
    
5. Start typing a city name and choose a suggestion or press Enter to get the weather forecast.
    

---

## 📁 FOLDER STRUCTURE

- `assets/`
    
    - `weather/` → Weather icons (SVG format)
        
    - `message/` → Message illustrations (Search & Not Found)
        
- `script.js` → JavaScript logic: API fetch, DOM updates, and event handling
    
- `index.html` → Main HTML file
    
- `style.css` → Styling, layout, and responsive behavior
    
- `README.txt` → This documentation file
    

---

## 🧠 WHAT I LEARNED

- How to make API requests using `fetch()`
    
- How to work with and parse JSON responses
    
- How to use `async/await` to handle asynchronous code
    
- How to dynamically manipulate the DOM
    
- How to create HTML templates with `.insertAdjacentHTML()`
    
- How to implement user input validation and error handling
    
- How to use a second API (Geo API) to provide **autocomplete suggestions**
    

---

## 🔮 POSSIBLE FUTURE IMPROVEMENTS

- Add a toggle between Fahrenheit and Celsius
    
- Display local time of the selected city
    
- Show loading animations during API requests
    
- Use Geolocation API to automatically detect user’s current city
    
- Add light/dark mode toggle
    

---

## 📜 License

This project is open-source and free to use for learning or inspiration.

---

## 👨‍💻 AUTHOR

FERKIOUI Akram