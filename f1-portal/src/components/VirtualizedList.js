import React, { useState, useRef, useEffect } from 'react'
import { AutoSizer, Column, Table, defaultTableRowRenderer } from 'react-virtualized'

const VirtualizedList = () => {
  const schedule = [
    {
      date: '2021-10-01',
      time: '9:00 AM',
      event: 'Opening Ceremony'
    },
    {
      date: '2021-10-01',
      time: '10:00 AM',
      event: 'Keynote Speech'
    },
    {
      date: '2021-10-01',
      time: '11:00 AM',
      event: 'Panel Discussion'
    },
    {
      date: '2021-10-01',
      time: '12:00 PM',
      event: 'Lunch Break'
    },
    {
      date: '2021-10-01',
      time: '1:00 PM',
      event: 'Workshop Session'
    }
  ]

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const Details = ({ children, index }) => (
    <div style={{ cursor: 'pointer' }} onClick={() => setSelectedIndex(index)}>
      {children}
    </div>
  )
  return (
    <div>
      <h1>Virtualized List</h1>
    </div>
  )
}

export default VirtualizedList
