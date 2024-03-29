import { createClient } from "@vercel/postgres";
import FilterComponent from "@/app/ui/filter-component";
import CardComponent from "@/app/ui/card-component";

export const revalidate = 0 // revalidate at most every hour

async function getData(filter_year) {
    const client = createClient()
    await client.connect()
    try {

        const query_list_kdrama_filter = await client.sql`
            select 
                kdrama_id, kdrama_name, kdrama_total_episode, kdrama_status, to_char(kdrama_publish_date, 'Mon dd, YYYY') as kdrama_publish_date,
                kdrama_rating, kdrama_where_to_watch, kdrama_image_url, kdrama_guarantee, kdrama_duration, kdrama_content_rating
            from list_kdrama
            where date_part('year', kdrama_publish_date)::text = ${filter_year}
            order by kdrama_id asc
        `

        const query_list_year = await client.sql`
            select distinct
                date_part('year', kdrama_publish_date)::text
            from list_kdrama
            order by 1;
        `

        return [query_list_kdrama_filter.rows, query_list_year.rows]
    } finally {
        await client.end()
    }
}

export default async function Filter({params}) {
    const filter_year = params.year
    const [list_kdrama, list_year] = await getData(filter_year)
    const list_status = [{"kdrama_status":"Ongoing"}, {"kdrama_status":"Complete"}]
    
    return (
        <>
            <div className='header bg-slate-500 ' id='header'>
                <p className='text-white text-center pb-1 pt-3 font-bold text-xl md:text-3xl'>My List K-Drama </p>
                <p className='text-white text-center pb-3 font-semibold text-sm md:text-1xl'>created by : @budiariyansa</p>
            </div>
            <main>
                <div className='container mx-auto'>
                    <div className="grid grid-cols-2 place-items-center mt-4 gap-2">
                        <FilterComponent list_data={list_year} label="Tahun" disabled={false}/>
                        <FilterComponent list_data={list_status} label="Status" disabled={true}/>
                    </div>
                    <div className='flex justify-center '>
                        <div className='grid grid-cols-2 md:grid-cols-3'>
                            {
                                list_kdrama.map((drama) => (
                                    <CardComponent key={drama.kdrama_id}
                                        kdrama_id = {drama.kdrama_id}
                                        kdrama_image_url = {drama.kdrama_image_url}
                                        kdrama_name = {drama.kdrama_name}
                                        kdrama_guarantee = {drama.kdrama_guarantee}
                                        kdrama_total_episode = {drama.kdrama_total_episode}
                                        kdrama_status = {drama.kdrama_status}
                                        kdrama_publish_date = {drama.kdrama_publish_date}
                                        kdrama_duration = {drama.kdrama_duration}
                                        kdrama_content_rating = {drama.kdrama_content_rating}
                                        kdrama_rating = {drama.kdrama_rating}
                                        kdrama_where_to_watch = {drama.kdrama_where_to_watch}
                                    />
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