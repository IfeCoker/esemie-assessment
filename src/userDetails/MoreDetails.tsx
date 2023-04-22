import { useState, useEffect } from "react"

import { createServer } from "miragejs"
import datadetail from '../datadetail.json'


createServer({
    routes() {
      this.get("/api/details", () => {
        return datadetail;      
      })
    }
  })

  type Detail = {
    id: number,
    address: string,
    phoneNumber: string,
}

function DetailList() {
    const [details, setDetails] = useState<Detail[]>([]);

    useEffect(() => {
        fetch("/api/details")
        .then(res => res.json())
        .then(details => {
            setDetails(details)
        })
    })

    return (
        <div>
            <h1>Users Detail</h1> 
            {
              details.map(detail => <div key={detail.id}>{detail.address} {detail.phoneNumber}</div>)
            }           
        </div>
    )
}

export default DetailList