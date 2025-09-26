# Meta Worlds System

* **Meta Septopus** is the cornerstone of the Septopus system, serving two purposes: first, to confirm Septopus participants, and second, to act as the main gateway for all Septopus activities.  
* **Meta Septopus** is designed as a completely decentralized system, featuring groundbreaking design in both its programs and data structure. From a data perspective, the **Meta Septopus** data definition is entirely open and publicly available on-chain. Even without the current parser (Virtual Block World), an identical virtual world can be reconstructed simply by adhering to the protocol. From a programmatic perspective, full on-chain deployment and open Adjunct development standards ensure that **Meta Septopus** is an open development world full of infinite possibilities.  
* **Meta Septopus** is a UGC (User-Generated Content) system where digital assets truly belong to the users. In **Meta Septopus**, users can own their own **Block** for a minimal fee (0.01 SOL), which can be traded or used to create engaging 3D content, or even a profitable game.  
* **Meta Septopus** adopts a tiered management system, where each **World** has its own **Owner**. The Owner can establish a unique worldview and create varied virtual environments by setting parameters and selecting authorized Adjuncts.  
* The **Adjunct** system in **Meta Septopus** is the primary method for extending the platform's functionality. Its streamlined and open structure simplifies 3D content development. **Adjunct** developers can profit from user purchases and licensing fees paid by the **World Owner**.  
* Once launched, **Meta Septopus** operates autonomously. The issuance of new Worlds requires no human intervention, a mechanism that ensures **Meta Septopus** achieves true decentralization. The self-consistent system can self-recover even in extreme scenarios, showcasing the robust vitality of decentralization.

## **Economic Model**

* **Meta Septopus** uses **SOL** as the primary digital currency for transactions. World issuance, Block trading, and Adjunct payments are all conducted using SOL.  
* **Meta Septopus** issues its own Token, which operates independently and verifies the Septopus model for managing Projects.  
* **Meta Septopus** builds a multi-tiered, multi-participant virtual economy, where various roles can achieve profitability, extending beyond just **Block** sales.

### **World Mechanism**

* **Meta Septopus** is a self-running system, realized through the following issuance method:  
  1. The total number of **Worlds** issued is 100, Each world consists of 4096 * 4096 **Blocks**, with each Block measuring 16m * 16m in the physical world equivalent.  
  2. **World #0** is initiated for auction by the **King**, formally launching the autonomous **Meta Septopus**. Once the **World Owner** is confirmed, **Blocks** become available for purchase.  
  3. The default selling price for a **Block** is **0.01 SOL**. The sales revenue is split between the **World Owner** and **Meta Treasure** at a 5:5 ratio. Specifically, for every Block sold, the World Owner receives 0.005 SOL, and Meta Treasure receives 0.005 SOL.  
  4. When the sales rate reaches **60%**, the auction for the next World is triggered. The current World Owner may also modify the initial Block sales price. The revenue split with the Septopus Treasury remains unchanged, meaning the Septopus Treasury still receives 0.005 SOL for every Block sold.  
  5. After the new World's Owner is confirmed via auction, Block sales for that World also begin at a price of 0.01 SOL.  
* **Meta Septopus** primarily relies on content to sustain its long-term operation. Both the **World Owner** and the **Block Owner** are participants, creating a rich and varied virtual world through different roles and varied revenue streams.

### **World Auction**

* The **World** auction is divided into two phases to ensure a **World Owner** is generated: Phase 1 is a Dutch Auction, and Phase 2 is a Lottery Selection. If Phase 1 fails, the process proceeds to Phase 2.  
* **Phase 1: Dutch Auction**  
  1. A 1-week **Auctioneer Preparation** period is initiated. **Auctioneers** stake 10 SOL to join the **Auction Pool**, thereby gaining eligibility to participate and potentially become the **World Owner**.  
  2. One day after the Auctioneer Preparation phase ends, the auction begins, adopting a Dutch Auction format. The price starts at **1000 SOL** and linearly descends by **0.1 SOL** with each new Solana block, until it reaches **100 SOL**.  
  3. One day after the auction ends, Auctioneers can redeem their staked 10 SOL.  
  4. If the auction is successful, the Auctioneer pays the corresponding fee and becomes the official **World Owner**, and the World auction concludes.  
  5. If the auction fails, a new auction restarts one day later.  
  6. If three consecutive auctions fail, the process enters Phase 2: Lottery Selection.  
* **Phase 2: Lottery Selection**  
  1. A 1-week **Lottery Participant Preparation** period is initiated. **Lottery Participants** pay 1 SOL to join the **Lottery Pool**, gaining the right to be selected as the **World Owner**.  
  2. One day after the Lottery Participant Preparation phase ends, the **Drawing Block** height is determined based on the number of participants.  
  3. The block hash of the **Drawing Block** is subjected to **100 million SHA256 computations** to generate the final hash, which determines the winning participant, who becomes the **World Owner**. The World auction then concludes.  
