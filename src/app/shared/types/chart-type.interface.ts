export interface ChartType {
  labels: string[];
  datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[] }[];
}
