import * as React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { Button, Grid, Link, Paper } from '@mui/material'

const DriverPage = () => {
  const { id } = useParams()
  const items = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
    { id: 6, content: 'Item 6' }
  ]
  return (
    <Grid container spacing={4} backgroundColor='#262626' justifyContent='center' alignItems='center' width='95%' margin='0 auto' padding='10px 20px 10px 10px'>
      <Grid item xs={12} sm={8} md={6}>
        <Paper>
          <div>{items[id - 1].id}</div>
          <div>{items[id - 1].content}</div>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default DriverPage
