import React from 'react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight
} from './styles';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}

/* não tem return por se tratar de 
** stateless components (componente sem estado) */
const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {
          data.map((id) => (
            <Legend key={id.name} color={id.color}>
              <div>{id.percent}%</div>
              <span>{id.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey='percent'>
            {
              data.map((id) => (
                <Cell key={id.name} fill={id.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </ Container>
);

export default PieChartBox;