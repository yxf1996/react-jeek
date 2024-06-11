import React from 'react'
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export default function BarChart({ title, style }) {
  const chartRef = useRef(null)
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: ['vue', 'react', 'angular'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [10, 30, 70],
          type: 'bar',
        },
      ],
    }
    option && myChart.setOption(option)
  }, [])
  return <div ref={chartRef} style={style}></div>
}
