# World, system entry

* 代码位置:[/core/world.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/world.js)

* `World`主要提供了以下的功能。

    | 方法名 | 作用 | 示例 |
    | --- | --- | --- |
    | init | 初始化系统 |  `VBW.world.init( cfg )` |
    | first | 初次运行引擎，启动入口 | `VBW.world.first( dom_id, ck, cfg )` |
    | load | 加载block |  `VBW.world.load( dom_id, world, x, y )` |
    | unload | 卸载block | `VBW.world.unload( dom_id, world, x, y )` |
    | stop | 停止渲染 | `VBW.world.start( dom_id )` |
    | start | 开始渲染 | `VBW.world.stop( dom_id )` |
    | teleport | 将玩家传送到指定地块 | `VBW.world.teleport( dom_id, world, x, y, ck, position )` |
    | edit | 将玩家所在地块变为编辑状态 | `VBW.world.edit( dom_id, world, x, y, ck )` |
    | select | 选中附属物的操作 | `VBW.world.select( dom_id, world, x, y, name, index, face, ck )` |
    | modify | 对编辑内容进行保存的操作 | `VBW.world.modify( tasks, dom_id, world, ck )` |
    | normal | 关闭编辑状态，恢复到正常状态 | `VBW.world.normal( dom_id, world, ck )` |

* `World`的启动过程如下，执行`World.first()`，实现以下操作：
    1. 构建Dom，用于UI输出；
    2. 注册所有组件，构建完整的运行系统；
    3. 绑定订阅事件，自动获取订阅的链上数据；
    4. 获取`玩家`的定位信息，准备加载数据;
    5. 根据`玩家`的信息，加载`世界`的配置文件；
    6. 根据`玩家`所在的`地块`信息，加载对应区域的`地块`信息；
    7. 分析`地块`，获取到需要链上加载的资源，推入到帧同步的队列里；
    8. 运行渲染器；
    9. 运行控制器；

## 世界基础信息

### 基本属性

* Septopus所有`World`共用的属性如下。

```Javascript
    {
        world:{     //Septopus的整体设置
            name: "Septopus World",          //Septopus的名称
            desc: "Septopus description.",   //Septopus世界的描述
            range: [4096, 4096],              //每个世界的尺寸 
            block: [16, 16, 32],             //单个block的尺寸限制
            diff: 4,                         //海拔设定公差值，只能比周边8块的均值升高的值
            max:99,                          //最大世界发行数量
        },
        time:{      //Septopus的时间体系设定
            year:12,        // months/year
            month:30,       // days/month
            day:24,         // hours/day
            hour:60,        // minutes/hour
            minute:60,      // seconds/minute
            second:1000,    // microseconds/second
            speed:20,       // rate =  septopus year / reality year
        },
        sky: {      //Septopus的天空设定
            sun: 1,         //amount of sun
            moon: 3,        //amount of moon
        },
        weather: {  //Septopus的气候系统的设定
            category: ["cloud", "rain", "snow"],
            grading: 8,
            detail:{        //不同天气状况下的梯度，`风力`结合着天气来实现。
                cloud:["sunny","",...],     //多云天气的8个梯度，从大晴天开始
                rainy:["frog","",...,""],   //下雨天气的8个梯度，从雾开始
                snow:["",],                 //下学天气的8个梯度，从冰雹开始
            },
            degree: 40,     //温度条件，基础的问题，通过hash可以进行微调
        },        
    }
```

### 世界的参数

* 单一`World`参数设置如下，只有`World Owner`可以修改更新。

```Javascript
    //!important, 每个世界的单独配置，领主可以进行修改
    {
        world:{     //world的可配置参数
            desc:"",            //单个世界的描述
            nickname:"",        //单个世界的昵称
            mode:[ //支持的运行模式
                "ghost",        //非注册用户访问
                "normal",       //注册用户访问
                "game",         //预渲染预加载的游戏模式
            ],     
            accuracy: 1000,     //初始的显示尺寸支持。默认单位为m，这里是转换成mm来显示
            index:0,            //世界编号
        },
        price: 1000000,         //block的初始化价格
        block:{     //地块的world可配置的参数
            elevation: 0,       //初始海拔高度
            max: 30,            //单地块最大附属物数量
            color:0x10b981,     //默认地块颜色
            texture:2,          //默认地块贴图
        },
        player:{
            start:{
                block:[2025,619],   //玩家的默认启动位置
                position:[8,8,0],   //默认开始的位置[x,y,z],z为站立高度
                rotation:[0,0,0],   //默认的旋转位置
            },
            body:{     //基础的玩家配置，如需特殊调整，用scale的方式来实现.Avatar里需要有这些参数，不存在的话，就用这个配置
                //height: 1.7,        //默认玩家身高
                shoulder: 0.5,      //肩膀宽度
                chest: 0.22,        //胸部厚度
                body:[0.3,0.4, 0.2, 0.8],  //身体高度分段,[头部，身体，臀部，腿部]
                head:[0.25,0.05],           //头部的长度，[头高度，脖子]
                hand:[0.2,0.2,0.1],         //手臂长度,[上臂，下臂，手]
                leg:[0.5,0.5,0.1],          //腿的长度,[大腿，小腿，脚]
            },
            capacity: {     //玩家的运动能力（改成通过body进行计算）
                //move: 0.03,          //move speed, meter/second
                rotate: 0.05,        //rotate speed of head
                //span: 0.31,          //max height of walking !important 这个后面需要根据玩家身体尺寸进行计算
                //squat: 0.1,          //height of squat
                //jump: 1,             //max height of jump
                //death: 3,            //min height of fall death
                //speed: 1.5,          //move speed, meter/second
                strength: 1,         //strength time for jump. Not used yet.
            },
            bag:{           //游戏模式下的背包系统配置
                max:100,            //最大携带物品数量
            },
            avatar:{        //虚拟形象的配置
                max:2*1024*1024,        //虚拟形象文件的最大尺寸
                scale:[2,2,2],        //虚拟形象身体尺寸的最大放大比例, [高,宽,深]
            },
        },
        adjunct:[0x00b7],           //世界配置支持的附属物
    }
```