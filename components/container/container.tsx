"use client"
import {useState, useEffect} from 'react'
import Event from "./event";

export default function Container() {
    const [events, setEvents] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then((res) => res.json())
            .then((data) => {
                setEvents(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!events) return <p>No profile data</p>

    return (
        <>
            <div className="job-list mb-10">
                <h3 className="mb-4">Design</h3>
                {events.map((event: any) => (
                    <Event event={event} key={event.id}/>
                ))}
            </div>
        </>
    )
}