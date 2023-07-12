import React, { useState, useEffect } from 'react';
import Router from "next/router";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Footer from "../components/Footer";
import Widget from "../components/dashboard/Widget";
import TopNavBar from "../components/TopNavBar";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            let token = localStorage.getItem('refreshToken');
            const response = await axios.get('http://localhost:5000/token',{params : {token : token}});

            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            console.log(error);
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
            if (error.response) {
                Router.push('/login');
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            let token = localStorage.setItem('accessToken',response.data.accessToken);
            const response = await axios.get('http://localhost:5000/token',{params : {token : token}});
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
                <TopNavBar />
                </nav>

                <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                
                <div className="row">
                    <Widget label="Total Companies" value="100" icon="fa-building" border="border-left-primary" text="text-primary" />
                    <Widget label="Total Customers" value="2000" icon="fa-users" border="border-left-success" text="text-success" />
                    <Widget label="Active Companies" value="90" icon="fa-check" border="border-left-warning" text="text-warning" />
                    <Widget label="Pending Requests" value="10" icon="fa-comments" border="border-left-danger" text="text-danger" />
                </div>

                <div className="row">
                    <Widget label="Total Orders" value="1000" icon="fa-shopping-cart" border="border-left-primary" text="text-primary" />
                    <Widget label="Total Packages" value="6" icon="fa-credit-card" border="border-left-success" text="text-success" />
                    <Widget label="Total Employees" value="150" icon="fa-users" border="border-left-warning" text="text-warning" />
                    <Widget label="Total Earnings" value="Rs. 40000" icon="fa-dollar-sign" border="border-left-danger" text="text-danger" />
                </div>

                </div>
            </div>
            
            <Footer />

            </div>
    );
}

Dashboard.layout = "Layout";
export default Dashboard;