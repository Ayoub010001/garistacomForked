import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import moment from 'moment'; // ensure moment is installed

const Overview = ({orders}) => {
    const processData = (orders) => {
        let groupedData = {};
        if(orders)
        {
            orders.forEach(order => {
                const month = moment(order.created_at).format("MMM");
                if (!groupedData[month]) {
                    groupedData[month] = {
                        name: month,
                        total: 0
                    };
                }
                groupedData[month].total += parseFloat(order.total);
            });
        }


        return Object.values(groupedData);
    };

    const data = processData(orders);
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} className="bar-chart">
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
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

export default Overview;
