# 2D Object Protocol

* Using the same logic as 3D, the code generates a unified 2D standard format, which is then processed by the renderer. This facilitates debugging, allowing you to check the program's performance by viewing the output 2D standard format data. It also decouples the renderer from components, making them independent and easier to upgrade and maintain.
  
* Animation effects are also achieved by parsing the standard animation format, independent of the animation implemented by the 3D renderer.
  
## Data Conversion

* Septopus has the following three main coordinate systems: 2D needs to be processed.

|  Coordinate System   | Main Function  |  Abbreviated notation  |
|  ----  | ----  | ----  |
|  Block  | Compress data to make it easier to understand and copy and reuse. | `A`  |
|  World  | Splice block data, realize dynamic loading. | `B` |
|  Screen  | Used for display, accepting screen input. | `C` |

## Canvas Drawing

* 2D drawing uses the following structure。
  
    ```Javascript
        {
            line:{
                format:(raw)=>{     
                    const fmt={ points:[] };
                    ...
                    return fmt;
                },
                drawing:(data,pen,env,cfg)=>{
                    ...
                },
                sample:{       
                    from:[0,100],
                    to:[300,600],
                    segement:3,
                },
            }
        }
    ```

* 2D drawing supports multiple drawing methods to meet various requirements of Septopus.
  1. `line`
  2. `rectangle`
  3. `arc`
  4. `ring`
  5. `polygons`
  6. `curves`
  7. `text`
  8. `image`