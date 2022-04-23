import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";

const MatchesPage = () => {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		axios
			.get(`/matches/${localStorage.getItem("current_user_id")}`)
			.then(function (response) {
				setMatches(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div
			style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
		>
			{matches.map((match) => {
				return (
					<div>
						<h1>{match.name}</h1>
						<Card body>
							<h3>Age: {match.age}</h3>
							<h3>Location: {match.location}</h3>
							<p>Bio: {match.bio}</p>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default MatchesPage;
