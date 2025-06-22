import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <>
      <Person name={"John Doe"} age={30} isMarried={false} />
      <Person name={"Daniel Ebrams"} age={33} isMarried={true} />
    </>
  );
}

export default App;
