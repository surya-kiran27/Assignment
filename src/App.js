import React, { Component } from "react";
import TableView from "./Components/TableView";
import "./App.css";
import SideNav from "./Components/SideNav";
import ChartView from "./Components/ChartView";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div>
        <ChartView />
        <TableView />

        <SideNav />
      </div>
    );
  }
}

export default App;
