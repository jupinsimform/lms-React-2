import React from "react";
import Card from "./components/Card";
import Dates from "./components/Dates";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Dates />
          <List />
          <AddTodo />
        </Card>
      </>
    );
  }
}
export default App;
