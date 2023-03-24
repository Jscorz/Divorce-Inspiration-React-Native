import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

const SuggestedArticles = () => {
	const randomNumberOne = Math.floor(Math.random() * (454 - 1) + 1);
	const randomNumberTwo = getRandomNumber();
	const randomNumberThree = getRandomNumber();
	const randomNumberFour = getRandomNumber();
	const randomNumberFive = getRandomNumber();
	const randomNumberSix = getRandomNumber();

	const [suggestedArticleOne, setSuggestedArticleOne] = useState();
	const [suggestedArticleTwo, setSuggestedArticleTwo] = useState();
	const [suggestedArticleThree, setSuggestedArticleThree] = useState();
	const [suggestedArticleFour, setSuggestedArticleFour] = useState();
	const [suggestedArticleFive, setSuggestedArticleFive] = useState();
	const [suggestedArticleSix, setSuggestedArticleSix] = useState();

	function getRandomNumber() {
		Math.floor(Math.random() * (454 - 1) + 1);
	}

	useEffect(() => {
		setSuggestedArticleOne(ARTICLES[randomNumberOne]);
		setSuggestedArticleTwo(ARTICLES[randomNumberTwo]);
		setSuggestedArticleThree(ARTICLES[randomNumberThree]);
		setSuggestedArticleFour(ARTICLES[randomNumberFour]);
		setSuggestedArticleFive(ARTICLES[randomNumberFive]);
		setSuggestedArticleSix(ARTICLES[randomNumberSix]);
	}, []);

	return (
		<View style={styles.outerContainer}>
			<Text>{suggestedArticleOne.linkText}</Text>
		</View>
	);
};

export default SuggestedArticles;

const styles = StyleSheet.create({
	outerContainer: {
		position: "absolute",
		top: "25%",
		bottom: "0%",
		zIndex: 50,
		backgroundColor: "white",
		width: "100%",
		minHeight: "160%",
		borderWidth: 4,
		borderColor: Colors.accent500,
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
});
