# Block, bedrock of world

* Code location: [/core/block.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/world.js)

* `Block` is the basic data unit of Meta Septopus. By connecting blocks together, a complete Septopus World is constructed. Each block is 16m*16m in size as the physical world.

* The Septopus Engine uses dynamic loading to load the blocks in the area where the Player is located only, which greatly reduces the amount of data loaded.

* Block has basically the same functions as Adjunct, but it is not Adjunct. It is the basis of Adjunct positioning and needs to implement more functions.

## Functional Description

* `Block` mainly implements the following functions
  
    | Method | Function | Sample |
    | --- | --- | --- |
    | hooks | The hook called by the engine by default |  `reg`,`init` |
    | transform | Methods for performing data conversion operations |   |
    | attribute | Implementation of data editing to modify attributes |   |
    | menu | Front-end display during editing operations |   |
    | task | Missions triggered by the mechanism |   |

## Block Definition

* A Block has only one owner, confirmed by on-chain data. This is also how Septopus participants are identified, and they participate in Septopus interactions by owning a Block.
  
* The data definition of `Block` is as follows:
  
    ```Javascript
        [
            [
                0.2,        //elevation
                1,          //block status
                [],         //adjuncts list
                999,        //game mode setting, optional
            ]
        ]
    ```
  
## Relationship with Adjunct

* All adjuncts are positioned relative to the `Block`. The lower left corner of a `Block` is at [0,0], and the upper right corner is at [16,16]. For example, if a `Box` is positioned at [3,4] and placed in a `Block` at [x,y], its position in the World will be [16*x+3,16*y+4].

* By adopting this method, `Block` data can be regarded as a whole, and deploying from one `Block` to another is extremely simple, just copying the data.

## Restrictive measures

* If a user creates data on a `Block` that is inconsistent with the World's worldview, Meta Septopus provides Block-level management measures to address this. When a player disagrees with the Block's content, they can submit a Complaint to the World Owner for processing. If the complaint is true, the World Owner can perform a Ban, and the Septopus Engine will not display the corresponding content.

* Since `Adjunct` rely on `Block` for positioning, their size and position can be detected to prevent items from being placed in other `Blocks`.