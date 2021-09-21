import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
   <BlogPostForm onSubmit={(title, content) => {
       addBlogPost(title, content, () => {
           navigation.navigate("Home");
       })
   }} />
  );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;