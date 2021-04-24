import { IGaugeOptions } from './gaugeOptions';

export class WidgetOptionsProvider {
    public static GetGaugeOptions(): IGaugeOptions {
        return {
            series: [{
                type: 'gauge',
                progress: {
                    show: true,
                    width: 18
                },
                axisLine: {
                    lineStyle: {
                        width: 18
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 15,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 25,
                    color: '#999',
                    fontSize: 10
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 25,
                    itemStyle: {
                        borderWidth: 10
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 30,
                    offsetCenter: [0, '70%']
                },
                data: [{
                    value: 70
                }]
            }]
    };
  }

  public static GetThermometerOptions(id: string): void {
    $(`#${id}`).thermometer({
        height: 100,
        width: 200,
        startValue: 71,
        maxValue: 100,
        topText: 'High',
        bottomText: 'Low',
        liquidColour: '#009400',
        pathToSVG: 'http://localhost:4200/assets/thermo-bottom.svg',
      });
  }
}
