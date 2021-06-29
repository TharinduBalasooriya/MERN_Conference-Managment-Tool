import React  from "react";
import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import AdminLogin from './component/adminlogin/login.component'
import AdminDash from './component/adminDashboard/admin.component'
import ukeynotes from "./component/keynoteComponent/keynoteUserView";
import MangKeynote from "./component/keynoteComponent/manageKeynote";
import NewKeynote from "./component/keynoteComponent/AddKeyNote";
import EditKeynote from "./component/keynoteComponent/editKeynote";
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

                        <Route  path="/u-keynotes" component={ukeynotes}></Route>
                        <Route  path="/mng-keynotes" component={MangKeynote}></Route>
                        <Route  path="/new-keynotes" component={NewKeynote}></Route>
                        <Route  path="/edit-keynotes/:id" component={EditKeynote}></Route>

                    </Switch>


                </Router>
            </div>
        );
    }
}
