# Septopus, Your Rules, Your Worlds

## Goal

* 为了实现[`Septopus Declaration`](/declaration)里的去中心世界，现在将其拆分成4个主要的Project，来完整落地。

|项目名 | 实现目标 | 实施方案 | 时间 |
|--- | --- | --- | --- |
| [Meta Septopus](/docs/world/overview) | 验证参与者、所有活动的主场所 | 虚拟世界 | 2025.6.19～2025.12.19 |
| Rules Center | 从管理宣言开始，建立去中心化在线规则的自洽系统 | Solana智能合约实现 |  |
| King Management | 实现King的各种功能，建立统一的管理流程，建立统一的资金分发流程 | Solana智能合约实现 |  |
| AI Management | AI管理部分，建立AI审核机制、AI对项目的判断和审核流程 | - |  |

* 其中的`Septopus World`是非常重要的一个组成部分，它是由多个元宇宙构成的，是一个无论从发行到管理，都是去中心的虚拟世界。`Septopus World`也是[`Septopus Declaration`](https://septopus.xyz/declaration)里实现的第一个Project，也用来验证完整的管理流程，从项目创建、发行token、分发token、收益管理等操作，都实验性的进行测试。
  
* 使用AI来进行全流程的管理，是`Septopus`极大的创新之处，由于AI的高效和公正，将有利于`创业者`深度参与`Septopus`的共建，也能获得资金支持。`King`来最后把关，在流程上实现了最终的权力。那整个`Septopus`是最精简的`政府体系`，是的，只有一个人的政府系统，而这唯一的人，也是通过乐透的方式，随机选择的。这是这个时代，`政府体系`精简的极限，让我们一起来创建这个有趣的`政府体系`。

## 经济模型

* `Septopus`以`Project`的方式来建立经济体系，使用token作为项目回报，旨在建立能自持的经济系统。`Septopus`将募集来的资金，使用AI进行判断，对Project进行投资。所有`Septopus`的参与者，可以定期从`Septopus`支出的分红中获取收益，无论是现有的数字资产还是Project发行的token。
  
* `Septopus`是一个开放的世界，所有的`参与者`都可以无差别的提交`Project`来获取投资，发起人将得到数字货币的支持。无论是`Project`的提案审核还是资金分发，都需要经过7个AI进行审核，之后提交`King`进行批准。

* `Septopus`的`Block`设置荒废机制，在两种情况下，`Block`进入荒废状态，其他玩家可以免费占有。一是所有者主动放弃，二是在`Septopus`世界里，超过100年没有更新。

## 技术架构

* `Septopus`采用Solana作为主要发布网络，和其展现的高性能低费用特性很是契合。
* 合约采用[Solana CPI](https://solana.com/docs/core/cpi)的结构，保持对外的接口一致。
* CPI的采用也支持King对所有审核的签署。无需King验证的子合约，也可以进行直接调用。
* 作为`Septopus`系统的核心功能，对合约进行`生命周期管理`，实现去中心化的运行。
  
## 资金募集

* `Septopus`不限制资金募集的方式，目前主要有以下几种

|募集方式 | Description | Sample |
|--- | --- | --- |
| 捐赠 | 接受数字资产的捐赠 | 放捐赠的链接 |
| 发行Token | `Septopus`发行自己的token | ERC20, SPL Token |
| Project的Token | `Septopus`投资的`Project`发行的Token | `Meta Septopus` |