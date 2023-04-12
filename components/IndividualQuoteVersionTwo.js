import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { QUOTES } from "../data/QuoteData";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import PrimaryButton from "./PrimaryButton";
import IndividualArticleButton from "./IndividualArticleButton";
import ArticlePageButton from "./ArticlePageButton";
import SuggestedArticles from "./SuggestedArticles";

function IndividualQuoteTwo() {
	let randomNumber = Math.floor(Math.random() * (553 - 1) + 1);
	const [authorOfTheDay, setAuthorOfTheDay] = useState();
	const [quoteOfTheDay, setQuoteOfTheDay] = useState();
	const [numberOfQuotesViewed, setNumberOfQuotesViewed] = useState(1);
	const [noMoreQuotesToBeViewable, setNoMoreQuotesToBeViewable] = useState(false);
	const [suggestedArticleModalOpen, setSuggestedArticleModalOpen] = useState(false);

	const { width, height } = useWindowDimensions();
	let quoteFontSize = 24;

	if (height < 700) {
		quoteFontSize: 6;
	}

	const quoteStyle = {
		fontSize: quoteFontSize,
	};

	const progress = useRef(new Animated.Value(0));

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress.current, {
					toValue: 1.1,
					duration: 700,
					useNativeDriver: true,
				}),
				Animated.timing(progress.current, {
					toValue: 1,
					duration: 700,
					useNativeDriver: true,
				}),
			]),
			{ iterations: 1 }
		).start();
	}, []);

	useEffect(() => {
		setQuoteOfTheDay(QUOTES[randomNumber].actualQuote);
		setAuthorOfTheDay(QUOTES[randomNumber].author);
	}, []);

	function getAnotherQuote() {
		if (numberOfQuotesViewed < 3) {
			randomNumber = Math.floor(Math.random() * (553 - 1) + 1);
			setQuoteOfTheDay(QUOTES[randomNumber].actualQuote);
			setAuthorOfTheDay(QUOTES[randomNumber].author);
			setNumberOfQuotesViewed(numberOfQuotesViewed + 1);
		}
	}

	function resetNumberOfQuotesViewed() {
		setNumberOfQuotesViewed(1);
		setNoMoreQuotesToBeViewable(true);
	}

	function toggleSuggestedArticlesModal() {
		setSuggestedArticleModalOpen(!suggestedArticleModalOpen);
	}

	return (
		<View>
			<View style={styles.rootContainer}>
				<Animated.View
					style={[styles.quoteContainer, { transform: [{ scale: progress.current }] }]}
				>
					<View style={styles.iconContainer}>
						{height > 700 && (
							<FontAwesome name='quote-right' size={70} color={Colors.primary600} />
						)}
						{height < 700 && (
							<FontAwesome name='quote-right' size={40} color={Colors.primary600} />
						)}
					</View>
					<Text style={[styles.quoteText, quoteStyle]}>{quoteOfTheDay}</Text>
				</Animated.View>
				<View style={styles.bottomOfQuoteContainer}></View>
			</View>
			<View>
				<Text style={styles.authorText}>- {authorOfTheDay}</Text>
			</View>
			<View style={styles.anotherQuoteButtonContainer}>
				<PrimaryButton
					onPress={getAnotherQuote}
					numberOfQuotesViewed={numberOfQuotesViewed}
				>
					Get Another Dose of Inspiration
				</PrimaryButton>
			</View>
			{numberOfQuotesViewed === 3 && noMoreQuotesToBeViewable === false && (
				<View style={styles.IndividualArticleButtonContainer}>
					<IndividualArticleButton onPress={resetNumberOfQuotesViewed} />
				</View>
			)}

			<ArticlePageButton onPress={toggleSuggestedArticlesModal} />

			{/* {suggestedArticleModalOpen && (
				<SuggestedArticles
					onPress={toggleSuggestedArticlesModal}
					resetQuotes={resetNumberOfQuotesViewed}
					visible={suggestedArticleModalOpen}
					options={{ type: "slide", from: "top" }}
					duration={500}
				/>
			)} */}

			<SuggestedArticles
				onPress={toggleSuggestedArticlesModal}
				resetQuotes={resetNumberOfQuotesViewed}
				visible={suggestedArticleModalOpen}
				options={{ type: "slide", from: "top" }}
				duration={500}
			/>
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
		backgroundColor: Colors.offWhite,
		borderRadius: 96,
		minHeight: 400,
		padding: 30,
		paddingTop: 400,
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
		borderBottomColor: Colors.offWhite,
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
		padding: 24,
	},
	authorText: {
		fontSize: 24,
		fontWeight: "bold",
		alignSelf: "flex-start",
		color: Colors.accent500,
		marginTop: 70,
		marginLeft: 50,
	},
	anotherQuoteButtonContainer: {
		marginTop: 44,
	},
	IndividualArticleButtonContainer: {
		marginTop: 44,
	},
});
