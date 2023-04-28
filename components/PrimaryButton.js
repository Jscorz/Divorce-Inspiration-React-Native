import { View, Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress, numberOfQuotesViewed }) {
	const { width, height } = useWindowDimensions();

	return (
		<View
			style={
				numberOfQuotesViewed === 3
					? [styles.buttonOuterContainer, styles.quoteLimitReached]
					: styles.buttonOuterContainer
			}
		>
			{height < 850 && (
				<Pressable
					style={({ pressed }) =>
						pressed
							? [styles.buttonInnerContainer, styles.pressed]
							: styles.buttonInnerContainer
					}
					onPress={onPress}
					android_ripple={{ color: Colors.primary700 }}
				>
					<Text style={styles.buttonText}>{children}</Text>
				</Pressable>
			)}
			{height > 850 && (
				<Pressable
					style={({ pressed }) =>
						pressed
							? [styles.buttonInnerContainerBig, styles.pressed]
							: styles.buttonInnerContainerBig
					}
					onPress={onPress}
					android_ripple={{ color: Colors.primary700 }}
				>
					<Text style={styles.buttonTextBig}>{children}</Text>
				</Pressable>
			)}
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: Colors.accent500,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginHorizontal: 36,
		borderRadius: 28,
		elevation: 2,
	},
	buttonInnerContainerBig: {
		backgroundColor: Colors.accent500,
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginHorizontal: 140,
		borderRadius: 28,
		elevation: 2,
	},
	buttonText: {
		color: Colors.primary800,
		textAlign: "center",
	},
	buttonTextBig: {
		color: Colors.primary800,
		textAlign: "center",
		fontSize: 16,
	},
	pressed: {
		opacity: 0.75,
	},
	quoteLimitReached: {
		opacity: 0.5,
	},
});
