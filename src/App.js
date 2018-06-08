import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import 'bulma/css/bulma.css'

class App extends Component {
  state = {
      persons: [
          {name: 'Max', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Jake', age: 26}
      ],
      showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
            {name: newName, age: 28},
            {name: 'Manu', age: 29},
            {name: 'Jake', age: 27}
        ]
    })
  };

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Max', age: 28},
              {name: event.target.value, age: 29},
              {name: 'Jake', age: 26}
          ]
      })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
      let persons = null;
      if (this.state.showPersons) {
          persons = (
              <div>
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}/>
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      click = {this.switchNameHandler.bind(this, 'Ritz')}
                      changed = {this.nameChangedHandler}
                  >My Hobbies: Racing</Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}/>
              </div>
          );
      }
    return (
      <div className="App">
          <a className="button is-primary"
             onClick={this.togglePersonsHandler}>Toggle Persons</a>
          {/*{
              this.state.showPersons ?
                  <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click = {this.switchNameHandler.bind(this, 'Ritz')}
                        changed = {this.nameChangedHandler}
                    >My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                  </div> : null
          }*/}
          {persons}
      </div>
    );
  }
}

export default App;
