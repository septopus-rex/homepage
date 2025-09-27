# Resource Protocol

* A protocol for formatting all on-chain data. Since 3D requires a large amount of resources and is not suitable for contracts, it needs to be stored on IPFS.

* Use base64 format, which requires decoding to restore, to prevent it from being run directly, thus improving security.

* Use plain text to facilitate manual review.

* Keywords as follow:
  
| Key | Detail | Option |
| --- | --- | --- |
| type | Meta Septopus supported types | [module,texture,avatar,lines,block，adjunct...] |
| format | Original file type |  |
| raw | Base64-encoded string |  |
| more | Extended Configuration |  |

## Types

### Module

* Various exported 3D model files need to be clearly formatted for parsing.
  
    ```Javascript
    {
        type:"module",
        format:"fbx",
        raw:"BASE64_ENCODE_STRING",
        more:{
            size:[4,10,6],
        },
    }
    ```

### Texture

* Texture type, primarily images.

    ```Javascript
    {
        type:"texture",
        format:"png",
        raw:"BASE64_ENCODE_STRING",
        more:{
            size:[2,2],
        },
    }
    ```

### Lines

* Dialogue text data for retrieval.
  
    ```Javascript
    {
        type:"lines",
        format:"json",
        raw:"BASE64_ENCODE_STRING",
        more:{
            lang:["zh","en"],
        },
    }
    ```

### Block

* Complete block data in Meta Septopus.
  
    ```Javascript
    {
        type:"block",
        format:"json",
        raw:"BASE64_ENCODE_STRING",
    }
    ```

### Adjunct

* Adjunct code file for Meta Septopus.
  
    ```Javascript
    {
        type:"adjunct",
        format:"js",
        raw:"BASE64_ENCODE_STRING",
        more:{
            version:"2.0.0",
        }
    }
    ```

### Avatar

* Avatar data supported by Meta Septopus.

    ```Javascript
    {
        type:"avatar",
        format:"gltf",
        raw:"BASE64_ENCODE_STRING",
    }
    ```
