import React from 'react'
import { Link } from 'react-router-dom'

import Charts from './Charts'
import Chatbot from './Chatbot'
import LogTrends from './LogTrends'

const DashboardMain = (props) => {

    props.setTitle("Dashboard");
    return (
        <>
            <div className="row justify-content-start">
                <div className="col-lg-3 col-md-6 col-sm-6 row-res">
                    <div className="dropdown">
                        <Link className="btn btn-white dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Time Period: &nbsp;<span className="fw-bold">Current Month</span>
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={"#"}>Current Month</Link></li>
                            <li><Link className="classdropdown-item" to={"#"}>Last Month</Link></li>
                            <li><Link className="dropdown-item" to={"#"}>Last 3 Months</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 pt-res row-res">
                    <div className="dropdown source-res">
                        <Link className="btn btn-white dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Source System: &nbsp;<span className="fw-bold">All</span> &nbsp;
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={"#"}>All</Link></li>
                            <li><Link className="dropdown-item" to={"#"}>Another action</Link></li>
                            <li><Link className="dropdown-item" to={"#"}>Something else here</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-md-12 pt-res row-res pb-res">
                    <div className="d-flex justify-content-end refresh-res">
                        <button className="btn btn-primary"><i className='bi bi-arrow-clockwise icon' ></i> Refresh</button>
                    </div>
                </div>
            </div>
            {/* calling charts components */}
            <div class="row pt-3 ">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <Charts />
                    <LogTrends />
                </div>
                <Chatbot />
            </div>
        </>
    )
}

export default DashboardMain