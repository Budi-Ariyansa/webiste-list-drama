export default function InputLabelComponent(props) {
    const label_string = props.label_string;
    const element_id = props.element_id;
    const input_type = props.input_type
    
    return (
        <>
            <div className="m-2 grid grid-cols-1 md:grid-cols-2">
                <label className="text-base font-semibold" htmlFor={element_id}>{label_string} : </label>
                <input className="rounded-lg" size="50" type={input_type} id={element_id} name={element_id}></input>
            </div>
        </>
    )
}