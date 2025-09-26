# Block, bedrock of world

* 代码位置:[/core/block.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/world.js)

* `Block`是Septopus的基础数据单元，通过将一个个的`Block`进行拼接，就构成了完整的Septopus的`World`。每个`Block`的尺寸为物理世界的16m*16m。
  
* `Engine`使用动态加载的方式，只加载`Player`所在区域的`Block`，极大的降低了数据的加载量。

* `Block`与`Adjunct`功能基本一致，但又不是`Adjunct`，它是`Adjunct`定位的基础，需要实现更多的功能。
  
## 功能说明

* `Block`主要实现以下功能
  
    | 方法名 | 作用 | 示例 |
    | --- | --- | --- |
    | hooks | 引擎默认调用的勾子 |  `reg`,`init` |
    | transform | 对数据进行转换操作的方法 |   |
    | attribute | 数据编辑的实现，对属性进行修改 |   |
    | menu | 编辑操作时的前端显示 |   |
    | task | 机关触发的任务 |   |

## 数据定义

* `Block`只有唯一的所有者，通过链上的数据进行确认。这也是认定`Septopus参与者`的方法，通过拥有`Block`来参与`Septopus`的互动。
  
* `Block`的数据定义如下：
  
    ```Javascript
        [
            [
                0.2,        //海拔高度
                1,          //地块状态
                [],         //附属物列表
                999,        //游戏模式配置
            ]
        ]
    ```
  
## 和附属物关系

* 所有的`附属物`都是依靠`地块`来进行定位的。`Block`的左下角的位置为[0,0]，右上角的位置为[16,16]，例如一个`Box`的定位为[3,4]时，将其放置在[x,y]的`Block`时，其在`World`的定位就是[16*x+3,16*y+4]。
  
* 采用这种方式之后，`Block`数据就可以被看成一个整体，从一个`Block`部署到另外一个`Block`就异常简单，只需要拷贝数据即可。

## 限制措施

* 存在用户在`Block`上构建不符合`World`世界观的数据，`Meta Septopus`提供了`Block`级别的管理措施来应对，当有`玩家`对`Block`的内容有异议，可以通过`Complain`来提交给`World Owner`进行处理，如属实，`World Owner`就可以执行`Ban`操作，`Septopus引擎`就不显示对应的内容。

* 由于`附属物`依赖`Block`进行定位，就可以对其的尺寸和位置进行检测，防止出现将物品放置到其他`Block`的情况。