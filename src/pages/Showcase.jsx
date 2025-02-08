import React from 'react';
import './Showcase.css';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'; // Using Recharts for the pie chart

const Showcase = () => {
  // Data for the pie chart
  const pieData = [
    { name: 'Software Developer', value: 35 },
    { name: 'Product Manager', value: 20 },
    { name: 'Leader', value: 15 },
    { name: 'Scrum Master', value: 10 },
    { name: 'Marketer', value: 10 },
    { name: 'Other Roles (Janitor, Butler, etc.)', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#8884D8'];

  return (
    <div className="showcase-container">
      {/* Header */}
      <header className="showcase-header">
        <h1>Hi, I'm Ondrej</h1>
        <p className="tagline">From Potato Carrier to Problem Solver</p>
      </header>

      {/* Journey Timeline */}
      <section className="journey-timeline">
        <h2>My Journey</h2>
        <p>🎓 Studied Economics → 🥔 Delivered Vegetables → 💻 Pivoted to IT → 🚀 Built a Startup → 👨‍💻 Ready to Solve Problems with Code!</p>
      </section>

      {/* Pie Chart */}
      <section className="skills-chart">
        <h2>Roles I’ve Played</h2>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%" // Centers the chart horizontally
            cy="50%" // Centers the chart vertically
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </div>
      </section>

      {/* CTA */}
      <footer className="cta-section">
        <p>Don’t make me go back to dragging potatoes—hire me instead!</p>
        <button className="cta-button">Let’s Talk</button>
      </footer>
    </div>
  );
};

export default Showcase;