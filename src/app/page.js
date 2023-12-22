import Image from 'next/image'

import { sql } from "@vercel/postgres";

export default async function Home() {
    const { rows } = await sql`SELECT * FROM list_kdrama`
    return (
        <main>
            <div className='container mx-auto'>
                <h2 className='text-center text-2xl py-5 font-bold text-sm md:text-base'>K-Drama List Budi</h2>

                <div className='flex justify-center'>
                    <table className='m-3 border border-black'>
                        <thead className="text-left bg-cyan-800">
                            <tr>
                                <th className='border border-black p-2 text-[10px] md:text-base text-white'>No.</th>
                                <th className='border border-black p-2 text-[10px] md:text-base text-white'>Drama Name</th>
                                <th className='border border-black p-2 text-[10px] md:text-base text-white'>Relase Year</th>
                                <th className='border border-black p-2 text-[10px] md:text-base text-white'>Rating</th>
                                <th className='border border-black p-2 text-[10px] md:text-base text-white'>Watching On</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            rows.map((row) => (
                                <tr key={row.kdrama_id} >
                                    <td className='border border-black p-2 text-[10px] md:text-base'>{row.kdrama_id}</td>
                                    <td className='border border-black p-2 text-[10px] md:text-base'>{row.kdrama_name}</td>
                                    <td className='border border-black p-2 text-[10px] md:text-base'>{row.kdrama_release_date}</td>
                                    <td className='border border-black p-2 text-[10px] md:text-base'>{row.kdrama_rating}</td>  
                                    <td className='border border-black p-2 text-[10px] md:text-base'>{row.kdrama_watchin_on}</td>  
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
