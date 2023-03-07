import CountDownTimer from '../components/CountDownTimer'
import { Grid } from '@mui/material'
import ScheduleList from '../components/SchduleList'

const HomePage = () => {
  return (
    <Grid container backgroundColor='#262626' justifyContent='center' alignItems='center' spacing={2} width='95%' margin='0 auto'>
      <Grid item sm={6} lg={8} >
        <CountDownTimer />
      </Grid>
      <Grid item sm={6} lg={8}>
        <ScheduleList />
      </Grid>
    </Grid>
  )
}

export default HomePage
