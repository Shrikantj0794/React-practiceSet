import './app.css'
import bigdata from './apis/api'
import Card from './components/Card'
export function App() {
  // let carddata = bigdata()
  console.log(bigdata)
  return (
    <>
    {
      bigdata.map((data, index)=>
        <Card key={index} first_name= {data.first_name} phone_no={data.phone_no} />
      )
    }
      
    </>
  )
}
