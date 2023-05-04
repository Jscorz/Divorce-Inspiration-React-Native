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
	const randomNumberSeven = getRandomNumber();
	const randomNumberEight = getRandomNumber();

	const [suggestedArticleOne, setSuggestedArticleOne] = useState(ARTICLES[randomNumberOne]);
	const [suggestedArticleTwo, setSuggestedArticleTwo] = useState(ARTICLES[randomNumberTwo]);
	const [suggestedArticleThree, setSuggestedArticleThree] = useState(ARTICLES[randomNumberThree]);
	const [suggestedArticleFour, setSuggestedArticleFour] = useState(ARTICLES[randomNumberFour]);
	const [suggestedArticleFive, setSuggestedArticleFive] = useState(ARTICLES[randomNumberFive]);
	const [suggestedArticleSix, setSuggestedArticleSix] = useState(ARTICLES[randomNumberSix]);
	const [suggestedArticleSeven, setSuggestedArticleSeven] = useState(ARTICLES[randomNumberSeven]);
	const [suggestedArticleEight, setSuggestedArticleEight] = useState(ARTICLES[randomNumberEight]);

	const [firstTitle, setFirstTitle] = useState(suggestedArticleOne.linkText);
	const [secondTitle, setSecondTitle] = useState(suggestedArticleTwo.linkText);
	const [thirdTitle, setThirdTitle] = useState(suggestedArticleThree.linkText);
	const [fourthTitle, setFourthTitle] = useState(suggestedArticleFour.linkText);
	const [fifthTitle, setFifthTitle] = useState(suggestedArticleFive.linkText);
	const [sixthTitle, setSixthTitle] = useState(suggestedArticleSix.linkText);
	const [seventhTitle, setSeventhTitle] = useState(suggestedArticleSeven.linkText);
	const [eighthTitle, setEighthTitle] = useState(suggestedArticleEight.linkText);

	const [articleOnePressed, setArticleOnePressed] = useState(false);
	const [articleTwoPressed, setArticleTwoPressed] = useState(false);
	const [articleThreePressed, setArticleThreePressed] = useState(false);
	const [articleFourPressed, setArticleFourPressed] = useState(false);
	const [articleFivePressed, setArticleFivePressed] = useState(false);
	const [articleSixPressed, setArticleSixPressed] = useState(false);
	const [articleSevenPressed, setArticleSevenPressed] = useState(false);
	const [articleEightPressed, setArticleEightPressed] = useState(false);

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
	function ArticleSevenPress() {
		resetQuotes();
		setArticleSevenPressed(true);
		Linking.openURL(`${suggestedArticleSeven.url}`);
	}
	function ArticleEightPress() {
		resetQuotes();
		setArticleEightPressed(true);
		Linking.openURL(`${suggestedArticleEight.url}`);
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

	let backgroundStyle = styles.outerContainerBackground;

	if ((height > 700) & (width < 800)) {
		backgroundStyle = styles.outerContainerBackgroundBig;
	}

	return (
		<LinearGradient
			colors={[Colors.BlackLowOpacity, Colors.AnimatedSquareLowOpacity]}
			style={backgroundStyle}
		>
			<LinearGradient
				colors={[Colors.primary500, Colors.primary800]}
				style={height > 1000 ? styles.outerContainer : styles.outerContainerSmall}
			>
				<ImageBackground
					source={require("../assets/images/modern-background.png")}
					resizeMode='stretch'
					style={styles.rootScreen}
					imageStyle={height > 1000 ? styles.backgroundImageBig : styles.backgroundImage}
				>
					{height < 1000 && (
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
									<Text style={styles.articleText}>{firstTitle}</Text>
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
									<Text style={styles.articleText}>{firstTitle}</Text>
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
									<Text style={styles.articleText}>{secondTitle}</Text>
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
									<Text style={styles.articleText}>{secondTitle}</Text>
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
									<Text style={styles.articleText}>{thirdTitle}</Text>
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
									<Text style={styles.articleText}>{thirdTitle}</Text>
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
									<Text style={styles.articleText}>{fourthTitle}</Text>
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
									<Text style={styles.articleText}>{fourthTitle}</Text>
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
									<Text style={styles.articleText}>{fifthTitle}</Text>
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
									<Text style={styles.articleText}>{fifthTitle}</Text>
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
									<Text style={styles.articleText}>{sixthTitle}</Text>
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
									<Text style={styles.articleText}>{sixthTitle}</Text>
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
					)}
					{height > 1000 && (
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
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleOnePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{firstTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleOnePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{firstTitle}</Text>
								</Pressable>
							)}

							{articleTwoPressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleTwoPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{secondTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleTwoPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{secondTitle}</Text>
								</Pressable>
							)}
							{articleThreePressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleThreePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{thirdTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleThreePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{thirdTitle}</Text>
								</Pressable>
							)}
							{articleFourPressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleFourPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{fourthTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleFourPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{fourthTitle}</Text>
								</Pressable>
							)}
							{articleFivePressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleFivePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{fifthTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleFivePress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{fifthTitle}</Text>
								</Pressable>
							)}
							{articleSixPressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleSixPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{sixthTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleSixPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{sixthTitle}</Text>
								</Pressable>
							)}
							{articleSevenPressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleSevenPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{seventhTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleSevenPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{seventhTitle}</Text>
								</Pressable>
							)}
							{articleEightPressed ? (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [
													styles.individualArticleBig,
													styles.pressed,
													styles.articlePressed,
											  ]
											: [styles.individualArticleBig, styles.articlePressed]
									}
									onPress={ArticleEightPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{eighthTitle}</Text>
								</Pressable>
							) : (
								<Pressable
									style={({ pressed }) =>
										pressed
											? [styles.individualArticleBig, styles.pressed]
											: styles.individualArticleBig
									}
									onPress={ArticleEightPress}
									android_ripple={{ color: Colors.primary700 }}
								>
									<Text style={styles.articleTextBig}>{eighthTitle}</Text>
								</Pressable>
							)}
							<View style={styles.iconContainerBig}>
								<AntDesign
									name='closecircle'
									size={100}
									color={Colors.gray500}
									onPress={onPress}
								/>
							</View>
						</Animated.ScrollView>
					)}
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
		height: 800,
	},
	backgroundImageBig: {
		opacity: 0.15,
		height: 1400,
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
		top: "30%",
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
	outerContainerBackgroundBig: {
		position: "absolute",
		top: "-110%",
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
		color: Colors.primary800,
		borderWidth: 2,
		borderColor: Colors.primary800,
		borderRadius: 16,
		marginVertical: 6,
		marginHorizontal: 6,
		overflow: "hidden",
	},
	individualArticleBig: {
		backgroundColor: Colors.accent500,
		padding: 20,
		color: Colors.primary800,
		borderWidth: 2,
		borderColor: Colors.primary800,
		borderRadius: 16,
		marginVertical: 12,
		marginHorizontal: 12,
		overflow: "hidden",
	},
	articleText: {
		color: Colors.DarkGrey,
	},
	articleTextBig: {
		fontSize: 22,
		color: Colors.DarkGrey,
	},
	iconContainer: {
		alignSelf: "center",
		marginTop: 4,
	},
	iconContainerBig: {
		alignSelf: "center",
		marginTop: 30,
	},
	pressed: {
		opacity: 0.65,
	},
	articlePressed: {
		opacity: 0.75,
	},
});
