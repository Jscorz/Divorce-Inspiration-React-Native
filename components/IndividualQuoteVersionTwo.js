import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QUOTES } from "../data/QuoteData";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import PrimaryButton from "./PrimaryButton";

function IndividualQuoteTwo() {
	const randomNumber = Math.floor(Math.random() * (553 - 1) + 1);
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
		<View>
			<View style={styles.rootContainer}>
				<View style={styles.quoteContainer}>
					<View style={styles.iconContainer}>
						<FontAwesome name='quote-right' size={70} color={Colors.primary600} />
					</View>
					{/* <Text onPress={consoleLogger}>click here</Text> */}
					<Text style={styles.quoteText}>{quoteOfTheDay}</Text>
				</View>
				<View style={styles.bottomOfQuoteContainer}></View>
			</View>
			<View>
				<Text style={styles.authorText}>- {authorOfTheDay}</Text>
			</View>
			<View style={styles.anotherQuoteButtonContainer}>
				<PrimaryButton>Get Another Dose of Inspiration</PrimaryButton>
			</View>
		</View>
	);
}

export default IndividualQuoteTwo;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		minWidth: "100%",
		backgroundColor: "white",
		borderRadius: 96,
		minHeight: 400,
		padding: 30,
		paddingTop: 300,
		marginTop: -500,
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
		marginRight: 40,
		transform: [{ rotate: "280deg" }],
		zIndex: -10,
	},
	iconContainer: {
		alignSelf: "center",
	},
	quoteText: {
		fontSize: 32,
		padding: 24,
	},
	authorText: {
		fontSize: 24,
		fontWeight: "bold",
		alignSelf: "flex-start",
		color: Colors.accent500,
		marginTop: 50,
		marginLeft: 50,
	},
	anotherQuoteButtonContainer: {
		marginTop: 44,
	},
});
