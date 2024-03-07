import { createClient } from "@vercel/postgres";
export const revalidate = 0 // revalidate at most every hour

export default async function handler(req, res) {
    if (req.method === 'POST') {
        var value_insert_new_kdrama = ""
        var isFirstLoop = true

        for (const entry of res.body.entries()) {
            if (isFirstLoop == true) {
                value_insert_new_kdrama = value_insert_new_kdrama + entry[1]
                isFirstLoop = false
            }
            else if (entry[0] == "kdrama_guarantee" || entry[0] == "kdrama_rating" || entry[0] == "kdrama_total_episode") {
                value_insert_new_kdrama = value_insert_new_kdrama + ", " + entry[1]
            } else {
                value_insert_new_kdrama = value_insert_new_kdrama + `, '${entry[1]}'`
            }
        }
        
        const client = createClient()
        await client.connect()
        try {

            const insert_new_kdrama = await client.query`
            INSERT INTO public.list_kdrama (
                kdrama_name, kdrama_total_episode, kdrama_status, kdrama_publish_date, 
                kdrama_rating, kdrama_where_to_watch, kdrama_image_url, kdrama_guarantee, 
                kdrama_duration, kdrama_content_rating, create_time, update_time
            )
            values (
                ${value_insert_new_kdrama}, current_timestamp, current_timestamp
            )
            `
            
            console.log(insert_new_kdrama);
            res.status(200).json({ success: true, message: 'Data inserted successfully' });
        } catch (error) { 
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        } finally {
            await client.end()
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}