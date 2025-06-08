import Link from 'next/link';
import React from 'react'

export default async function Student() {

    let data = await(fetch('https://683899712c55e01d184dd573.mockapi.io/employee'))
    let stu = await data.json();


    return (
        <ul>
            {stu.map((item: any)=>(
                <>
                <li key={item.id} >{item.name}</li>
                <li><Link href={"/student/"+item.id}><button className='bg-primary text-white'>VIEW</button></Link></li>
               </>
            ))}
        </ul>
  )
}
