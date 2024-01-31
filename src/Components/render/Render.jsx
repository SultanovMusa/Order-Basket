import React from "react";
import { useCart } from "react-use-cart";
import "./Render.scss";

export const Render = ({ img, title, pop, price, key, el }) => {
	const { addItem } = useCart();
	return (
		<div className="container2">
			<div className="disDiv" key={key}>
				<img src={img} alt="img" />
				<div className="div2">
					<h5>{title}</h5>
					<h5>💲 {price}</h5>
					<p>{pop}</p>
					<button onClick={() => addItem(el)}>Add to Card</button>
				</div>
			</div>
		</div>
	);
};