* After a **World** begins sales, the auction for the next World is triggered when **80%** of its **Blocks** have been sold.

### **World Operation**

* The **World Owner** can configure on-chain data and set up Adjuncts to manage the presentation of the world, paying fees to the Adjunct developers.  
* The **World Owner** charges a **3%** transaction fee on **Block** trades, which is paid by the buyer.

### **Block Operation**

* **Blocks** are sold via self-determined pricing and involve the transfer of the Block and all its contained content. The sale will incur a transaction fee to the **World Owner**, paid by the buyer.  
* **Block Owners** can create content on their Block, including paid games, and directly earn revenue.

## **Development Information**

* **Contract Network**: [Solana](https://solana.com)  
* **On-Chain Storage**: IPFS  
* **Frontend Language**: Javascript  
* **Rendering Engine**: [three.js](https://threejs.org)

### **Contract Component**

* The on-chain component of **Meta Septopus**, serving as the foundation and initial exploration for Septopus, adopts a highly loose coupling design to ensure open-source nature. Due to security considerations, including prevention against social engineering attacks, it uses Solana's CPI model with a single program entry point.  
* **Meta Septopus** introduces the ability to manage content visibility. While guaranteeing users the right to update their content autonomously, the system allows the World Owner to restrict the display of user content from the world's perspective. For example, if User A builds anti-human content on Block [1988, 818] and User B reports it, the **World Owner** can issue a **Ban** on its display.  
* The data used to construct **Block** content adopts a fully digital approach to enhance security.

### **3D Engine**

* The **3D Engine** of **Meta Septopus** uses a single entry point, is packaged into an independent file for easy invocation, and can be easily deployed in various applications.  
* The **3D Engine** execution logic is shown in the figure [Figure showing 3D Engine Execution Logic].
* The **3D Engine** is composed of the following parts, adopting a loose coupling design:

| Category | Function | Components |
| :---- | :---- | :---- |
| Framework | Core Parser | [Structure](https://www.google.com/search?q=/docs/world/Framework/system), [World](https://www.google.com/search?q=/docs/world/Framework/world) |
| Extend | Feature Extension | [Effects](https://www.google.com/search?q=/docs/world/Framework/system) |
| Renderer | Renderer |  |
| Controller | Controller |  |
| Adjunct | Adjuncts/Add-ons |  |

* Various protocols are used within the **3D Engine** to ensure ease of understanding:

| Protocol Name | Function | Documentation Details |
| :---- | :---- | :---- |
| Standard Data | Standard data format used by the 3D Engine |  |
| Modification Task | Standard format for 3D Engine execution of modification tasks |  |
| 3D Object | Standard format for creating 3D objects | [3D](https://www.google.com/search?q=/docs/world/Protocol/3D%2520object) |
| 2D Object | Standard format for creating 2D objects | [2D](https://www.google.com/search?q=/docs/world/Protocol/2D%2520object) |
| Animation | Standard format for animation effects | [Animation Standard](https://www.google.com/search?q=/docs/world/protocol/animation) |

### **IPFS Component**

* The content component of **Meta Septopus** will utilize a large number of 3D models generated by existing software, requiring extensive storage. Based on the principle of decentralization, **IPFS** is used for on-chain storage.  
* On-chain data adopts the **Septopus Resource Protocol**.

### **Data Protocols**

* To ensure the openness and decentralization of **Meta Septopus**, all data protocols are open-source, listed below:

| Protocol Name | Function | Documentation Details |
| :---- | :---- | :---- |
| Septopus Resource Protocol | Content protocol for documents stored on IPFS |  |
| Avatar Protocol | Virtual world avatar protocol |  |
| Bag Protocol | Player inventory system protocol |  |
| Adjunct Protocol | Adjunct development protocol |  |

## **System Features**

* **Meta Septopus** is deeply integrated with the blockchain, not only leveraging its stable system for asset transactions but also utilizing its rich hash data to build a decentralized **Weather System** and a stable **On-Chain Time System**.

### **Weather System**

* Blockchain block height naturally serves as a time counter. Based on this, time attributes can be added to the Adjuncts on the Block, which can be used to optimize the final rendering effect or implement time-related calculations.

### **On-Chain Time System**

* Once ****Meta Septopus** World #0** officially launches, it serves as the starting point for time. The **Meta Septopus** time can then be calculated based on the block height.

### **Block Hash Randomness**

* Combined with **On-Chain Time**, the associated block hash can be used as a random number to enable interesting features. For instance, when planting a "tree" in the Septopus World, due to the different planting times and associated block hashes, two identical seeds will grow into two similar but unique trees, much like what happens in the real world.