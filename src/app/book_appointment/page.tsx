// pages/index.js
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    date: new Date(),
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date:any) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <h1>Patient Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Select Date:</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            required
          />
        </div>
        <Button
        type="submit"
        
        color='primary'
        />
      </form>
    </div>
  );
};

export default FormPage;
