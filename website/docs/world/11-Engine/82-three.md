# 3D Object

* Code location: [/three/entry.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/three/entry.js)

* `Septopus 引擎`封装了three.js，用于统一管理3D关联对象，也充分和three.js解耦，可以方便的切换到其他的渲染引擎。

## 创建3D核心组件

* 使用`ThreeObject.get(cat, mod, params)`，主要用来创建3D的`Scene`,`Camera`等核心组件。

## 创建Mesh

* 使用`ThreeObject.mesh(geometry,material,position,rotation)`，主要用来创建可以显示的mesh。