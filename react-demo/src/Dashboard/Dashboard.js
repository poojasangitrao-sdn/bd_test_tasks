import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                
                <div id="wrapper">
                  
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>

                            <div className="row">
                                
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                            </div>
                                            <div className="mr-5">Producs</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to={'#'}>
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"></span>
                                        </Link>
                                    </div>
                                
                                
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-list"></i>
                                            </div>
                                            <div className="mr-5">11 New Tasks!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"></span>
                                        </Link>
                                    </div>
                            
                               
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-shopping-cart"></i>
                                            </div>
                                            <div className="mr-5">123 New Orders!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"></span>
                                        </Link>
                                    </div>
                                
                                
                                    <div className="card text-white bg-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                            
                                            </div>
                                            <div className="mr-5">Categories</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"></span>
                                        </Link>
                                    </div>
                               
                            </div>

                        </div>

                
                    </div>
                </div>
            </div>

        );
    }
}
