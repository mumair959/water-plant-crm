import React, { useState, useEffect } from 'react';
import Router from "next/router";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import Table from "../components/companies/Table";

const Companies = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        refreshToken();
        getCompaniesList();
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
            if (error.response) {
                Router.push('/login');
            }
        }
    }

    const getCompaniesList = async () => {
        try {
            let accessToken = localStorage.getItem('accessToken');
            console.log(accessToken);
            const response = await axios.get('http://localhost:5000/get_all_companies',{
                headers: {
                  'Authorization': `Bearer ${accessToken}`
                }
              });
            setCompanies(response.data.companies);
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
                        <h1 className="h3 mb-0 text-gray-800">Companies</h1>
                    </div>
                
                    <Table title="Companies" companies={companies}/>
                </div>
            </div>
            
            <Footer />

        </div>
    );
}

Companies.layout = "Layout";
export default Companies;