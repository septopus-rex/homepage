# Module

* Code location: [/adjunct/basic_module.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_module.js)
  
* The main function of `Module` is to import 3D models created by external software. Thanks to the power of three.js, `Module` supports the formats exported by various software.
  
* `Module` can be seen as a container that positions 3D models created by external software into `World`, so that rich content can be constructed.
  
## Data Structure

* The data structure of `Module` is defined as follows:
  
    ```Javascript
        [
            [ 4,  4, 0.2 ],         //0.module size
            [ 14, 14, 0.1 ],        //1.module position in block
            [ 0, 0, 0 ],            //2.module rotation 
            3,                      //3.module resource ID
            0,                      //4.animation effects
            1                       //5.wether stop
        ]
    ```

* When the data has no version information, the default version is "2025".

## Details

* `Module` supports multiple types of import files, whose information is stored in the data on chain. Through the file format, the corresponding parser of three.js is called for processing.

* The `Module` size involves the settings of various different software and needs to be verified when uploading the chain and adjusted to `meters (m)`.
  
* There are compatibility issues with the various models and features imported by `Module`, so they need to be tested before use.

## Definition

* The definitions adopted by `Module` need to be published on the chain.
  
  ```Javascript
    {
        "RESOURCE_ID_ON_CHAIN": 3,
        "ANIMATION_OPTION": 4,
        "AUTO_STOP": 5,
    }
  ```