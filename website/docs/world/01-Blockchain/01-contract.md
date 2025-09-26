# Solana Contract

* Github: [https://github.com/septopus-rex/world/tree/main/chain](https://github.com/septopus-rex/world/tree/main/chain)
* `Solana`是一个高速的区块链网络，特别适合运行Septopus。
* 使用单一合约入口来实现`Septopus`的愿景，便于传播和降低欺骗的可能性。

## 合约结构（CPI）

* 合约采用[Solana CPI](https://solana.com/docs/core/cpi)的结构，保持对外的接口一致。
* CPI的采用也支持King对所有审核的签署。

## 合约实现

### Rules

### King

### World

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