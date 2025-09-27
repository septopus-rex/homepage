# 3D Object

* Code location: [/three/entry.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/three/entry.js)

* The Septopus Engine encapsulates three.js for unified management of 3D related objects. It is also fully decoupled from three.js, making it easy to switch to other rendering engines.

## Core Components

* Use `ThreeObject.get(cat, mod, params)` to create 3D core components such as `Scene` and `Camera`.

## Creating Meshes

* Use `ThreeObject.mesh(geometry,material,position,rotation)`, which is mainly used to create a mesh that can be displayed.