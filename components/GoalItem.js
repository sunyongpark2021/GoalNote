import { StyleSheet, View, Text, itemData, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#FFFAFA" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.toRow}>
          <Text style={styles.Text}>{props.goalText} </Text>
          <Text style={styles.Text}>{props.dateText}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#cd7171",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  Text: {
    color: "white",
    padding: 8,
  },
  toRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
