import Image from 'next/image'
import { sql } from "@vercel/postgres";

export default async function Home() {
    const { rows } = await sql`
        select 
            kdrama_id, kdrama_name, kdrama_total_episode, to_char(kdrama_publish_date, 'Mon dd YYYY') as kdrama_publish_date,
            kdrama_rating, kdrama_where_to_watch, kdrama_image_url
        from list_kdrama
    `
    return (
        <main>
            <div className='container mx-auto'>
                <h2 className='text-center py-5 font-bold text-xl md:text-3xl'>My Favorite K-Drama</h2>

                <div className='flex justify-center'>
                    <div className='flex flex-col'>
                        {
                            rows.map((drama) => (
                                <div className='card rounded-2xl shadow-xl flex flex-col m-3 border border-2 border-gray-400 p-3 md:flex-row' key={drama.kdrama_id}>
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
                                        <p className='text-xl md:w-[350px] w-[300px] md:text-2xl font-bold mb-3 mt-2'>{drama.kdrama_name}</p>
                                        <div className='flex text-[12px] md:text-base'>
                                            <p>Total Episode :</p>
                                            <p className='pl-1'>{drama.kdrama_total_episode} episode</p>
                                        </div>
                                        <div className='flex text-[12px] md:text-base'>
                                            <p>Publish Date :</p>
                                            <p className='pl-1'>{drama.kdrama_publish_date}</p>
                                        </div>
                                        <div className='flex text-[12px] md:text-base'>
                                            <p>My Rating :</p>
                                            <p className='pl-1'>{drama.kdrama_rating}/10</p>
                                        </div>
                                        <div className='flex text-[12px] md:text-base'>
                                            <p>Watch :</p>
                                            <p className='pl-1 md:w-[350px] w-[300px]'>{drama.kdrama_where_to_watch}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
