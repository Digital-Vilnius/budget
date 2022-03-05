import { ChartsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapChart } from '../map';

export const getQueryKey = () => {
  return ['chart'];
};

const useChart = () => {
  const getChartFn = () => ChartsClient.getChart();
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(), getChartFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    chart: data ? mapChart(data.result) : null,
  };
};

export default useChart;
