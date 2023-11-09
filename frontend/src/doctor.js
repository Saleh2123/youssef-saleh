
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Doctor(){
    const {id}=useParams();
    const [formData, setFormData] = useState({
        affiliation: '',
        rate: '',
        username:id
        ,email:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:5000/docedit",formData)
        console.log('Form submitted:', formData);
        alert("Form submitted");
        // You can add further logic to handle form submission (e.g., API call).
      };
    
      return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
        
    
          <div>
         <h2 className="text-3xl font-semibold">
          
            Edit doctor info
          
          </h2> 
          </div>
          <div>
          <h2 className="text-2xl font-semibold">
            Email:</h2>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/4 border-gray-300 rounded-md p-2"
            />
          
          </div>
          <div > 
          <br />
          
          <h2 className="text-2xl font-semibold">
            Hourlyrate:</h2>
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="w-1/4 border-gray-300 rounded-md p-2"
            />
      
      </div>
      <div>
      <h2 className="text-2xl font-semibold">
            Affiliation:</h2>
            <input
              type="text"
              name="affiliation"
              className="w-1/4 border-gray-300 rounded-md p-2"
              value={formData.affiliation}
              onChange={handleChange}
              
            />
      
         </div>
          <br />  
          <div>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Update info</button>
         </div>
        
        <div>
        <Link to="viewpatients">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View patients</button>
         </Link>
         </div>
         <div>
        <Link to="apt">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View patients</button>
         </Link>
         </div>
          <Link to="upload2">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">upload documents</button>
         </Link>
         
        
         </div>
      </form>
      
      );




















}