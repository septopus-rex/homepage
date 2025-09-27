# Mode Protocol

* Mode allows Meta Septopus to run in different environments and perform different tasks. Especially in Gaming Mode, which requires extremely high permissions, we have adopted a method of truncation of data access to ensure security.

* Use the `mode` method of `Framework` to switch modes. Call as follows:
  
```Javascript
    const target = { x: x, y: y, world: world, container: dom_id }
    const mode = def.MODE_EDIT;
    VBW.mode(mode, target, (done) => {
        
    });
```

## Ghost Mode

* In the `Ghost Mode`, players can move freely in the 3D world, but cannot purchase or update `Blocks`.
  
## Normal Mode

* In `Normal Mode`, players can move freely in the 3D world, purchase Blocks, and update Block content.

* In `Normal Mode`, when a player stands on a Block they own, they can enter `Edit Mode` to edit and update the contents of the Block.

* In `Normal Mode`, players cannot interact with content placed in a Block by other players.

## Game Mode

* The game mode is to enhance the player's experience. There are two functions that need to be implemented: preloading and trigger support.

```Javascript
    const target = { x: x, y: y, world: world, container: dom_id }  //block to start game mode
    const mode = def.MODE_GAME;
    const cfg={
        blocks:[        //blocks need to preload
            [1982,619],         //single block to load
            [1983,619,5,5],     //area to load, [block_start_x,block_start_y,extend_x,extend_y]
        ],
        init:{          //game setting
            sky:{},                 //optional, set the sky
            weather:{},             //optional, set the weather
            start:{                 //optional, set the start position of player
                block:[1983,620],       
                position:[],
                rotation:[],
            },
        },      
    }
    VBW.mode(mode, target, (done) => {
        
    });
```

* In `Game Mode`, all system requests are cut off and the status will not be updated. It only interacts with the set `game API`.

* In `Game Mode`, support for predefined external APIs is added, which are stored on the chain in plain text. Use the same definition as `trigger` to call system resources.
    1. The `end` method must exist to handle the normal end of the game and the `game server` accepting data.
    2. The `start` method must exist to start the game and initialize the running environment of the `game server`.

```Javascript
    const game_setting={
        game:"fly",
        baseurl:"https://game_API.fun",
        methods:[
            {
                name:"end",                       
                params:[],
                response:[
                    {type:"string",length:12},
                ],
            },
            {
                name:"start",
                params:[],
                response:[
                    {type:"string",length:12},
                ],
            },
            {
                name:"view",
                params:[
                    {type:"number",limit:[0,255]},
                    {type:"string",limit:[0,30]},
                ],
                response:[
                    {key:"data",format:"string"},
                ],
            },
            ...
        ],
    }
```

### Pre-rendering

* For better results, the baked data can also be loaded at this time.

### Network Access Control

* In `Game Mode`, using `region preloading`, after acquiring all resources, the ability to retrieve data is cut off. Only interaction with the `game API` remains. Only when exiting game mode can the `datasource` API be used to continue retrieving data.

* This is done for two reasons.
    1. Game smoothness. When in game mode, since no other blocks are loaded, it will not be affected by data updates, improving performance.
    2. Security. Since the `datasource` API contains contract call methods, security issues can be avoided after disconnecting it in game mode.
