import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import IndividualQuote from "./components/IndividualQuote";
import Colors from "./constants/colors";
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
		<SafeAreaView style={styles.container}>
			{/* <SafeAreaView>{screen}</SafeAreaView> */}
			<WelcomeScreen />
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.primary500,
	},
});
