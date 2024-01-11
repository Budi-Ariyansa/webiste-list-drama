"use client"

import { Dropdown } from "flowbite-react";
import Link from "next/link";

export default function FilterComponent(props) {
    const label = props.label
    const list_data = props.list_data
    const disabled = props.disabled

    const list_data_key = Object.keys(list_data[0])

    return (
        <Dropdown dismissOnClick={false} label={label} disabled={disabled}>
            {
                list_data.map((data, index) => (
                    <Dropdown.Item as={Link} href={`/filter/${data[list_data_key]}`} key={index}>{data[list_data_key]}</Dropdown.Item>
                ))
            }
        </Dropdown>
    )
    // return (
    //     <>
    //         <div className="text-center mt-3 mb-3">
    //             <p className="font-semibold">Tahun : </p>
    //             <div className="overflow-x-auto p-3">
    //                 {
    //                     list_year.map((year, index) => (
    //                         <Link key={index} href={`/filter/${year.date_part}`} className="p-2 m-1 bg-slate-500 rounded-lg text-white">{year.date_part}</Link>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     </>
    // )
}