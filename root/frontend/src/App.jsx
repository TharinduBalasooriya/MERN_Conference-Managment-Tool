import React  from "react";
import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import AdminLogin from './component/adminlogin/login.component'
import AdminDash from './component/adminDashboard/admin.component'
import "bootstrap/dist/css/bootstrap.min.css";
import WorkshopMenu from './component/workshopComponent/workshopMenu'
import AddWorkshopProposal from './component/workshopComponent/addWorkshopProposal';
import ProposalList from './component/workshopComponent/workshopproposals.list';
//import WorkshopList from './component/workshopComponent/workshop.list';


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
                        <Route  path="/admin-dash/workshop" component={WorkshopMenu}></Route>
                        <Route path="/user/add-proposal" component={AddWorkshopProposal}></Route>
                        <Route path="/workshop/proposal-list" component={ProposalList}></Route>
                        <Route path="/workshop/workshop-list" component={ProposalList}></Route>
                    </Switch>


                </Router>
            </div>
        );
    }
}
