import Image from 'next/image'

export default function Card(props) {
    const kdrama_id = props.kdrama_id
    const kdrama_image_url = props.kdrama_image_url
    const kdrama_name = props.kdrama_name
    const kdrama_guarantee = props.kdrama_guarantee
    const kdrama_total_episode = props.kdrama_total_episode
    const kdrama_status = props.kdrama_status
    const kdrama_publish_date = props.kdrama_publish_date
    const kdrama_duration = props.kdrama_duration
    const kdrama_content_rating = props.kdrama_content_rating
    const kdrama_rating = props.kdrama_rating
    const kdrama_where_to_watch = props.kdrama_where_to_watch

    return (
        <>
            <div className='card rounded-2xl shadow-2xl flex flex-col m-3 p-3 md:flex-row' key={kdrama_id}>
                <div className='shrink'>
                    <div className='relative'>
                        {
                            kdrama_guarantee === 1 && (
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
                        src={kdrama_image_url}
                        alt={kdrama_name}
                        width={330}
                        height={300}
                        className='w-100 h-auto rounded-t-lg'
                    />
                </div>
                <div className='flex-col pl-0 md:pl-3'>
                    <p className='text-xl md:w-[350px] w-[320px] md:text-2xl font-bold mb-3 mt-2'>{kdrama_name}</p>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>Total Episode :</p>
                        <p className='pl-1'>{kdrama_total_episode} episode</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>Status :</p>
                        <p className='pl-1'>{kdrama_status}</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>Publish Date :</p>
                        <p className='pl-1'>{kdrama_publish_date}</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>Duration :</p>
                        <p className='pl-1'>{kdrama_duration}</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>Content Rating :</p>
                        <p className='pl-1'>{kdrama_content_rating}</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold'>My Rating :</p>
                        <p className='pl-1'>{kdrama_rating}/10</p>
                    </div>
                    <div className='flex text-[13px] md:text-base'>
                        <p className='font-semibold md:w-[55px] w-[45px]'>Watch :</p>
                        <p className='pl-1 md:w-[350px] w-[250px]'>{kdrama_where_to_watch}</p>
                    </div>
                </div>
            </div>
        </>
    )
}