import Router from "next/router";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        redirectIfLogin();
    }, []);

    const redirectIfLogin = async () => {
        let token = localStorage.getItem('accessToken');
        if (token == undefined || token == null || token == '') {
            Router.push('/login');
        } else {
            Router.push('/dashboard');
        }
    }
 
    const LoginHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            localStorage.setItem('accessToken',response.data.accessToken);
            localStorage.setItem('refreshToken',response.data.refreshToken);
            Router.push('/dashboard');
        } catch (error) {
            setMsg(error.response.data.msg);
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                        <h3 className="h5 text-gray-900 mb-4">Welcome Admin!</h3>
                                        <img src="../img/panikhataa-dark.png"/>
                                        </div>
                                        <p className="text-danger">{msg}</p>
                                        <form className="user" onSubmit={LoginHandler}>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Home.layout = "AuthLayout";
export default Home;