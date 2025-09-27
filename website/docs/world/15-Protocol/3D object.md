# 3D Object Protocol

* Septopus uses `three.js` as its rendering engine. In order to facilitate the separation of the `Septopus Engine` and the extension that can provide multi-rendering engine rendering, the call to `three.js` is encapsulated into this library.

* `three.js` is a complex 3D rendering engine with a large amount of code, which is split into another file in the [three library](https://github.com/septopus-rex/world/tree/main/engine/src/septopus/three).

## Library Reference

* The encapsulated entry file is [entry.js](https://github.com/septopus-rex/world/tree/main/engine/src/septopus/three/entry.js), which is introduced as a single file.

* There are only two methods to request this library, namely `get` and `mesh`, and their functions are shown in the following table.

|  Method   | Function  |  Target  |
|  ----  | ----  | ----  |
|  `get`  | Get the built-in objects of three.js  | All 3D components  |
|  `mesh`  | Generate a mesh for rendering and put it into the scene for 3D display | Geometry and Materials  |

## Object Category

* After organizing `three.js`, the following categories of objects and methods will be referenced

|  Category   | Main Function  | File location  |
|  ----  | ----  | ----  |
|  Basic Componet  | The foundation and core objects of 3D rendering environment construction, such as scenes, cameras, meshes, etc.  | `THREE_FOLDER/basic`  |
|  Geometry  | Creating geometric objects for 3D content  | `THREE_FOLDER/geometry`  |
|  Light  |  Different lighting effects for basic lighting and creating atmosphere | `THREE_FOLDER/light`  |
|  Material  |  Give different materials to `geometry` to create rich and colorful 3D content  | `THREE_FOLDER/material`  |
|  Texture  |  Parse the image and use it as the texture of the material  | `THREE_FOLDER/texture`  |
|  Loader  |  Load models created by different types of external 3D software | `THREE_FOLDER/loader`  |
|  Extend  |  Secondary packaging components | `THREE_FOLDER/extend` |