import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import moment from 'moment'; // ensure moment is installed

const Overview = ({ orders }) => {

    const processData = (orders) => {
        let groupedData = {};
        // Create an array of the last 30 days
        const last30Days = Array.from({ length: 30 }, (_, i) => moment().subtract(i, 'days').format("MMM DD")).reverse();

        last30Days.forEach(day => {
            groupedData[day] = {
                name: day,
                total: 0
            };
        });

        if (orders && orders.length > 0) {
            orders.forEach(order => {
                const orderDate = moment(order.created_at).format("MMM DD");
                if (groupedData[orderDate]) {
                    groupedData[orderDate].total += 1; // Increment order count
                }
            });
        }
        return Object.values(groupedData);
    };

    const data = processData(orders);

    if (data.length === 0) {
        return (
            <div className="dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <BarChartIcon className="w-12 h-12 text-gray-500" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">No Data Available</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        There is currently no data to display.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} className="bar-chart">
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(tick, index) => (index % 3 === 0 ? tick : '')} // Show every 3rd tick
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`} // No need for $
                />
                <Tooltip formatter={(value) => `${value} orders`} />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

function BarChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    );
}

export default Overview;
