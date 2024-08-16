import { collection, addDoc } from "firebase/firestore";

// Example function to add a consultation document
async function addConsultation(consultation) {
  try {
    // Reference to the "consultations" collection
    const collectionRef = collection(db, "consultations");
    
    // Add the consultation object as a new document
    const docRef = await addDoc(collectionRef, consultation);
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Example consultation object
const consultation = {
  consultationId: 1,
  patientId: 1,
  patientName: "John Doe",
  doctorId: 1,
  doctorName: "Dr. Smith",
  consultationDate: "2024-08-01"
};

// Call the function to add the consultation
addConsultation(consultation);
