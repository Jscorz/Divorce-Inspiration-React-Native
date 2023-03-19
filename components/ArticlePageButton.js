import { Pressable, Text, StyleSheet, Animated, Linking } from "react-native";
import Colors from "../constants/colors";

const ArticlePageButton = () => {
	return (
		<Animated.View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
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
		marginHorizontal: 36,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.accent600,
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
