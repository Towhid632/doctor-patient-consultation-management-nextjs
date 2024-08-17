import React from 'react';
import { doctors } from 'D:/Desktop/my-consultation-app/doctorsdetailspush.js';
import Image from 'next/image';
import { bg } from 'date-fns/locale';
const cardClass = {
   width : "500px",
   height : "200px",
   display : "flex",
   justifyContent: "center", /* Center horizontally */
  alignItems: "center", /* Center vertically */
   padding: "20px",
   margin: "20px",
   background : "white"

};

const DoctorsListPage: React.FC = () => {
  // Array to hold the JSX elements
  const doctorElements: JSX.Element[] = [];

  // Using a for loop to populate the doctorElements array
  for (let i = 0; i < doctors.length; i++) {
    const doctor = doctors[i];
    doctorElements.push(
        <div key={doctor.doctorId} style={cardClass}>
           <Image
           src='/anonymous.png'
           alt = ""
           width = {50}
           height = {50}
           />
           
           <div>{doctor.name}
           <br/>
           {doctor.specialty}</div>
        </div>

    );
  }

  return (
    <div>
      <h1>Doctors List</h1>
      <ul>
        {doctorElements}
      </ul>
    </div>
  );
};

export default DoctorsListPage;
