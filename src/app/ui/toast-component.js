"use client"
import { Toast } from "flowbite-react"
import { useState } from "react"

export default function ToastComponent(props) {
    const title = props.title
    const content = props.content
    const show = props.show 

    const [showToast, setShowToast] = useState(show)

    return (
        <div> 
            {showToast && (
                <Toast
                    className="bg-slate-500 relative"
                >
                    <div className="flex-rows text-gray-200 pb-2">
                        <p className="text-lg font-semibold">{title}</p>
                        <p className="text-sm">{content}</p>
                    </div>
                    <Toast.Toggle onDismiss={() => setShowToast(false)} className="text-black absolute bottom-0 right-0 m-2"/>
                </Toast>
            )}
        </div>
        
    )
}