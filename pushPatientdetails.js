//import db from 'firebaseConfig.js';
import {db} from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

const patients = [
    { patientId: 1, patientName: "John Doe", birthDate: "1980-01-15", bloodGroup: "A+", phoneNumber: "555-0101" },
    { patientId: 2, patientName: "Jane Smith", birthDate: "1992-03-22", bloodGroup: "B-", phoneNumber: "555-0102" },
    { patientId: 3, patientName: "Alex Johnson", birthDate: "1985-07-30", bloodGroup: "O+", phoneNumber: "555-0103" },
    { patientId: 4, patientName: "Emily Davis", birthDate: "1978-11-12", bloodGroup: "AB+", phoneNumber: "555-0104" },
    { patientId: 5, patientName: "Michael Brown", birthDate: "1990-05-17", bloodGroup: "A-", phoneNumber: "555-0105" },
    { patientId: 6, patientName: "Sarah Wilson", birthDate: "1988-09-25", bloodGroup: "B+", phoneNumber: "555-0106" },
    { patientId: 7, patientName: "David Lee", birthDate: "1983-12-01", bloodGroup: "O-", phoneNumber: "555-0107" },
    { patientId: 8, patientName: "Laura Harris", birthDate: "1995-02-18", bloodGroup: "AB-", phoneNumber: "555-0108" },
    { patientId: 9, patientName: "Daniel Clark", birthDate: "1975-06-09", bloodGroup: "A+", phoneNumber: "555-0109" },
    { patientId: 10, patientName: "Olivia Martinez", birthDate: "1981-10-20", bloodGroup: "B-", phoneNumber: "555-0110" },
  ];
    

  // Function to add multiple patients to Firestore
async function addPatientsToFirestore(patients) {
    try {
      const collectionRef = collection(db, "patients");
      
      for (const patient of patients) {
        const docRef = await addDoc(collectionRef, patient);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All patients uploaded successfully!");
    } catch (e) {
      console.error("Error adding documents: ", e);
    }
  }
  
  // Call the function to add the patients
  addPatientsToFirestore(patients);
  