import React from "react";
import { Render } from "../render/Render";
import data from "../../data/Data.js";
import './Home.scss';

export const Home = () => {
	return (
		<div className="container">
			<h1>Кош келипсиз🗽🌝!</h1>
			<section className="section1">
				<div className="div1">
					{data.productData.map((item, index) => {
						return (
							<Render
								img={item.img}
								title={item.title}
								pop={item.pop}
								price={item.price}
								key={index}
								el={item}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};
