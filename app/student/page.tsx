import Link from 'next/link';
import React from 'react'
import Deletedata from './deletedata';
import { redirect } from 'next/navigation';

export default async function Student() {
    
    let stu =await  (await (fetch('https://683899712c55e01d184dd573.mockapi.io/employee'))).json();
    
    async function DeleteStu(id:any) {
        'use server'
        const res = await fetch(`https://683899712c55e01d184dd573.mockapi.io/employee/${id}`, {
            method: 'DELETE',
        })
        
    }

    
    return (
        <ul>
            {stu.map((item: any) => (
                <div key={item.id}>
                    <li key={item.id} >{item.name}</li>
                    <li><Link href={"/student/" + item.id}><button className='bg-primary text-white'>VIEW</button></Link></li>
                    <Deletedata id={item.id} fnToDelete={DeleteStu} />
                    <li><Link href={"/update/"+ item.id}><button>Update</button></Link></li>
                </div>
            ))}
        </ul>
    )
}
