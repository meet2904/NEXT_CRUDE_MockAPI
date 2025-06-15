import { Console, log } from 'console';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function UpdateData({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    let data = await (await (fetch(`https://683899712c55e01d184dd573.mockapi.io/employee/${id}`))).json();
    console.log(id);

    async function UpdateStu(St: FormData) {
        'use server'
        const data = {
            name: St.get('name'),
            // id: St.get('id'),
        }
        console.log(data);
        const res = await fetch(`https://683899712c55e01d184dd573.mockapi.io/employee/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data ),
        });
        redirect("/student")
        console.log(res);
        
    }

    return (
        <>
            <form action={UpdateStu}>
                <input type='text' name="name" defaultValue={data.name}></input>
                {/* <input type='text' name="id" defaultValue={data.id}></input> */}
                <input type="submit" />
            </form>
        </>
    )
}
