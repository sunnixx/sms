import React from "react";
import ReactEcharts from "echarts-for-react";

export default class extends React.Component{
  getOptions() {
    const basic_pie_options = {

        // Add title
        title: {
            text: 'Challan Overview',
            subtext: 'Shows Challan stats',
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
            data: ['Issued', 'Not Issued','Pending']
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
            name: 'Challans',
            type: 'pie',
            radius: '70%',
            center: ['50%', '57.5%'],
            data: [
                {value: 20, name: 'Not Issued'},
                {value: 130, name: 'Issued'},
                {value: 40, name: 'Pending'}

            ]
        }]
    };
    return basic_pie_options;
  }

  render(){
    return(
      <ReactEcharts
      option={this.getOptions()}
      style={{height: '350px', width: '100%'}}
      className='react_for_echarts' />
    )
  }
}
