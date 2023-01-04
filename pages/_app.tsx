import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "CBRecruitment",
    alchemyId,
  }),
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <WagmiConfig client={client}>
      <ConnectKitProvider mode='auto' theme='midnight' customTheme={{
          "--ck-overlay-background": "rgba(0, 0, 0, 0.8)",
        }}>
        <Navbar/>
          <Component {...pageProps} />
        <Footer/>
      </ConnectKitProvider>
      </WagmiConfig>
    </>
  ) 
}
