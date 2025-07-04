# Web3ssh-Hackathon-2025

## Project Tagline
### A unified, tamper-proof, and decentralized platform for verifying real-world skill and participation in Web3 workshops, hackathons, and online micro-courses.

## Step 1: System Design Documentation
In this phase, we defined the problem, solution architecture, and core functional flow of our Web3 project — PoSC (Proof of Skill via Contribution).

🔍 What We Did:
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


