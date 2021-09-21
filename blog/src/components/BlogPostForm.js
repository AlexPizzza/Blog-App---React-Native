import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues = { title: "", content: "" } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
        <Text style={styles.labelStyle}>Enter Title:</Text>
        <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.labelStyle}>Enter Content:</Text>
        <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} value={content} onChangeText={(text) => setContent(text)}/>
        <Button 
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
        />
    </View>
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

export default BlogPostForm;