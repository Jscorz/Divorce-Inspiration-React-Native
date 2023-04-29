import { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function AnimatedSquare() {
	const { height, width } = useWindowDimensions();
	const SIZE = 100;
	const progress = useRef(new Animated.Value(0)).current;
	const scale = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		Animated.loop(
			Animated.parallel([
				Animated.sequence([
					Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
					Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
				]),
				Animated.sequence([
					Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
					Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
				]),
			])
		).start();
	}, []);

	return (
		<Animated.View
			style={
				height > 1000
					? [
							styles.squareBig,
							{
								borderRadius: progress.interpolate({
									inputRange: [0.5, 0.7],
									outputRange: [SIZE / 4, SIZE / 2],
								}),
								opacity: progress,
								transform: [
									{ scale },
									{
										rotate: progress.interpolate({
											inputRange: [0.5, 1],
											outputRange: ["180deg", `360deg`],
										}),
									},
								],
							},
					  ]
					: [
							styles.square,
							{
								borderRadius: progress.interpolate({
									inputRange: [0.5, 1],
									outputRange: [SIZE / 4, SIZE / 2],
								}),
								opacity: progress,
								transform: [
									{ scale },
									{
										rotate: progress.interpolate({
											inputRange: [0.5, 1],
											outputRange: ["180deg", `360deg`],
										}),
									},
								],
							},
					  ]
			}
		></Animated.View>
	);
}

export default AnimatedSquare;

const styles = StyleSheet.create({
	square: {
		width: 100,
		height: 100,
		backgroundColor: Colors.AnimatedSquareLowOpacity,
		marginTop: 120,
	},
	squareBig: {
		width: 150,
		height: 150,
		backgroundColor: Colors.AnimatedSquareLowOpacity,
		marginTop: 170,
	},
});
