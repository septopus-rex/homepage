# Adjunct Overview

* `Adjunct` is the main way to extend Septopus functionality. The entire `Septopus framework` is designed to facilitate the extension of `Adjunct`. `Adjunct` use the [`Septopus Coordinate System`](../11-Engine/00-system.md#basic-definition).

* The parsing of `Adjunct` is also a pure Javascript file, which can be deployed on the chain to realize the full chain of Septopus, including data and programs.

* `Adjunct` codes should be referenced as little as possible (even if referenced, they should be packaged as a whole), and should mainly be in a called state to reduce their autonomous behavior and facilitate security review.

* `Adjunct` operates on `Block Coordinates (A coordinate system)`, that is, it calculates and processes `standard data (std)`.

* Different `World` can be configured to support different `Adjunct`, thus forming different styles of `World`.

* The code sample of `Adjunct` is as follows, maintaining a clear structure for easy understanding and development.

|  Category   | Function  | Mounting  |
|  ----  | ----  | ----  |
| Hook |  Register component | `ADJUNCT.hook` |
| Definition | Component configuration, component constants | `ADJUNCT.def` |
| Animation | Basic standard animation, customize animation | `ADJUNCT.hook.animate()` |
| Convertion | Conversion of data of different standards | `ADJUNCT.transform` |
| Data Operation | Modifications made to `raw` data | `ADJUNCT.attribute` |
| IO Menu |  Output standard IO menu, input data verification |  `ADJUNCT.menu`|
| Trigger Task |  Methods that can be called after the mechanism is triggered |  `ADJUNCT.task`|

```Javascript
    const self={
        hooks:{
            reg:()=>{},
            def:(data)=>{},
            animate:(meshes,cfg)=>{},
            ...
        },
        transform:{
            raw_std:(arr,cvt)=>{},
            std_3d:(arr,elevation)=>{},
            std_active:(arr,elevation,index)=>{},
            std_2d:(stds,face,faces)=>{},
            ...
        },
        attribute:{
            add:(p, raw)=>{},
            set:(p, raw, limit)=>{},
            remove:(p, raw)=>{},
            combine:(p, row)=>{},
            revise:(p, row, limit)=>{},
        },
        menu:{
            pop:()=>{},
            sidebar:()=>{},
            ...
        },
        task:{
            router:["hide","show","dance"],
            hide:(meshes,cfg)=>{},
            show:(meshes,cfg)=>{},
            dance:(meshes,cfg)=>{},
            ...
        },
    };

    const adjunct={
        hooks:self.hooks,
        transform:self.transform, 
        attribute:self.attribute,
        menu:self.menu, 
        task:self.task, 
    }

export default adjunct;
```

## Basic Adjuncts

* When implementing Septopus functions, there are several basic components that build the basic operating environment.

|  Name   | Function  | Detail  | Code  |
|  ----  | ----  | ----  | ----  |
|  Stop  | Basic constructure, stop the player's movement, raise the player's standing height  | [Stop Detail](./03-stop.md)  | [basic_stop.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_stop.js)  |
|  Trigger  | Basic constructure, build the core of the game, realize triggering in various 3D spaces, control the system and adjuncts | [Trigger Detail](./04-trigger.md)  | [basic_trigger.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_trigger.js)  |
|  Box  | The simplest adjunct for easy understanding  | [Box Detail](./01-box.md)  | [basic_box.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_box.js)  |
|  Module  | Import external model adjunct to enrich the basic components of the content  | [Module Detail](./02-module.md)  |[basic_module.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_module.js)  |

* Complex function `Adjuncts` are built as foundational components and are specified in the world configuration for easy loading. Extended `Ajuncts` are primarily used to implement 3D content, transforming Septopus into a rich and diverse virtual world.

## Hooks

* Methods for framework calls, the main functions are as follows.

|  Name   | Function  | Detail  |
|  ----  | ----  | ----  |
|  `reg`  | Provide basic information about `Adjunct`  | Only run once, the framework actively calls  |
|  `init`  | `Adjunct` data that needs to be mounted on the cache | Only run once, the framework actively calls |
|  `animate`  | `animate` is the entry point for animation effects  | The `renderer` method loaded into the `frame synchronization queue` will filter out the `Adjunct` object and then call this method |

## Basic Parameters

* Adjuncts are displayed in a virtual 3D world, so the required parameters are size, position and rotation.

|  Name   | Format  | Detail  |
|  ----  | ----  | ----  |
|  `size`  | [number,number,number]  | `Adjunct` size [x,y,z]  |
|  `postion`  | [number,number,number] | `Adjunct` position [ox,oy,oz]  |
|  `rotation`  | [number,number,number]  | `Adjunct` rotation [rx,ry,rz] |

## Edit Functions

* The editing method is mounted under `ADJUNCT.menu` and outputs an array that meets the front-end requirements.

```Javascript
    {
        pop:()=>{return []},
        sidebar:()=>{return []}
    }
```

* Adjunct editing follows the framework's editing process, accepting standard editing parameters. This works by processing the raw data at runtime and then refreshing the entire block, implementing editing on a block basis.

## Data Conversation

* The data conversion method is mounted under `ADJUNCT.transform`. It is based on `standard data (std)` and converted into various types of data, which are processed uniformly by the framework.

|  Method   | From  | To  | Main Functions  |
|  ----  | ----  | ----  | ----  |
|  `ADJUNCT.transform.raw_std`  | Raw data | Standard data  | The on-chain data is formatted into the data required at runtime for rendering, etc.  |
|  `ADJUNCT.transform.std_raw`  |  Standard data | Raw data  | Get the saved data, upload to the chain or copy  |
|  `ADJUNCT.transform.std_3d`  |  Standard data | 3D Render data  | Generate 3D data of `Block Coordinates`, mainly for further display  |
|  `ADJUNCT.transform.std_2d`  |  Standard data | 2D Render data  | Generate 2D data of `Block coordinates` for drawing 2D maps and displaying different perspectives  |
|  `ADJUNCT.transform.std_active`  |  Standard data | 3D Render data  | Generates selected effect data of `Adjunct` for use in `Edit Mode`  |

* 2D data is constructed based on the `rendering data (3d)` generated by `ADJUNCT.transform.std_3d`, supporting the results of observation from different angles.
  
## Animation

* The entry point of the animation is `hook.animate(meshes,cfg)`.

* `Adjunct` can use the system's built-in `Standard Animation` to achieve animation effects, or combine `Standard Animation` to achieve more complex animations.

* Adjuncts can also customize animation methods to manipulate meshes, thereby achieving special animation effects in 3D scenes.

## Trigger Task

* `Task` is a method called by `Trigger` and is organized in the following structure. When setting the calling method in `Trigger`, use index to point to it.
  
```Javascript
    {
        task_b:(target,cfg)=>{},
        task_c:(target,cfg)=>{},
        task_a:(target,cfg)=>{},
        router:["task_a","task_b","task_c"],
    }
```
  
## Resource Loading

* `Adjuncts` uses resources stored in IPFS, mainly the following types. `Resource` is mounted to a specified location when parsing `raw`, so that the framework can filter and load it.

* In order to prevent the large amount of data from being parsed and causing lag, the resource loading is done in a frame-by-frame manner.

## Common Definition

* The common definition adopted by `Adjunct` needs to be published on the chain.
  
  ```Javascript
    {
        "INDEX_OF_SIZE": 0,
        "SIZE_X": 0,
        "SIZE_Y": 1,
        "SIZE_Z": 2,
        "INDEX_OF_POSITION": 1,
        "POSITION_X": 0,
        "POSITION_Y": 1,
        "POSITION_Z": 2,
        "INDEX_OF_ROTATION": 2,
        "ROTATION_X": 0,
        "ROTATION_Y": 1,
        "ROTATION_Z": 2,
        "FACE_TOP":0,
        "FACE_BOTTOM":1,
        "FACE_FRONT":2,                 //from south to north
        "FACE_BACK":3,
        "FACE_LEFT":4,
        "FACE_RIGTH":5,
        "MODE_NORMAL":1,                //login player
        "MODE_EDIT":2,                  //edit mode on your own block
        "MODE_GAME":3,                  //preload all block data
        "MODE_GHOST":4,                 //anonymous player, no trig
        "INDEX_OF_RAW_ON_CHAIN_DATA":1, //block raw data index on chain
        "VERSION_DEFAULT":2025,         //default version
        "EFFECTS_MOVING":0,         //effects.moving
        "EFFECTS_ROTATE":1,         //effects.rotate
        "EFFECTS_SCALE":2,          //effects.scale
        "EFFECTS_TEXTURE":3,        //effects.texture
        "EFFECTS_CUSTOMIZE":4,        //effects.customize, by adjunct,
    }
  ```
