import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeAreaView } from "react-native-safe-area-context";

const data = {
  cal: { today: 800 },
  kcal: { today: 700 },
  startvalues: { cal: 1200, kcal: 1000 },
};

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("yesterday");
  const [showAllTrainings, setShowAllTrainings] = useState(false);
  const [clickedPoint, setClickedPoint] = useState(null);

  const allTrainings = [
    { type: "💪 Strength", duration: "30 min", kcal: "300 kcal" },
    { type: "🏃 Run", duration: "5 km", kcal: "250 kcal" },
    { type: "🧘 Yoga", duration: "40 min", kcal: "200 kcal" },
    { type: "🚴 Cycling", duration: "10 km", kcal: "350 kcal" },
  ];
  const displayedTrainings = showAllTrainings
    ? allTrainings
    : allTrainings.slice(0, 2);

  const renderChart = (label: string) => (
    <View style={styles.chartWrapper}>
      <Text style={styles.cardTitle}>{label}</Text>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [400, 500, 700, 600, 800, 750, 650],
              color: () => "#41331b",
              strokeWidth: 2,
            },
          ],
        }}
        width={340}
        height={220}
        yLabelsOffset={22}
        chartConfig={{
          backgroundGradientFrom: "#bebeae", 
          backgroundGradientTo: "#bebeae",
          color: () => "#41331b",
          labelColor: () => "#41331b",
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#716241",
          },
          propsForBackgroundLines: {
            stroke: "transparent", 
          },
        }}
        bezier
        style={{
          borderRadius: 10,
        }}
        onDataPointClick={(data) => {
          setClickedPoint({
            value: data.value,
            x: data.x,
            y: data.y,
          });
        }}
      />
    </View>
  );

  const renderContent = () => {
    switch (selectedPeriod) {
      case "yesterday":
        return (
          <View style={styles.mainContentWrapper}>
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
                <Text style={styles.cardTitle}>Yesterday's Trainings 🏋️‍♀️</Text>

                <View style={styles.trainingRowWithBorder}>
                  <Text style={styles.trainingText}>💪 Strength</Text>
                  <Text style={styles.trainingText}>30 min</Text>
                  <Text style={styles.trainingText}>300 kcal</Text>
                </View>

                <View style={styles.trainingRowWithBorder}>
                  <Text style={styles.trainingText}>🏃‍♂️ Run</Text>
                  <Text style={styles.trainingText}>10 km</Text>
                  <Text style={styles.trainingText}>400 kcal</Text>
                </View>
              </View>
            </View>
          </View>
        );

      case "week":
        return (
          <View style={styles.mainContentWrapper}>
            <View style={styles.cardFullWidth}>
              <Text style={styles.cardTitle}>Trainer Feedback 🗣️</Text>
              <Text style={styles.feedbackText}>
                Great job keeping a consistent calorie burn this week! Try to get
                more protein in next week 💪
              </Text>
            </View>

            {renderChart("Weekly Progress 📈")}

            <View style={styles.cardFullWidth}>
              <Text style={styles.cardTitle}>This Week's Trainings 🏋️</Text>
              {displayedTrainings.map((t, i) => (
                <View key={i} style={styles.trainingRowWithBorder}>
                  <Text style={styles.trainingText}>{t.type}</Text>
                  <Text style={styles.trainingText}>{t.duration}</Text>
                  <Text style={styles.trainingText}>{t.kcal}</Text>
                </View>
              ))}
              {allTrainings.length > 2 && (
                <Pressable onPress={() => setShowAllTrainings((prev) => !prev)}>
                  <Text style={styles.moreText}>
                    {showAllTrainings ? "Show Less ▲" : "Show More ▼"}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        );

      case "month":
        return (
          <View style={styles.mainContentWrapper}>
            <View style={styles.cardFullWidth}>
              <Text style={styles.cardTitle}>Trainer Feedback 🗣️</Text>
              <Text style={styles.feedbackText}>
                Impressive monthly consistency! Focus on balancing cardio and
                strength more evenly 🧘‍♂️
              </Text>
            </View>

            {renderChart("Monthly Progress 📊")}

            <View style={styles.cardFullWidth}>
              <Text style={styles.cardTitle}>Monthly Trainings 📅</Text>
              {displayedTrainings.map((t, i) => (
                <View key={i} style={styles.trainingRowWithBorder}>
                  <Text style={styles.trainingText}>{t.type}</Text>
                  <Text style={styles.trainingText}>{t.duration}</Text>
                  <Text style={styles.trainingText}>{t.kcal}</Text>
                </View>
              ))}
              {allTrainings.length > 2 && (
                <Pressable onPress={() => setShowAllTrainings((prev) => !prev)}>
                  <Text style={styles.moreText}>
                    {showAllTrainings ? "Show Less ▲" : "Show More ▼"}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <StatusBar backgroundColor="#d9d3ce" barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.timebuttons}>
            {["yesterday", "week", "month"].map((period) => (
              <Pressable
                key={period}
                onPress={() => setSelectedPeriod(period)}
                style={({ pressed }) => [
                  styles.links,
                  selectedPeriod === period && styles.activeLink,
                  pressed && styles.pressedLink,
                ]}
              >
                <Text
                  style={[
                    styles.linkText,
                    selectedPeriod === period && styles.activeLinkText,
                  ]}
                >
                  {period[0].toUpperCase() + period.slice(1)}
                </Text>
                {selectedPeriod === period && (
                  <View style={styles.activePeriodIndicator} />
                )}
              </Pressable>
            ))}
          </View>

          {renderContent()}
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
  timebuttons: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    marginBottom: 10,
  },
  links: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minWidth: 80,
  },
  linkText: {
    fontSize: 20,
    color: "#41331b",
    fontWeight: "400",
  },
  activeLink: {},
  activeLinkText: {
    color: "#41331b",
    fontWeight: "500",
  },
  pressedLink: {
    opacity: 0.7,
  },
  activePeriodIndicator: {
    position: "absolute",
    bottom: -8,
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#302f2c",
  },
  mainContentWrapper: {
    margin: 10,
    marginTop: 20,
  },
  cardGroupWrapper: {
    paddingHorizontal: 5,
    gap: 10,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    elevation: 5,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
    color: "#41331b",
    textAlign: "center",
  },
  trainingRowWithBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#302f2c",
    borderRadius: 8,
    backgroundColor: "#e8e6dd",
    marginBottom: 8,
  },
  trainingText: {
    fontSize: 18,
    color: "#41331b",
  },
  chartWrapper: {
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "#bebeae",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#302f2c",
  },
  feedbackText: {
    fontSize: 16,
    color: "#302f2c",
    textAlign: "center",
    marginTop: 10,
  },
  moreText: {
    color: "#41331b",
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#302f2c",
  },
  cardLabel: {
    fontSize: 20,
    color: "#41331b",
    marginTop: 4,
  },
});
