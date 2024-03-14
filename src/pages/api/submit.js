import { createClient } from "@vercel/postgres";
// export const revalidate = 0 // revalidate at most every hour

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;
            await insertIntoDatabase(formData);
            res.status(200).json({ success: true, message: 'Data inserted successfully'});
        } catch (error) { 
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}

async function insertIntoDatabase(formData) {
    const client = new createClient();

    try {
        await client.connect();

        const query = `
            INSERT INTO public.list_kdrama (
                kdrama_name, kdrama_total_episode, kdrama_status, kdrama_publish_date, 
                kdrama_rating, kdrama_where_to_watch, kdrama_image_url, kdrama_guarantee, 
                kdrama_duration, kdrama_content_rating, create_time, update_time
            )
            VALUES (
                ${formData}, current_timestamp, current_timestamp
            )
        `;

        await client.query(query);
    } catch (error) {
        console.error('Error inserting into database:', error);
        throw error;
    } finally {
        await client.end();
    }
}