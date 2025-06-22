import "./App.css";
import User from "./components/Person";

function App() {
  return (
    <>
      <User name={"John Doe"} age={30} isMarried={false} />
      <User name={"Daniel Ebrams"} age={33} isMarried={true} />
    </>
  );
}

export default App;
