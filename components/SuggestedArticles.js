import { LinearGradient } from "expo-linear-gradient";
import { useState, useRef, useEffect } from "react";
import {
	View,
	ScrollView,
	Pressable,
	Text,
	StyleSheet,
	Animated,
	ImageBackground,
	Easing,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

const SuggestedArticles = ({ onPress, resetQuotes }) => {
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

	const [articleOnePressed, setArticleOnePressed] = useState(false);
	const [articleTwoPressed, setArticleTwoPressed] = useState(false);
	const [articleThreePressed, setArticleThreePressed] = useState(false);
	const [articleFourPressed, setArticleFourPressed] = useState(false);
	const [articleFivePressed, setArticleFivePressed] = useState(false);
	const [articleSixPressed, setArticleSixPressed] = useState(false);

	const progress = useRef(new Animated.Value(0));

	function getRandomNumber() {
		return Math.floor(Math.random() * (454 - 1) + 1);
	}

	function ArticleOnePress() {
		resetQuotes();
		setArticleOnePressed(true);
	}
	function ArticleTwoPress() {
		resetQuotes();
		setArticleTwoPressed(true);
	}
	function ArticleThreePress() {
		resetQuotes();
		setArticleThreePressed(true);
	}
	function ArticleFourPress() {
		resetQuotes();
		setArticleFourPressed(true);
	}
	function ArticleFivePress() {
		resetQuotes();
		setArticleFivePressed(true);
	}
	function ArticleSixPress() {
		resetQuotes();
		setArticleSixPressed(true);
	}

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress.current, {
					toValue: 1,
					duration: 600,
					useNativeDriver: true,
					easing: Easing.linear,
				}),
			]),
			{ iterations: 1 }
		).start();
	}, []);

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
				<Animated.ScrollView
					style={[
						styles.articleContainer,
						{
							transform: [{ scale: progress.current }],
						},
					]}
				>
					{articleOnePressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => ArticleOnePress}
						>
							<Text>{firstTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={ArticleOnePress}
						>
							<Text>{firstTitle}</Text>
						</Pressable>
					)}
					{articleTwoPressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => setArticleTwoPressed(true)}
						>
							<Text>{secondTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={() => setArticleTwoPressed(true)}
						>
							<Text>{secondTitle}</Text>
						</Pressable>
					)}
					{articleThreePressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => setArticleThreePressed(true)}
						>
							<Text>{thirdTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={() => setArticleThreePressed(true)}
						>
							<Text>{thirdTitle}</Text>
						</Pressable>
					)}
					{articleFourPressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => setArticleFourPressed(true)}
						>
							<Text>{fourthTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={() => setArticleFourPressed(true)}
						>
							<Text>{fourthTitle}</Text>
						</Pressable>
					)}
					{articleFivePressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => setArticleFivePressed(true)}
						>
							<Text>{fifthTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={() => setArticleFivePressed(true)}
						>
							<Text>{fifthTitle}</Text>
						</Pressable>
					)}
					{articleSixPressed ? (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [
											styles.individualArticle,
											styles.pressed,
											styles.articlePressed,
									  ]
									: [styles.individualArticle, styles.articlePressed]
							}
							onPress={() => setArticleSixPressed(true)}
						>
							<Text>{sixthTitle}</Text>
						</Pressable>
					) : (
						<Pressable
							style={({ pressed }) =>
								pressed
									? [styles.individualArticle, styles.pressed]
									: styles.individualArticle
							}
							onPress={() => setArticleSixPressed(true)}
						>
							<Text>{sixthTitle}</Text>
						</Pressable>
					)}
					<View style={styles.iconContainer}>
						<FontAwesome
							name='window-close-o'
							size={60}
							color={Colors.gray500}
							onPress={onPress}
						/>
					</View>
				</Animated.ScrollView>
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
	pressed: {
		opacity: 0.65,
	},
	articlePressed: {
		opacity: 0.75,
	},
});
