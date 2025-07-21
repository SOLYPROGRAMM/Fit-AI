import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeAreaView } from "react-native-safe-area-context";

const data = {
  cal: { today: 1500 },
  kcal: { today: 450 },
  startvalues: {
    cal: 2000,
    kcal: 500,
  },
};

export default function Home() {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <StatusBar backgroundColor="#d9d3ce" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardGroupWrapper}>
          <View style={styles.rowWrapper}>
            <View style={styles.card}>
              <CircularProgress
                value={Math.min(data.cal.today, data.startvalues.cal)}
                activeStrokeWidth={14}
                inActiveStrokeWidth={10}
                inActiveStrokeOpacity={0.2}
                radius={60}
                duration={1000}
                maxValue={data.startvalues.cal}
                activeStrokeColor="#41331b"
                inActiveStrokeColor="#716241"
              />
              <Text style={styles.cardValue}>
                {data.cal.today} / {data.startvalues.cal}
              </Text>
              <Text style={styles.cardLabel}>Calories eaten 🍱</Text>
            </View>

            <View style={styles.card}>
              <CircularProgress
                value={Math.min(data.kcal.today, data.startvalues.kcal)}
                activeStrokeWidth={14}
                inActiveStrokeWidth={10}
                inActiveStrokeOpacity={0.2}
                radius={60}
                duration={1000}
                maxValue={data.startvalues.kcal}
                activeStrokeColor="#41331b"
                inActiveStrokeColor="#716241"
              />
              <Text style={styles.cardValue}>
                {data.kcal.today} / {data.startvalues.kcal}
              </Text>
              <Text style={styles.cardLabel}>Calories burned 🔥</Text>
            </View>
          </View>

          <View style={styles.cardFullWidth}>
            <Text style={styles.cardTitle}>Today's Trainings 🏋️‍♀️</Text>

            <View style={styles.trainingRow}>
              <Text style={styles.trainingType}>💪 Strength</Text>
              <Text style={styles.trainingTime}>45 min</Text>
              <Text style={styles.trainingKcal}>300 kcal</Text>
            </View>

            <View style={styles.trainingRow}>
              <Text style={styles.trainingType}>🏃‍♂️ Cardio</Text>
              <Text style={styles.trainingTime}>30 min</Text>
              <Text style={styles.trainingKcal}>400 kcal</Text>
            </View>

            <View style={styles.trainingRow}>
              <Text style={styles.trainingType}>🧘 Yoga</Text>
              <Text style={styles.trainingTime}>60 min</Text>
              <Text style={styles.trainingKcal}>200 kcal</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#d9d3ce",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    marginTop: 20, 
    margin: 7, 
  },
  cardGroupWrapper: {
    gap: 10,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#bebeae",
    borderColor: "#302f2c",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15, 
    elevation: 5,
  },
  cardFullWidth: {
    backgroundColor: "#bebeae",
    borderColor: "#302f2c",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginTop: 7,
    elevation: 5,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "600",
    color: "#302f2c",
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 20,
    color: "#302f2c",
    marginTop: 4,
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#302f2c",
    marginBottom: 15,
    textAlign: "center",
  },
  trainingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#302f2c",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: "#e8e6dd",
    elevation: 2,
  },
  trainingType: {
    flex: 2,
    fontSize: 18,
    color: "#302f2c",
  },
  trainingTime: {
    flex: 1,
    fontSize: 18,
    color: "#302f2c",
    textAlign: "center",
  },
  trainingKcal: {
    flex: 1,
    fontSize: 18,
    color: "#302f2c",
    textAlign: "right",
  },
});