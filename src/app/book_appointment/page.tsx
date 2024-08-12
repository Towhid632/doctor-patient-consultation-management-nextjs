'use client';
import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import router from "next/navigation";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4"> 
            Book an Appointment
        </h1>
        <div className="card">
            <form>
                <label className="block mb-2">Name:</label>
                <input
                className="rounded-full"
                type="text"
                id="name"
                name="name"
                //value={formData.name}
                //onChange={handleChange}
                
                />
                <label className="block mb-2">Phone no</label>
                <input
                    className="rounded-full"
                    type="tel"
                    id="phone"
                    name="phone"
                    // value={phoneNumber}
                    // onChange={handleChange}
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    
                    required
                />
                <label className="block mb-2">Date:</label>
                <DatePicker
                        className="rounded-full bg-clip-padding"
                    //   selected={selectedDate}
                    //   onChange={handleDateChange}
                    //   minDate={new Date()}
                    //   dateFormat="yyyy-MM-dd"
                    placeholderText=" Select a date"
                        required
                />

            </form>
        </div>
      

    </main>
  );
}