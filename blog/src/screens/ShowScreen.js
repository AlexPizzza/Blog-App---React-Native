import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { id } = route.params;

  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);
  
  return (
   <View>
     <Text>{blogPost.title}</Text>
     <Text>{blogPost.content}</Text>
   </View>
  );
};

const styles = StyleSheet.create({

});

export default ShowScreen;