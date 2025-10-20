# Solana Contract

* Github: [https://github.com/septopus-rex/world/tree/main/chain](https://github.com/septopus-rex/world/tree/main/chain)
* `Solana`是一个高速的区块链网络，特别适合运行Septopus。
* 使用单一合约入口来实现`Septopus`的愿景，便于传播和降低欺骗的可能性。

## 合约结构（CPI）

* 合约采用[Solana CPI](https://solana.com/docs/core/cpi)的结构，保持对外的接口一致。
* CPI的采用也支持King对所有审核的签署。无需King验证的子合约，也可以进行直接调用。

## 生命周期

* `Septopus`的子合约上线，遵循以下的生命周期：初始化 --> 配置 --> 去中心化 --> 功能实现 --> 更新配置。详情如下：

|  阶段   | 主要作用  | 是否King权限  |
|  ----  | ----  | ----  |
|  初始化  | 构建合约的基础运行环境 |  ✅  |
|  配置  | 对合约基础运行参数进行配置  |  ❌  |
|  去中心化  | 加载为去中心化状态 |  ✅  |
|  功能实现  |  实现预期的功能 |  可选 |
|  更新配置  |  修改基础运行参数，调整系统 |  ✅  |

⚠️ 如何升级更新子合约本身，是个挑战。

* 为实现`Septopus`的全生命周期管理，引入`Entry`合约进行全局控制。当需要增加新的子合约时，需要通过`Entry`合约进行注册，之后，即开始进入子合约的生命周期管理。

## 合约实现

### Rules

### King

### World

* 单独Block使用cNFT ( Compressed NFT )实现，方便交易流通。为支持`废弃`操作，将记录Block指向的cNFT地址。

### AI

## 项目管理

* `Meta Septopus`所有的数据都保存在链上。

|  数据名称   | 主要作用  | 保存位置  |
|  ----  | ----  | ----  |
|  地块数据  | 构建地块显示内容的数据 |  独立PDA账号  |
|  世界数据  | 配置单个世界的基本属性  |  独立PDA账号  |
|  通用配置  | 所有世界通用的基本属性 | 独立PDA账号，初始化时设置  |
|  Septopus引擎  |  用于运行世界的Javascript程序 |  独立PDA账号，附属物独立的PDA账号 |
|  资源数据  |  3D模型、素材、纹理、台词等 |  IPFS |