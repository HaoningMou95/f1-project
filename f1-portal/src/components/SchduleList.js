import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, createTheme, ThemeProvider, Collapse, ListItemButton } from '@mui/material'
import ScheduleIcon from '@mui/icons-material/Schedule'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { getSchedule } from '../api/getData'
import dayjs from 'dayjs'
import dayjsutc from "dayjs/plugin/utc";
import dayjstimezone from "dayjs/plugin/timezone"

const ScheduleList = () => {
  const [data, setData] = useState([])
  dayjs.extend(dayjsutc);
	dayjs.extend(dayjstimezone);
  
  const fetchData = useCallback(async () => {
    const result = await getSchedule()
    console.log(result)
    setData(result)
  })

  useEffect(() => {
    fetchData()
  }, [])
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'F1Font'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <List>
        {data.map((item) => (
          <ListItem key={item.races_name}>
            <ListItemAvatar>
              <Avatar>
                <ScheduleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant='h6' color='white'>
                  {dayjs(item.races_sessions_gp).tz("Australia/Melbourne").format("DD/MMM/YYYY HH:mm")}(MEL Time)
                </Typography>
              }
              secondary={
                <Typography variant='body2' color='white'>
                  {item.races_name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  )
}

export default ScheduleList
