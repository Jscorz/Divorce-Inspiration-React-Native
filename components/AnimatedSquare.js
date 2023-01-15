import { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function AnimatedSquare() {
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
			// {iterations:3}
		).start();
	}, []);

	return (
		<Animated.View
			style={[
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
								outputRange: [`${Math.PI}(deg)`, `${2 * Math.PI}(deg)`],
							}),
						},
					],
				},
			]}
		></Animated.View>
	);
}

export default AnimatedSquare;

const styles = StyleSheet.create({
	square: {
		width: 100,
		height: 100,
		backgroundColor: Colors.secondary500,
		marginTop: 120,
	},
});
