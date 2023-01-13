import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import IndividualQuote from "./components/IndividualQuote";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
	const [welcomeBackIsOver, setWelcomeBackIsOver] = useState(false);

	let screen = <WelcomeScreen />;

	if (welcomeBackIsOver) {
		screen = <IndividualQuote />;
	}

	useEffect(() => {
		setTimeout(() => {
			setWelcomeBackIsOver(true);
		}, 5000);
	}, []);

	return (
		<View style={styles.container}>
			<SafeAreaView>{screen}</SafeAreaView>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
