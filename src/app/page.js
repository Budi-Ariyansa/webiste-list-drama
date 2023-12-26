import Image from 'next/image'
import { sql } from "@vercel/postgres";

export default async function Home() {
    const { rows } = await sql`
        select 
            kdrama_id, kdrama_name, kdrama_total_episode, to_char(kdrama_publish_date, 'Mon dd, YYYY') as kdrama_publish_date,
            kdrama_rating, kdrama_where_to_watch, kdrama_image_url
        from list_kdrama
    `
    console.log(rows.kdrama_name)
    return (
        <>
            <div className='header bg-slate-500'>
                <h2 className='text-white text-center py-5 font-bold text-xl md:text-3xl'>My Favorite K-Drama</h2>
            </div>
            <main>
                <div className='container mx-auto'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            {
                                rows.map((drama) => (
                                    <div className='card rounded-2xl shadow-xl flex flex-col m-3 p-3 md:flex-row' key={drama.kdrama_id}>
                                        <div className='shrink'>
                                            <Image
                                                src={drama.kdrama_image_url}
                                                alt={drama.kdrama_name}
                                                width={250}
                                                height={300}
                                                className='w-auto h-auto rounded-t-lg'
                                            />
                                        </div>
                                        <div className='flex-col pl-0 md:pl-3'>
                                            <p className='text-xl md:w-[350px] w-[320px] md:text-2xl font-bold mb-3 mt-2'>{drama.kdrama_name}</p>
                                            <div className='flex text-[13px] md:text-base'>
                                                <p className='font-semibold'>Total Episode :</p>
                                                <p className='pl-1'>{drama.kdrama_total_episode} episode</p>
                                            </div>
                                            <div className='flex text-[13px] md:text-base'>
                                                <p className='font-semibold'>Status :</p>
                                                <p className='pl-1'>{drama.kdrama_status}</p>
                                            </div>
                                            <div className='flex text-[13px] md:text-base'>
                                                <p className='font-semibold'>Publish Date :</p>
                                                <p className='pl-1'>{drama.kdrama_publish_date}</p>
                                            </div>
                                            <div className='flex text-[13px] md:text-base'>
                                                <p className='font-semibold'>My Rating :</p>
                                                <p className='pl-1'>{drama.kdrama_rating}/10</p>
                                            </div>
                                            <div className='flex text-[13px] md:text-base'>
                                                <p className='font-semibold'>Watch :</p>
                                                <p className='pl-1 md:w-[350px] w-[250px]'>{drama.kdrama_where_to_watch}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
