import React, { useState } from "react";

function InputArea(props) {
    const [inputIndex, setInputIndex] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setInputIndex(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputIndex} />
            <button onClick={() => {
                props.onAdd(inputIndex);
                setInputIndex("");
            }}>
              <span>Add</span>
            </button>
      </div>
    )
}

export default InputArea;