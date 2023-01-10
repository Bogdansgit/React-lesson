import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.scss";

function Post () {
	const BASE_URL = 'https://api.punkapi.com/v2/beers';
	const [beer, setBeer] = useState([]);

	const { id } = useParams();

	const loadBeers = () => {
		axios
			.get(BASE_URL, {
				params: {ids: id}
			})
			.then((res) => {
				setBeer(res.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	useEffect (() => {
		loadBeers();
	}, []);

	return (
		
		<div className="single-post">
			<div className="container">
				{beer.map((el) => (
					<div key={el.id}>
						<h1>{el.name}</h1>
						<img src={el.image_url} alt={el.name} />
						<p>{el.description}</p>
					</div>
				))}
			</div>
		</div>
	)
};

export default Post;