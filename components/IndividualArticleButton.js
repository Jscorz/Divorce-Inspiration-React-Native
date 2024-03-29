import { useState, useEffect, useRef } from "react";
import { Pressable, Text, StyleSheet, Animated, Linking, useWindowDimensions } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

function IndividualArticleButton({ onPress }) {
	const randomNumber = Math.floor(Math.random() * (454 - 1) + 1);
	const [suggestedArticle, setSuggestedArticle] = useState();

	const { width, height } = useWindowDimensions();

	const progress = useRef(new Animated.Value(0));

	function OpenLinkInBrowser() {
		onPress(), Linking.openURL(`${suggestedArticle.url}`);
	}

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress.current, {
					toValue: 1.2,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(progress.current, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
			]),
			{ iterations: 1 }
		).start();
	}, []);

	useEffect(() => {
		setSuggestedArticle(ARTICLES[randomNumber]);
	}, []);

	return (
		<Animated.View
			style={[styles.buttonOuterContainer, { transform: [{ scale: progress.current }] }]}
		>
			{height < 1000 && (
				<Pressable
					style={({ pressed }) =>
						pressed
							? [styles.buttonInnerContainer, styles.pressed]
							: styles.buttonInnerContainer
					}
					onPress={onPress}
					android_ripple={{ color: Colors.primary700 }}
				>
					<Text
						style={styles.buttonText}
						onPress={OpenLinkInBrowser}
						// onPress={consoleLogger}
					>
						View an article that may help you to unlock more quotes
					</Text>
				</Pressable>
			)}
			{height > 1000 && (
				<Pressable
					style={({ pressed }) =>
						pressed
							? [styles.buttonInnerContainerBig, styles.pressed]
							: styles.buttonInnerContainerBig
					}
					onPress={onPress}
					android_ripple={{ color: Colors.primary700 }}
				>
					<Text
						style={styles.buttonTextBig}
						onPress={OpenLinkInBrowser}
						// onPress={consoleLogger}
					>
						View an article that may help you to unlock more quotes
					</Text>
				</Pressable>
			)}
		</Animated.View>
	);
}

export default IndividualArticleButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.accent500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		marginHorizontal: 36,
		borderRadius: 28,
		elevation: 2,
	},
	buttonInnerContainerBig: {
		backgroundColor: Colors.accent500,
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginHorizontal: 140,
		borderRadius: 28,
		elevation: 2,
	},
	buttonText: {
		color: Colors.primary800,
		textAlign: "center",
	},
	buttonTextBig: {
		color: Colors.primary800,
		textAlign: "center",
		fontSize: 16,
	},
	pressed: {
		opacity: 0.75,
	},
});
