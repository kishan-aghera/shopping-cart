import { Container } from "react-bootstrap";
import { Store } from "./pages";
import { Navbar } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Store />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
