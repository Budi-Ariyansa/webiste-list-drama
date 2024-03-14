"use client"
import InputLabelComponent from "../ui/input-label-component"
import React, { useState } from 'react'

function getKdramaValues(formData) {
    let value_insert_new_kdrama = "";

    for (const [key, value] of formData.entries()) {
        if (key === "kdrama_guarantee" || key === "kdrama_rating" || key === "kdrama_total_episode") {
            value_insert_new_kdrama += `, ${value}`;
        } else {
            value_insert_new_kdrama += `, '${value}'`;
        }
    }
    return value_insert_new_kdrama.substring(2); // Remove the leading comma and space
}

export default function Admin() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const formData = new FormData(event.target)
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: getKdramaValues(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            const data = await response.json();
            if (data.success === true) {
                setSuccess(data.message)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const list_column = {
        "Kdrama Name": ["kdrama_name", "text"],
        "Kdrama Total Episode": ["kdrama_total_episode", "text"],
        "Kdrama Status": ["kdrama_status", "text"],
        "Kdrama Publish Date": ["kdrama_publish_date", "text"],
        "Kdrama Rating": ["kdrama_rating", "text"],
        "Kdrama Where to Watch": ["kdrama_where_to_watch", "text"],
        "Kdrama Image URL": ["kdrama_image_url", "url"],
        "Kdrama Guarantee": ["kdrama_guarantee", ["select", ["Guarantee", "Not Really"]]],
        "Kdrama Duration": ["kdrama_duration", "text"],
        "Kdrama Content Rating": ["kdrama_content_rating", ["select", ["13+ - Teens 13 or older", "15+ - Teens 15 or older", "18+ Restricted", "18+ Restricted (violence & profanity)"]]]
    }
    
    return (
        <>
            <div className='header bg-slate-500 ' id='header'>
                <p className='text-white text-center pb-1 pt-3 font-bold text-xl md:text-3xl'>Admin Form Input </p>
                <p className='text-white text-center pb-3 font-semibold text-sm md:text-1xl'>created by : @budiariyansa</p>
            </div>
            <main>
                <div className='container mx-auto'>
                    <div className='flex justify-center mt-[10px] md:mt-[100px]'>
                        <form className="grid grid-cols-1" onSubmit={onSubmit}>
                            {error && <div style={{ color: 'red' }}>{error}</div>}
                            {success && <div style={{ color: 'green' }}>{success}</div>}
                            {
                                Object.entries(list_column).map(([label_string, more_attribute]) => (
                                    <InputLabelComponent
                                        key = {more_attribute[0]}
                                        label_string = {label_string}
                                        element_id = {more_attribute[0]}
                                        input_type = {more_attribute[1]}
                                        required = {true}
                                    />
                                ))
                            }
                            <button type="submit" className="rounded-lg bg-blue-500 h-[50px] m-2 text-gray-200 font-semibold" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}