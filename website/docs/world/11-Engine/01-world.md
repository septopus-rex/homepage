# World, system entry

* Code location: [/core/world.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/world.js)

* `World` mainly provides the following functions.

    | Name | Function | Sample |
    | --- | --- | --- |
    | init | Initialize the system |  `VBW.world.init( cfg )` |
    | first | First time running the engine, start the entry | `VBW.world.first( dom_id, ck, cfg )` |
    | load | Loading block |  `VBW.world.load( dom_id, world, x, y )` |
    | unload | Unloading block | `VBW.world.unload( dom_id, world, x, y )` |
    | stop | Stop rendering | `VBW.world.start( dom_id )` |
    | start | Start rendering | `VBW.world.stop( dom_id )` |
    | teleport | Teleports the player to the specified block | `VBW.world.teleport( dom_id, world, x, y, ck, position )` |
    | edit | Change the player's block to edit mode | `VBW.world.edit( dom_id, world, x, y, ck )` |
    | select | Select the adjunct operation | `VBW.world.select( dom_id, world, x, y, name, index, face, ck )` |
    | modify | Save the edited content | `VBW.world.modify( tasks, dom_id, world, ck )` |
    | normal | Close the editing mode and return to normal mode | `VBW.world.normal( dom_id, world, ck )` |

* The startup process of `World` is as follows. Execute World.first() to achieve the following operations:
    1. Build Dom for UI output.
    2. Register all components and build a complete running system.
    3. Bind subscription events to automatically obtain subscribed on-chain data.
    4. Get the player's location and prepare to load data.
    5. Load the world's configuration file based on the player's location.
    6. Load the blocks of the corresponding area according to the player is location.
    7. Analyze the blocks, obtain the resources that need to be loaded on the chain, and push them into the frame synchronization queue.
    8. Run the renderers.
    9. Run the controllers.

## World Basic Setting

### Common Setting

* The Setting shared by all Septopus Worlds are as follows.

```Javascript
    {
        world:{     //Septopus overall setup
            name: "Septopus World",          //Septopus name
            desc: "Septopus description.",   //Septopus description
            range: [4096, 4096],             //Block size of world
            block: [16, 16, 32],             //Limit of single block
            diff: 4,                         //The altitude setting tolerance value can only be higher than the average of the surrounding 8 blocks
            max:100,                         //Maximum worlds limit
        },
        time:{      //Septopus time system setting
            year:12,        // months/year
            month:30,       // days/month
            day:24,         // hours/day
            hour:60,        // minutes/hour
            minute:60,      // seconds/minute
            second:1000,    // microseconds/second
            speed:20,       // rate =  septopus year / reality year
        },
        sky: {      //Septopus sky setting
            sun: 1,         //amount of sun
            moon: 3,        //amount of moon
        },
        weather: {  //Septopus weathe setting
            category: ["cloud", "rain", "snow"],
            grading: 8,
            detail: {
                cloud: [
                    "sunny",              // ☀️
                    "mostly sunny",       // 🌤
                    "partly cloudy",      // ⛅️
                    "mostly cloudy",      // 🌥
                    "cloudy",             // ☁️
                    "overcast",           // 🌫️
                    "dim daylight",       // 🌁
                    "dark sky"            // 🌑
                ],
                rain: [
                    "frog",              // 🐸
                    "drizzle",           // 🌦
                    "light rain",        // 🌧
                    "moderate rain",     // 🌧
                    "heavy rain",        // 🌧🌧
                    "downpour",          // 🌧🌧🌧
                    "rainstorm",         // 🌩
                    "torrential rain"    // 🌊
                ],
                snow: [
                    "frost",            // ❄️
                    "flurries",         // 🌨️
                    "light snow",       // 🌨
                    "moderate snow",    // 🌨
                    "heavy snow",       // 🌨🌨
                    "blowing snow",     // 🌬️❄️
                    "snowstorm",        // 🌨⚡️
                    "whiteout"          // 🌫️
                ],
            },
            degree: 40,
            data:{
                category:[2,4],
                grade:[10,6],
                interval:3*60*60,
            }
        },   
    }
```

### Single World Setting

* The setting of a single world are as follows. Only the World Owner can modify and update them.

```Javascript
    {
        world:{     //single world setting
            desc:"",            //single world description
            nickname:"",        //single world nickname
            mode:[    //support modes
                "ghost",        //unregistered user mode
                "normal",       //registered user mode
                "game",         //game mode
            ],     
            accuracy: 1000,     //The default unit is m, here it is converted to mm for display
            index:0,            //World index
        },
        price: 1000000,         //Initial price of the block, 0.01 SOL
        block:{                 //block setting
            elevation: 0,       //Initial elevation of block
            max: 30,            //Max amount of adjuncts
            color:0x10b981,     //default color of block
            texture:2,          //default texture of block
        },
        player:{
            start:{
                block:[2025,619],   //default start location
                position:[8,8,0],   //default start position
                rotation:[0,0,0],   //default rotation
            },
            body:{                  //default player body parameters
                shoulder: 0.5,      //shoulder width
                chest: 0.22,        //thick of chest
                body:[0.3,0.4, 0.2, 0.8],   //body section,[head, body, buttock, leg]
                head:[0.25,0.05],           //head section,[head, neck]
                hand:[0.2,0.2,0.1],         //Arm length,[upper arm, lower arm, hand]
                leg:[0.5,0.5,0.1],          //Leg length, [thigh, calf, foot]
            },
            capacity: {     //player movment capacity, need to calc by body size
                move: 0.03,          //move speed, meter/second
                rotate: 0.05,        //rotate speed of head
                span: 0.31,          //max height of walking !important 这个后面需要根据玩家身体尺寸进行计算
                squat: 0.1,          //height of squat
                jump: 1,             //max height of jump
                death: 3,            //min height of fall death
                speed: 1.5,          //move speed, meter/second
                strength: 1,         //strength time for jump. Not used yet.
            },
            bag:{           //bag system setting
                max:100,            //max amount of stuffs
            },
            avatar:{        //avatar setting
                max:2*1024*1024,      //max file size of avatar
                scale:[2,2,2],        //scale of avatar, [height, width, depth]
            },
        },
        adjunct:[       //support adjuncts
            0x00b7
        ],
    }
```