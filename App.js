import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  let [fontsLoad] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  }

  const handleTaskAdding = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const deleteTask = (index) => {
    let taskItemsCopy = [...taskItems];
    taskItemsCopy.splice(index, 1);
    setTaskItems(taskItemsCopy);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskWrapper}>
        <Text style={styles.mainTitle}>Today's Tasks</Text>
        <ScrollView
          style={styles.allItemsContainer}
          showsVerticalScrollIndicator={false}
        >
          {taskItems.map((item, index) => {
            if (item) {
              return (
                <View style={styles.allItems} key={index}>
                  <Text style={styles.itemText}>{item}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      deleteTask(index);
                    }}
                  >
                    <MaterialIcons name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>

      <KeyboardAvoidingView style={styles.addTaskContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Add a Task..."}
          autoCorrect={false}
          spellCheck={false}
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />

        <TouchableOpacity onPress={() => handleTaskAdding()}>
          <Ionicons name="add-circle-sharp" size={58} color="black" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Poppins_900Black_Italic",
    marginBottom: 20,
  },
  allItems: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25,
  },
  itemText: {
    maxWidth: "85%",
  },
  addTaskContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputStyle: {
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#C0C0C0",
  },
});
