import Image from 'next/image'
import { createClient } from "@vercel/postgres";

export const revalidate = 0 // revalidate at most every hour

async function getData() {
    const client = createClient()
    await client.connect()
    try {
        const { rows, fields } = await client.sql`
            select 
                kdrama_id, kdrama_name, kdrama_total_episode, kdrama_status, to_char(kdrama_publish_date, 'Mon dd, YYYY') as kdrama_publish_date,
                kdrama_rating, kdrama_where_to_watch, kdrama_image_url, kdrama_guarantee
            from list_kdrama
            order by kdrama_id asc
        `
        return rows
    } finally {
        await client.end()
    }
}

export default async function Home() {
    const rows = await getData()

    return (
        <>
            <div className='header bg-slate-500' id='header'>
                <p className='text-white text-center pb-1 pt-3 font-bold text-xl md:text-3xl'>My List K-Drama </p>
                <p className='text-white text-center pb-3 font-semibold text-sm md:text-1xl'>created by : @budiariyansa</p>
            </div>
            <main>
                <div className='container mx-auto'>
                    <div className='flex justify-center '>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {
                                rows.map((drama) => (
                                    <div className='card rounded-2xl shadow-2xl flex flex-col m-3 p-3 md:flex-row' key={drama.kdrama_id}>
                                        <div className='shrink'>
                                            <div className='relative'>
                                                {
                                                    drama.kdrama_guarantee === 1 && (
                                                        <Image 
                                                            src='/static/images/guarantee.png'
                                                            width={80}
                                                            height={80}
                                                            className='absolute top-0 right-0'
                                                            alt="<a href='https://pngtree.com/freepng/100-guarantee-grunge-stamp-print_5265625.html'>png image from pngtree.com/</a>"
                                                        />
                                                    )
                                                }
                                            </div>
                                            <Image
                                                src={drama.kdrama_image_url}
                                                alt={drama.kdrama_name}
                                                width={330}
                                                height={300}
                                                className='w-100 h-auto rounded-t-lg'
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
                                                <p className='font-semibold md:w-[55px] w-[45px]'>Watch :</p>
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
            <div className='sticky bottom-0'>
                <a href='#header' className='text-3xl font-bold absolute bottom-0 right-0 h-[50px] w-[50px] bg-gray-600 text-center rounded-lg text-white m-2 hover:bg-gray-900'>&#x2191;</a>
            </div>
        </>
    )

}
