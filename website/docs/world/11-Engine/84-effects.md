# Effects

* Code location: [/effects/entry.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/effects/entry.js)

* The Septopus Engine provides many basic special effects, such as moving, rotation, and scaling, which reduces the amount of code required for the animation part of accessory development and also reduces the difficulty of animation development.

|  Name   | Description  | Implementation  |
|  ----  | ----  | ----  |
|  move  |  3D objects move on the XYZ axis | Set the mesh's XYZ coordinates |
|  rotate | The rotation angle of the 3D object on the XYZ axis  | Set the XYZ rotation of the mesh |
|  scale  | 3D objects are scaled proportionally on the XYZ axes  | Set the XYZ scale of the mesh  |
|  texture  | 3D object material switching  | Updates the mesh material object to use the specified texture |
|  color  | 3D object color switching  | Update the mesh's material object |
|  opacity  | Transparency of 3D objects | Update the transparency of the mesh |
|  morph  | 3D object deformation switching | Switch 3D mesh |

## Calling Method

* Use a single entry point to call `VBW.effects.get(target,animate,cfg)` for basic animations.
  
* `Effects` also provides the following functions.

    | Method | Function | Sample |
    | --- | --- | --- |
    | set | Initialize the system |  `VBW.effects.set(camera,scene)` |
    | get | Get a single animation processing method | `VBW.effects.get(target,animate,cfg)` |
    | group | Method for batch obtaining animation processing |  `VBW.effects.get(list)` |
    | decode | Parsing method for standard animation | `VBW.effects.decode(std, category)` |

* The implementation of a single animation function is split into independent files, which is highly loosely coupled and can be easily expanded and maintained.

## Customize Support

* `Effects` supports `Animation Protocol`, but also supports customized animation calculation methods to create more exciting 3D worlds.