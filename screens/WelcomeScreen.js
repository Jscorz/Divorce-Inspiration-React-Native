import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function WelcomeScreen() {
	return (
		<View style={styles.rootContainer}>
			<Text>Welcome back!</Text>
			<View>
				<Text>Daily Quote Coming Shortly</Text>
			</View>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary500,
		margin: 4,
	},
});
