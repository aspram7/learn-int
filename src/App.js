import React from "react"
import Header from "../src/Components/Header"
import Slider from "../src/Slider/slider"
import { useWindowWidth } from "../src/helpers/getWindowWidth"
import './App.css';
import { ApolloProvider } from "@apollo/client";
import Data from "./Components/GetData/getData";
import {client} from "./graphQL/queries"


// const link = from([
//   errorLink,
//   new HttpLink({uri: "https://example-vmall-front.yereone.com/graphql"})
// ])

// export const client = new ApolloClient({
//   uri: "https://example-vmall-front.yereone.com/graphql",
//   cache: new InMemoryCache(),
//   headers: {
//     "account-id": "6027acbe5fc2b4627256d612",
//     "locale": "en_US"
//   }
// })

const WidthContext = React.createContext(null);
function App() {
  const { width } = useWindowWidth()
  
  return (
    <div className="App">
      <WidthContext.Provider value={width}>
        <Header />
        <div className="classSlider">
          <Slider className={"sliderDots"} />
        </div>
        <ApolloProvider client={client}>
          <Data />
        </ApolloProvider>
      </WidthContext.Provider>
    </div>
  );
}

export default App;

export {WidthContext};
