import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";

const FitAiIcon = require("../../assets/images/fitaiicon.png");

export default function RootLayout() {
  let colorScheme = useColorScheme();

  // Helper component to render screen name in headerRight
  const HeaderRightTitle = ({ title }: { title: string }) => (
    <View style={{ paddingRight: 15 }}>
      <Text style={{ color: colorScheme === 'dark' ? "#efece3" : "#41331b", fontWeight: "600", fontSize: 25 }}>
        {title}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? "#efece3" : "#41331b",
        tabBarStyle: styles.tabBar,
        headerStyle: {
          backgroundColor: "#d9d3ce",
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />,
          headerRight: () => <HeaderRightTitle title="Home" />,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={25} />
          ),
        }}
      />

      <Tabs.Screen
        name="Analytics"
        options={{
          headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />,
          headerRight: () => <HeaderRightTitle title="Analytics" />,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "podium" : "podium-outline"} color={color} size={25} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />,
          headerRight: () => <HeaderRightTitle title="Settings" />,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={25} />
          ),
        }}
      />

      <Tabs.Screen
        name="Add"
        options={{
          headerTitle: () => <Image source={FitAiIcon} alt="Fit AI" style={styles.headerImageStyle} />,
          headerRight: () => <HeaderRightTitle title="Add" />,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "add-circle" : "add-circle-outline"} color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#d9d3ce",
    borderTopColor: "transparent",
    borderTopWidth: 0,
    elevation: 0,
  },
  headerImageStyle: {
    width: 80,
    height: 31,
    resizeMode: "contain",
  },
});
