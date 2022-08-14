import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";

export default function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <Text style={styles.ayaan}>Created by Mohammad Ayaan Siddiqui</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={props.onGoalInputHandler}
          value={props.enteredGoalText}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={props.onAddGoalHandler}
              color="black"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="cancel"
              onPress={props.onCancelGoalHandler}
              color="black"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#186ED7",
    padding: 20,
    backgroundColor: "#A2C9F7",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#186ED7",
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 7,
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    width: "50%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  ayaan: {
    marginBottom: 10,
    color: "#1F71D1",
  },
});
