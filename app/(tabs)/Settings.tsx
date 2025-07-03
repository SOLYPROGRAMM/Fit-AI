import { StyleSheet, Text, View } from "react-native";

export default function Trainings() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Fit-AI!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});