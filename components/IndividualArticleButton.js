import { Pressable } from "react-native";
import { ARTICLES } from "../data/ArticleData";
import Colors from "../constants/colors";

function IndividualArticleButton() {
	return (
		<View>
			<Pressable>
				<Text>View an article that may help you to unlock more quotes</Text>
			</Pressable>
		</View>
	);
}

export default IndividualArticleButton;
