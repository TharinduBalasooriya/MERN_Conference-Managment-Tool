import React  from "react";
import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import AdminLogin from './component/adminlogin/login.component'
import AdminDash from './component/adminDashboard/admin.component'
import HomePage from './page/homePage/homePage.component';
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/admin" component={AdminLogin}></Route>
                        <Route  path="/admin-dash" component={AdminDash}></Route>
                        <Route exact path="/" component={HomePage}></Route>
                    </Switch>


                </Router>
            </div>
        );
    }
}
