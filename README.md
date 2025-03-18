# Weather API Project

A simple web application that provides current weather information based on location search.

## Overview

This Weather API project is a Node.js web application built with Express and Handlebars that allows users to search for weather information by location. The application fetches geocoding data for the provided address and then retrieves current weather conditions for those coordinates.

## Features

- Search weather by location name
- Display current temperature, feels-like temperature, humidity, and wind speed
- Show weather condition descriptions
- Responsive web interface
- Error handling for invalid locations or API failures

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Templating**: Handlebars (hbs)
- **API Endpoints**: Custom geocoding and forecasting services

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-api-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── public/               # Static assets (CSS, client-side JS)
├── template/             
│   ├── views/            # Handlebars view templates
│   │   └── index.hbs     # Main page template
│   └── partials/         # Reusable template components
├── tools/                # Utility modules
│   ├── geocode.js        # Geocoding service integration
│   └── forecast.js       # Weather forecast service integration
├── app.js                # Main Express application
├── script.js             # Client-side JavaScript
└── README.md             # Project documentation
```

## API Endpoints

### GET /weather
Returns weather information for the specified address.

**Query Parameters:**
- `address` (required): Location to get weather information for

**Example Request:**
```
GET /weather?address=New York
```

**Example Response:**
```json
{
  "location": "New York",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.006
  },
  "temperature": "22°C",
  "feelsLike": "25°C",
  "humidity": "65%",
  "windSpeed": "5 mph",
  "condition": "Partly Cloudy"
}
```

## Usage

1. Enter a location in the search box
2. Click the "Get Weather" button or press Enter
3. View the current weather information for the specified location

## Error Handling

The application handles the following error scenarios:
- Empty address input
- Invalid location
- API service failures
- Network connectivity issues

## Dependencies

- express: Web framework
- hbs: Handlebars templating engine
- path: File path utilities
- (Additional dependencies used in forecast.js and geocode.js modules)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
