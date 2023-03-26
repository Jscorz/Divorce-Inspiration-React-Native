import { useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

const SuggestedArticles = () => {
	const randomNumberOne = getRandomNumber();
	const randomNumberTwo = getRandomNumber();
	const randomNumberThree = getRandomNumber();
	const randomNumberFour = getRandomNumber();
	const randomNumberFive = getRandomNumber();
	const randomNumberSix = getRandomNumber();

	const [suggestedArticleOne, setSuggestedArticleOne] = useState(ARTICLES[randomNumberOne]);
	const [suggestedArticleTwo, setSuggestedArticleTwo] = useState(ARTICLES[randomNumberTwo]);
	const [suggestedArticleThree, setSuggestedArticleThree] = useState(ARTICLES[randomNumberThree]);
	const [suggestedArticleFour, setSuggestedArticleFour] = useState(ARTICLES[randomNumberFour]);
	const [suggestedArticleFive, setSuggestedArticleFive] = useState(ARTICLES[randomNumberFive]);
	const [suggestedArticleSix, setSuggestedArticleSix] = useState(ARTICLES[randomNumberSix]);

	const [firstTitle, setFirstTitle] = useState(suggestedArticleOne.linkText);
	const [secondTitle, setSecondTitle] = useState(suggestedArticleTwo.linkText);
	const [thirdTitle, setThirdTitle] = useState(suggestedArticleThree.linkText);
	const [fourthTitle, setFourthTitle] = useState(suggestedArticleFour.linkText);
	const [fifthTitle, setFifthTitle] = useState(suggestedArticleFive.linkText);
	const [sixthTitle, setSixthTitle] = useState(suggestedArticleSix.linkText);

	function getRandomNumber() {
		return Math.floor(Math.random() * (454 - 1) + 1);
	}

	return (
		<View style={styles.outerContainer}>
			<Text style={styles.individualArticle}>{firstTitle}</Text>
			<Text style={styles.individualArticle}>{secondTitle}</Text>
			<Text style={styles.individualArticle}>{thirdTitle}</Text>
			<Text style={styles.individualArticle}>{fourthTitle}</Text>
			<Text style={styles.individualArticle}>{fifthTitle}</Text>
			<Text style={styles.individualArticle}>{sixthTitle}</Text>
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
		backgroundColor: Colors.primary700,
		width: "100%",
		minHeight: "160%",
		borderWidth: 4,
		borderColor: Colors.accent500,
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
	individualArticle: {
		backgroundColor: Colors.accent500,
		padding: 4,
		fontSize: 14,
		color: Colors.primary800,
		borderWidth: 2,
		borderColor: Colors.primary800,
		marginBottom: 6,
	},
});
