import React from "react";
import ReactEcharts from "echarts-for-react";

export default class extends React.Component{
  getAmountOptions() {
    const basic_pie_options = {

        // Add title
        title: {
            text: 'Amount Overview',
            subtext: 'Shows amount collection stats',
            x: 'center'
        },

        // Add tooltip
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        // Add legend
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['Collected', 'Remaining']
        },

        // Display toolbox
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: 'Markline switch',
                        markUndo: 'Undo markline',
                        markClear: 'Clear markline'
                    }
                },
                magicType: {
                    show: true,
                    title: {
                        pie: 'Switch to pies',
                        funnel: 'Switch to funnel',
                    },
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            y: '20%',
                            width: '50%',
                            height: '70%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true,
                    title: 'Restore'
                },
                saveAsImage: {
                    show: true,
                    title: 'Same as image',
                    lang: ['Save']
                }
            }
        },

        // Enable drag recalculate
        calculable: true,

        // Add series
        series: [{
            name: 'PKR Amount',
            type: 'pie',
            radius: '70%',
            center: ['50%', '57.5%'],
            data: [
                {value: 120000, name: 'Remaining'},
                {value: 100000, name: 'Collected'}

            ]
        }]
    };
    return basic_pie_options;
  }

  render(){
    return(
      <ReactEcharts
      option={this.getAmountOptions()}
      style={{height: '350px', width: '100%'}}
      className='react_for_echarts' />
    )
  }
}
