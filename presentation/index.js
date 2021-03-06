// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill
} from "spectacle";
import Sisense, { Widget } from "../sisense";
import manifest from "./presentation.manifest";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  darkBack: "#474747",
  lightFront: "white"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    Sisense.connect("http://localhost");
  }

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          manifest.widgets.map((widgetSlideManifest, index) =>
            <Slide transition={["slide", "zoom", "fade", "spin"]} key={index} transition={["fade"]} bgColor="darkBack">
              <Heading size={1} fit textColor="lightFront">{widgetSlideManifest.title}</Heading>
              <Layout>
                <Fill>
                  <Widget
                    dashboard={widgetSlideManifest.dashboardId}
                    id={widgetSlideManifest.id}
                  />
                </Fill>
                <Fill>
                  <Text
                    size={6}
                    textColor="lightFront"
                    style={{
                      fontSize: "1.86rem",
                      lineHeight: 1.5,
                      marginTop: 20,
                      textAlign: "left",
                      marginLeft: 20
                    }}
                  >
                    {widgetSlideManifest.text}
                  </Text>
                </Fill>
              </Layout>
            </Slide>
          )
        }
        {/*
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit textColor="secondary">title</Heading>
          <Widget
            dashboard="56a5ef16616101406500000d"
            id="56a5ef166161014065000010"
          />
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
