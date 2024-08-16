import {db} from './firebaseConfig.js';

import { collection, addDoc } from "firebase/firestore";


const consultations = [
    { consultationId: 1, patientId: 1, patientName: "John Doe", doctorId: 1, doctorName: "Dr. John Smith", date: "2024-08-15", time: "09:00" },
    { consultationId: 2, patientId: 2, patientName: "Alice Johnson", doctorId: 2, doctorName: "Dr. Jane Doe", date: "2024-08-15", time: "10:00" },
    { consultationId: 3, patientId: 3, patientName: "Bob Brown", doctorId: 3, doctorName: "Dr. Emily Davis", date: "2024-08-15", time: "11:00" },
    { consultationId: 4, patientId: 4, patientName: "Charlie Davis", doctorId: 4, doctorName: "Dr. Michael Johnson", date: "2024-08-15", time: "12:00" },
    { consultationId: 5, patientId: 5, patientName: "Diana Miller", doctorId: 5, doctorName: "Dr. Sarah Brown", date: "2024-08-15", time: "13:00" },
    { consultationId: 6, patientId: 6, patientName: "Eve Wilson", doctorId: 6, doctorName: "Dr. David Wilson", date: "2024-08-15", time: "14:00" },
    { consultationId: 7, patientId: 7, patientName: "Frank Moore", doctorId: 7, doctorName: "Dr. Laura Martinez", date: "2024-08-15", time: "15:00" },
    { consultationId: 8, patientId: 8, patientName: "Grace Taylor", doctorId: 8, doctorName: "Dr. Robert Lee", date: "2024-08-15", time: "16:00" },
    { consultationId: 9, patientId: 9, patientName: "Hank Brown", doctorId: 9, doctorName: "Dr. Olivia Anderson", date: "2024-08-15", time: "17:00" },
    { consultationId: 10, patientId: 10, patientName: "Ivy Davis", doctorId: 10, doctorName: "Dr. James Taylor", date: "2024-08-15", time: "18:00" },
    { consultationId: 11, patientId: 1, patientName: "John Doe", doctorId: 2, doctorName: "Dr. Jane Doe", date: "2024-08-16", time: "09:00" },
    { consultationId: 12, patientId: 2, patientName: "Alice Johnson", doctorId: 3, doctorName: "Dr. Emily Davis", date: "2024-08-16", time: "10:00" },
    { consultationId: 13, patientId: 3, patientName: "Bob Brown", doctorId: 4, doctorName: "Dr. Michael Johnson", date: "2024-08-16", time: "11:00" },
    { consultationId: 14, patientId: 4, patientName: "Charlie Davis", doctorId: 5, doctorName: "Dr. Sarah Brown", date: "2024-08-16", time: "12:00" },
    { consultationId: 15, patientId: 5, patientName: "Diana Miller", doctorId: 6, doctorName: "Dr. David Wilson", date: "2024-08-16", time: "13:00" },
    { consultationId: 16, patientId: 6, patientName: "Eve Wilson", doctorId: 7, doctorName: "Dr. Laura Martinez", date: "2024-08-16", time: "14:00" },
    { consultationId: 17, patientId: 7, patientName: "Frank Moore", doctorId: 8, doctorName: "Dr. Robert Lee", date: "2024-08-16", time: "15:00" },
    { consultationId: 18, patientId: 8, patientName: "Grace Taylor", doctorId: 9, doctorName: "Dr. Olivia Anderson", date: "2024-08-16", time: "16:00" },
    { consultationId: 19, patientId: 9, patientName: "Hank Brown", doctorId: 10, doctorName: "Dr. James Taylor", date: "2024-08-16", time: "17:00" },
    { consultationId: 20, patientId: 10, patientName: "Ivy Davis", doctorId: 1, doctorName: "Dr. John Smith", date: "2024-08-16", time: "18:00" },
    { consultationId: 21, patientId: 1, patientName: "John Doe", doctorId: 3, doctorName: "Dr. Emily Davis", date: "2024-08-17", time: "09:00" },
    { consultationId: 22, patientId: 2, patientName: "Alice Johnson", doctorId: 4, doctorName: "Dr. Michael Johnson", date: "2024-08-17", time: "10:00" },
    { consultationId: 23, patientId: 3, patientName: "Bob Brown", doctorId: 5, doctorName: "Dr. Sarah Brown", date: "2024-08-17", time: "11:00" },
    { consultationId: 24, patientId: 4, patientName: "Charlie Davis", doctorId: 6, doctorName: "Dr. David Wilson", date: "2024-08-17", time: "12:00" },
    { consultationId: 25, patientId: 5, patientName: "Diana Miller", doctorId: 7, doctorName: "Dr. Laura Martinez", date: "2024-08-17", time: "13:00" },
    { consultationId: 26, patientId: 6, patientName: "Eve Wilson", doctorId: 8, doctorName: "Dr. Robert Lee", date: "2024-08-17", time: "14:00" },
    { consultationId: 27, patientId: 7, patientName: "Frank Moore", doctorId: 9, doctorName: "Dr. Olivia Anderson", date: "2024-08-17", time: "15:00" },
    { consultationId: 28, patientId: 8, patientName: "Grace Taylor", doctorId: 10, doctorName: "Dr. James Taylor", date: "2024-08-17", time: "16:00" },
    { consultationId: 29, patientId: 9, patientName: "Hank Brown", doctorId: 1, doctorName: "Dr. John Smith", date: "2024-08-17", time: "17:00" },
    { consultationId: 30, patientId: 10, patientName: "Ivy Davis", doctorId: 2, doctorName: "Dr. Jane Doe", date: "2024-08-17", time: "18:00" },
    { consultationId: 31, patientId: 1, patientName: "John Doe", doctorId: 4, doctorName: "Dr. Michael Johnson", date: "2024-08-18", time: "09:00" },
    { consultationId: 32, patientId: 2, patientName: "Alice Johnson", doctorId: 5, doctorName: "Dr. Sarah Brown", date: "2024-08-18", time: "10:00" },
    { consultationId: 33, patientId: 3, patientName: "Bob Brown", doctorId: 6, doctorName: "Dr. David Wilson", date: "2024-08-18", time: "11:00" },
    { consultationId: 34, patientId: 4, patientName: "Charlie Davis", doctorId: 7, doctorName: "Dr. Laura Martinez", date: "2024-08-18", time: "12:00" },
    { consultationId: 35, patientId: 5, patientName: "Diana Miller", doctorId: 8, doctorName: "Dr. Robert Lee", date: "2024-08-18", time: "13:00" },
    { consultationId: 36, patientId: 6, patientName: "Eve Wilson", doctorId: 9, doctorName: "Dr. Olivia Anderson", date: "2024-08-18", time: "14:00" },
    { consultationId: 37, patientId: 7, patientName: "Frank Moore", doctorId: 10, doctorName: "Dr. James Taylor", date: "2024-08-18", time: "15:00" },
    { consultationId: 38, patientId: 8, patientName: "Grace Taylor", doctorId: 1, doctorName: "Dr. John Smith", date: "2024-08-18", time: "16:00" },
    { consultationId: 39, patientId: 9, patientName: "Hank Brown", doctorId: 2, doctorName: "Dr. Jane Doe", date: "2024-08-18", time: "17:00" },
    { consultationId: 40, patientId: 10, patientName: "Ivy Davis", doctorId: 3, doctorName: "Dr. Emily Davis", date: "2024-08-18", time: "18:00" },
    { consultationId: 41, patientId: 1, patientName: "John Doe", doctorId: 5, doctorName: "Dr. Sarah Brown", date: "2024-08-19", time: "09:00" },
    { consultationId: 42, patientId: 2, patientName: "Alice Johnson", doctorId: 6, doctorName: "Dr. David Wilson", date: "2024-08-19", time: "10:00" },
    { consultationId: 43, patientId: 3, patientName: "Bob Brown", doctorId: 7, doctorName: "Dr. Laura Martinez", date: "2024-08-19", time: "11:00" },
    { consultationId: 44, patientId: 4, patientName: "Charlie Davis", doctorId: 8, doctorName: "Dr. Robert Lee", date: "2024-08-19", time: "12:00" },
    { consultationId: 45, patientId: 5, patientName: "Diana Miller", doctorId: 9, doctorName: "Dr. Olivia Anderson", date: "2024-08-19", time: "13:00" },
    { consultationId: 46, patientId: 6, patientName: "Eve Wilson", doctorId: 10, doctorName: "Dr. James Taylor", date: "2024-08-19", time: "14:00" },
    { consultationId: 47, patientId: 7, patientName: "Frank Moore", doctorId: 1, doctorName: "Dr. John Smith", date: "2024-08-19", time: "15:00" },
    { consultationId: 48, patientId: 8, patientName: "Grace Taylor", doctorId: 2, doctorName: "Dr. Jane Doe", date: "2024-08-19", time: "16:00" },
    { consultationId: 49, patientId: 9, patientName: "Hank Brown", doctorId: 3, doctorName: "Dr. Emily Davis", date: "2024-08-19", time: "17:00" },
    { consultationId: 50, patientId: 10, patientName: "Ivy Davis", doctorId: 4, doctorName: "Dr. Michael Johnson", date: "2024-08-19", time: "18:00" },
  ];

  async function addConsultationsToFirestore(consultations) {
    try {
      const collectionRef = collection(db, "consultations");
      
      for (const consultation of consultations) {
        const docRef = await addDoc(collectionRef, consultation);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All consultation uploaded successfully!");
    } catch (e) {
      console.error("Error adding documents: ", e);
    }
  }
  
  // Call the function to add the patients
  addConsultationsToFirestore(consultations);
  