import { db } from './firebaseConfig.js'; // Adjust path as needed
import { collection, getDocs } from 'firebase/firestore';

async function getDoctors() {
  try {
    // Reference to the "doctors" collection
    const doctorsCollection = collection(db, 'doctors');
    // Fetch documents from the collection
    const doctorsSnapshot = await getDocs(doctorsCollection);
    // Map documents to data
    const doctorsList = doctorsSnapshot.docs.map(doc => doc.data());

    console.log(doctorsList); // Print the list of doctors
  } catch (error) {
    console.error('Error retrieving doctors:', error);
  }
}

getDoctors();