import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
const HomePage = () => {
  const data = [
    {
      name: "0:00",
    },
    {
      name: "06:00",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "12:00",
      uv: 2000,
      pv: [5000, 9800],
    },
    {
      name: "16:00",
      uv: 2780,
      pv: 3908,
    },
  ];
  return (
    <div>
      Hello this is home page
      <ResponsiveContainer width="100%" height={350}>
        <BarChart width={730} height={250} data={data} className="mt-5">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[-10000,15000]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" label={data.name} radius={30}>
            <LabelList dataKey="name" position="top"></LabelList>
            <LabelList dataKey="name" position="bottom"></LabelList>
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" label={data.name} radius={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default HomePage;
