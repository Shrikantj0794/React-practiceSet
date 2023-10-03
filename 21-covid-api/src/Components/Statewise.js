import React, { useEffect, useState } from 'react'


const Statewise = () => {
    const [data, setdata] = useState([]);
    const fetchData = async()=>{
        const link = await fetch('https://data.covid19india.org/data.json');
        const actualdata = await link.json();
        console.log(actualdata);
        setdata(actualdata.statewise)
    }
    useEffect(() => {
            fetchData();
    }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
            <h1 className='mb-5 text-center'>COVID 19 Statewise List</h1>
        </div>
        <div className="table-responsive">
            <table className='table table-hover'> 
                <thead className='thead-dark'>
                    <tr>
                        <th>State</th>
                        <td>Confirmed</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                        <td>Active</td>
                        <td>Statecode</td>
                    </tr>
                </thead>
                <tbody>
                       {
                        data.map((currvalue, id)=>{
                            return (
                            <tr key={id}>
                            <th>{currvalue.state}</th>
                            <td>{currvalue.confirmed}</td>
                            <td>{currvalue.recovered}</td>
                            <td>{currvalue.deaths}</td>
                            <td>{currvalue.active}</td>
                            <td>{currvalue.statecode}</td>
                        </tr>
                            )
                        })
                       }
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Statewise
