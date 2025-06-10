import React from 'react'

export default async function GetApiById({params}:{params:Promise<{id:number}>}) {
    const {id} = await params;
    let data = await(fetch(`https://683899712c55e01d184dd573.mockapi.io/employee/${id}`));
    let stu =  await data.json();

     

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td><img src={stu.avatar} alt="" className='img-thumbnail' /></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
