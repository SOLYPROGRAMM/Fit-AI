import { useState } from "react";
import { Alert, Pressable, ScrollView, StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(false);
  const [locationAccessEnabled, setLocationAccessEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const [privacyModeEnabled, setPrivacyModeEnabled] = useState(false);
  const [autoUpdatesEnabled, setAutoUpdatesEnabled] = useState(true);
  const [backupEnabled, setBackupEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(false);
  const [locationTrackingEnabled, setLocationTrackingEnabled] = useState(true);

  const clearData = () => {
    Alert.alert(
      "Clear Data",
      "Are you sure you want to clear all data?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => console.log("Data cleared") },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <StatusBar backgroundColor="#d9d3ce" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>

        {[
          { label: "Enable Notifications", state: notificationsEnabled, setter: setNotificationsEnabled },
          { label: "Dark Mode", state: darkModeEnabled, setter: setDarkModeEnabled },
          { label: "Auto Sync Data", state: autoSyncEnabled, setter: setAutoSyncEnabled },
          { label: "Location Access", state: locationAccessEnabled, setter: setLocationAccessEnabled },
          { label: "Sound", state: soundEnabled, setter: setSoundEnabled },
          { label: "Vibration", state: vibrationEnabled, setter: setVibrationEnabled },
          { label: "Privacy Mode", state: privacyModeEnabled, setter: setPrivacyModeEnabled },
          { label: "Auto Updates", state: autoUpdatesEnabled, setter: setAutoUpdatesEnabled },
          { label: "Backup Data", state: backupEnabled, setter: setBackupEnabled },
          { label: "Share Analytics", state: analyticsEnabled, setter: setAnalyticsEnabled },
          { label: "Email Notifications", state: emailNotificationsEnabled, setter: setEmailNotificationsEnabled },
          { label: "Location Tracking", state: locationTrackingEnabled, setter: setLocationTrackingEnabled },
        ].map(({ label, state, setter }) => (
          <View key={label} style={styles.card}>
            <Text style={styles.label}>{label}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#41331b" }}
              thumbColor={state ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={() => setter(prev => !prev)}
              value={state}
            />
          </View>
        ))}

        <Pressable style={styles.clearButton} onPress={clearData}>
          <Text style={styles.clearButtonText}>Clear All Data</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#d9d3ce",
  },
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#41331b",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#bebeae",
    borderColor: "#302f2c",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: "#41331b",
  },
  clearButton: {
    marginTop: 25,
    backgroundColor: "#41331b",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#d9d3ce",
    fontSize: 18,
    fontWeight: "600",
  },
});
