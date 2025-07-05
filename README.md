# Web3ssh-Hackathon-2025
## Project Demo: https://onchain-badge-11.vercel.app/
## Title:
### Proof of Skill & Contribution (PoSC): A Web3 Protocol for Verifying Real Participation in Hackathons & Workshops**
## Project Tagline
### A unified, tamper-proof, and decentralized platform for verifying real-world skill and participation in Web3 workshops, hackathons, and online micro-courses.
## **THE CORE PROBLEM:**

> In the current Web2/Web3 ecosystem, there's no reliable, tamper-proof, and decentralized way to verify what someone actually contributed during events like hackathons, workshops, or community projects.
> 

Certificates, PDFs, or POAPs can say *"you were there."*

But **none of them prove:**

- What **you built**
- What **role** you played
- Whether you **actually participated** or just **sat around**

**For builders, recruiters, DAOs, and grant platforms — this is a trust black hole.**

## **SOLUTION:**

> Build a Web3-native protocol that lets event organizers and peers issue verifiable, tamper-proof skill attestations as soulbound NFTs, linked to:
> 
- **GitHub commits**
- **On-chain attestations**
- **Peer signatures (wallet-based)**
- **Role-based metadata** like "frontend", "backend", "designer", "mentor", etc.

All of this forms a **real-time, trustless, decentralized skill profile** that evolves with every event.

### KEY DIFFERENTIATORS (Compared to Other Projects):

| Existing System | Weakness | Your Solution |
| --- | --- | --- |
| POAP | Just shows attendance | We verify actual work + role |
| LearnCard / Open Badges | Generic academic focus | We are **event-specific + GitHub verified + decentralized** |
| Gitcoin Passport | Identity proof only | We are **contribution & skill proof** |
| Kleros Badges | General-purpose + slow arbitration | Ours is **event-native + real-time** |

---

## MAIN TECH STACK — 

| Layer | Tool | Purpose |
| --- | --- | --- |
| 🔸 Smart Contract | **Solidity + Hardhat** | Mint soulbound badges, verify roles |
| 🔸 Blockchain | **Polygon Mumbai** | EVM-compatible, fast + cheap |
| 🔸 Wallet + UI | **React + Tailwind + Ethers.js** | User dashboard, mint, verify |
| 🔸 Off-Chain Logic | **Node.js + GitHub API** | Validate repo commits, authorship |
| 🔸 Storage | **IPFS + NFT.Storage** | Store metadata, snapshots, proof assets |
| 🔸 Signature Verification | **EIP-712** | Organizer & peer role validation |
| 🔸 Optional Privacy (Phase 2) | **zk-SNARKS / Semaphore** | Selective proof disclosure |
| 🔸 Deployment | **Vercel** | One-click deploy frontend |

---


## Step 1: System Design Documentation
In this phase, we defined the problem, solution architecture, and core functional flow of our Web3 project — PoSC (Proof of Skill via Contribution).

What We Did:
Identified the real-world problem: lack of verifiable, trusted skill proof from hackathons and workshops.

Wrote a problem statement with a relatable user story (Priya’s Journey).

Defined clear user roles — Participant, Organizer, Verifier.

Mapped out functional requirements for the MVP.

Designed the Soulbound NFT schema for contribution-based skill badges.

Outlined the tech stack: Solidity, IPFS, Hardhat, React, Tailwind, Ethers.js, and Polygon.

Created a journey map to show how a participant goes from joining to receiving a verified badge.

Organized everything inside the /docs folder, fully versioned and pushed to GitHub.

## Docs Included:
problem-statement.md

user-roles.md

mvp-features.md

functional-requirements.md

tech-stack.md

badge-schema.json

flow-diagram.png

## Step 2: Smart Contract Setup – Status Update (Professional Summary for README)

Step 2: Smart Contract Setup Using Hardhat
In this step, we established the complete smart contract development environment to build the PoSCBadge NFT contract — which represents verifiable, role-based skill contributions in hackathons and workshops.

### What We Did:
Initialized Hardhat for local Ethereum development.

Installed OpenZeppelin libraries to build secure and standardized NFT (ERC721) contracts.

Created the core contract PoSCBadge.sol to mint skill-based NFTs.

Configured hardhat.config.js with:

Polygon Mumbai testnet for deployment

Environment variables for wallet key and RPC provider

Compiled the smart contract successfully and ensured it’s ready for deployment.

### Deployment Status: Pending
The smart contract has not yet been deployed to the Mumbai testnet due to insufficient MATIC balance in the connected wallet (used for paying gas fees).

## Next Steps
Request test MATIC from Polygon Mumbai Faucet.

Once funds are available, execute deployment using the configured script.

## Note
All smart contract files, configurations, and the deployment script have been successfully pushed to GitHub. Deployment will be completed once testnet funds are available.

## Step 3 Frontend Setup:

Clean React + Tailwind UI

Wallet connect via MetaMask

Organizer Dashboard page with badge mint form

UI placeholders for:

NFT preview

Participant profile

Public verifier

Next up for this (if you return):

Connect frontend to contract using Ethers.js

On form submit:

Upload metadata to IPFS using nft.storage

Mint badge using smart contract (mintBadge())

🔜 What’s Left (If You Resume)
## 4. GitHub Contribution Check:
Purpose: Prevent fake badge minting — prove real work.

Use GitHub REST API (or GraphQL if needed)

Input: GitHub username + repo

Logic:

Count commits or PRs from that user

If X contributions → allow mint

Output: JSON of contributions → upload to IPFS

Store IPFS hash in badge metadata for traceability

Optional:

Can do this in frontend (JS fetch GitHub API)

Or use a Node.js backend for heavier auth & rate limits

## 5. Mint Badges with Metadata
Purpose: Lock actual proof on-chain.

Organizer inputs:

Wallet address

Role

Event/repo metadata

System:

Verifies GitHub contribution (Step 4)

Uploads metadata + image to IPFS

Calls smart contract → mints SBT (Soulbound Token)

🔐 This is your core proof. The "skill badge" tied to real effort.

## 6. Deploy & Demo
Purpose: Package everything for judges or recruiters.

Frontend: Vercel

Smart contract: Polygon Mumbai testnet

Video:

Organizer logs in, fills form

Participant sees minted badge in wallet

Public view badge via wallet address

Add:

GitHub repo link

Live site link

YouTube demo link in README.md



