import React from 'react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight
} from './styles';


interface IBarChartBox {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[],
}

const BarChartBox: React.FC<IBarChartBox> = ({ title, data }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>
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
        <BarChart data={data}>
          <Bar dataKey='amount' name='Valor'>
            {
              data.map((indicador) => (
                <Cell
                  key={indicador.name}
                  fill={indicador.color}
                  cursor='pointer'
                />
              ))
            }
          </Bar>
          <Tooltip cursor={{ fill: 'none' }} formatter={(value: number) => formatCurrency(value)} />
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </ Container>
);

export default BarChartBox;