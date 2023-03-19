import { View, Text, StyleSheet, Animated } from "react-native";

const SuggestedArticles = () => {
	return (
		<View style={styles.outerContainer}>
			<Text>SuggestedArticles</Text>
		</View>
	);
};

export default SuggestedArticles;

const styles = StyleSheet.create({
	outerContainer: {
		position: "absolute",
		top: "60%",
		zIndex: 50,
	},
});
