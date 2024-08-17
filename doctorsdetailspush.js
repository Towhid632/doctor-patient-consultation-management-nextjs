import {db} from './firebaseConfig.js';

import { collection, addDoc } from "firebase/firestore";


const doctors = [
    { doctorId: 1, name: "Dr. John Smith", specialty: "Cardiology" },
    { doctorId: 2, name: "Dr. Jane Doe", specialty: "Neurology" },
    { doctorId: 3, name: "Dr. Emily Davis", specialty: "Orthopedics" },
    { doctorId: 4, name: "Dr. Michael Johnson", specialty: "Pediatrics" },
    { doctorId: 5, name: "Dr. Sarah Brown", specialty: "Dermatology" },
    { doctorId: 6, name: "Dr. David Wilson", specialty: "Gastroenterology" },
    { doctorId: 7, name: "Dr. Laura Martinez", specialty: "Internal Medicine" },
    { doctorId: 8, name: "Dr. Robert Lee", specialty: "Endocrinology" },
    { doctorId: 9, name: "Dr. Olivia Anderson", specialty: "Psychiatry" },
    { doctorId: 10, name: "Dr. James Taylor", specialty: "Surgery" },
  ];

  async function addDoctorsToFirestore(patients) {
    try {
      const collectionRef = collection(db, "doctors");
      
      for (const doctor of doctors) {
        const docRef = await addDoc(collectionRef, doctor);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All doctors uploaded successfully!");
    } catch (e) {
      console.error("Error adding documents: ", e);
    }
  }
  
  // Call the function to add the patients
  addDoctorsToFirestore(doctors);
  

  export {doctors} ;