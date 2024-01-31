import React from "react";
import { useCart } from "react-use-cart";
import "./Card.scss";
export const Card = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) return <h1>Ассаламу алейкум🤝</h1>;
	return (
		<section className="section2">
			<div className="disContentRender">
				<div className="content1">
					<h5>
						Cart ({totalUniqueItems}) total Items: ({totalItems})
					</h5>
					<table className="table">
						<tbody className="tdody">
							{items.map((item, index) => {
								return (
									<tr className="tr" key={index}>
										<div className="div">
											<td className="td1">
												<img className="img1" src={item.img} alt="logo" />
											</td>
										</div>
										<div className="contents2">
											<td>{item.title}</td>
											<td>{item.price}</td>
											<td>Quantity ({item.quantity})</td>
											<td className="tdbutton">
												<button
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}>
													-
												</button>
												<button
													onClick={() =>
														updateItemQuantity(item.id, item.quantity + 1)
													}>
													+
												</button>
												<button onClick={() => removeItem(item.id)}>
													Remove Item
												</button>
											</td>
										</div>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="content2">
					<div className="textprice">
						<h2>Total Price {cartTotal}</h2>
					</div>
					<div className="buttons">
						<button onClick={() => emptyCart()}>Clear cart</button>
					</div>
				</div>
			</div>
		</section>
	);
};
