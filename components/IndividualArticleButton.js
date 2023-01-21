import { useState, useEffect } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

function IndividualArticleButton() {
	const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
	const [suggestedArticle, setSuggestedArticle] = useState();

	useEffect(() => {
		setSuggestedArticle(ARTICLES[randomNumber]);
	}, []);

	function consoleLogger() {
		console.log(suggestedArticle);
	}

	return (
		<View>
			<Pressable>
				<Text onPress={consoleLogger}>
					View an article that may help you to unlock more quotes
				</Text>
			</Pressable>
		</View>
	);
}

export default IndividualArticleButton;

const styles = StyleSheet.create({});
