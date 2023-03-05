import { Button, Grid, Link, Paper } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { getDriver } from '../api/getData'



const DriverGrid = () => {
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    const result = await getDriver()
    console.log(result)
    setData(result)
  })

  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])
  return (
    <Grid container spacing={4} backgroundColor='#262626' justifyContent='center' alignItems='center' width='95%' margin='0 auto' padding='10px 20px 10px 10px'>
      {data.map((item) => (
        <Grid item xs={12} sm={8} md={6} key={item.id}>
          <Paper>
            <div>{item.number}</div>
            <div>{item.first_name}</div>
            <Link href={`/drivers/${item.id}`}>
              <Button variant='contained' sx={{ margin: '10px' }}>
                Learn More
              </Button>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default DriverGrid
