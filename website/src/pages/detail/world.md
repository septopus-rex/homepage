# Septopus World

![world](img/world.png)

## World Auction

  1. 总发行的World数量为100个，每个世界由4096*4096个Block构成
  2. #0 World由King发起拍卖（拍卖过程后面详述）确认World Owner，之后，World开始Block的销售。
  3. Block的默认销售价格为0.01SOL，销售收入由World Owner和Septopus国库分成，为5:5。即每销售1个Block，World Owner得0.005SOL，Septopus国库得0.005SOL。
  4. 待销售率达到60%时，开启下一个世界的拍卖，同时当前的World Owner可以修改初始销售Block的价格。和Septopus国库分成比例不变，即每销售1个Block，Septopus国库仍得0.005SOL。
  5. 新World拍卖确认Owner之后，也开始销售，价格为0.01SOL

* 拍卖的流程为

  1. 设置1周的加入`拍卖池`的操作，需要质押10SOL。
  2. 拍卖采用荷兰式拍卖，从1000SOL开始，随着Solana的区块高度线性下降，只有加入`拍卖池`的账号，可以进行拍卖。拍下，即确认World Owner，支付之后生效。其他`拍卖池`的账号，可以申请退款。
  3. 如果无人拍卖，则重新进入1周的加入`拍卖池`的操作。
  4. 如重复3次流拍，就进入`乐透模式`。1周的时间，用于加入`抽奖池`，费用为1SOL。
  5. 在`抽奖池`从抽取一位作为World Owner。

## World Marketing

## World Selling