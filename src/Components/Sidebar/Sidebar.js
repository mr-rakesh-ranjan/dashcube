import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = ({isSidebarHidden, resetSidebarContent, updateSidebarContent}) => {
    return (
        <>
            <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}
                onMouseLeave={resetSidebarContent}
                onMouseEnter={updateSidebarContent}>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="brand fs-5 text-dark"><i className="bi bi-box-fill icon fs-2"></i>Dashcube</Link>
                </div>
                <ul className='side-menu'>
                    <li>
                        <Link to={"/"} className='active'>
                            <i className="bi bi-grid icon"></i>
                            <span className="fd-6">Dashboard</span>
                        </Link>
                    </li>
                    <li className="divider" data-text="Analytics">Analytics</li>
                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-bar-chart-line icon"></i>
                            <span className="fs-6">Performance</span>
                        </Link>
                    </li>
                    <li><Link to={"#"}><i className="bi bi-cursor icon"></i><span className="fs-6"> Hotjar</span></Link></li>

                    <li className="divider" data-text="Support">Support</li>
                    <li><Link to={"#"}><i className="bi bi-ticket-perforated icon"></i> <span className="fs-6">Tickets</span></Link></li>
                    <li><Link to={"#"}><i className="bi bi-person icon"></i><span className="fs-6">Agents</span></Link></li>
                    <li>
                        <Link to={"#"}><i className="bi bi-people icon"></i> <span className="fs-6">Customers</span> <i class='bx bx-chevron-right icon-right' ></i></Link>
                    </li>

                    <li className="divider" data-text="Shop">Shop</li>
                    <li><Link to={"#"}><i className="bi bi-box icon"></i> <span className="fs-6">Products</span></Link></li>
                    <li><Link to={"#"}><i className="bi bi-cart icon"></i><span className="fs-6">Orders</span></Link></li>
                    <li><Link to={"/reports"}><i className="bi bi-file-earmark icon"></i><span className="fs-6">Reports</span></Link></li>

                    <li className="divider" data-text=""></li>
                    <li><Link to={"#"}><i className="bi bi-gear icon"></i><span className="fs-6">Settings</span></Link></li>
                    <li><Link to={"#"}><i className="bi bi-box-arrow-left icon"></i> <span className="fs-6">Log Out</span></Link></li>

                </ul>
            </section>
        </>
    )
}

export default Sidebar