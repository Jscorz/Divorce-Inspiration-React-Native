import { View, Text, StyleSheet, Animated } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

const SuggestedArticles = () => {
	const randomNumber = Math.floor(Math.random() * (454 - 1) + 1);
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
		top: "25%",
		bottom: "0%",
		zIndex: 50,
		backgroundColor: "white",
		width: "100%",
		minHeight: "160%",
		borderWidth: 4,
		borderColor: Colors.accent500,
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
	},
});
