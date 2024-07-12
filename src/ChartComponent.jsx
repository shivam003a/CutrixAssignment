import React, { useState } from 'react';
import './ChartComponent.css'
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);


const ChartComponent = () => {

	const [x, setX] = useState('');
	const [y, setY] = useState('');
	const [chartData, setChartData] = useState({
		labels: [1,2,3,4,5,6,7,8,9],
		datasets: [
			{
				label: 'Graph between X vs Y',
				data: [21,32,43,21,23,56,87,45,76],
				borderColor: 'rgba(75,192,192,1)',
				backgroundColor: 'rgba(75,192,192,0.2)',
			}],
	});

	const handlePlot = () => {
		const xData = x.split(',');
		const yData = y.split(',');

		setChartData({
			labels: xData,
			datasets: [
				{
					label: 'Graph between X vs Y',
					data: yData,
					borderColor: 'rgba(75,192,192,1)',
					backgroundColor: 'rgba(75,192,192,0.2)',
				}],
		});

	};

	const handleStaticPlot = ()=>{
		setChartData({
			labels: [1,2,3,4,5,6,7,8,9],
			datasets: [
				{
					label: 'Graph between X vs Y',
					data: [27,76,21,67,9,43,100,65,32],
					borderColor: 'rgba(75,192,192,1)',
					backgroundColor: 'rgba(75,192,192,0.2)',
				}],
		});
	}

	return (
		<div className='container'>
			<div className='formData'>
				<h1 style={{marginBottom:"16px"}}>Plot Graph (Qutrix)</h1>
				<input
					type="text"
					placeholder="Enter x-axis data (comma separated)"
					value={x}
					onChange={(e) => setX(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Enter y-axis data (comma separated)"
					value={y}
					onChange={(e) => setY(e.target.value)}
				/>
				<button onClick={handlePlot}>Plot Graph</button>
				<p>or</p>
				<button onClick={handleStaticPlot}>Plot Static Graph</button>
			</div>
			<div className='graph'>
				{chartData && <Line data={chartData} />}
			</div>
		</div>
	);
};

export default ChartComponent;
