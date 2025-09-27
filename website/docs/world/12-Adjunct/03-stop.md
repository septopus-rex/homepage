# Stop

* Code location: [/adjunct/basic_stop.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_stop.js)
  
* The `Stop` component creates a component that blocks the movement of the `Player` and can be of various shapes.

* `Stop` is a component that performs a blocking mechanism, but since it is only visible in edit mode, it gives the impression of an air wall.

## Data Structure

* The data structure of `Stop` is defined as follows:

    ```Javascript
        [
            [ 4,  4, 0.2 ],         //stop size
            [ 14, 14, 0.1 ],        //stop position in block
            [ 0, 0, 0 ],            //stop rotation
            1,                      //stop shape type
        ]
    ```

* When the data has no version information, the default version is "2025".

## Types

* `Stop` will support various types of geometric shapes for complex spatial control.

|  Geometry   | Detail  | Support |
|  ----  | ----  | ----  |
|  box  |  3D box stop | ✅ |
|  ball | Spherical obstruction stop  | ✅ |
|  cylinder | Column barrier stop   | ❌ |

## Definition

* The definitions adopted by `Stop` need to be published on the chain.
  
  ```Javascript
    {
        "TYPE_OF_STOP": 3,
    }
  ```