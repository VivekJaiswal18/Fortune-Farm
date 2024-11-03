// import type { AppProps } from "next/app";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";
// import { ChakraProvider } from "@chakra-ui/react";
// import { defineChain } from "thirdweb";
// import NavBar from "../components/NavBar";

// // This is the chain your dApp will work on.
// // Change this to the chain your app is built for.
// // You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// // const activeChain = defineChain(1320);
// // import { Chain } from 'wagmi/chains'

// export const aiachain = {
//   id: 1320,
//   name: 'AIA Testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'AIA',
//     symbol: 'AIA',
//   },
//   rpcUrls: {
//     public: { http: ['https://aia-dataseed1-testnet.aiachain.org'] },
//     default: { http: ['https://aia-dataseed1-testnet.aiachain.org'] },
//   },
//   blockExplorers: {
//     default: { name: 'xt4scan', url: '' },
//   },
//   testnet: true
// };

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThirdwebProvider activeChain={aiachain}>
//       <ChakraProvider>
//         <NavBar/>
//         <Component {...pageProps} />
//       </ChakraProvider>
//     </ThirdwebProvider>
//   );
// }

// export default MyApp;


// import type { AppProps } from "next/app";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { defineChain } from "thirdweb";
// import NavBar from "../components/NavBar";

// // Define AIA Testnet chain using defineChain
// const aiaChain = defineChain({
//   id: 1320,
//   name: 'AIA Testnet',
//   network: 'aia-testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'AIA',
//     symbol: 'AIA',
//   },
//   rpcUrls: {
//     public: { http: ['https://aia-dataseed1-testnet.aiachain.org'] },
//     default: { http: ['https://aia-dataseed1-testnet.aiachain.org'] },
//   },
//   blockExplorers: {
//     default: { name: 'xt4scan', url: '' },
//   },
//   testnet: true,
//   // Add these required fields
//   chainName: "AIA Testnet",
//   slug: "aia-testnet",
//   icon: {
//     url: "", // Add an icon URL if available
//     width: 32,
//     height: 32,
//   },
//   shortName: "aia",
// });

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThirdwebProvider activeChain={aiaChain}>
//       <ChakraProvider>
//         <NavBar/>
//         <Component {...pageProps} />
//       </ChakraProvider>
//     </ThirdwebProvider>
//   );
// }

// export default MyApp;


// import type { AppProps } from "next/app";
// import { ThirdwebProvider, Chain } from "@thirdweb-dev/react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { defineChain } from "thirdweb";
// import NavBar from "../components/NavBar";

// // Define the AIA Testnet chain using defineChain for type compatibility
// const aiachain = defineChain({
//   id: 1320,
//   name: "AIA Testnet",
//   nativeCurrency: {
//     decimals: 18,
//     name: "AIA",
//     symbol: "AIA",
//   },
//   rpcUrls: {
//     default: { http: ["https://aia-dataseed1-testnet.aiachain.org"] },
//     public: { http: ["https://aia-dataseed1-testnet.aiachain.org"] },
//   },
//   blockExplorers: {
//     default: { name: "xt4scan", url: "" }, // Replace with actual block explorer URL if available
//   },
//   testnet: true,
// });

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThirdwebProvider activeChain={aiachain}>
//       <ChakraProvider>
//         <NavBar />
//         <Component {...pageProps} />
//       </ChakraProvider>
//     </ThirdwebProvider>
//   );
// }

// export default MyApp;



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