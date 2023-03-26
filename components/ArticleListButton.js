import React from "react";
import { Pressable, Text, StyleSheet, Animated, Linking } from "react-native";
import Colors from "../constants/colors";

const ArticleListButton = ({ children }) => {
	return (
		<div>
			<Text>{children}</Text>
		</div>
	);
};

export default ArticleListButton;

const styles = StyleSheet.create({});
