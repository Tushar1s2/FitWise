import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <h1>FitWise</h1>;
}

export default App;
