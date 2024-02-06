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
                const response = await axios.get(`${baseURL}/logs/all`, {headers});
                if (response){
                    // console.log(Object.keys(response.data).length); //for debugging purpose
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
                </table>
            </div>
        </>
    )
}

export default Reports