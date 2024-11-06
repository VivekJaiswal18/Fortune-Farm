import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import theme from "../components/theme";
import Footer from "../components/Footer";

// Define AIA Testnet chain
const aiaChain = {
  chainId: 1320,
  rpc: ["https://aia-dataseed1-testnet.aiachain.org"],
  nativeCurrency: {
    name: "AIA",
    symbol: "AIA",
    decimals: 18,
  },
  shortName: "aia",
  slug: "aia-testnet",
  chain: "AIA",
  name: "AIA Testnet",
  icon: {
    url: "https://placeholder.com/icon.png", // Replace with actual icon URL
    width: 512,
    height: 512,
    format: "png"
  },
  testnet: true,
  explorers: [
    {
      name: "aiascan",
      url: "",
      standard: "EIP3091"
    }
  ]
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={{
        ...aiaChain,
        // Additional required properties
        chain: "AIA",
        chainId: 1320,
      }}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
      <ChakraProvider theme={theme}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;