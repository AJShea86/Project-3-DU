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
						<h1>Matches</h1>
						<Card style={{ width: "250px", padding: "5px 10px 10px 20px" }}>
							<h2>{match.name}</h2>

							<h4>Age: {match.age}</h4>
							<h4>{match.location}</h4>
							<p>{match.bio}</p>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default MatchesPage;
