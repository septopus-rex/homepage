# Weather System

* Code location: [/core/weather.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/weather.js)

* The `Septopus Engine` calculates different weather conditions based on the hash of the block.
* After entering the game mode through task, you can set the sky conditions.

## Weather Definition

* `Meta Septopus` weather definition as follow:

```Javascript
    {
        "category": ["cloud", "rain", "snow"],
        "grading": 8,
        "detail": {
            "cloud": [
                "sunny",              // ☀️
                "mostly sunny",       // 🌤
                "partly cloudy",      // ⛅️
                "mostly cloudy",      // 🌥
                "cloudy",             // ☁️
                "overcast",           // 🌫️
                "dim daylight",       // 🌁
                "dark sky"            // 🌑
            ],
            "rain": [
                "fog",               // 🌫️
                "drizzle",           // 🌦
                "light rain",        // 🌧
                "moderate rain",     // 🌧
                "heavy rain",        // 🌧🌧
                "downpour",          // 🌧🌧🌧
                "rainstorm",         // 🌩
                "torrential rain"    // 🌊
            ],
            "snow": [
                "frost",            // ❄️
                "flurries",         // 🌨️
                "light snow",       // 🌨
                "moderate snow",    // 🌨
                "heavy snow",       // 🌨🌨
                "blowing snow",     // 🌬️❄️
                "snowstorm",        // 🌨⚡️
                "whiteout"          // 🌫️
            ],
        },
        "degree": 40,
        "data":{
            "category":[2,4], 
            "grade":[10,6], 
            "interval":3*60*60,
        }
    }
```

## Implementation

* The `Meta Septopus` system takes the hash of the block, modulo the corresponding position, and adjusts the weather accordingly.
  
* The weather display results will also be combined with the `Meta Septopus` time.