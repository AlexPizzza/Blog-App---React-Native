import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather, EvilIcons } from "@expo/vector-icons";
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: "center"
      }} initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={IndexScreen} 
          options={({ navigation }) => ({ 
            title: "Blog List", 
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30}/>
              </TouchableOpacity>
            ) 
          })} 
        />
        <Stack.Screen name="Show" component={ShowScreen} 
        options={({ route, navigation }) => ({ 
          title: route.params.name + " - " + route.params.id,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id })}>
              <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
          )
          })} 
        />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: "Create blog" }} />
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: "Edit blog" }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default () => {
  return <BlogProvider>
      <App />
    </BlogProvider>
}
