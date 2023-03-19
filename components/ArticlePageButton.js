import { Pressable, Text, StyleSheet, Animated, Linking } from "react-native";
import Colors from "../constants/colors";

const ArticlePageButton = () => {
	return (
		<Animated.View>
			<Pressable>
				<Text>View Suggested Articles</Text>
			</Pressable>
		</Animated.View>
	);
};

export default ArticlePageButton;

const styles = StyleSheet.create({});
