import React, { useState, useRef } from "react";
import AuthService from '../../services/auth.service'
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props)=>{


    const initalState={
        "username":"",
         "password":""

    }

    const[user,setUser] = useState(initalState);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleUserName = e =>{
        let newUser = {...user}
        newUser.username = e.target.value;
        setUser(newUser)
    }

    const handlePassword = e =>{
        let newUser = {...user}
        newUser.password = e.target.value;
        setUser(newUser)
    }

    const  handleLogin = (e)=>{
        e.preventDefault();
        setMessage("");
        setLoading(true);
        AuthService.login(user.username, user.password).then(
            (response) => {

                const user = JSON.parse(localStorage.getItem('user'));
                console.log(user)
                props.history.push("/admin-dash");
                // if(user.usertype === "seller"){
                //     props.history.push("/sellerhome");
                //     window.location.reload();
                //
                //
                // }else{
                //     props.history.push("/");
                //     window.location.reload();
                //
                // }


            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );


    }

    return(
       <div className="login-body">


           <div className="sidenav" >
               <div className="login-main-text" >
                   <h1 style={{}}>ICAF ADMIN<br/> Login Page</h1>
                   <p>Login or register from here to access.</p>
               </div>
           </div>
           <div className="main">
               <div className="col-md-6 col-sm-12">
                   <div className="login-form">
                       <form>
                           <div className="form-group">
                               <label>User Name</label>
                               <input type="text" className="form-control" placeholder="User Name" onChange={handleUserName}/>
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" className="form-control" placeholder="Password" onChange={handlePassword}/>
                           </div> <br/>
                           <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>

                       </form>
                   </div>
               </div>
           </div>
       </div>




    )
}

export default Login