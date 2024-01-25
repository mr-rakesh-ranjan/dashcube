import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from 'chart.js/auto';

// config bargraph
const graphConfig = {
    type: 'line',
    data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
        datasets: [{
            label: 'Series 1',
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color
            data: [31, 40, 28, 51, 42, 109, 100],
            fill: 'origin', // Fill the area under the line
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category',
                labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
                grid: {
                    display: false // Hide the vertical grid lines
                }
            },
            y: {
                beginAtZero: true,
            }
        },
        elements: {
            line: {
                cubicInterpolationMode: 'monotone' // Use monotone interpolation for smooth curves
            }
        },
    },
};

const LogTrends = () => {
    const bargarph = useRef(null);
    const [graph, setGraph] = useState(null)

    useEffect(() => {
        const tempgraph = new Chart(bargarph.current, graphConfig);
        if (bargarph && bargarph.current) {
            setGraph(tempgraph)
        }

        return () => {
            tempgraph.destroy()
        }
    }, [bargarph])


    return (
        <>
            <div className="row pt-3 log-trend-res">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h6 className="fw-bold">Log Trends</h6>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="d-flex justify-content-end">
                                        <div className="dropdown">
                                            <Link className="btn btn-outline-secondary dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Current year&nbsp; &nbsp;
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to={"#"}>Current year</Link></li>
                                                <li><Link className="dropdown-item" to={"#"}>Last year</Link></li>
                                                <li><Link className="dropdown-item" to={"#"}>Last 2 years</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-container pt-3">
                                {/* <!-- <div className="chart" id="logTrendChart" data-chart-height="300"></div> --> */}
                                <canvas id="smoothAreaChart" ref={bargarph} width="400" height="250"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogTrends