import { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { QUOTES } from "../data/QuoteData";

function IndividualQuote() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [authorOfTheDay, setAuthorOfTheDay] = useState();
	const [quoteOfTheDay, setQuoteOfTheDay] = useState();

	useLayoutEffect(() => {
		setRandomNumber(Math.random() * 10);
		setQuoteOfTheDay(QUOTES[randomNumber].actualQuote);
		setAuthorOfTheDay(QUOTES[randomNumber].author);
	}, []);

	return (
		<View>
			<Text>{authorOfTheDay}</Text>
			<Text>{quoteOfTheDay}</Text>
		</View>
	);
}

export default IndividualQuote;
