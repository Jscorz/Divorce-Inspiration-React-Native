import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function WelcomeScreen() {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.welcomeText}>Welcome back!</Text>
			<View>
				<Text style={styles.subheaderText}>Daily Quote Coming Shortly</Text>
			</View>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary500,
		margin: 4,
	},
	welcomeText: {
		fontSize: 48,
		color: Colors.accent500,
	},
	subheaderText: {
		fontSize: 24,
		color: "white",
	},
});
