import { WalletKitProvider } from '@gokiprotocol/walletkit';
import { AppProps } from 'next/app';
import { FC } from 'react';

// Use require instead of import, and order matters
require('../styles/globals.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WalletKitProvider
      app={{ name: 'RFQ' }}
      networkConfigs={{
        'localnet': {
          name: 'localnet',
          endpoint: 'http://127.0.0.1:8899'
      }
      }}
    >
      <Component {...pageProps} />
    </WalletKitProvider>
  );
}

export default App;
