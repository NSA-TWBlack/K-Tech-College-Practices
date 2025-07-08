import React, { useState, useEffect } from "react";
import {
  Search,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
} from "lucide-react";

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    humidity: number;
    wind_kph: number;
  };
}

interface HourlyData {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}

interface ForecastData {
  forecast: {
    forecastday: Array<{
      hour: HourlyData[];
    }>;
  };
}

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [hourlyData, setHourlyData] = useState<HourlyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState("Hanoi");
  const [inputValue, setInputValue] = useState("Hanoi");

  const API_KEY = "c9a0ca46550648b29ce125849232709";

  const getWeatherIcon = (code: number) => {
    // Weather condition codes mapping
    if (code === 1000) return <Sun className="w-8 h-8 text-yellow-500" />;
    if ([1003, 1006, 1009].includes(code))
      return <Cloud className="w-8 h-8 text-gray-500" />;
    if (
      [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(
        code
      )
    )
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (
      [
        1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1261,
        1264,
      ].includes(code)
    )
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    return <Sun className="w-8 h-8 text-yellow-500" />;
  };

  const fetchWeatherData = async (city: string) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=vi`
      );

      if (!currentResponse.ok) {
        throw new Error("City not found");
      }

      const currentData = await currentResponse.json();
      setWeatherData(currentData);

      // Fetch hourly forecast
      const forecastResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
      );

      if (!forecastResponse.ok) {
        throw new Error("Failed to fetch forecast");
      }

      const forecastData: ForecastData = await forecastResponse.json();

      // Get next 8 hours from current time
      const now = new Date();
      const currentHour = now.getHours();
      const todayHours = forecastData.forecast.forecastday[0].hour;

      const nextHours = todayHours.slice(currentHour, currentHour + 8);
      setHourlyData(nextHours);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(searchCity);
  }, [searchCity]);

  const handleSearch = (e: React.KeyboardEvent | React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchCity(inputValue.trim());
    }
  };

  const formatTime = (timeString: string, index: number) => {
    if (index === 0) return "Now";
    const time = new Date(timeString);
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-xl">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-xl mb-4">Error: {error}</div>
          <button
            onClick={() => fetchWeatherData(searchCity)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 bg-gray-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
              placeholder="Search city..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Current Weather Section */}
        <div className="p-6 text-center">
          <div className="text-gray-600 mb-2">
            {weatherData?.location.name}, {weatherData?.location.country}
          </div>

          <div className="flex items-center justify-center mb-4">
            {weatherData && getWeatherIcon(weatherData.current.condition.code)}
            <span className="text-6xl font-thin ml-4 text-gray-800">
              {weatherData?.current.temp_c}°
            </span>
          </div>

          <div className="text-gray-600 text-lg mb-6">
            {weatherData?.current.condition.text}
          </div>

          {/* Humidity and Wind Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Droplets className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-semibold text-gray-800">
                {weatherData?.current.humidity}%
              </div>
              <div className="text-sm text-gray-600">Humidity</div>
            </div>

            <div className="bg-green-50 rounded-2xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Wind className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-semibold text-gray-800">
                {weatherData?.current.wind_kph} km/h
              </div>
              <div className="text-sm text-gray-600">Wind</div>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="p-6 pt-0">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Hourly Forecast
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {hourlyData.map((hour, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center bg-gray-50 rounded-xl p-3 min-w-[70px]"
              >
                <div className="text-sm text-gray-600 mb-2">
                  {formatTime(hour.time, index)}
                </div>
                <div className="flex justify-center mb-2">
                  {getWeatherIcon(hour.condition.code)}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  {Math.round(hour.temp_c)}°
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
