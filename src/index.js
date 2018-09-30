import React from "react";
import ReactDOM from "react-dom";

const NameEditor = props => (
  <React.Fragment>
    <label>Nickname: </label>
    <input value={props.value} onChange={e => props.onChange(e.target.value)} />
  </React.Fragment>
);

const ControlPanel = props => (
  <React.Fragment>
    <h3>Control Panel</h3>
    <NameEditor value={props.name} onChange={props.onNameChange} />
  </React.Fragment>
);

const UserPage = props => (
  <React.Fragment>
    <h3>User Page</h3>
    <p>Hi {props.name}!</p>
  </React.Fragment>
);

class App extends React.Component {
  state = {
    name: "WarsawJS"
  };
  render() {
    return (
      <React.Fragment>
        <UserPage name={this.state.name} />
        <ControlPanel
          name={this.state.name}
          onNameChange={name => this.setState({ name })}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
