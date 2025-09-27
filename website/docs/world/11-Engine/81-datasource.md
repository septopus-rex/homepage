# Datasource

* Code location: [/io/api.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/io/api.js)

* `Datasource`主要提供了以下的功能。

    | 方法名 | 作用 | 示例 |
    | --- | --- | --- |
    | init | 初始化系统 |  `VBW.datasource.init( cfg )` |
    | contract | 链上合约请求，都集中在这里 | `VBW.datasource.contract` |
    | world | 获取对应world的配置 |  `VBW.datasource.world( index,ck,cfg )` |
    | view | 获取block数据的方法 | `VBW.datasource.view( x, y, ext, world, ck, limit)` |
    | module | 批量获取模型数据的方法 | `VBW.datasource.module( ids, ck, cfg )` |
    | texture | 批量获取纹理图像数据的方法 | `VBW.datasource.texture( ids, ck, cfg )` |
    | game | 获取指定的游戏配置的方法 | `VBW.datasource.game( id, ck )` |
    | subscribe | 订阅指定网络的区块高度变化的方法 | `VBW.datasource.subscribe( event,key,fun )` |
    | off | 关闭对应链的数据订阅 | `VBW.datasource.off( event,key )` |

* 合约部分使用外部注入的方式来处理，使用`VBW.datasource.contract.set(map)`来进行设置。调用时使用`VBW.datasource.contract.call( method,params )`来执行合约方法。这种依赖注入的方法，可以减少`Septopus引擎`的依赖，精简代码，也能应对链端发生的变化和新功能。