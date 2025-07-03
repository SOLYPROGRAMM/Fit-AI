import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const renderContent = () => {
    switch (selectedPeriod) {
      case 'today':
        return (
          <>
            <View style={styles.view}>
              <Text>Content for Today - Item 1</Text>
            </View>
          </>
        );
      case 'yesterday':
        return (
          <>
            <View style={styles.view}>
              <Text>Content for Yesterday - Item A</Text>
            </View>
          </>
        );
      case 'week':
        return (
          <>
            <View style={styles.view}>
              <Text>Content for This Week - Overview</Text>
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.timebuttons}>
        <Pressable
          onPress={() => setSelectedPeriod('today')}
          style={({ pressed }) => [
            styles.links,
            selectedPeriod === 'today' && styles.activeLink,
            pressed && styles.pressedLink,
          ]}
        >
          <Text style={[styles.linkText, selectedPeriod === 'today' && styles.activeLinkText]}>Today</Text>
          {selectedPeriod === 'today' && <View style={styles.activePeriodIndicator} />}
        </Pressable>

        <Pressable
          onPress={() => setSelectedPeriod('yesterday')}
          style={({ pressed }) => [
            styles.links,
            selectedPeriod === 'yesterday' && styles.activeLink,
            pressed && styles.pressedLink,
          ]}
        >
          <Text style={[styles.linkText, selectedPeriod === 'yesterday' && styles.activeLinkText]}>Yesterday</Text>
          {selectedPeriod === 'yesterday' && <View style={styles.activePeriodIndicator} />}
        </Pressable>

        <Pressable
          onPress={() => setSelectedPeriod('week')}
          style={({ pressed }) => [
            styles.links,
            selectedPeriod === 'week' && styles.activeLink,
            pressed && styles.pressedLink,
          ]}
        >
          <Text style={[styles.linkText, selectedPeriod === 'week' && styles.activeLinkText]}>Week</Text>
          {selectedPeriod === 'week' && <View style={styles.activePeriodIndicator} />}
        </Pressable>
      </View>

      {renderContent()}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 10,
    flex: 1,
  },
  view: {
    display: "flex",
    padding: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center", 
    borderWidth: 1,
    borderColor: "#302f2c", 
    borderRadius: 10, 
    backgroundColor: "#efece3",
  },
  timebuttons: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    marginBottom: 10,
  },
  links: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  linkText: {
    fontSize: 18,
    color: "#302f2c",
    fontWeight: "500",
  },
  activeLink: {
  },
  activeLinkText: {
    color: "#302f2c",
    fontWeight: "bold",
  },
  pressedLink: {
    opacity: 0.7,
  },
  activePeriodIndicator: {
    position: 'absolute',
    bottom: -8,
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#302f2c',
  },
});
