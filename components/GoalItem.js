import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View key={props.item} style={styles.goalItem}>
      <Pressable
        onPress={props.OnHandleDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: "#89B6EC" }}
      >
        <Text style={styles.goalText}>{props.item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalText: {
    color: "white",
    textShadowColor: "black",
    padding: 8,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#186ED7",
  },
});
