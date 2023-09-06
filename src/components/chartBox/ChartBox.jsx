import "./ChartBox.css"
import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


const ChartBox = () => {
    return (
        <div className="chartbox">
            <div className="boxInfo">
                <div className="title">
                    <img src="" alt="dv" />
                    <span>Total Users</span>
                </div>
                <h1>11.238</h1>
                <Link to="/">View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart width={300} height={100}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage">45%</span>
                    <span className="duration">this month</span>
                </div>
            </div>

        </div>
    )
}
export default ChartBox