"use client"
import InputLabelComponent from "../ui/input-label-component"

export default function Admin() {
    async function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        try {
            const response = await fetch('/api/admin/submit', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const list_column = {
        "Kdrama Name": ["kdrama_name", "text"],
        "Kdrama Total Episode": ["kdrama_total_episode", "text"],
        "Kdrama Status": ["kdrama_status", "text"],
        "Kdrama Publish Date": ["kdrama_publish_date", "text"],
        "Kdrama Rating": ["kdrama_rating", "text"],
        "Kdrama Where to Watch": ["kdrama_where_to_watch", "text"],
        "Kdrama Image URL": ["kdrama_image_url", "url"],
        "Kdrama Guarantee": ["kdrama_guarantee", "text"],
        "Kdrama Duration": ["kdrama_duration", "text"],
        "Kdrama Content Rating": ["kdrama_content_rating", "text"]
    }
    return (
        <>
            <div className='header bg-slate-500 ' id='header'>
                <p className='text-white text-center pb-1 pt-3 font-bold text-xl md:text-3xl'>Admin Form Input </p>
                <p className='text-white text-center pb-3 font-semibold text-sm md:text-1xl'>created by : @budiariyansa</p>
            </div>
            <main>
                <div className='container mx-auto'>
                    <div className='flex justify-center mt-[10px] md:mt-[100px]'>
                        <form className="grid grid-cols-1" onSubmit={onSubmit}>
                            {
                                Object.entries(list_column).map(([label_string, more_attribute]) => (
                                    <InputLabelComponent
                                        key = {more_attribute[0]}
                                        label_string = {label_string}
                                        element_id = {more_attribute[0]}
                                        input_type = {more_attribute[1]}
                                    />
                                ))
                            }
                            <button type="submit" className="rounded-lg bg-blue-500 h-[50px] m-2 text-gray-200 font-semibold">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}