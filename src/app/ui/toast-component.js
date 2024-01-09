export default function Toast(props) {
    const title = props.title
    const content = props.content
    return (
        <>
            <div id="toast-message-cta" className="w-full max-w-xs p-4 rounded-lg bg-slate-500" role="alert">
                <div className="flex">
                    <div className="ms-3 text-sm font-normal">
                        <span className="mb-1 text-base font-semibold text-blue-200">{title}</span>
                        <div className="mb-2 text-sm font-normal text-white">{content}</div> 
                    </div>
                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-600 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}