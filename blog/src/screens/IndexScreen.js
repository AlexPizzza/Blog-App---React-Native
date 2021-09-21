import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';

const IndexScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
    }, [, isFocused]);

  return (
   <View>
     <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id, name: item.title })}>
                <View style={styles.rowStyle}>
                    <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather name="trash" style={styles.iconStyle}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            );
        }}
     />
   </View>
  );
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    titleStyle: {
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 24,
    },
});

export default IndexScreen;