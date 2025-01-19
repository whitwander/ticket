import Header from "./Components/Header/index.js";
import Patterns from "./Components/Patterns/index.js";
import Upload from "./Components/Upload/index.js";

function App() {
  return (
    <div className="main">
      <Header />
      <Upload />
      <Patterns />      
    </div>
  );
}

export default App