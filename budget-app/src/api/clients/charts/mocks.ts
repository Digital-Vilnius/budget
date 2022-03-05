import { ResultResponse } from '@api/types';
import { colors } from '@styles/constants';
import { Chart, ChartDataset } from './types';

const datasetsMock: ChartDataset[] = [
  { data: [150, 126, 145, 654, 126, 354], color: colors.success },
  { data: [-150, -126, -145, -654, -126, -354], color: colors.danger },
];

export const chartMock: ResultResponse<Chart> = {
  result: {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: datasetsMock,
  },
};
