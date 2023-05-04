import React, { useEffect, useState } from "react";
import "./Content.css"


const Content = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    return (
        <div className="content">
            <div className="content___wrapper">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">quantityPerUnit</th>
                            <th scope="col">discontinued</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                data.map(item => {
                                    return (
                                    <>
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.quantityPerUnit}</td>
                                            <td>{item.discontinued}</td>
                                        </tr>
                                    </>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Content
