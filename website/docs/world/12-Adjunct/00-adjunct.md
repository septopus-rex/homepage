# Adjunct Overview

* `附属物`是扩展Septopus功能的主要方式，整个`Septopus框架`的设计，就是为方便`附属物`的扩展。`附属物`使用[`Septopus坐标系`](./framework.md#基础说明)

* `附属物`的解析也是一个纯Javascript文件，可以将其部署到链上，从而实现Septopus的全链，包括数据和程序。

* `附属物`代码尽量减少引用（即使引用，也要能被整个打包进来），主要处于一个被调用的状态，来减少其自主行为，也便于安全审查。

* `附属物`在`地块坐标(A坐标系)`上运行，即对`标准数据(std)`进行计算和处理。

* 不同的`世界`可以通过配置来支持不同的`附属物`，从而形成`世界`的不同风格。

* `附属物`的代码样例如下，保持清晰的结构，便于理解和开发。

|  功能划分   | 功能说明  | 挂载位置  |
|  ----  | ----  | ----  |
| 钩子 |  注册组件；动画入口； | `ADJUNCT.hook` |
| 定义及常量 |  组件的配置；组件的常量； |  |
| 动画实现 | 独立定义的动画方式；动画的数据处理； | `ADJUNCT.hook.animate()` |
| 数据转换 | 不同标准数据的转换； | `ADJUNCT.transform` |
| 数据增删改查 | 对`raw`数据进行的修改； | `ADJUNCT.attribute` |
| IO菜单 |  输出标准的IO菜单；输入数据验证； |  `ADJUNCT.menu`|
| 机关触发 |  机关触发后可以调用的方法； |  `ADJUNCT.task`|

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
        hooks:self.hooks,               //组件钩子
        transform:self.transform,       //数据格式转换
        attribute:self.attribute,       //属性设置，编辑数据
        menu:self.menu,                 //输出菜单
        task:self.task,                 //游戏模式下的task任务
    }

export default adjunct;
```

## 基础附属物

* 在实现Septopus功能时，有以下几个基础组件，构建了基础的运行环境。

|  附属物名称   | 功能说明  | 详细说明  | 代码位置  |
|  ----  | ----  | ----  | ----  |
|  阻拦体  | 基础附属物；阻拦玩家的运动；抬升玩家的站立高度；  | [阻拦体详情](./basic_stop.md)  | [basic_stop.js](../../adjunct/basic_stop.js)  |
|  触发器  | 基础附属物；构建游戏的核心；实现多种3D空间内的触发；对系统及附属物的控制； | [触发器详情](./basic_trigger.md)  | [basic_trigger.js](../../adjunct/basic_trigger.js)  |
|  盒子  | 最简单的附属物，便于理解  | [盒子详情](./basic_box.md)  | [basic_box.js](../../adjunct/basic_box.js)  |
|  模型  | 导入外部模型的附属物，丰富内容的基础组件  | [模型详情](./basic_module.md)  |[basic_module.js](../../adjunct/basic_module.js)  |

* 复杂功能的`附属物`作为基础组件，会在`世界配置`里写明，便于程序加载。扩展的`附属物`主要是用来实现3D内容，将Septopus变成一个内容丰富多彩的虚拟世界。

## 钩子

* 供框架调用的方法，主要功能如下

|  方法名   | 功能说明  | 调用说明  |
|  ----  | ----  | ----  |
|  `reg`  | 提供`附属物`的基础信息  | 只运行一次，framework主动调用  |
|  `init`  | `附属物`需要被挂载在cache上的数据 | 只运行一次，framework主动调用  |
|  `animate`  | `附属物`实现动画效果的入口  | `渲染器`加载到`帧同步队列`的方法，会筛选出`附属物`的对象，再call这个方法 |

## 基础数据

* `附属物`在虚拟的3D世界里显示，因此必须的参数有尺寸、位置和旋转。

|  参数名   | 数据格式  | 参数说明  |
|  ----  | ----  | ----  |
|  `size`  | [number,number,number]  | `附属物`的尺寸[x,y,z]  |
|  `postion`  | [number,number,number] | `附属物`的位置[ox,oy,oz]  |
|  `rotation`  | [number,number,number]  | `附属物`的旋转[rx,ry,rz] |

## 编辑实现

* 编辑方法挂载在`ADJUNCT.menu`下，输出符合前端要求的数组。

```Javascript
    {
        pop:()=>{return []},
        sidebar:()=>{return []}
    }
```

* `附属物`编辑的实现根据框架的[编辑过程](./framework.md#编辑过程)，接受`标准编辑参数`。其实现的原理是，对运行时里的`原始数据`进行处理，然后再重新刷新整个`地块`，以`地块`为单元实现的编辑。

## 数据转换

* 数据转换方法挂载在`ADJUNCT.transform`下，以`标准数据(std)`为基础，转换成各种类型的数据，由框架统一进行处理。

|  方法名   | 源数据  | 目标数据  | 主要用途  |
|  ----  | ----  | ----  | ----  |
|  `ADJUNCT.transform.raw_std`  | 原始数据(raw)  | 标准数据(std)  | 链上数据格式化成运行时需要的数据，用于渲染等  |
|  `ADJUNCT.transform.std_raw`  |  标准数据(std) | 原始数据(raw)  | 获取保存后的数据，上链或者拷贝  |
|  `ADJUNCT.transform.std_3d`  |  标准数据(std) | 渲染数据(3d)  | 生成`地块坐标`的3D数据，主要用于进一步的显示  |
|  `ADJUNCT.transform.std_2d`  |  标准数据(std) | 渲染数据(2d)  | 生成`地块坐标`的2D数据，用于绘制2D地图、显示不同视角  |
|  `ADJUNCT.transform.std_active`  |  标准数据(std) | 渲染数据(3d)  | 生成`附属物`的选中效果数据，用于`编辑模式`  |

* 2D的数据，根据`ADJUNCT.transform.std_3d`生成后的`渲染数据(3d)`来构建，支持从不同的角度观察的结果。

## 动画实现

* 动画的入口在`hook.animate(meshes,cfg)`。
* `附属物`可以使用系统内置的[基础动画](./animation.md)来实现动画效果，也可以组合`基础动画`实现更复杂的动画。
* `附属物`也可以自定义`动画方法`来操作`meshes`，从而实现3D场景里的特殊动画效果。

## 任务支持

* `Task`是供`Trigger`调用的方法，采用以下的结构来组织。在`Trigger`里设置调用方法的时候，使用index来指向。

```Javascript
    {
        task_b:(target,cfg)=>{},
        task_c:(target,cfg)=>{},
        task_a:(target,cfg)=>{},
        router:["task_a","task_b","task_c"],
    }
```
  
## 可控模式

* 在`游戏模式下`，需要提供`task`给`trigger`来进行控制。

## 资源加载

* `附属物`会使用存储在IPFS的资源，主要有以下几种。`附属物`在解析`原始数据(raw)`的时候，挂载到指定的位置，供框架筛选出来进行加载。

|  资源类型   | 主要用途  | 储存位置  | 挂载位置  |
|  ----  | ----  | ----  | ----  |
|  图片  | 生成3D贴图用于3D显示  | IPFS  | `STD_ROW.material.texture`  |
|  3D模型  | 显示其他3D软件生成的模型  | IPFS  | `STD_ROW.module`  |

* 为了防止大量数据解析形成卡顿，资源的加载采用`分帧处理`的方式，详情请见[分帧处理](./framework.md#分帧处理)说明。

## 定义部分

* `Adjunct`采用的通用定义，需要公布到链上。
  
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
