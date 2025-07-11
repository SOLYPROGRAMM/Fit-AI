import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet, useColorScheme } from "react-native";

const FitAiIcon = require("../../assets/images/fitaiicon.png");

export default function RootLayout() {

  let colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: colorScheme === 'dark' ? "#efece3" : "#302f2b", 
            headerPressColor: "transparent", 
            tabBarStyle: styles.tabBar, 
            headerStyle: {
              backgroundColor: "transparent"
            }, 
            headerShadowVisible: false,
        }} 
    >
      <Tabs.Screen name="Home" options={{
        headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />, 
        tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={25} />, 
      }}/>

      <Tabs.Screen name="Add" options={{
        headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />, 
        tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "add-circle" : "add-circle-outline"} color={color} size={30} />,
      }}/>

      <Tabs.Screen name="Settings" options={{
        headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />, 
        tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={25} />, 
      }}/>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    borderTopWidth: 0,
    elevation: 0, 
  }, 
  headerImageStyle: {
    width: 80,
    height: 31,
    resizeMode: 'contain', 
  }
});