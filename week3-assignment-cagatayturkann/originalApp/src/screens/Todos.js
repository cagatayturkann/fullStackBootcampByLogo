//importing necessary libraries etc.
import React, { useEffect,useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import api from "../services/apis";

const Todos = () => {
  const [data, setData] = useState([]);  //getting todos data from an api

  const getTodos = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await api.get("/todos", config); //api variable defined inside services/apis.js
    setData(res.data);
  };

  useEffect(() => {      
    getTodos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList //showing upcoming datas in list view
        data={data}
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

//styles for elements on the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    color: "#fff",
    backgroundColor: "#5D9CEC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Todos;
