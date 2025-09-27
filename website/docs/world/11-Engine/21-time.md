# Time System

* Code location: [/core/time.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/time.js)

* `Meta Septopus`使用区块高度来计算系统时间，是现实世界速度的约20倍，相当于现实时间的1年，在`Meta Septopus`里被计算为20年。

## 时间定义

* `Meta Septopus`的时间定义如下：

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

## 有趣的特性

* `Meta Septopus`的时间设定上，就可以让世界里的物品有了时间属性，例如，当我们在`Block`上种一颗树的时候，可以根据这个时间来计算生长的情况。
  
* `Meta Septopus`有了时间之后，也能建立`荒废机制`，即当一个`Block`没有更新超过**100年**的时候，即进入荒废状态，任何其他人就可以拥有这个`Block`，能对资源进行合理回收。