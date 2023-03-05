import { Routes, Route, useParams } from 'react-router-dom'
import { Button, Grid, Link, Paper } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { getDriverById } from '../api/getData'


const DriverPage = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    const result = await getDriverById(id)
    setData(result)
  })

  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])
  return (
    <Grid container spacing={4} backgroundColor='#262626' justifyContent='center' alignItems='center' width='95%' margin='0 auto' padding='10px 20px 10px 10px'>
      <Grid item xs={12} sm={8} md={6}>
        <Paper>
          <div>{data.id}</div>
          <div>{data.first_name}</div>
          <div>{data.last_name}</div>
          <div>{data.dob}</div>
          <div>{data.country}</div>
          <div>{data.team}</div>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default DriverPage
