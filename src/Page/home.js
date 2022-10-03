import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LabelList
} from "recharts"
const HomePage = () => {
	// const { unit, data, x_label, ticks, isNumerical } = {
	// 	x_label: "Time",
	// 	unit: "mmHG",
	// 	ticks: [0, 360, 720, 1080, 1440],
	// 	isNumerical: true,
	// 	data: [
	// 		{
	// 			label: 690,
	// 			values: [80, 120]
	// 		},

	// 		{
	// 			label: 783,
	// 			values: [90, 130]
	// 		},
	// 		{
	// 			label: 1278,
	// 			values: [92, 123]
	// 		}
	// 	]
	// }

	const { unit, data, x_label, ticks, isNumerical } = {
		x_label: "Date",
		unit: "mmHG",
		isNumerical: false,
		data: [
			{
				label: "S",
				values: [80, 120]
			},
			{
				label: "M"
			},
			{
				label: "T",
				values: [90, 130]
			},
			{
				label: "W"
			},
			{
				label: "T",
				values: [92, 123]
			},
			{
				label: "F"
			},
			{
				label: "S",
				values: [92, 123]
			}
		]
	}
	return (
		<div>
			Hello this is home page
			<ResponsiveContainer width="100%" height={350}>
				<BarChart width={730} height={250} data={data} className="mt-5">
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="label"
						label={x_label}
						ticks={ticks}
						tickFormatter={
							isNumerical ? (t) => `${Math.floor(t / 60)}:00` : (t) => t
						}
						type={isNumerical ? "number" : "category"}
					/>
					<YAxis domain={[0, 200]} />
					<Tooltip />
					<Bar dataKey="values" fill="#8884d8" radius={30}>
						<LabelList
							dataKey="values"
							formatter={(v) => `${v[1]} ${unit}`}
							position="top"
						/>
						<LabelList
							dataKey="values"
							formatter={(v) => `${v[0]} ${unit}`}
							position="bottom"
						/>
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default HomePage
