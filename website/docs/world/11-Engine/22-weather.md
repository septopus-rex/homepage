# Weather System

* Code location: [/core/weather.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/weather.js)

* `引擎`根据区块的哈希，来计算出不同的天气状况。
* 通过task，进入游戏模式后，可以对天空状况进行设置。

## 天气定义

* `Meta Septopus`的天气系统定义如下：

```Javascript
    {
        "category": ["cloud", "rain", "snow"],
        "grading": 8,
        "detail": {
            "cloud": [
                "sunny",              // ☀️ 完全晴朗
                "mostly sunny",       // 🌤 几乎晴朗，少量云
                "partly cloudy",      // ⛅️ 局部多云
                "mostly cloudy",      // 🌥 大部分时间多云
                "cloudy",             // ☁️ 完全多云
                "overcast",           // 🌫️ 阴沉（厚云层）
                "dim daylight",       // 🌁 光线暗淡（接近阴天或雾天）
                "dark sky"            // 🌑 漆黑压抑的天空（重云/暴雨前）
            ],
            "rain": [
                "frog",              // 🐸 青蛙出没 / 极轻微湿气（象征刚下雨）
                "drizzle",           // 🌦 细雨/毛毛雨
                "light rain",        // 🌧 小雨
                "moderate rain",     // 🌧 中雨
                "heavy rain",        // 🌧🌧 大雨
                "downpour",          // 🌧🌧🌧 倾盆大雨
                "rainstorm",         // 🌩 雷雨或暴雨
                "torrential rain"    // 🌊 特大暴雨，近灾害级
            ],
            "snow": [
                "frost",            // ❄️ 霜，极轻微结冰或冻露，非真正降雪
                "flurries",         // 🌨️ 零星小雪
                "light snow",       // 🌨 小雪
                "moderate snow",    // 🌨 中雪
                "heavy snow",       // 🌨🌨 大雪
                "blowing snow",     // 🌬️❄️ 吹雪，风大雪大
                "snowstorm",        // 🌨⚡️ 暴雪
                "whiteout"          // 🌫️ 完全白茫茫，能见度极低
            ],
        },
        "degree": 40,
        "data":{
            "category":[2,4],         //取值位置
            "grade":[10,6],           //取值位置
            "interval":3*60*60,       // 天气更新间隔       
        }
    }
```

## 实现方式

* `Meta Septopus`系统根据区块的哈希，取对应的位置取余之后，来对应的调整天气。
  
* 天气的显示结果，还会和`Meta Septopus`的时间进行复合。