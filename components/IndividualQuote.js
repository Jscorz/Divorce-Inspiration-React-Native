import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QUOTES } from "../data/QuoteData";
import Colors from "../constants/colors";

function IndividualQuote() {
	const randomNumber = Math.floor(Math.random() * 454 + 1);
	const [authorOfTheDay, setAuthorOfTheDay] = useState();
	const [quoteOfTheDay, setQuoteOfTheDay] = useState();

	useEffect(() => {
		setQuoteOfTheDay(QUOTES[randomNumber].actualQuote);
		setAuthorOfTheDay(QUOTES[randomNumber].author);
	}, []);

	function consoleLogger() {
		console.log(QUOTES.length, randomNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Text onPress={consoleLogger}>click here</Text>
			<Text>{quoteOfTheDay}</Text>
			<Text>{authorOfTheDay}</Text>
		</View>
	);
}

export default IndividualQuote;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary500,
		margin: 4,
	},
});
