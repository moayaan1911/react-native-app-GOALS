import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Alert,
  Pressable,
  Image,
  Linking,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleStartAddGoal() {
    setModalIsVisible(true);
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      setCourseGoals((previousText) => [
        ...previousText,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setModalIsVisible(false);
    }
    if (!enteredGoalText) {
      Alert.alert("Empty Goal", "Can't add empty goals", [
        { text: "OK", onPress: () => {} },
      ]);
    }
    setEnteredGoalText("");
  }
  function handleDeleteGoal(id) {
    setCourseGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id != id);
    });
  }
  function cancelGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.appContainer}>
      <Button onPress={handleStartAddGoal} color="black" title="Add New Goal" />
      {modalIsVisible && (
        <GoalInput
          onGoalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
          onAddGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          onCancelGoalHandler={cancelGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return (
              <GoalItem
                item={item.item.text}
                id={item.item.id}
                OnHandleDeleteGoal={handleDeleteGoal}
              />
            );
          }}
        />
      </View>
      <View>
        {!modalIsVisible && (
          <View style={styles.ayaan}>
            <Text>Created By Mohammad Ayaan Siddiqui</Text>
            <View style={styles.icons}>
              <Pressable
                onPress={() => {
                  Linking.openURL("https://github.com/moayaan1911");
                }}
              >
                <Image source={require("./assets/github.png")} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL("https://twitter.com/usdisshitcoin");
                }}
              >
                <Image source={require("./assets/twitter.png")} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL(
                    "https://www.linkedin.com/in/mohammad-ayaan-siddiqui-678564214/"
                  );
                }}
              >
                <Image source={require("./assets/linkedin.png")} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL("https://t.me/usdisshitcoin");
                }}
              >
                <Image source={require("./assets/telegram.png")} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL("https://www.instagram.com/moayaan_1911");
                }}
              >
                <Image source={require("./assets/insta.png")} />
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#B8D6F9",
  },
  goalsContainer: {
    flex: 5,
    color: "white",
  },
  ayaan: {
    textAlign: "center",
    alignItems: "center",
    margin: 10,
  },
  goalsList: {
    alignItems: "flex-start",
    backgroundColor: "1E3F64",
    textAlign: "center",
    marginTop: 20,
  },
  icons: {
    flexDirection: "row",
    margin: 5,
  },
});
