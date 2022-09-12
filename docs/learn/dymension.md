---
title: "How dYmension Works"
slug: "dymension"
---

dYmension follows a modular blockchain architecture design that decouples different functions of a ‘Monolithic’ blockchain for greater performance, efficiency and scalability. Monolithic blockchains handle transaction execution, state settlement, data processing and provide a consensus on the canonical history of the chain.

dYmension takes the unique approach of sharding the execution layer into application-specific rollups (RollApps). This design allows each application to have its own execution environment. The settlement layer of dYmension is termed "the Hub." The hub is a central place for security, liquidity and inter-operability. By implementing a settlement layer, dYmension is able to connect the ecosystem of RollApps with one another and the broader IBC-enabled world.

Depending on the design of the modular blockchain, consensus may be provided at various layers. dYmension utilizes the settlement layer to handle consensus of the RollApps, which enables a clean design for trust minimized bridging, handling any fraud disputes and a significant reduction in latency. This facilitates a highly scalable and efficient design that is capable of keeping up with modern day application requirenments.

![Modular Blockchain](./images/modular_blockchain.svg)

Sharding the execution layer into multiple distinct instances allows applications to be performance independant of the underlying base layers. Applications are able to run with significantly lower latency and higher throughput, while inheriting the security of the underlying base layers (settlement and data). Furthermore, dYmension utilizes various data availability solutions allowing permissionless actors submit an proofs of fraudulent activity.

RollApps operate under an optimistic fraud proof design. Optimistic rollups reduce computation on the main chain by processing transactions off-chain. Optimistic rollups derive security from the main chain they utilize by posting transaction results on-chain. Rollups operate in an execution environment which is considered “off-chain.” Instead of processing all transactions on the blockchain, a transaction processor, known as a Sequencer, executes transactions, batches them and submit an updated state to the main chain.

By moving the computational efforts off-chain, nodes of the main chain with less computational power may keep up with high amounts of information re-processing and participate in the consensus of the network. This enables the network as a whole to scale superlineraly to the cost of running the system.<sup>1</sup> In dYmension's architecture, compatible rollups post transaction data to a data availability layer and publish a new state root on dYmension's settlement layer. Optimisitic design requires only O(1) data in state to be stored on the settlement layer for O(N) off-chain transactions. This significantly reduces the efforts of each full and validating node participating in dYmension's network.

Unlike zero-knowledge rollups which publish proofs of validity for off-chain transactions.<sup>2</sup> Optimistic rollups assume off-chain transactions are valid. A dispute period is installed to allow permission-less actors to post invalidity proofs (refered to as Fraud Proofs). If anyone discovers a batch that is not correct, they can publish a fraud proof demonstrating the correct state transition. If indeed the sequencer provided incorrect information, the state of the blockchain is reverted and the sequencer is “slashed” (they lose tokens they’ve bonded to participate in the network).

A pre-requisite for submiting a fraud proof to the settlement layer is that all of the data was made available when the block was published. This means that for every state transition, all of the associated data was published. This allows different actors to verify the state is valid and submit any fraud proofs if there is a transaction included by the Sequencer that is not valid according to the application logic. If a Sequencer included a magic (but fraudulent) transaction that minted themselves a bunch of token the data availability would guarantee this transaction was included in the published block and a fraud proof can then be submitted by any actor demonstrating the invalidity of the specified transaction.

This unique integration of data availability guarantees and a dispute period for fraud proofs allows users to confidently interact with an application's Sequencer. Furthermore, this design enables dYmension to hyper-scale blockchain applications. In dYmension's protocol, each application receives its own designated rollup environment and the settlement layer handles any fraud dispute, inter-connectivity with other applications and security.

Besides relying on O(1) data to be stored regarding the state of the blockchain, RollApps operate under a 1 of N trust assumption. 1 of N trust assumptions refer to the fact that even as the number of participants grows in the system, only one of them needs to be honest. This honest minority is able to submit fraud proofs if they notice any bad actors operating within the system. Unlike RollApps, the base layers of the RollApps operate under honest majority assumptions just like standard blockchains.

![Trust Assumptions](./images/trust-assumptions.png)

Furthermore, dYmension natively services rollups on the settlement layer, which is known as ‘enshrined rollups’<sup>3</sup>. In this design the settlement layer meticulously incorporates the logic for maintaining RollApps within the layer. Contrary to dYmension’s RollApp design, non-enshrined rollups such as Arbitrum and Optimism are connected to the Ethereum base layer via a customized smart contract implementation<sup>4</sup>. These smart contracts are essentially multi-sig bridges which act as the interface surface between the base layer and the rollup. Buggy smart contracts and compromised multi-sig keys are only a few of the trust assumptions required for such a system. Enshrinement offers rollups the same trust and security assumptions as the base layer, yet with a simpler, safer and more efficient design space.

The only application logic not restricted to handling RollApps is an embedded Automated Market Maker (AMM), creating a core financial center. The embedded functionality is designed to expose RollApps to efficient asset routing, better price discovery and most importantly shared liquidity for the entire ecosystem. The AMM enables embedded price oracles for RollApps, which empower DeFi products based on safely priced liquidity pools. dYmension’s AMM is an indispensable part of the infrastructure stack, as it provides
RollApps with a critical service which can determine their usage and success.

To learn more about the design of the protocol please review [dYmension's litepaper](/docs/dymension-litepaper/index.md) and feel free to reach out to the dYmension core devs and community in the [discord](http://discord.gg/dymension)!

References:

1. (Almost) Everything you need to know about Optimistic Rollup https://research.paradigm.xyz/rollups
2. Optimistic Rollups https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/
3. Transaction Optimistic Rollups – a stepping stone for Tezos https://research-development.nomadic-labs.com/toru-introduction.html
4. How does Optimism's Rollup really work? https://research.paradigm.xyz/optimism