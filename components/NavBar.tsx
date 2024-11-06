// import { Container, Flex, Heading, Link } from "@chakra-ui/react";
// import { ConnectWallet } from "@thirdweb-dev/react";

// export default function NavBar() {
//     return (
//         <Container maxW={"1200px"} py={4}>
//             <Flex direction={"row"} justifyContent={"space-between"} bg="gray.800" color="white">
//                 <Heading>Fortune Farm</Heading>
//                 <Flex alignItems={"center"}>
//                     <Link href={"/"} mx={2}>Play</Link>
//                     <Link href={"/shop"} mx={2}>Shop</Link>
//                 </Flex>
//                 <ConnectWallet/>
//             </Flex>
//         </Container>
//     )
// };


// import { Container, Flex, Heading, Link } from "@chakra-ui/react";
// import { ConnectWallet } from "@thirdweb-dev/react";

// export default function NavBar() {
//     return (
//         <Flex 
//             direction={"row"} 
//             justifyContent={"space-between"} 
//             bg="gray.800" // Change to your desired color
//             color="white" // Change text color for contrast
//             px={4} // Add padding for better spacing
//             marginBottom={4} // Optional: Add border radius for rounded corners
//             position="fixed" // Fix the navbar to the top
//             top={0} // Align to the top
//             left={0} // Align to the left
//             right={0} // Align to the right
//             zIndex={1000} // Ensure it is above other elements
//         >
//             <Container maxW={"1200px"} py={4} display="flex" alignItems="center" w="100%">
//                 <Heading>Fortune Farm</Heading>
//                 <Flex alignItems={"center"}>
//                     <Link href={"/"} mx={2} color="white" _hover={{ textDecoration: "underline" }}>
//                         Play
//                     </Link>
//                     <Link href={"/shop"} mx={2} color="white" _hover={{ textDecoration: "underline" }}>
//                         Shop
//                     </Link>
//                 </Flex>
//                 <ConnectWallet />
//             </Container>
//         </Flex>
//     );
// };


// import { Container, Flex, Heading, Link } from "@chakra-ui/react";
// import { ConnectWallet } from "@thirdweb-dev/react";


// export default function NavBar() {
//     return (
//         <Flex 
//             direction={"row"} 
//             justifyContent={"space-between"} 
//             alignItems={"center"} 
//             bg="#bfbdb8" // Change to your desired color
//             color="white" // Change text color for contrast
//             px={4} // Add padding for better spacing
//             position="fixed" // Fix the navbar to the top
//             top={0} // Align to the top
//             left={0} // Align to the left
//             right={0} // Align to the right
//             zIndex={1000} // Ensure it is above other elements
//             h="60px" // Set a height for the navbar
//         >
//             <Container maxW={"1200px"} w="100%" display="flex" justifyContent="space-between">
//                 <Heading size="lg" textAlign="left">Fortune Farm</Heading>
//                 <Flex 
//                     alignItems={"center"} 
//                     justifyContent="center" 
//                     flexGrow={1} // Allow this Flex to take available space
//                     mx={4} // Add horizontal margin for spacing
//                 >
//                     <Link href={"/"} mx={2} color="white" _hover={{ textDecoration: "underline" }}>
//                         Play
//                     </Link>
//                     <Link href={"/shop"} mx={2} color="white" _hover={{ textDecoration: "underline" }}>
//                         Shop
//                     </Link>
//                 </Flex>
//                 <ConnectWallet />
//             </Container>
//         </Flex>

//     );
// };


import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Flex 
            direction={"row"} 
            justifyContent={"space-between"} 
            alignItems={"center"} 
            bg="#efa21d" // #f59d05 Change to your desired color
            color="white" // Change text color for contrast
            px={4} // Add padding for better spacing
            position="fixed" // Fix the navbar to the top
            top={0} // Align to the top
            left={0} // Align to the left
            right={0} // Align to the right
            zIndex={1000} // Ensure it is above other elements
            h="60px" // Set a height for the navbar
        >
            <Container maxW={"1200px"} w="100%" display="flex" justifyContent="space-between">
                <Heading size="lg" textAlign="left" lineHeight="60px">Fortune Farm</Heading> {/* Vertically center text */}
                <Flex 
                    alignItems={"center"} 
                    justifyContent="center" 
                    flexGrow={1} // Allow this Flex to take available space
                    mx={4} // Add horizontal margin for spacing
                >
                    <Link href={"/"} mx={2} color="white" _hover={{ textDecoration: "underline"}}>
                        Play
                    </Link>
                    <Link href={"/shop"} mx={2} color="white" _hover={{ textDecoration: "underline" }}>
                        Shop
                    </Link>
                </Flex>
                <Flex alignItems="center"> {/* Ensure the ConnectWallet button is centered vertically */}
                    <ConnectWallet />
                </Flex>
            </Container>
        </Flex>
    );
}





  
