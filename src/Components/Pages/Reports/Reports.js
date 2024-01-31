import React, {useEffect, useState} from 'react'
import axios from "axios";
import baseURL from "../../../apis/apiCon";

const Reports = (props) => {
    // setting title
    props.setTitle("Reports")
    const [logs, setLogs] = useState([]);

    useEffect(() => {

        const headers = {
            "Content-Type" : "application/json",
        };
        const fetchLogs = async () => {
            try{
                const response = await axios.get(`${baseURL}logs/all`, {headers});
                if (response){
                    console.log(Object.keys(response.data).length); //for debugging purpose
                    if (response.data){
                        setLogs(response.data)
                        console.log(response.data) //for debugging purpose
                    } else {
                        console.log("No Logs Found")
                    }
                }
            } catch (e) {
                console.log(e)
            }
        };
        fetchLogs();
    }, []);

    const renderTable = () => {
        return logs.map(log => {
            return (
                <tr className="table-secondary">
                    <td>{log.GUID}</td>
                    <td>{log.SourceSystem}</td>
                    <td>{log.TimeStamp}</td>
                    <td>{log.SourceApplication}</td>
                    <td>{log.SourceModule}</td>
                    <td>{log.Description}</td>
                    <td>{log.Tags}</td>
                    <td>{log.Type}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className="p-2" style={{overflowY: "auto"}}>
                <table id="example" className="table table-hover" style={{width:"100%"}}>
                    <thead className="table-light">
                        <tr>
                            <th>GUID</th>
                            <th>SourceSystem</th>
                            <th>TimeStamp</th>
                            <th>SourceApplication</th>
                            <th>SourceModule</th>
                            <th>Description</th>
                            <th>Tags</th>
                            <th>Type</th>
                        </tr>
                    </thead>

                    <tbody>
                    {/*{renderTable()}*/}
                    {
                        Object.keys(logs).map((key, i) => (
                            <tr className="table-secondary" key={i}>
                                <td>{logs[key].GUID}</td>
                                <td>{logs[key].SourceSystem}</td>
                                <td>{logs[key].TimeStamp}</td>
                                <td>{logs[key].SourceApplication}</td>
                                <td>{logs[key].SourceModule}</td>
                                <td>{logs[key].Description}</td>
                                <td>{logs[key].Tags}</td>
                                <td>{logs[key].Type}</td>
                            </tr>
                        ))
                    }
                    </tbody>

                    {/*<tbody>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>1</td>*/}
                    {/*        <td>Tiger Nixon</td>*/}
                    {/*        <td>System Architect</td>*/}
                    {/*        <td>Edinburgh</td>*/}
                    {/*        <td>61</td>*/}
                    {/*        <td>2011-04-25</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$320,800</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>2</td>*/}
                    {/*        <td>Garrett Winters</td>*/}
                    {/*        <td>Accountant</td>*/}
                    {/*        <td>Tokyo</td>*/}
                    {/*        <td>63</td>*/}
                    {/*        <td>2011-07-25</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$170,750</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>3</td>*/}
                    {/*        <td>Ashton Cox</td>*/}
                    {/*        <td>Junior Technical Author</td>*/}
                    {/*        <td>San Francisco</td>*/}
                    {/*        <td>66</td>*/}
                    {/*        <td>2009-01-12</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$86,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>4</td>*/}
                    {/*        <td>Cedric Kelly</td>*/}
                    {/*        <td>Senior Javascript Developer</td>*/}
                    {/*        <td>Edinburgh</td>*/}
                    {/*        <td>22</td>*/}
                    {/*        <td>2012-03-29</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$433,060</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>5</td>*/}
                    {/*        <td>Airi Satou</td>*/}
                    {/*        <td>Accountant</td>*/}
                    {/*        <td>Tokyo</td>*/}
                    {/*        <td>33</td>*/}
                    {/*        <td>2008-11-28</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$162,700</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>6</td>*/}
                    {/*        <td>Brielle Williamson</td>*/}
                    {/*        <td>Integration Specialist</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>61</td>*/}
                    {/*        <td>2012-12-02</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$372,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>7</td>*/}
                    {/*        <td>Herrod Chandler</td>*/}
                    {/*        <td>Sales Assistant</td>*/}
                    {/*        <td>San Francisco</td>*/}
                    {/*        <td>59</td>*/}
                    {/*        <td>2012-08-06</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$137,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>8</td>*/}
                    {/*        <td>Rhona Davidson</td>*/}
                    {/*        <td>Integration Specialist</td>*/}
                    {/*        <td>Tokyo</td>*/}
                    {/*        <td>55</td>*/}
                    {/*        <td>2010-10-14</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$327,900</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>9</td>*/}
                    {/*        <td>Colleen Hurst</td>*/}
                    {/*        <td>Javascript Developer</td>*/}
                    {/*        <td>San Francisco</td>*/}
                    {/*        <td>39</td>*/}
                    {/*        <td>2009-09-15</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$205,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>10</td>*/}
                    {/*        <td>Sonya Frost</td>*/}
                    {/*        <td>Software Engineer</td>*/}
                    {/*        <td>Edinburgh</td>*/}
                    {/*        <td>23</td>*/}
                    {/*        <td>2008-12-13</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$103,600</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>11</td>*/}
                    {/*        <td>Jena Gaines</td>*/}
                    {/*        <td>Office Manager</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>30</td>*/}
                    {/*        <td>2008-12-19</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$90,560</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>12</td>*/}
                    {/*        <td>Quinn Flynn</td>*/}
                    {/*        <td>Support Lead</td>*/}
                    {/*        <td>Edinburgh</td>*/}
                    {/*        <td>22</td>*/}
                    {/*        <td>2013-03-03</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$342,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>13</td>*/}
                    {/*        <td>Charde Marshall</td>*/}
                    {/*        <td>Regional Director</td>*/}
                    {/*        <td>San Francisco</td>*/}
                    {/*        <td>36</td>*/}
                    {/*        <td>2008-10-16</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$470,600</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>14</td>*/}
                    {/*        <td>Haley Kennedy</td>*/}
                    {/*        <td>Senior Marketing Designer</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>43</td>*/}
                    {/*        <td>2012-12-18</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$313,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>15</td>*/}
                    {/*        <td>Tatyana Fitzpatrick</td>*/}
                    {/*        <td>Regional Director</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>19</td>*/}
                    {/*        <td>2010-03-17</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$385,750</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>16</td>*/}
                    {/*        <td>Michael Silva</td>*/}
                    {/*        <td>Marketing Designer</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>66</td>*/}
                    {/*        <td>2012-11-27</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$198,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>17</td>*/}
                    {/*        <td>Paul Byrd</td>*/}
                    {/*        <td>Chief Financial Officer (CFO)</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>64</td>*/}
                    {/*        <td>2010-06-09</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$725,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>18</td>*/}
                    {/*        <td>Gloria Little</td>*/}
                    {/*        <td>Systems Administrator</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>59</td>*/}
                    {/*        <td>2009-04-10</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$237,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>19</td>*/}
                    {/*        <td>Bradley Greer</td>*/}
                    {/*        <td>Software Engineer</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>41</td>*/}
                    {/*        <td>2012-10-13</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$132,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>20</td>*/}
                    {/*        <td>Dai Rios</td>*/}
                    {/*        <td>Personnel Lead</td>*/}
                    {/*        <td>Edinburgh</td>*/}
                    {/*        <td>35</td>*/}
                    {/*        <td>2012-09-26</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$217,500</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>21</td>*/}
                    {/*        <td>Jenette Caldwell</td>*/}
                    {/*        <td>Development Lead</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>30</td>*/}
                    {/*        <td>2011-09-03</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-warning d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Unfulfilled</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$345,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>22</td>*/}
                    {/*        <td>Yuri Berry</td>*/}
                    {/*        <td>Chief Marketing Officer (CMO)</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>40</td>*/}
                    {/*        <td>2009-06-25</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$675,000</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>23</td>*/}
                    {/*        <td>Caesar Vance</td>*/}
                    {/*        <td>Pre-Sales Support</td>*/}
                    {/*        <td>New York</td>*/}
                    {/*        <td>21</td>*/}
                    {/*        <td>2011-12-12</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$106,450</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>24</td>*/}
                    {/*        <td>Doris Wilder</td>*/}
                    {/*        <td>Sales Assistant</td>*/}
                    {/*        <td>Sydney</td>*/}
                    {/*        <td>23</td>*/}
                    {/*        <td>2010-09-20</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$85,600</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="table-secondary">*/}
                    {/*        <td>25</td>*/}
                    {/*        <td>Angelica Ramos</td>*/}
                    {/*        <td>Chief Executive Officer (CEO)</td>*/}
                    {/*        <td>London</td>*/}
                    {/*        <td>47</td>*/}
                    {/*        <td>2009-10-09</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="rounded-pill bg-light d-flex justify-content-center align-items-center">*/}
                    {/*                <span>Label</span>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td>$1,200,000</td>*/}
                    {/*    </tr>*/}

                    {/*</tbody>*/}
                </table>
            </div>
        </>
    )
}

export default Reports