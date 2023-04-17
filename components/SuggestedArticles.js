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
	Linking,
	Platform,
	useWindowDimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
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

	function getRandomNumber() {
		return Math.floor(Math.random() * (454 - 1) + 1);
	}

	function ArticleOnePress() {
		resetQuotes();
		setArticleOnePressed(true);
		Linking.openURL(`${suggestedArticleOne.url}`);
	}
	function ArticleTwoPress() {
		resetQuotes();
		setArticleTwoPressed(true);
		Linking.openURL(`${suggestedArticleTwo.url}`);
	}
	function ArticleThreePress() {
		resetQuotes();
		setArticleThreePressed(true);
		Linking.openURL(`${suggestedArticleThree.url}`);
	}
	function ArticleFourPress() {
		resetQuotes();
		setArticleFourPressed(true);
		Linking.openURL(`${suggestedArticleFour.url}`);
	}
	function ArticleFivePress() {
		resetQuotes();
		setArticleFivePressed(true);
		Linking.openURL(`${suggestedArticleFive.url}`);
	}
	function ArticleSixPress() {
		resetQuotes();
		setArticleSixPressed(true);
		Linking.openURL(`${suggestedArticleSix.url}`);
	}

	const progress = useRef(new Animated.Value(-600));
	const opacityProgress = useRef(new Animated.Value(0));
	const { width, height } = useWindowDimensions();

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress.current, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
					easing: Easing.linear,
				}),
				Animated.timing(progress.current, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}),
			]),
			{ iterations: 1 }
		).start();
	}, []);

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(opacityProgress.current, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
					easing: Easing.linear,
				}),
				Animated.timing(opacityProgress.current, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}),
			]),
			{ iterations: 1 }
		).start();
	}, []);

	return (
		<LinearGradient
			colors={[Colors.BlackLowOpacity, Colors.AnimatedSquareLowOpacity]}
			style={styles.outerContainerBackground}
		>
			<LinearGradient
				colors={[Colors.primary500, Colors.primary800]}
				style={height > 700 ? styles.outerContainer : styles.outerContainerSmall}
			>
				<ImageBackground
					source={require("../assets/images/modern-background.png")}
					resizeMode='stretch'
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					<Animated.ScrollView
						style={[
							styles.articleContainer,
							{
								transform: [{ translateY: progress.current }],
							},
							{ opacity: opacityProgress.current },
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
								onPress={ArticleOnePress}
								android_ripple={{ color: Colors.primary700 }}
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
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleTwoPress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleTwoPress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleThreePress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleThreePress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleFourPress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleFourPress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleFivePress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleFivePress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleSixPress}
								android_ripple={{ color: Colors.primary700 }}
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
								onPress={ArticleSixPress}
								android_ripple={{ color: Colors.primary700 }}
							>
								<Text>{sixthTitle}</Text>
							</Pressable>
						)}
						<View style={styles.iconContainer}>
							<AntDesign
								name='closecircle'
								size={50}
								color={Colors.gray500}
								onPress={onPress}
							/>
						</View>
					</Animated.ScrollView>
				</ImageBackground>
			</LinearGradient>
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
		top: "20%",
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
	outerContainerSmall: {
		position: "absolute",
		top: "20%",
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
	outerContainerBackground: {
		position: "absolute",
		top: "-70%",
		bottom: "0%",
		zIndex: 30,
		backgroundColor: Colors.primary700,
		width: "100%",
		minHeight: "160%",
	},
	articleContainer: {
		width: "100%",
		minHeight: "160%",
		borderWidth: Platform.OS === "ios" ? 4 : 0,
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
		borderRadius: 16,
		marginVertical: 6,
		marginHorizontal: 6,
		overflow: "hidden",
	},
	iconContainer: {
		alignSelf: "center",
		marginTop: 4,
	},
	pressed: {
		opacity: 0.65,
	},
	articlePressed: {
		opacity: 0.75,
	},
});
