import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import moment from "moment";

function GoalInPut(props) {
  //it will receive every props passed on to it (visible, onAddGoal, and onCancel)
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [enteredDateText, setEnteredDateText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function dateInputHandler(enteredText) {
    setEnteredDateText(enteredText);
  }

  function isValidDate(enteredText) {
    return moment(enteredText, "YYYY-MM-DD", true).isValid();
  }

  function addGoalHandler() {
    if (!isValidDate(enteredDateText)) {
      Alert.alert(
        "Wrong Date Format",
        "Please Enter the Date in YYYY-MM-DD Format"
      );
      return console.log("not valid");
    }
    props.onAddGoal(enteredGoalText, enteredDateText); //parent인 app으로가서 onAddGoal을 (entererGoalText)으로 실행시킨다
    setEnteredGoalText("");
    setEnteredDateText("");
  }
  function onCancelHandler() {
    setEnteredGoalText("");
    setEnteredDateText("");
    {
      props.onCancel();
    }
  }
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Modal visible={props.visible} animationType="fade">
          <View style={styles.inputContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/goal.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Set Your Goal Here"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />

            <Text style={styles.text}>EndDate:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="YYYY-MM-DD"
              onChangeText={dateInputHandler}
              value={enteredDateText}
              keyboardType="number-pad"
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  onPress={addGoalHandler}
                  color="#2E8B57"
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={onCancelHandler}
                  color="#FF0000"
                />
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default GoalInPut;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFEFD5",
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 300,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "95%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 14,
    marginTop: 25,
    marginBottom: 8,
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
});
