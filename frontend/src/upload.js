import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Upload() {
  const [form, setForm] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    setForm(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const finalForm = new FormData();
    finalForm.append('file', form);
    finalForm.append('title', id);

    try {
      await axios.post('http://localhost:5000/upload', finalForm);
      window.location = '/';
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Upload File</h2>
      <div className="mt-4">
        <div className="flex">
          <label className="text-lg mr-2">Health record:</label>
          <input type="file" onChange={handleChange} className="mb-2" />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
