//import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { Link } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "@theme-ui/core";
import preset from "@rebass/preset";
// const mytheme = createMuiTheme({
//   typography: {
//     //fontFamily: "system-ui",
//   },
//   palette: {
//     primary: green,
//     type: "dark",
//   },
// });

// console.log(
//   mytheme.palette.primary.dark,
//   mytheme.palette.primary.light,
//   mytheme.palette.primary.main
// );
// preset.styles.root.mx = "20%";
// preset.styles.root.marginTop = 20;
//   colors: {
//     powderWhite: "#FFFDF9",
//     persianGreen: "#06B49A",
//     lightBlue: "#AFDBD2",
//     onyx: "#36313D",
//   },
//   fonts: ["sans-serif", "Roboto"],
//   boxes: {
//     primary: {
//       bg: "onyx",
//     },
//   },
// };

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={preset}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
