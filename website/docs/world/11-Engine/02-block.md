# Block, bedrock of world

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

## 基础属性

* `地块`只有唯一的所有者。一个`玩家`可以拥有多块土地。
  
## 和附属物关系

* 所有的`附属物`都是依靠`地块`来进行定位的。

## 限制措施