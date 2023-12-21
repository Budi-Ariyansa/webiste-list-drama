import { sql } from "@vercel/postgres";

export default async function Table() {
    const { rows } = await sql`SELECT * FROM list_kdrama`
    return (
        <table className='table-auto border-2 border-white'>
            <thead>
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
    );
}