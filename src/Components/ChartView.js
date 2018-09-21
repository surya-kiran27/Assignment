import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../Css/ChartView.css";
import axios from "axios";
export default class ChartView extends Component {
  state = {
    chartData: {
      labels: [
        "2018-01-23",
        "2018-01-24",
        "2018-01-25",
        "2018-01-26",
        "2018-01-27",
        "2018-01-28",
        "2018-01-29"
      ],
      datasets: [{}]
    },
    done: false,
    value: "Search"
  };
  componentDidMount() {
    axios.get(`https://api.jsonbin.io/b/5b893b00db948c68635a04eb`).then(res => {
      const x = Object.values(res.data).map(xy => xy.points);
      const labels = Object.keys(res.data);
      let id = 0;
      const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CC0000"];

      x.map(y => {
        this.setState({
          chartData: {
            ...this.state.chartData,
            datasets: [
              ...this.state.chartData.datasets,
              {
                pointBackgroundColor: "#000",
                pointBorderColor: "#fff",
                label: labels[id],
                data: y,
                pointRadius: 4,
                pointHoverRadius: 5,
                fill: false,
                borderColor: colors[id]
              }
            ]
          }
        });
        id += 1;
      });
      this.setState({ done: true });

      console.log(labels);
    });
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="contain">
        <nav className="navbar">
          <div className="input-group ">
            <input
              className="form-control py-2 border-right-0 "
              onChange={this.handleChange}
              type="search"
              value={this.state.value}
              placeholder="Search"
            />
            <span className="input-group-append">
              <div className="input-group-text bg-transparent">
                <i className="far far -search" />
              </div>
            </span>
          </div>
          <div className="btn btn1">
            <i className="fa fa-2x fa-user" aria-hidden="true" />
          </div>
          <div className="btn btn2">
            <i className="fa fa-2x fa-bell" aria-hidden="true" />
          </div>
          <div className="btn btn2">
            <i className="fa fa-2x fa-gear" aria-hidden="true" />
          </div>
        </nav>
        {this.state.done ? (
          <Line
            id="chart"
            data={this.state.chartData}
            width={200}
            height={40}
            options={{
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: true
                    }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: true
                    }
                  }
                ]
              },
              legend: {
                display: true,
                position: "bottom"
              },

              maintainAspectRatio: true
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
