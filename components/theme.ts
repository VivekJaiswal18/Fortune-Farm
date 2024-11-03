// theme.ts
// import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   styles: {
//     global: {
//       "html, body": {
//         backgroundColor: "#d7dbda", // Set your desired background color here
//       },
//     },
//     fonts: {
//       heading: "Montserrat, sans-serif",
//       body: "Montserrat, sans-serif",
//     },
//   },
// });

// export default theme;


// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Red Rose, sans-serif", // Set the font for headings
    body: "Red Rose, sans-serif", // Set the font for body text
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#d7dbda", // Set your desired background color here
      },
    },
  },
});

export default theme;

