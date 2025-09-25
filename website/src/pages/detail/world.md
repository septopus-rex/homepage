# Meta Septopus

![world](../image/world.png)

* Homepage: [https://world.septopus.xyz](https://world.septopus.xyz)
* Demo: [https://world.septopus.xyz/demo](https://world.septopus.xyz/demo)
* Document: [http://localhost:3000/docs/world/](http://localhost:3000/docs/world/)
* Funding:

## Overview

* `Meta Septopus`是`Septopus`系统的基石，一是用来确认`Septopus`的参与者，二是`Septopus`的主入口。
* `Meta Septopus`是被设计为一个完全的去中心化系统，从程序和数据两个方面做出了开创性的设计。从数据角度来看，`Meta Septopus`数据定义完全开放公布在链上，即使没有现在的解析器（Virtual Block World），只需遵循协议，也能还原出一样的虚拟是恶疾。从程序角度来看，完全的链上部署和开放的附属物开发标准，使得`Meta Septopus`是个充满无数可能性的开发世界。
* `Meta Septopus`是一个UGC的系统，而且数字资产真正属于了用户自己。在`Meta Septopus`，只需要花费很少的费用（0.01SOL），就可以拥有一块属于自己`Block`，即可以交易，也可以在`Block`上创建有趣的3D内容，甚至是一个实现盈利的游戏。
* `Meta Septopus`采用分级管理系统，每个`World`都有自己的`Owner`，他可以通过对参数的设定、对附属物的选择，来构建不一样的世界观，形成风格各异的虚拟世界。
* `Meta Septopus`的`Adjunct`是对系统进行扩展的主要方式，精简和开放的结构，让开发3D的内容变得简单。`Adjunct`的开发者，可以从用户的使用和`World Owner`的授权使用中获益。
* `Meta Septopus`自启动之后，即可自主运。新世界的发行，也无需人员干预，这一机制，保证了`Meta Septopus`实现真正的去中心化。自洽的系统，在极端情况下，也能自我恢复，展现了去中心化强大的生命力。

## Funding

* `Meta Septopus`发行10亿的`SPL Token`，公开销售其20%即2亿，定价为0.01U。剩余的80%即8亿，进行2年的锁定，和`Spetopus`的`Launch Period`一致。
  
| 占比 | 作用 | 锁定 |
| --- | --- | --- |
| 20% | 公开销售，定价0.01U | -  |
| 20% | Septopus持有，Project的回报 | 锁定1年6个月 |
| 60% | Meta Septopus持有 | 锁定2年 |

* `Meta Septopus`代币的销售时间为：
  
## 经济模型

* `Meta Septopus`使用SOL作为交易的数字货币。世界的发行、Block的交易、Adjunct的付费，都使用SOL。
* `Meta Septopus`发行Token，其独立运行，也验证Septopus管理Project的模型。
* `Meta Septopus`构建了一个多层次多参与度的虚拟世界，不同的角色都可以在`Meta Septopus`实现盈利，而不仅仅是`Block`的销售。

### World机制

* `Meta Septopus`是一个自运行的系统，是通过以下的发行方式来实现的
  1. 总发行的`World`数量为100个，每个世界由4096*4096个`Block`构成，每个`地块`的尺寸为物理世界的16m*16m。
  2. #0 World由`King`发起拍卖，正式开启自主运行的`Meta Septopus`。确认World Owner后，`Block`就可以进行购买。
  3. `Block`的默认销售价格为0.01SOL，销售收入由`World Owner`和`Meta Treasure`分成，为5:5。即每销售1个`Block`，`World Owner`得0.005SOL，`Meta Treasure`得0.005SOL。
  4. 待销售率达到60%时，开启下一个世界的拍卖，同时当前的World Owner可以修改初始销售Block的价格。和Septopus国库分成比例不变，即每销售1个Block，Septopus国库仍得0.005SOL。
  5. 新World拍卖确认Owner之后，也开始销售，价格为0.01SOL

* `Meta Septopus`主要是通过内容来实现持久运行。无论是`World Owner`还是`Block Owner`，都是参与的一份子，从不同的角度，使用不同的盈利方式来共同创造一个丰富多彩的虚拟世界。

### World拍卖

* `World`拍卖，分为2个阶段，保障能生成`World Owner`。第一阶段为荷兰式拍卖，第二阶段为乐透式选取。如第一阶段失败，即进入第二阶段。

* 第一阶段，荷兰式拍卖。
  1. 开启1周的`拍卖者准备`，`拍卖者`质押 10SOL 来加入`拍卖池`，获取参与拍卖获取`World Owner`的资格。
  2. `拍卖者准备`阶段结束后1天，开始拍卖，采用荷兰式，价格从 1000SOL 开始，随着 Solana 的区块高度线性下降，每次为 0.1SOL，直到降至100SOL止。
  3. 拍卖结束1天后，`拍卖者`可以赎回质押的 10SOL。
  4. 拍卖成功的话，`拍卖者`支付相应的费用，即可成为真正的`World Owner`，世界拍卖结束。
  5. 如果拍卖失败，1天后，重新启动新的拍卖。
  6. 如果连续拍卖失败3次，即进入第二阶段的乐透式选取。

* 第二阶段，乐透式选取。  
  1. 开启1周的`抽奖者准备`，`抽奖人`支付 1SOL 来加入`抽奖池`，获得参与抽奖获取`World Owner`的权利。
  2. `抽奖者准备`阶段结束后1天，根据`抽奖人`数量来确定`抽奖区块`高度。
  3. 对`抽奖区块`的区块哈希，进行1亿次的`SHA256`计算，得到最终的哈希，确定中奖者，成为`World Owner`，世界拍卖结束。

* `World`开始销售之后，80%的`Block`被销售之后，启动下一个`World`的拍卖。

### World运营

* `World Owner`可以对链上数据进行配置，设置Adjunct，来管理世界的呈现，并支付费用给Adjunct开发者。
* `World Owner`对Block的交易，收取交易费用，费率为3%。

### Block运营

* `Block`通过自主定价销售，会转移`Block`及其上的所有内容物。销售将支付交易费用给`World Owner`，由购买方支付。
* `Block`上可以创建内容，也可以是付费游戏，`Block Owner`可以直接赚取收入。
