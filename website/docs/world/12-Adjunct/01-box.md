# Box

* Code location: [/adjunct/basic_box.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_box.js)

* The `Box` component creates a cube and is a very basic `Adjunct`.
  
* `Box` can be considered the simplest component. By setting the size, position, and rotation, you can create a box in a 3D environment. By setting textures and animation effects, you can create interesting content.

## Data Structure

* The data structure of `Box` is defined as follows:
  
    ```Javascript
        [
            [ 4,  4, 0.2 ],         //box size
            [ 14, 14, 0.1 ],        //box position in block
            [ 0, 0, 0 ],            //box rotation
            3,                      //texture ID
            [ 1, 1 ],               //texture repeat [x,y]
            0,                      //animation effects
            1                       //wether stop
        ]
    ```

* When the data has no version information, the default version is "2025".

## Texture

* The support for textures allows Septopus World to display detailed 3D worlds while maintaining high rendering performance.
  
* Texture files need to be saved in IPFS and imported into Septopus World as resources.
  
* Textures can be fine-tuned by setting `Repeat` and `Offset` to fine-tune their rendering effects.

## Animation Effects

* The `box` implements the following animation effects: [Breathing, Texture Switching, Jitter, Falling, Pendulum]

|  Effects   | Howto  | 3D  |
|  ----  | ----  | ----  |
|  Breathing  |  Support by Standard Animation | ✅ |
|  Texture Switching | Support by Standard Animation   | ✅ |
|  Jitter  | Support by Standard Animation   | ✅ |
|  Falling  | Support by Standard Animation   | ✅ |
|  Pendulum  | Support by Standard Animation  |  ✅ |

## Stop Feature

* By configuring parameters, the `Box` can achieve the effect of a `Stop`, which can reduce the amount of data on the chain. It is recommended that other `Adjunct` support this feature.

* The created `Stop` is the same size as the `box`, reducing the complexity of data modification. From the construction content, you can increase the scale value, that is, by enlarging the size of the `Stop`, to prevent clipping.

## Trigger Task

## Definition

* The definitions adopted by `Box` need to be published on the chain.
  
  ```Javascript
    {
        "RESOURCE_ID_ON_CHAIN": 3,
        "TEXTURE_REPEAT_SETTING": 4,
        "ANIMATION_OPTION": 5,
        "AUTO_STOP": 6,
    }
  ```