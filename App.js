import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Colors from "./constants/colors";
import QuoteDisplayScreen from "./screens/QuoteDisplayScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
	const [welcomeBackIsOver, setWelcomeBackIsOver] = useState(false);

	let screen = <WelcomeScreen />;

	if (welcomeBackIsOver) {
		screen = <QuoteDisplayScreen />;
	}

	useEffect(() => {
		setTimeout(() => {
			setWelcomeBackIsOver(true);
		}, 5000);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{/* <View>{screen}</View> */}
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
