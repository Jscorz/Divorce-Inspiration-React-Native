import { useState, useEffect, useRef } from "react";
import { Pressable, Text, StyleSheet, Animated, Linking } from "react-native";
import Colors from "../constants/colors";

const ArticlePageButton = ({ onPress }) => {
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
				<Text style={styles.buttonText}>Browse a Few Suggested Articles</Text>
			</Pressable>
		</Animated.View>
	);
};

export default ArticlePageButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		marginTop: 16,
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
