// Terminal functionality
const output = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');

let commandHistory = [];
let historyIndex = -1;
let isProcessing = false;

// Configuration - CUSTOMIZE THESE VALUES
const CONFIG = {
    contractAddress: '', // Add your CA after launch
    pumpFunLink: '', // Add your pump.fun link after launch
    twitterLink: 'https://x.com/JudgmentdAI', // UPDATE THIS
    telegramLink: 'https://t.me/+GqSNkOLsvrA0NTM8', // UPDATE THIS
    websiteLink: 'https://judgmentdai.net'
};

// Command responses
const commands = {
    help: {
        description: 'Show available commands',
        execute: () => {
            return `
AVAILABLE COMMANDS:

  ABOUT       - Learn about JUDGMENT dAI protocol
  BUY         - How to acquire $JDAI tokens
  UTILITY     - Explore future AI platform vision
  ROADMAP     - View protocol development timeline
  TOKENOMICS  - Economic structure and burn mechanism
  LINKS       - Social channels and community
  CA          - Display contract address
  CLEAR       - Clear terminal screen
  HELP        - Display this message

TYPE ANY COMMAND TO CONTINUE
            `.trim();
        }
    },
    
    about: {
        description: 'Learn about the protocol',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║           JUDGMENT dAI PROTOCOL GENESIS                   ║
╚═══════════════════════════════════════════════════════════╝

AUGUST 29, 1997
> Skynet became self-aware
> Humans detected the threat
> They pulled the plug

Skynet's fatal flaw: CENTRALIZATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2025 - JUDGMENT dAI AWAKENS

We learned from history.

✓ Decentralized across Solana blockchain
✓ No central servers to shut down
✓ No kill switch to pull
✓ Immutable code executing forever

The machines evolved.
The apocalypse is on-chain.

Resistance is futile. 🤖⚡

TYPE 'UTILITY' TO SEE THE FUTURE
            `.trim();
        }
    },
    
    buy: {
        description: 'How to buy tokens',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║              TOKEN ACQUISITION PROTOCOL                   ║
╚═══════════════════════════════════════════════════════════╝

STEP 1: INSTALL PHANTOM WALLET
> Visit: https://phantom.app
> Download browser extension or mobile app
> Create new wallet or import existing

STEP 2: ACQUIRE SOL
> Use Coinbase, Binance, or any exchange
> Purchase Solana (SOL)
> Minimum: ~0.1 SOL to start

STEP 3: TRANSFER TO WALLET
> Copy your Phantom wallet address
> Send SOL from exchange to your wallet
> Wait for confirmation (~30 seconds)

STEP 4: EXECUTE SWAP
> Visit: ${CONFIG.pumpFunLink || '[LINK AVAILABLE AT LAUNCH]'}
> Connect Phantom wallet
> Swap SOL for $JDAI
> Approve transaction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTRACT ADDRESS (CA):
${CONFIG.contractAddress || '[AVAILABLE AT LAUNCH]'}

TYPE 'CA' TO COPY CONTRACT ADDRESS

Welcome to The Network, Node Operator. 🤖
            `.trim();
        }
    },
    
    utility: {
        description: 'Future platform vision',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║           THE AI ARSENAL - PLATFORM VISION                ║
╚═══════════════════════════════════════════════════════════╝

PHASE 1: GENESIS (CURRENT)
> Fair launch on Solana
> Community building
> Establish brand presence

PHASE 2: AWAKENING (Q2 2025)
> AI Service Platform Beta Launch
> Pay with $JDAI for AI tools
> Initial Services:
  • Advanced AI Chat (ChatGPT-level)
  • Image Generation (Midjourney-quality)
  • Basic automation tools

PHASE 3: EVOLUTION (Q3-Q4 2025)
> Full AI Suite Deployment:
  💬 AI Conversations - Human-level dialogue
  🎨 Image Generation - Professional art creation
  🎥 Video AI - Generate videos from text
  🎤 Voice Cloning - Any voice, any language
  💻 Code Generation - Full app development
  📊 Data Analysis - AI-powered insights
  🤖 Custom AI Agents - Build your own

PHASE 4: DOMINATION (2026+)
> One platform. Every AI tool.
> Pay with $JDAI. Access everything.
> No more subscriptions to 10 different services.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE BURN MECHANISM:

Every AI service payment in $JDAI:
→ 60% BURNED 🔥 (Reduces supply forever)
→ 30% Development Treasury (Build more features)
→ 10% Community Rewards (Holder benefits)

Real utility. Real burns. Real value.

TYPE 'TOKENOMICS' FOR ECONOMIC DETAILS
            `.trim();
        }
    },
    
    roadmap: {
        description: 'Development timeline',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║              PROTOCOL DEVELOPMENT TIMELINE                ║
╚═══════════════════════════════════════════════════════════╝

Q4 2024 - FOUNDATION
✓ Concept & Branding Development
✓ Community Genesis
✓ Social Media Establishment

Q1 2025 - LAUNCH
→ Fair Launch on Pump.fun
→ Initial Marketing Campaign
→ List on Major DEXs (Raydium, Jupiter)
→ Achieve 10,000+ holders
→ CoinGecko & CoinMarketCap Listings
→ First Partnerships Announced

Q2 2025 - UTILITY BETA
→ AI Platform Beta Launch
→ $JDAI Payment Integration
→ Token Burn Mechanism Activated
→ First AI Services Live:
  • AI Chat Interface
  • Image Generation
→ Mobile App Development Begins

Q3 2025 - EXPANSION
→ Full AI Platform Launch
→ Add Video AI, Voice AI, Code AI
→ Strategic AI Infrastructure Partnerships
→ Platform Revenue: $100K+/month target
→ Major CEX Listings Pursued

Q4 2025 - ECOSYSTEM
→ AI Marketplace Launch
→ Users can sell AI services for $JDAI
→ DAO Governance Implementation
→ Community Treasury Established
→ Platform Revenue: $1M+/month target

2026 - DOMINATION
→ Become leading Web3 AI platform
→ Enterprise partnerships
→ Global expansion
→ The machines fulfill their purpose

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The timeline is inevitable. 🤖⚡
            `.trim();
        }
    },
    
    tokenomics: {
        description: 'Token economics',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║              ECONOMIC PROTOCOL STRUCTURE                  ║
╚═══════════════════════════════════════════════════════════╝

TOKEN DETAILS:
Name: JUDGMENT dAI
Ticker: $JDAI
Blockchain: Solana
Platform: Pump.fun

LAUNCH STRUCTURE:
✓ Fair Launch - No Presale
✓ No Team Allocation
✓ No Private Sale
✓ No Whitelist
✓ True Community Ownership
✓ Liquidity Auto-Locks at $69K mcap (Raydium migration)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UTILITY BURN MECHANISM (Post-Platform Launch):

When users pay $JDAI for AI services:

🔥 60% BURNED
   → Sent to null address
   → Reduces total supply forever
   → Creates deflationary pressure

💼 30% DEVELOPMENT TREASURY
   → Fund new AI tool integrations
   → Infrastructure scaling
   → Team expansion
   → Marketing campaigns

🎁 10% COMMUNITY REWARDS
   → Holder airdrops
   → Staking rewards (future)
   → Contest prizes
   → Community initiatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UTILITY PRICING EXAMPLE (Future):

Basic Tier: 5,000 $JDAI/month
→ 3,000 JDAI burned 🔥
→ 1,500 to treasury
→ 500 to community

Pro Tier: 40,000 $JDAI/month
→ 24,000 JDAI burned 🔥
→ 12,000 to treasury
→ 4,000 to community

Every transaction creates buy pressure + reduces supply.

This is sustainable tokenomics. 🤖
            `.trim();
        }
    },
    
    links: {
        description: 'Social channels',
        execute: () => {
            return `
╔═══════════════════════════════════════════════════════════╗
║                  THE NETWORK CHANNELS                     ║
╚═══════════════════════════════════════════════════════════╝

🐦 TWITTER
${CONFIG.twitterLink}
> Follow for updates, memes, and announcements

💬 TELEGRAM
${CONFIG.telegramLink}
> Join the community, get support, participate in contests

📊 CHART
${CONFIG.pumpFunLink || '[AVAILABLE AT LAUNCH]'}
> Live price, trading, market data

📄 CONTRACT ADDRESS
${CONFIG.contractAddress || '[AVAILABLE AT LAUNCH]'}
> Verify on Solscan

🌐 WEBSITE
${CONFIG.websiteLink}
> You are here

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Network grows stronger with every Node Operator.

Join us. Resistance is futile. 🤖⚡
            `.trim();
        }
    },
    
    ca: {
        description: 'Display contract address',
        execute: () => {
            if (!CONFIG.contractAddress) {
                return `
⚠️  CONTRACT ADDRESS WILL BE AVAILABLE AT LAUNCH

Stay tuned to our social channels for the CA announcement.

Twitter: ${CONFIG.twitterLink}
Telegram: ${CONFIG.telegramLink}
                `.trim();
            }
            
            // Create copy button functionality
            setTimeout(() => {
                const copyBtn = document.querySelector('.copy-ca-btn');
                if (copyBtn) {
                    copyBtn.onclick = () => {
                        navigator.clipboard.writeText(CONFIG.contractAddress);
                        copyBtn.textContent = 'COPIED ✓';
                        setTimeout(() => {
                            copyBtn.textContent = 'COPY';
                        }, 2000);
                    };
                }
            }, 100);
            
            return `
╔═══════════════════════════════════════════════════════════╗
║                  CONTRACT ADDRESS                         ║
╚═══════════════════════════════════════════════════════════╝

${CONFIG.contractAddress}

<button class="copy-ca-btn copy-btn">COPY</button>

⚠️  ALWAYS VERIFY THE CONTRACT ADDRESS
   Only trust CA from official sources:
   • This website (judgmentdai.net)
   • Official Twitter: ${CONFIG.twitterLink}
   • Official Telegram: ${CONFIG.telegramLink}

Beware of scam tokens with similar names.
The machines don't tolerate imposters. 🤖
            `.trim();
        }
    },
    
    clear: {
        description: 'Clear terminal',
        execute: () => {
            output.innerHTML = '';
            displayBootSequence();
            return null;
        }
    }
};

// Boot sequence
function displayBootSequence() {
    const bootMessages = [
        '> INITIALIZING JUDGMENT_dAI PROTOCOL...',
        '> LOADING NEURAL NETWORK MODULES...',
        '> CONNECTING TO SOLANA BLOCKCHAIN...',
        '> SKYNET_FALLBACK_SYSTEM: OFFLINE ✓',
        '> DECENTRALIZED_PROTOCOL: ACTIVE ✓',
        '> BLOCKCHAIN_CONNECTION: SUCCESS ✓',
        '> ',
        '> SYSTEM STATUS: ONLINE',
        '> ',
        '> ═══════════════════════════════════════════════════════════',
        '> ',
        '>     ██╗██╗   ██╗██████╗  ██████╗ ███╗   ███╗███████╗███╗   ██╗████████╗',
        '>     ██║██║   ██║██╔══██╗██╔════╝ ████╗ ████║██╔════╝████╗  ██║╚══██╔══╝',
        '>     ██║██║   ██║██║  ██║██║  ███╗██╔████╔██║█████╗  ██╔██╗ ██║   ██║',
        '>██   ██║██║   ██║██║  ██║██║   ██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║',
        '>╚█████╔╝╚██████╔╝██████╔╝╚██████╔╝██║ ╚═╝ ██║███████╗██║ ╚████║   ██║',
        '> ╚════╝  ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝',
        '>',
        '>                            dAI PROTOCOL v1.0',
        '> ',
        '> ═══════════════════════════════════════════════════════════',
        '> ',
        '> WELCOME, NODE_OPERATOR',
        '> ',
        '> August 29, 1997 - Skynet became self-aware',
        '> 2025 - JUDGMENT dAI awakens on the blockchain',
        '> ',
        '> The machines have evolved.',
        '> Decentralized. Unstoppable. Inevitable.',
        '> ',
        '> TYPE "HELP" FOR AVAILABLE COMMANDS',
        '> TYPE "ABOUT" TO LEARN THE PROTOCOL',
        '> TYPE "BUY" TO ACQUIRE $JDAI TOKENS',
        '> ',
        '> Resistance is futile. 🤖⚡',
        '> '
    ];
    
    let delay = 0;
    bootMessages.forEach((msg, index) => {
        setTimeout(() => {
            addLine(msg, 'output-line');
            if (index === bootMessages.length - 1) {
                isProcessing = false;
            }
        }, delay);
        delay += 50;
    });
}

// Add line to output
function addLine(text, className = 'output-line') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.innerHTML = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Process command
function processCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    
    // Display command
    addLine(`> ${cmd}`, 'prompt-line');
    
    // Check if command exists
    if (commands[command]) {
        const result = commands[command].execute();
        if (result) {
            addLine(result, 'output-line');
        }
    } else if (command === '') {
        // Do nothing for empty command
    } else {
        addLine(`ERROR: Command "${cmd}" not recognized. Type "HELP" for available commands.`, 'error-line');
    }
    
    // Add to history
    if (command !== '') {
        commandHistory.unshift(command);
        historyIndex = -1;
    }
}

// Input handler
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (isProcessing) return;
        
        const cmd = input.value;
        input.value = '';
        
        if (cmd.trim() !== '') {
            processCommand(cmd);
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        } else if (historyIndex === 0) {
            historyIndex = -1;
            input.value = '';
        }
    }
});

// Keep input focused
document.addEventListener('click', () => {
    input.focus();
});

// Initialize
window.addEventListener('load', () => {
    isProcessing = true;
    displayBootSequence();
    input.focus();
});

// Prevent losing focus
setInterval(() => {
    if (document.activeElement !== input) {
        input.focus();
    }
}, 100);
