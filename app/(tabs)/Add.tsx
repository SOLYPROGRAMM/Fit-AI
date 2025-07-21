import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add() {
    return (
        <SafeAreaView style={styles.fullScreen}>
            <StatusBar backgroundColor="#d9d3ce" barStyle="dark-content" />
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to Fit-AI!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: "#d9d3ce",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        color: "#41331b",
    },
});