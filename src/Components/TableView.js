import React, { Component } from "react";
import axios from "axios";
import "../Css/TableView.css";

export default class TableView extends Component {
  state = {
    data: [],
    value: 5,
    done: false
  };
  componentDidMount() {
    axios.get(`http://api.jsonbin.io/b/5b893aa03ffac56f4bd7905a`).then(res => {
      this.setState({
        data: [...this.state.data, res.data.data],
        done: true
      });
    });
  }
  render() {
    return (
      <div className="contain1">
        <form class="form-inline mt-5" id="inLine">
          <div class="form-group ">
            <label className="ml-3 p-2">Add Keyword:</label>
            <input type="text" value="Enter Keyword" class="form-control fg" />
          </div>
          <div class="form-group ">
            <label className="p-2" for="atg">
              Assign to Group:
            </label>
            <input
              type="text"
              value="Group(Optional)"
              class="form-control fg"
              id="atg"
            />
          </div>

          <button class="btn btn-default btn3 ml-2">+ADD</button>

          <label className=" text-muted ml-auto mr-2" id="label">
            Show
          </label>
          <select
            className="form-control show mr-2"
            onChange={e => {
              this.setState({
                value: e.target.value
              });
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>25</option>
          </select>
          <label className="ml-2 text-muted mr-2" id="label">
            Entries
          </label>
        </form>

        {this.state.done ? (
          <table className="table table-borderless table-striped mytable mt-5">
            <thead>
              <tr>
                <th>
                  <center className="text-muted">Keywords</center>
                </th>
                <th>
                  <center className="text-muted">Position</center>
                </th>
                <th>
                  <center className="text-muted">Change</center>
                </th>
                <th>
                  <center className="text-muted">url</center>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data[0].slice(0, this.state.value).map(event => (
                <tr>
                  <td>{event.keyword}</td>
                  <td>{event.position}</td>
                  <td>{event.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}
