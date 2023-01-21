import { useState, useEffect, useRef, useCallback } from "react";
import { View, Pressable, Text, StyleSheet, Animated } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

function IndividualArticleButton({ onPress }) {
	const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
	const [suggestedArticle, setSuggestedArticle] = useState();

	const progress = useRef(new Animated.Value(0));

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress.current, {
					toValue: 1.2,
					duration: 1000,
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

	function consoleLogger() {
		console.log(suggestedArticle);
	}

	return (
		<Animated.View
			style={[styles.buttonOuterContainer, { transform: [{ scale: progress.current }] }]}
		>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.primary700 }}
			>
				<Text style={styles.buttonText}>
					View an article that may help you to unlock more quotes
				</Text>
			</Pressable>
		</Animated.View>
	);
}

export default IndividualArticleButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		marginHorizontal: 36,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.accent500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: Colors.primary800,
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
