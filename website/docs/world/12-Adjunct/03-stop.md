# Stop

* Code location: [/adjunct/basic_stop.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_stop.js)
  
* `Stop`组件，是创建一个阻拦`Player`运动的组件，可以是各种形状的。
* `Stop`是执行阻拦机制的一个组件，但是由于其只在编辑模式下显形，会给人空气墙的感觉。

## 数据定义

* `Stop`的数据结构，定义如下：

    ```Javascript
        [
            [ 4,  4, 0.2 ],         //stop的尺寸
            [ 14, 14, 0.1 ],        //stop在block里的定位
            [ 0, 0, 0 ],            //stop的旋转值
            1,                      //stop的类型
        ]
    ```

* 当数据没有版本信息的时候，默认版本为"2025"。

## 类型说明

* `Stop`将支持各种类型的几何形状，用于实现复杂的空间控制。

|  几何形状   | 基础说明  | 支持 |
|  ----  | ----  | ----  |
|  box  |  三维盒子的阻拦体 | ✅ |
|  ball | 球体的阻拦体   | ✅ |
|  cylinder | 柱体的阻拦体   | ❌ |

## 定义部分

* `Stop`采用的定义，需要公布到链上。
  
  ```Javascript
    {
        "TYPE_OF_STOP": 3,
    }
  ```