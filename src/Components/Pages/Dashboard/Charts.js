import React, {useCallback, useEffect, useRef, useState} from 'react'
import Chart from 'chart.js/auto'
import axios from "axios";
import baseURL from "../../../apis/apiCon";


const Charts = () => {

    const chartContainer = useRef(null);
    const chartContainer2 = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartInstance2, setChartInstance2] = useState(null);

    // getting chart data from api
    const [sourceLabels, setSourceLabels] = useState([]);
    const [sourceChartData, setSourceChartData] = useState([])
    const [isLoadedSource, setIsLoadedSource] = useState(false);

    const [typeLabels, setTypeLabels] = useState([]);
    const [typeData, setTypeData] = useState([]);
    const [isLoadedType, setIsLoadedType] = useState(false)

    const [totalLogs, setTotalLogs] = useState(0)


    const fetchTypeData = async () => {
        console.log("function called")
        const headers = {
            "Content-Type" : "application/json",
        };
        let response = await axios.get(`${baseURL}/charts/type`, {headers});
        try {
            if (response){
                console.log(Object.keys(response.data).length); // for debugging only
                if (response.data) {
                    console.log(response.data); //for debugging only
                    return response.data;
                } else {
                    console.log("Something went wrong!!!");
                }
            } else {
                console.log("No response found!!");
            }
        } catch (e) {
            console.log(e);
        }
    };

    // configuration for charts
    const typeChartConfig = {
        type: 'pie', // Use 'pie' type for a full pie chart
        data: {
            labels: typeLabels,
            datasets: [{
                data: typeData,
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                hoverOffset: 4 // Adjust the hover effect offset
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right', // Position legend on the right side
                    align: 'start', // Align legend to the start of the chart
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed && context.parsed.toFixed) {
                                label += context.parsed.toFixed(2);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };


    const fetchSourceChartData = async () => {
        const headers = {
            "Content-Type" : "application/json",
        };
        let response =  await axios.get(`${baseURL}/charts/source-system`, {headers});
        try {
            if (response) {
                // console.log(Object.keys(response.data).length); //for debugging only
                if (response.data) {
                    console.log(response.data) //for debugging only
                    return response.data;
                } else {
                    console.log("something happen")
                }
            } else {
                console.log("no response found")
            }

        } catch (e){
            console.log(e)
        }
    }

    // configuration for sourceSystem charts
    const sourceSystemChartConfig = {
        type: 'pie', // Use 'pie' type for a full pie chart
        data: {
            labels: sourceLabels,
            datasets: [{
                data: sourceChartData,
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#31d52c', '#230FA6', '#4BC0C0'],
                hoverOffset: 4 // Adjust the hover effect offset
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right', // Position legend on the right side
                    align: 'start', // Align legend to the start of the chart
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed && context.parsed.toFixed) {
                                label += context.parsed.toFixed(2);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };


    useEffect(() => {
        fetchSourceChartData().then((res) => {
            // console.log(res); //for debugging only
            setSourceLabels(res.map(dict => dict.SourceSystem));
            setSourceChartData(res.map(dict => dict.CountTotal));
            setIsLoadedSource(true);
            // console.log(sourceLabels);
            // console.log(sourceChartData);
        }).catch((err) => {
            console.log(err)
        });

        fetchTypeData().then((res) => {
            setTypeLabels(res.map(dict => dict.Type));
            setTypeData(res.map(dict => dict.CountTotal));
            setIsLoadedType(true)
            setTotalLogs(typeData.reduce((a, b) => a + b));
            console.log(typeLabels); //for debugging only
            console.log(typeData);  //for debugging only
        }).catch((err) => {
            console.log(err)
        });


        const tempChartInstance = new Chart(chartContainer.current, sourceSystemChartConfig);
        const tempChartInstance1 = new Chart(chartContainer2.current, typeChartConfig);
        if (chartContainer && chartContainer.current && chartContainer2 && chartContainer2.current) {
            setChartInstance(tempChartInstance);
            setChartInstance2(tempChartInstance1);
        }
        // console.log(chartInstance);
        // console.log(chartInstance2);
        return () => {
            tempChartInstance.destroy();
            tempChartInstance1.destroy();
        }
    },[isLoadedSource, isLoadedType]);



    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-md-12">
                    <div className="Log-Entries">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Total Log Entries</h6>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="maxLogCount">{totalLogs}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Error-Count pt-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Error Count&nbsp; <i className='bi bi-exclamation-circle icon' ></i></h6>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="maxCount">{typeData[2]}</span>
                                </div>
                                <div className="chart">
                                    <div id="errorCountChart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-md-12 count-logs-res">
                    <div className="card">
                        <div className="card-body count-logs">
                            <h6 className="font-h6-2">Count of logs by Source System</h6>
                            <div className="chart pt-3">
                                <canvas id="modernFullPieChart" ref={chartContainer} width="320" height="175"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pt-3 log-trend-res">
                <div className="col-lg-4 col-md-12 col-md-12">
                    <div className="Log-Entries">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Error % Change</h6>
                                <p>Over last month</p>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="currentErrorChange">0</span>/<span id="maxErrorChange">80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Error-Count pt-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Warnings Count&nbsp; </h6>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="maxWarningCount">{typeData[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-md-12 count-logs-res">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="font-h6-2">Count of logs by Type</h6>
                            <div className="chart pt-3">
                                {/* <!-- <div id="barChart2"></div> --> */}
                                <canvas id="modernFullPieChart2" ref={chartContainer2} width="350" height="190"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Charts