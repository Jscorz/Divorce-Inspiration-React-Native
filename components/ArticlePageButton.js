import { useState, useEffect, useRef } from "react";
import { Pressable, Text, StyleSheet, Animated, Linking, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

const ArticlePageButton = ({ onPress }) => {
	const { width, height } = useWindowDimensions();

	// const progress = useRef(new Animated.Value(0));

	// useEffect(() => {
	// 	Animated.loop(
	// 		Animated.sequence([
	// 			Animated.timing(progress.current, {
	// 				toValue: 1.2,
	// 				duration: 1000,
	// 				useNativeDriver: true,
	// 			}),
	// 			Animated.timing(progress.current, {
	// 				toValue: 1,
	// 				duration: 1000,
	// 				useNativeDriver: true,
	// 			}),
	// 		]),
	// 		{ iterations: 1 }
	// 	).start();
	// }, []);

	return (
		<Animated.View
			// style={[styles.buttonOuterContainer, { transform: [{ scale: progress.current }] }]}
			style={styles.buttonOuterContainer}
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
					<Text style={styles.buttonText}>Browse a Few Helpful Articles</Text>
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
					<Text style={styles.buttonTextBig}>Browse a Few Helpful Articles</Text>
				</Pressable>
			)}
		</Animated.View>
	);
};

export default ArticlePageButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		marginTop: 16,
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
