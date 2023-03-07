import { useCallback, useEffect, useState } from 'react'
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material'
import { getSchedule } from '../api/getData'

const CountDownTimer = () => {
  const [days, setDays] = useState(0)
const [hours, setHours] = useState(0)
const [minutes, setMinutes] = useState(0)
const [seconds, setSeconds] = useState(0)

const [data, setData] = useState([])


const fetchData = useCallback(async () => {
  try {
    const result = await getSchedule()
    setData(result)
  } catch (error) {
    console.error(error)
  }
}, [setData])

useEffect(() => {
  fetchData()
  const interval = setInterval(() => getTime(), 1000)
  return () => clearInterval(interval)
}, [])

const now = new Date()
const futureDate = data.filter(item => new Date(item.races_sessions_gp) > now)
const deadline = futureDate[0] ? futureDate[0].races_sessions_gp : null
console.log('deadline', deadline)

const getTime = () => {
  if (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    console.log('time ', time)
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }
}


  const theme = createTheme({
    typography: {
      fontFamily: 'F1Font'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={8} md={6} lg={12} padding='45px' maxWidth='100vh'>
          <Box textAlign='center' mb={4} xs={8} md={6} lg={6}>
            <Typography variant='h4' color='white'>
              Next Season will start in
            </Typography>
          </Box>

          <Box display='flex' justifyContent='center' alignItems='center' border='4px solid white' padding='20px' borderRadius='20px'>
            <Box display='flex' flexWrap='wrap' color='white'>
              <Box textAlign='center' m={1} paddingRight='10px' borderRight='solid 1px rgba(255, 255, 255, 0.2)'>
                <Typography variant='h5' component='div'>
                  {days < 10 ? '0' + days : days} days
                </Typography>
              </Box>
              <Box textAlign='center' m={1} paddingRight='10px' borderRight='solid 1px rgba(255, 255, 255, 0.2)'>
                <Typography variant='h5' component='div'>
                  {hours < 10 ? '0' + hours : hours} hours
                </Typography>
              </Box>
              <Box textAlign='center' m={1} paddingRight='10px' borderRight='solid 1px rgba(255, 255, 255, 0.2)'>
                <Typography variant='h5' component='div'>
                  {minutes < 10 ? '0' + minutes : minutes} minutes
                </Typography>
              </Box>
              <Box textAlign='center' m={1}>
                <Typography variant='h5' component='div'>
                  {seconds < 10 ? '0' + seconds : seconds} seconds
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default CountDownTimer
