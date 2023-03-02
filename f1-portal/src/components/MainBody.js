import '../styles/MainBody.css'
import data from '../DB/DATA'
export default function MainBody() {
  return (
    <div className='grid-container'>
      <div className='grid'>
        {data.map((item) => {
          return (
            <div className='item'>
              <div style={{ width: '500px', padding: '5px 20px' }}>
                <h1>{item.id}</h1>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
