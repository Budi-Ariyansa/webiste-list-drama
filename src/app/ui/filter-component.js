import Link from "next/link"
import { createClient } from "@vercel/postgres";

async function getData() {
    const client = createClient()
    await client.connect()
    try {

        const { rows, fields } = await client.sql`
            select distinct
                date_part('year', kdrama_publish_date)::text
            from list_kdrama
            order by 1;
        `
        return rows
    } finally {
        await client.end()
    }
}
export default async function Filter(props) {
    const list_year = await getData()
    return (
        <>
            <div className="text-center mt-3 mb-3">
                <p className="font-semibold">Tahun : </p>
                <div className="overflow-x-auto p-3">
                    {
                        list_year.map((year, index) => (
                            <Link key={index} href={`/filter/${year.date_part}`} className="p-2 m-1 bg-slate-500 rounded-lg text-white">{year.date_part}</Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}