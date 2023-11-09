import axios from "axios";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function Upload2(){
    const [form1, setForm1] = useState(null);
    const [form2, setForm2] = useState(null);
    const [form3, setForm3] = useState(null);
    const {id} = useParams();

    const handleFile1Change = (e) => {
        setForm1(e.target.files[0]);
    }

    const handleFile2Change = (e) => {
        setForm2(e.target.files[0]);
    }

    const handleFile3Change = (e) => {
        setForm3(e.target.files[0]);
    }

    const submit = async () => {
        const finalForm = new FormData();
        finalForm.append("file1", form1);
        finalForm.append("file2", form2);
        finalForm.append("file3", form3);
        finalForm.append("title", id);

        await axios.post('http://localhost:5000/upload2', finalForm);
        window.location = "/";
    }

    return (
        <div>
            <div>
                <input type="file" onChange={handleFile1Change}></input> 
            </div>
            <div>
                <input type="file" onChange={handleFile2Change}></input> 
            </div>
            <div>
                <input type="file" onChange={handleFile3Change}></input> 
            </div>
            <button onClick={submit}>Upload</button>
        </div>
        
    );
}