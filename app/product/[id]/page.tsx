import React from 'react'

export default async function ProuductWithID ({ params }: { params: Promise<{id: number}> }) {
    const {id} = await params;
    return (
        <div>ProuductWithID = {id}</div>
    )
}
