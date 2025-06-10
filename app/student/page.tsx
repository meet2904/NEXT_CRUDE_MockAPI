import Link from 'next/link';
import React from 'react'
import Deletedata from './deletedata';
import { redirect } from 'next/navigation';

export default async function Student() {
    
    let data = await (fetch('https://683899712c55e01d184dd573.mockapi.io/employee'))
    let stu = await data.json();
    
    async function DeleteStu(id:any) {
        'use server'
        const res = await fetch(`https://683899712c55e01d184dd573.mockapi.io/employee/${id}`, {
            method: 'DELETE',
        })

        if (res.ok) {
            
            redirect("/student")
        }
        
    }

    return (
        <ul>
            {stu.map((item: any) => (
                <>
                    <li key={item.id} >{item.name}</li>
                    <li><Link href={"/student/" + item.id}><button className='bg-primary text-white'>VIEW</button></Link></li>
                    <Deletedata id={item.id} fnToDelete={DeleteStu} />
                </>
            ))}
        </ul>
    )
}
