import './App.css';
import { TopNavbar } from './Components/TopNavbar';
import { Products } from './Components/Products';
import { RoadMap } from './Components/RoadMap';
import { Tokens } from './Components/Tokens';
import { Footer } from './Components/Footer';


import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_PROJECT_ID;


// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
    '--w3m-accent': '#f9d326',
    '--w3m-color-mix': '#f5d81d',
    '--w3m-color-mix-strength': 10,
    '--w3m-font-family': 'Inter, Arial, Helvetica, sans-serif',
    '--w3m-font-size-master': '13px',
    '--w3m-border-radius-master': '5px',
    '--w3m-z-index': 9999
  },
})


function App() {
  return (
    <div className="w-full">
      <TopNavbar />
      <Products />
      <RoadMap />
      <Tokens />
      <Footer />
    </div>
  );
}

export default App;
