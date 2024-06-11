import React from 'react'
import BarChart from './components/barchart'
import './index.scss'

export default function Home() {
  return (
    <div className="home">
      <BarChart
        title="三大框架满意度"
        style={{ height: '400px', width: '300px' }}
      />
      <BarChart
        title="三大框架使用度"
        style={{ height: '400px', width: '300px' }}
      />
    </div>
  )
}
