export interface IGaugeOptions {
    color?: string;
    series: IGaugeSerie[];
}

interface IGaugeSerie {
    type: string;
    progress: any;
    axisLine: any;
    axisTick: any;
    splitLine: any;
    axisLabel: any;
    anchor: any;
    title: any;
    detail: any;
    data: IGaugeSerieData[];
}

interface IGaugeSerieData {
    value: number;
}
