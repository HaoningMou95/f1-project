import axios from 'axios'

export const getNews = async () => {
  const result = await axios.get('http://localhost:8081/news/getNews')
  return result.data
}

export const getDriver = async () => {
  const result = await axios.get('http://localhost:8081/driver/getDriver')
  return result.data
}

export const getSchedule = async () => {
  const result = await axios.get('http://localhost:8081/schedule/getSchedule')
  return result.data
}

