import React, {Component} from 'react';
import Header from '../homePageElements/header/header.component';
import ContactUs from '../homePageElements/contactUsForm/contactUsForm.component';

class ContactUsPage extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <Header/>
                <ContactUs/>
            </div>
            

        )
    }
}
export default ContactUsPage;