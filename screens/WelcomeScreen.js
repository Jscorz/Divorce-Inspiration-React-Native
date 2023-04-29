import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import AnimatedSquare from "../components/AnimatedSquare";
import Colors from "../constants/colors";

function WelcomeScreen() {
	const { height, width } = useWindowDimensions();

	return (
		<View style={styles.rootContainer}>
			<Text style={height > 1000 ? styles.welcomeTextBig : styles.welcomeText}>
				Welcome back!
			</Text>
			<View style={styles.subheaderTextContainer}>
				<Text style={height > 1000 ? styles.subheaderTextBig : styles.subheaderText}>
					Get Ready For
				</Text>
				<Text style={height > 1000 ? styles.subheaderTextBig : styles.subheaderText}>
					Your Daily Inspiration
				</Text>
			</View>
			<AnimatedSquare />
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: Colors.primary500,
		margin: 4,
	},
	welcomeText: {
		fontSize: 48,
		color: Colors.accent500,
	},
	welcomeTextBig: {
		fontSize: 64,
		color: Colors.accent500,
	},
	subheaderText: {
		fontSize: 24,
		color: "white",
	},
	subheaderTextBig: {
		fontSize: 36,
		color: "white",
	},
	subheaderTextContainer: {
		alignItems: "center",
	},
});
