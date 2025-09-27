# Datasource

* Code location: [/io/api.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/io/api.js)

* `Datasource` mainly provides the following functions.
  
    | Method | Function | Sample |
    | --- | --- | --- |
    | init | Initialize the system |  `VBW.datasource.init( cfg )` |
    | contract | On-chain contract requests are all concentrated here | `VBW.datasource.contract` |
    | world | Get the setting of the corresponding world |  `VBW.datasource.world( index,ck,cfg )` |
    | view | Method for obtaining block data | `VBW.datasource.view( x, y, ext, world, ck, limit)` |
    | module | Method for obtaining model data in batches | `VBW.datasource.module( ids, ck, cfg )` |
    | texture | Method for batch acquiring texture image data | `VBW.datasource.texture( ids, ck, cfg )` |
    | game | Method for obtaining the specified game configuration | `VBW.datasource.game( id, ck )` |
    | subscribe | Method for subscribing to block height changes of a specified network | `VBW.datasource.subscribe( event,key,fun )` |
    | off | Close the data subscription of the corresponding chain | `VBW.datasource.off( event,key )` |

* Contracts are handled through external injection, using `VBW.datasource.contract.set(map)` to set them. Contract methods are executed using `VBW.datasource.contract.call(method,params)`. This dependency injection approach reduces Septopus Engine dependencies, streamlines code, and adapts to changes and new features on the chain.