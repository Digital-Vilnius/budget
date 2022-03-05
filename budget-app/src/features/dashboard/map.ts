import { Chart as ApiChart, ChartDataset as ApiChartDataset } from '@api/clients/charts/types';
import { ChartData, Dataset } from 'react-native-chart-kit/dist/HelperTypes';
import hexToRgba from 'hex-to-rgba';
import { Chart } from './types';

export const mapChart = (chart: ApiChart): Chart => chart;

export const mapChartDataset = (dataset: ApiChartDataset): Dataset => ({
  data: dataset.data,
  color: (opacity) => hexToRgba(dataset.color, opacity),
});

export const mapChartData = (chart: Chart): ChartData => ({
  labels: chart.labels,
  datasets: chart.datasets.map(mapChartDataset),
});
