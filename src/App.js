import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import HomeTask from './Components/HomeTask';
import NewTask from './Components/NewTask';
import ProfileDrawer from './Components/ProfileDrawer';


export class App extends Component {


     constructor(props) {
            super(props);
            this.state = {userList: []};


        }

        componentDidMount() {
            fetch('https://taskplannerapifunc.azurewebsites.net/api/list-task?code=88TNpVcZRm7Onbxx5F8/TAX1/AiiXwWfdq57a50m6HoIobll4BtI1A==')
                .then(response => response.json())
                .then(data => {
                    let userList = [];
                    data.items.forEach(function (user) {
                        userList.push({ user
                        })
    
                    });
                    this.setState({userList: userList});
                });
        }


  render() {


  const LoginView = () => (
          <Login/>
      );

    const HomeView = () => (
        <HomeTask />
    );
    const DialogView = () => (
        <NewTask />
    );

    const ProfileView = () => (
        <ProfileDrawer />
    );

        return (
            <Router>
                <div className="App">
                 
                    <div>
                    <Route exact path="/" component={LoginView}/>
                    <Route exact path="/HomeTask" component={HomeView}/>
                    <Route exact path="/Dialog" component={DialogView}/>
                    <Route exact path="/Profile" component={ProfileView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;