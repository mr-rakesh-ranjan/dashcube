import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'

const Charts = () => {

    const chartConfig = {
        type: 'pie', // Use 'pie' type for a full pie chart
        data: {
            labels: ['Ngins', 'Tomcat', 'Apache', 'Category 4'],
            datasets: [{
                data: [44, 55, 13, 43],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
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

    const chartContainer = useRef(null);
    const chartContainer2 = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartInstance2, setChartInstance2] = useState(null);

    useEffect(() => {
        const tempChartInstance = new Chart(chartContainer.current, chartConfig);
        if (chartContainer && chartContainer.current && chartContainer2 && chartContainer2.current) {
            setChartInstance(tempChartInstance);
            setChartInstance2(tempChartInstance);
        }
        // console.log(chartInstance);
        // console.log(chartInstance2);
        return () => {
            tempChartInstance.destroy()
        }
    }, [chartContainer])


    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-md-12">
                    <div className="Log-Entries">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Total Log Entries</h6>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="currentLogCount">27</span>/<span id="maxLogCount">80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Error-Count pt-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-h6 fw-bolder">Error Count&nbsp; <i className='bi bi-exclamation-circle icon' ></i></h6>
                                <div className="pt-3" id="logCount">
                                    <span className="big-bold" id="currentCount">0</span>/<span id="maxCount">80</span>
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
                                {/* <!-- <div id="barChart"></div> --> */}
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
                                    <span className="big-bold" id="currentWarningCount">0</span>/<span id="maxWarningCount">80</span>
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
                                <canvas id="modernFullPieChart2" ref={chartContainer} width="350" height="190"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts