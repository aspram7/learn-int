import React from "react"
import Header from "../src/Components/Header"
import {useWindowWidth} from "../src/helpers/getWindowWidth"
import './App.css';

const WidthContext = React.createContext(null);
function App() {
  const { width } = useWindowWidth()
  
  return (
    <div className="App">
      <WidthContext.Provider value={width}>
        <Header />
      </WidthContext.Provider>
    </div>
  );
}

export default App;

export {WidthContext};
