import Image from 'next/image'
import Table from '../../components/Table'

export default function Home() {
    return (
        <main>
            <div className='container mx-auto'>
                <h2 className='text-center text-2xl py-5 font-bold'>K-Drama List Budi</h2>

                <div className='flex justify-center p-2'>
                    <Table />
                </div>
            </div>
        </main>
    )
}
