export default function Table() {
    const data = ['1..', 'Bussines Proposal', '2020', '10/10']
    return (
        <table className='table-auto border-2 border-white'>
            <thead>
                <tr>
                    <th className='border-2 border-white p-2'>No.</th>
                    <th className='border-2 border-white p-2'>Drama Name</th>
                    <th className='border-2 border-white p-2'>Relase Year</th>
                    <th className='border-2 border-white p-2'>Rating</th>
                </tr>
            </thead>
            <tr>
                {
                    data && data.map((item, index) => (
                        <td key={index} className='border-2 border-white p-2'>{item}</td>
                    ))
                }
            </tr>
        </table>
    );
}