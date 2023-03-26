import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ImageBackground } from "react-native";
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
		<LinearGradient colors={[Colors.primary500, Colors.primary800]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./assets/images/modern-background.png")}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.container}>
					<View>{screen}</View>
					{/* <WelcomeScreen /> */}
					<StatusBar style='auto' />
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: Colors.primary500,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
