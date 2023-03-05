import axios from 'axios'

export const getNews = async () => {
  const result = await axios.get('http://35.90.147.98:8081/news/getNews')
  return result.data
}

export const getDriver = async () => {
  const result = await axios.get('http://35.90.147.98:8081/driver/getDriver')
  return result.data
}

export const getDriverById = async (id) => {
  const result = await axios.get('http://35.90.147.98:8081/driver/getDriver/' + id)
  console.log(result.data[0].id)
  return result.data[0]
}

export const getSchedule = async () => {
  const result = await axios.get('http://35.90.147.98:8081/schedule/getSchedule')
  return result.data
}
