# Effects

* Code location: [/effects/entry.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/effects/entry.js)

* `Septopus 引擎`提供很多基础特效，例如位移、旋转、缩放等，降低`附属物`开发中动画部分的代码量，也降低了动画部分开发的难度。

|  名称   | 效果描述  | 实现方法  |
|  ----  | ----  | ----  |
|  位移(move)  |  3D物体在XYZ轴上移动位置 | 设置mesh的位置XYZ坐标 |
|  旋转(rotate) | 3D物体在XYZ轴上旋转角度  | 设置mesh的XYZ旋转值 |
|  缩放(scale)  | 3D物体在XYZ轴上按比例缩放  | 设置mesh的XYZ缩放值  |
|  材质(texture)  | 3D物体材质切换  | 更新mesh材质对象，使用指定的texture |
|  色彩(color)  | 3D物体色彩切换  | 更新mesh的材质对象 |
|  透明(opacity)  | 3D物体的透明度 | 更新mesh的透明度 |
|  形变(morph)  | 3D物体切换 | 切换3D的mesh |

## 调用方式

* 使用单一入口来对基础动画进行调用`VBW.effects.get(target,animate,cfg)`。
  
* `Effects`还提供了以下的功能。

    | 方法名 | 作用 | 示例 |
    | --- | --- | --- |
    | set | 初始化系统 |  `VBW.effects.set(camera,scene)` |
    | get | 获取单一动画处理方法 | `VBW.effects.get(target,animate,cfg)` |
    | group | 批量获取动画处理的方法 |  `VBW.effects.get(list)` |
    | decode | 标准动画的解析方法 | `VBW.effects.decode(std, category)` |

* 单一动画功能的实现，以独立文件的方式进行拆分，高度松耦合，可以方便的扩展和维护。

## 自定义的支持

* `Effects`支持`基础动画协议`，但为了创建更精彩的3D世界，也支持自定义的动画计算方法。