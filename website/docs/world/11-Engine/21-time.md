# Time System

* Code location: [/core/time.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/time.js)

* `Meta Septopus` uses block height to calculate system time, which is about 20 times the speed of the real world. The equivalent of one year in real time is calculated as 20 years in `Meta Septopus`.

## Time Definition

* `Meta Septopus` time definition as follow:

```Javascript
    {
        "year": 12,        // months/year
        "month": 30,       // days/month
        "day": 24,         // hours/day
        "hour": 60,        // minutes/hour
        "minute": 60,      // seconds/minute
        "second": 1000,    // microseconds/second
        "speed": 20,       // rate =  septopus year / reality year
        "start": 80000,    // septopus world start height
    }
```

## Interesting Features

* The time setting of `Meta Septopus` can give objects in the world time attributes. For example, when we plant a tree on a `Block`, we can calculate the growth status based on this time.
  
* As `Meta Septopus` has time, it can also establish an `abandonment mechanism`. That is, when a `Block` has not been updated for more than **100 years**, it will enter an abandoned state. Anyone else can own this `Block` and recycle resources reasonably.