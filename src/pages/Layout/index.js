import React from 'react'
import { http } from '@/utils'
import { useEffect } from 'react'
export default function Layout() {
  useEffect(() => {
    http.get('/user/profile').then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Layout</div>
}
