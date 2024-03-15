export default function InputLabelComponent(props) {
    const label_string = props.label_string;
    const element_id = props.element_id;
    const input_type = props.input_type;
    const required = props.required
    
    return (
        <div className="m-2 grid grid-cols-1 md:grid-cols-2">
            <label className="text-base font-semibold" htmlFor={element_id}>{label_string} : </label>
            {input_type[0] == "select" ? (
                <select className="rounded-lg" id={element_id} name={element_id} required={required}>
                    {
                        input_type[1].map((data) => (
                            <option key={data} value={data == "Guarantee" ? 1 : (data == "Not Really" ? 0 : data)}>{data}</option>
                        ))
                    }
                </select>
            ) : (
                <input className="rounded-lg" size="50" type={input_type} id={element_id} name={element_id} required={required}></input>
            )}
        </div>
    )
}