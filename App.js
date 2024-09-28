const { View, Text, StyleSheet } = require("react-native");

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
