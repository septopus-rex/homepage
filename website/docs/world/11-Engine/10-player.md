# Player

* Code location: [/core/player.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/player.js),[/core/movment.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/movment.js)

## Movement

* By modifying the player's movement ability, walking and running can be achieved. At the same time, the player's movement method is also updated.
  
* The player's movement modes are as follows: ["stand","walking","running","climbing","squatting","lying"].

## Location

* 通过设置`玩家`所在的`附属物`来计算站立高度。本地保存的数据格式如下，其中站立的高度为`玩家`脚所在的位置。使用Septopus坐标系来记录信息。

* Calculates standing height by adjunct which the player stand on. The frontend storage format is as follows, where the standing height is the position of the player's feet. This information is recorded using the Septopus Coordinate System.

```Javascript
    {
        block: [2025, 501],         //block location
        world: 0,                   //world index
        position: [8, 14, 0],       //position in block
        rotation: [0, 0, 0],        //rotation of player
        stop:{
            on:false,               //wether stand on `stop` or `adjunct`
            adjunct:"",             //name of adjunct
            index:0,                //adjunct index
        },
        extend: 2,                  //extend of stand block to show 
        posture: 0,                 //posture, ["stand","walking","running","climbing","squatting","lying"]
    },
```

* The player's standing height is calculated as: block elevation + stop height. During movement, the following situations may occur.

|  Mode   | Event  |
|  ----  | ----  |
| From `Block` to `Stop` | ["on","stop"] |
| From `Stop` to `Stop`  | ["on","stop","leave","fall","death"]  |
| From `Stop` to `Block` | ["leave","fall"] |

## Avatar

* The system adopts open standards to support the display of different avatar. The data files that meet the requirements of "Avatar" are saved in IPFS and can be loaded and decoded.

### Body Parameter

* The player's body parameters are also set in the data using scale, obeying the world's configuration and used to calculate the player's collision.

```Javascript
    {
        body:{

        },
        action:[

        ],
        emotion:[
            
        ],
        datasource:"",          //base64格式的模型文件
        foramt:"fbx",           //模型文件的格式
    }
```

### Action and Effects

* `Avatar` supports display on the front end through built-in animation associated with `Motion Mode`.
  
* `Avatar` supports the following actions: ["stand", "walk", "run", "squat", "lie down", "crawl"].
  
* The list of expressions supported by `Avatar` is: ["normal", "happy", "angry", "sad"], and each expression is divided into 8 gradients.