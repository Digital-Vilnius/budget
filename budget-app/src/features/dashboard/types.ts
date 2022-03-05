export interface ChartDataset {
  data: number[];
  color: string;
}

export interface Chart {
  labels: string[];
  datasets: ChartDataset[];
}
