import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View, Text, StyleSheet, Animated, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
		<LinearGradient
			colors={[Colors.primary500, Colors.primary800]}
			style={styles.outerContainer}
		>
			<ImageBackground
				source={require("../assets/images/modern-background.png")}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<View style={styles.articleContainer}>
					<Text style={styles.individualArticle}>{firstTitle}</Text>
					<Text style={styles.individualArticle}>{secondTitle}</Text>
					<Text style={styles.individualArticle}>{thirdTitle}</Text>
					<Text style={styles.individualArticle}>{fourthTitle}</Text>
					<Text style={styles.individualArticle}>{fifthTitle}</Text>
					<Text style={styles.individualArticle}>{sixthTitle}</Text>
					<View style={styles.iconContainer}>
						<FontAwesome name='window-close-o' size={60} color={Colors.secondary500} />
					</View>
				</View>
			</ImageBackground>
		</LinearGradient>
	);
};

export default SuggestedArticles;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
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
	articleContainer: {
		width: "100%",
		minHeight: "160%",
		borderWidth: 4,
		borderColor: Colors.accent500,
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
	individualArticle: {
		backgroundColor: Colors.accent500,
		padding: 10,
		fontSize: 14,
		color: Colors.primary800,
		borderWidth: 2,
		borderColor: Colors.primary800,
		borderRadius: 12,
		marginVertical: 6,
		marginHorizontal: 6,
		overflow: "hidden",
	},
	iconContainer: {
		alignSelf: "center",
	},
});
