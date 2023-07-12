import React, { useState, useEffect } from 'react';
import Router from "next/router";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import Table from "../components/packages/Table";

const Packages = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        refreshToken();
        getPackagesList();
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
            if (error.response) {
                Router.push('/login');
            }
        }
    }

    const getPackagesList = async () => {
        try {
            setPackages([{'name' : 'Package1', 'companies' : 10, 'status' : 'Active'},
                        {'name' : 'Package2', 'companies' : 20, 'status' : 'Active'},
                        {'name' : 'Package3', 'companies' : 30, 'status' : 'Active'}
                    ]);
        } catch (error) {
            
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
                        <h1 className="h3 mb-0 text-gray-800">Packages</h1>
                    </div>
                
                    <Table title="Packages" packages={packages}/>
                </div>
            </div>
            
            <Footer />

        </div>
    );
}

Packages.layout = "Layout";
export default Packages;