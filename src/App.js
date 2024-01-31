import "./App.css";
import { Card } from "./Components/card/Card";
import { Home } from "./Components/home/Home";
import { CartProvider } from "react-use-cart";

function App() {
	return (
		<div className="App">
			<CartProvider>
				<Home />
				<Card />
			</CartProvider>
		</div>
	);
}

export default App;
