import React, { useState, useEffect } from 'react';
import { Line, Bar} from 'react-chartjs-2';
import { fetchDailyCovidData } from '../../api/index';

const Chart = (props) => {
        const [covidData, setCovidData] = useState([]);

        useEffect(() => {
            const fetchCovidData = async () => {
                setCovidData(await fetchDailyCovidData());
            }

            fetchCovidData();
        }, []);

        const lineChart = (
            covidData[0] ? (
            <Line
                data={{
                    labels: covidData.map(({ date }) => date),
                    datasets: [{
                        label: 'Confirmed',
                        data: covidData.map((data) => data.confirmed),
                        borderColor: 'blue',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                    }, {
                        label: 'Deaths',
                        data: covidData.map((data) => data.deaths),
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }]
                }}
            />) : null
        );

        const barChart = 
        (props.data.confirmed ? (<Bar
                data={{
                    labels: ['Infected', 'Deaths', 'Recovered'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [props.data.confirmed, props.data.deaths, props.data.recovered],
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${props.country}` },
                }}
            />
        ) : null);

        return (
            <div>
                {props.country ? barChart : lineChart}
            </div>
            
        );
};

export default Chart;