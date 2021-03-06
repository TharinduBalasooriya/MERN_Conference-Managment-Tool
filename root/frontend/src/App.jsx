import React  from "react";
import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import AdminLogin from './component/adminlogin/login.component'
import AdminDash from './component/adminDashboard/admin.component'
import ukeynotes from "./component/keynoteComponent/keynoteUserView";
import MangKeynote from "./component/keynoteComponent/manageKeynote";
import NewKeynote from "./component/keynoteComponent/AddKeyNote";
import EditKeynote from "./component/keynoteComponent/editKeynote";
import HomePage from './page/homePage/homePage.component';
import UserRegistration from './component/userRegistration/userRegistration.component';
import ContactUs from './component/contactUs/contactUspage.component';
import "bootstrap/dist/css/bootstrap.min.css";
import AcceptedWorkshopList from './component/workshopComponent/acceptedWorkshopList'
import ProposalList from './component/workshopComponent/workshopproposals.list';

import TemplateDownload from "./component/workshopComponent/template.download";
import AddProposal from "./component/workshopComponent/addProposal";


import TemplateDownload from './component/templateDownloadPage/template.component'
//import WorkshopList from './component/workshopComponent/workshop.list';
import Addpaper from './component/researchComponent/addRpaper'

import RPaperHome from './component/resarchPaperMgmt/rpaperhome'
import ReviewPaper from "./component/resarchPaperMgmt/reviewPaper";
import ContactUsPage from "./component/contactUs/contactUspage.component";




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
                        <Route  path="/template" component={TemplateDownload}></Route>
                        <Route  path="/addPaper" component={Addpaper}></Route>
                        <Route  path="/reviewPaper/:id" component={ReviewPaper}></Route>

                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/registration" component={UserRegistration}></Route>
                        <Route path="/contact" component={ContactUs}></Route>

                        <Route  path="/workshop/template" component={TemplateDownload}></Route>

                        <Route  path="/workshop-list" component={AcceptedWorkshopList}></Route>
                        <Route path="/user/add-proposal" component={AddProposal}></Route>
                        <Route path="/workshop/proposal-list" component={ProposalList}></Route>
                        {/* <Route path="/workshop/workshop-list" component={ProposalList}></Route> */}

                        <Route  path="/u-keynotes" component={ukeynotes}></Route>
                        <Route  path="/mng-keynotes" component={MangKeynote}></Route>
                        <Route  path="/new-keynotes" component={NewKeynote}></Route>
                        <Route  path="/edit-keynotes/:id" component={EditKeynote}></Route>
                        <Route  path="/rpaperhome" component={RPaperHome}/>

                    </Switch>


                </Router>
            </div>
        );
    }
}
