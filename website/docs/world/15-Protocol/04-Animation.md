# Animation Protocol

* Septopus supports unified `Standard Animations` to facilitate the development of `Adjunct` and reduce animation processing code.
  
* Septopus supports extended `custom` animations, which are implemented by `Adjunct` and return methods for animation implementation.
  
* All animations are composed of `Standard Animations`, and `Adjunct` pass back the parameters of the composite animation.
  
* Animation is implemented by `renderer`, and time is calculated using frame numbers.

* After using animation data, the 2D renderer can also achieve animation effects independently.
  
## Basic Animation

* The data structure of the animation is as follows:

```Javascript
  {
    "name": "AnimationName",
    "duration": 3000,             //The animation loop time, in milliseconds. 0: continuous execution;
    "loops": 0,                   //The number of animation loops. 0:endless; >0:run times
    "pending",2000,               //[pre,next]|next, animation hover event, that is, the waiting time for starting the next loop
    "timeline": [                 //Implementation of animation, distribution on the timeline
      {
        "time": 0,                //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "rotate",         //Basic animation method
        "axis": "Y",              //The coordinate axis for animation execution, one of ["X","Y","Z","XY","XZ","YZ","XYZ"]
        "mode": "add",            //The value setting method, one of ["add", "set","random","multi"]
        "value": 0.2              //Value to set             
      },
      {
        "time": 2000,             //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "rotate",         //Basic animation method
        "mode": "set",            //The value setting method, one of ["add", "set","random","multi"]
        "axis": "X",              //The coordinate axis for animation execution, one of ["X","Y","Z","XY","XZ","YZ","XYZ"]
        "value":(now,duration,axis)=>{    //customize animation

        },
      },
      {
        "time": 500,              //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "scale",          //Basic animation method
        "mode": "multi",          //The value setting method, one of ["add", "set","random","multi"]
        "axis": "XYZ",            //The coordinate axis for animation execution, one of ["X","Y","Z","XY","XZ","YZ","XYZ"]
        "repeat": 3,              //The speed of value switching, the default is 1, how many times the value is switched during the animation
        "value": [0.8, 1.2 ],     //The value selection method, when it is an array, is randomly selected between [start, end]
      },
      {
        "time": [1000,1200],      //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "move",           //Basic animation method
        "mode": "set",            //The value setting method, one of ["add", "set","random","multi"]
        "axis": "Y",              //The coordinate axis for animation execution, one of ["X","Y","Z","XY","XZ","YZ","XYZ"]
        "repeat": 6,              //The speed of value switching, the default is 1, how many times the value is switched during the animation
        "value": [0.8, 1.2 ],     //The value selection method, when it is an array, is randomly selected between [start, end]
      },
      {
        "time": [1200,1800],      //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "move",           //Basic animation method
        "mode": "random",         //The value setting method, one of ["add", "set","random","multi"]
        "axis": "Y",              //The coordinate axis for animation execution, one of ["X","Y","Z","XY","XZ","YZ","XYZ"]
        "repeat": 2,              //The speed of value switching, the default is 1, how many times the value is switched during the animation
        "value": [0.83,0.89,1.12,1.28],     //The value selection method, when it is an array, is randomly selected between [start, end]
      },
      {
        "time": [500,1000],       //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "texture",        //Basic animation method
        "mode": "random",         //The value setting method, one of ["add", "set","random","multi"]    
        "repeat": 2,              //The speed of value switching, the default is 1, how many times the value is switched during the animation
        "value": [12,22,33,44],   //The value selection method, when it is an array, is randomly selected between [start, end]
      },
      {
        "time": [1500,2000],      //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "color",          //Basic animation method
        "mode": "set",            //The value setting method, one of ["add", "set","random","multi"]    
        "repeat": 1,              //The speed of value switching, the default is 1, how many times the value is switched during the animation
        "value": [0x3fff2,0x67fa32,0x34ffa4],      //When mode is set, execute sequentially
      },
      {
        "time": [1900,2000],      //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "opacity",        //Basic animation method
        "mode": "add",            //The value setting method, one of ["add", "set","random","multi"]
        "value": -0.01,           //When mode is set, execute sequentially
      },
      {
        "time": [1900,2000],      //The time when the animation starts, the format is "start" or "[start,end]"
        "type": "fall",           //Basic animation method
        "category":"camera",      //非mesh的调用方式
        "mode": "add",            //The value setting method, one of ["add", "set","random","multi"]
        "value": -0.01,           //When mode is set, execute sequentially
      },
    ]
  }
```

### Basic Keys

|  Key   | Type  | Function  |
|  ----  | ----  | ----  |
|  name  |  string | Name of animation |
|  duration  | number  | Animation duration  |
|  pending  | number[],number  | Animation pause time  |
|  loops  | number  | Globally control the number of repetitions of the entire animation |
|  timeline  | object[] | List of actions performed by the animation |

### Timeline Elements

* `time` value processing, there are two condition.

|  Type   | Result  | Detail  |
|  ----  | ----  | ----  |
|  number  |  [start,animation.duration] | The time when the animation starts |
|  [number,number]  |  [start,end] | The duration of the animation |

* `type` value setting and function
  
|  Name   | Description  | Implementation  |
|  ----  | ----  | ----  |
|  move  |  3D objects move on the XYZ axis | Set the mesh's XYZ coordinates |
|  rotate | The rotation angle of the 3D object on the XYZ axis  | Set the XYZ rotation of the mesh |
|  scale  | 3D objects are scaled proportionally on the XYZ axes  | Set the XYZ scale of the mesh  |
|  texture  | 3D object material switching  | Updates the mesh material object to use the specified texture |
|  color  | 3D object color switching  | Update the mesh's material object |
|  opacity  | Transparency of 3D objects | Update the transparency of the mesh |
|  morph  | 3D object deformation switching | Switch 3D mesh |

* `mode` and `value` are processed to meet complex animation effects. When `value` is `function`, the type of the data returned by the calculation is used for processing. When `value` is randomly selected, the precision is calculated and consistent with the input range.
  
|  Set Mode   | Value Type  | Implementation  |
|  ----  | ----  | ----  |
|  add  |  number | Add the value to the corresponding position |
|    |  number[start,end] | Add random values |
|  set | number  | Add the value to the corresponding position |
|    | number[start,end]  | When the array length is 2, it is in the form of [start, end], and one of the values ​​is randomly set during the animation time. |
|    | number[]  | During the animation time, set the corresponding values ​​in sequence |
|  multi  | number  | Multiply the value by the corresponding position  |
|    | number[]  | During the animation time, multiply the value by the corresponding position |
|  random  | number[start,end]  | When the array length is 2, it is in the form of [start, end] and one of the values ​​is randomly selected |
|    | number[]  | During the animation time, random settings are used, that is, only the set method is used when random |

* `repeat` value processing. The frequency of the animation switching within the time period, that is, the number of times it is executed, is a local loop.

|  Value   | Result  |
|  ----  | ----  |
|  None  |  Value setting is performed every frame |
|  number  |  Perform interpolation calculation within the time period set by `time`, that is, divide the time period into segments according to "repeat+1" and take the dividing points. |

* `bias` value processing. It only works when `rotate` and `scale` are used to achieve eccentric rotation and eccentric scaling.
  
* `category` value settings and functions. When set to `camera`, you can set the player's perspective and adjust the player's position.

## Customize Animation

* User-defined animation methods also need to be processed using unified logic.