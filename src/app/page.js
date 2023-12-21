import Image from 'next/image'

import { sql } from "@vercel/postgres";

export default async function Home() {
    const { rows } = await sql`SELECT * FROM list_kdrama`
    return (
        <main>
            <div className='container mx-auto'>
                <h2 className='text-center text-2xl py-5 font-bold'>K-Drama List Budi</h2>

                <div className='flex justify-center'>
                    <table className='m-3 border-2 border-white'>
                        <thead className="text-left bg-cyan-800">
                            <tr>
                                <th className='border-2 border-white p-2'>No.</th>
                                <th className='border-2 border-white p-2'>Drama Name</th>
                                <th className='border-2 border-white p-2'>Relase Year</th>
                                <th className='border-2 border-white p-2'>Rating</th>
                                <th className='border-2 border-white p-2'>Watching On</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            rows.map((row) => (
                                <tr key={row.kdrama_id} >
                                    <td className='border-2 border-white p-2'>{row.kdrama_id}</td>
                                    <td className='border-2 border-white p-2'>{row.kdrama_name}</td>
                                    <td className='border-2 border-white p-2'>{row.kdrama_release_date}</td>
                                    <td className='border-2 border-white p-2'>{row.kdrama_rating}</td>  
                                    <td className='border-2 border-white p-2'>{row.kdrama_watchin_on}</td>  
                                </tr>
                            ))
                        }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </main>
    )
}
