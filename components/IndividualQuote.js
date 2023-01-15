import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QUOTES } from "../data/QuoteData";
import { FontAwesome } from "@expo/vector-icons";
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
				<View style={styles.iconContainer}>
					<FontAwesome name='quote-right' size={48} color={Colors.primary800} />
				</View>
				{/* <Text onPress={consoleLogger}>click here</Text> */}
				<Text style={styles.quoteText}>{quoteOfTheDay}</Text>
				<Text style={styles.authorText}>- {authorOfTheDay}</Text>
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
		borderRadius: 16,
		padding: 30,
		margin: 10,
	},
	quoteContainer: {
		alignItems: "center",
		justifyContent: "space-between",
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
		borderLeftColor: "transparent",
		alignSelf: "flex-end",
		marginBottom: -80,
		marginRight: -30,
		transform: [{ rotate: "150deg" }],
		zIndex: -10,
	},
	iconContainer: {
		alignSelf: "flex-start",
	},
	quoteText: {
		fontSize: 32,
		padding: 8,
	},
	authorText: {
		fontSize: 16,
		alignSelf: "flex-end",
		color: Colors.secondary500,
	},
});
