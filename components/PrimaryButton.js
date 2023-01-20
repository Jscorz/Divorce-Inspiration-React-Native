import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				android_ripple={{ color: Colors.primary700 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		marginHorizontal: 36,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.accent500,
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
