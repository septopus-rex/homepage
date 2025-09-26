# Module

* 代码位置:[/adjunct/basic_module.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_module.js)
  
* `Module`的主要作用，是导入外部软件创建的3D模型。得益于three.js强大，`Module`支持多种软件导出的格式。
* `Module`可以看成是一个容器，将外部软件创建的3D模型定位到`World`里，这样，就能构建丰富的内容。

## 数据定义

* `Module`的数据结构，定义如下：
  
    ```Javascript
        [
            [ 4,  4, 0.2 ],         //0.module的尺寸
            [ 14, 14, 0.1 ],        //1.module在block里的定位
            [ 0, 0, 0 ],            //2.module的旋转值
            3,                      //3.module的ID
            0,                      //4.动画效果
            1                       //5.是否有stop属性，阻止玩家进入
        ]
    ```

* 当数据没有版本信息的时候，默认版本为"2025"。

## 模型说明

* `Module`支持多种类型的导入文件，其信息保存在链上的数据中，通过文件格式，调用three.js对应的解析器来处理。
* `Module`尺寸涉及到各种不同软件的设置，需要在上链的时候进行校验，调整到以`米(m)`为单位。
* `Module`导入的各种模型，各种特性的支持存在兼容性问题，需要测试后再使用。

## 定义部分

* `Module`采用的定义，需要公布到链上。
  
  ```Javascript
    {
        "RESOURCE_ID_ON_CHAIN": 3,
        "ANIMATION_OPTION": 4,
        "AUTO_STOP": 5,
    }
  ```