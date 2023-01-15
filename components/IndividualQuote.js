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
			<View style={styles.quoteContainer}>
				{/* <Text onPress={consoleLogger}>click here</Text> */}
				<Text>{quoteOfTheDay}</Text>
				<Text>- {authorOfTheDay}</Text>
			</View>
			<View style={styles.bottomOfQuoteContainer}></View>
		</View>
	);
}

export default IndividualQuote;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		backgroundColor: "white",
		borderRadius: 8,
		padding: 48,
		margin: 4,
	},
	quoteContainer: {
		alignItems: "center",
	},
	bottomOfQuoteContainer: {
		width: 0,
		height: 0,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderTopWidth: 0,
		borderRightWidth: 45,
		borderBottomWidth: 90,
		borderLeftWidth: 45,
		borderTopColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: "white",
		// borderBottomColor: "red",
		borderLeftColor: "transparent",
		position: "absolute",
		bottom: 0,
		right: 0,
		top: 118,
		transform: [{ rotate: "150deg" }],
	},
});
