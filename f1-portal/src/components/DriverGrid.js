import { Button, Grid, Link, Paper } from '@mui/material'

const items = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
  { id: 5, content: 'Item 5' },
  { id: 6, content: 'Item 6' }
]

const DriverGrid = () => {
  return (
    <Grid container spacing={4} backgroundColor='#262626' justifyContent='center' alignItems='center' width='95%' margin='0 auto' padding='10px 20px 10px 10px'>
      {items.map((item) => (
        <Grid item xs={12} sm={8} md={6} key={item.id}>
          <div>{item.id}</div>
          <Paper>
            <div>{item.content}</div>
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
