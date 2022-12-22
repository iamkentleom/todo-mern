import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { dbReadTodos } from "./redux/todos-actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dbReadTodos());
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto flex flex-col min-h-screen px-4">
      <Navbar />
      <Create />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
