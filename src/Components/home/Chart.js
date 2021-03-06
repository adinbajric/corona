import React,{useState, useEffect} from 'react'
import {fetchDailyDate} from '../../api/Api';
import {Line, Bar} from 'react-chartjs-2';
import './Chart.css';


function Chart({ fetchedData: { confirmed, recovered, deaths }, country }) {
    const[dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const callFetch = async() => {
            const data = await fetchDailyDate()
            setDailyData(data);
        }
        callFetch();
    },[])

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels:['Infected', 'Recovered' , 'Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data:[confirmed.value, recovered.value, deaths.value],
                    }]                    
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text:`Current state in ${country}`}
                }}
                />
        ) : null
    )

    const lineChart = (
        dailyData.length ? (
            <Line
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#333ff',
                    fill: true,
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label:'Deaths',
                    borderColor:'red',
                    borderColor:'rgba(255, 0, 0, 0.5)',
                    fill:true,
                }],
            }}
            />
        ):null        
    )
    
    return (
        <div className='chart'>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
