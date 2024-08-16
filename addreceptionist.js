
import {db} from './firebaseConfig.js';

import { collection, addDoc } from "firebase/firestore";


const receptionists = [
    // For Dr. John Smith (Cardiology)
    { receptionistId: 'rec001', name: 'Alice Johnson', doctorId: 1, phoneNumber: '555-1234' },
    { receptionistId: 'rec002', name: 'Bob Brown', doctorId: 1, phoneNumber: '555-5678' },
    { receptionistId: 'rec003', name: 'Carol Davis', doctorId: 1, phoneNumber: '555-9876' },
  
    // For Dr. Jane Doe (Neurology)
    { receptionistId: 'rec004', name: 'David Wilson', doctorId: 2, phoneNumber: '555-4321' },
    { receptionistId: 'rec005', name: 'Eve Martin', doctorId: 2, phoneNumber: '555-8765' },
    { receptionistId: 'rec006', name: 'Frank Miller', doctorId: 2, phoneNumber: '555-3456' },
  
    // For Dr. Emily Davis (Orthopedics)
    { receptionistId: 'rec007', name: 'Grace Lee', doctorId: 3, phoneNumber: '555-6543' },
    { receptionistId: 'rec008', name: 'Hank Carter', doctorId: 3, phoneNumber: '555-7890' },
    { receptionistId: 'rec009', name: 'Ivy Clark', doctorId: 3, phoneNumber: '555-2345' },
  
    // For Dr. Michael Johnson (Pediatrics)
    { receptionistId: 'rec010', name: 'Jack Roberts', doctorId: 4, phoneNumber: '555-6789' },
    { receptionistId: 'rec011', name: 'Kara Adams', doctorId: 4, phoneNumber: '555-3456' },
    { receptionistId: 'rec012', name: 'Leo Turner', doctorId: 4, phoneNumber: '555-7891' },
  
    // For Dr. Sarah Brown (Dermatology)
    { receptionistId: 'rec013', name: 'Mia Collins', doctorId: 5, phoneNumber: '555-4567' },
    { receptionistId: 'rec014', name: 'Nate Walker', doctorId: 5, phoneNumber: '555-8901' },
    { receptionistId: 'rec015', name: 'Olivia Young', doctorId: 5, phoneNumber: '555-2346' },
  
    // For Dr. David Wilson (Gastroenterology)
    { receptionistId: 'rec016', name: 'Paul Scott', doctorId: 6, phoneNumber: '555-6780' },
    { receptionistId: 'rec017', name: 'Quinn Murphy', doctorId: 6, phoneNumber: '555-3457' },
    { receptionistId: 'rec018', name: 'Rita Bell', doctorId: 6, phoneNumber: '555-8902' },
  
    // For Dr. Laura Martinez (Internal Medicine)
    { receptionistId: 'rec019', name: 'Steve King', doctorId: 7, phoneNumber: '555-4568' },
    { receptionistId: 'rec020', name: 'Tina Evans', doctorId: 7, phoneNumber: '555-8903' },
    { receptionistId: 'rec021', name: 'Uma Patel', doctorId: 7, phoneNumber: '555-5670' },
  
    // For Dr. Robert Lee (Endocrinology)
    { receptionistId: 'rec022', name: 'Victor Brooks', doctorId: 8, phoneNumber: '555-6781' },
    { receptionistId: 'rec023', name: 'Wendy Harris', doctorId: 8, phoneNumber: '555-8904' },
    { receptionistId: 'rec024', name: 'Xander Davis', doctorId: 8, phoneNumber: '555-2347' },
  
    // For Dr. Olivia Anderson (Psychiatry)
    { receptionistId: 'rec025', name: 'Yara Jones', doctorId: 9, phoneNumber: '555-4569' },
    { receptionistId: 'rec026', name: 'Zachary Miller', doctorId: 9, phoneNumber: '555-8905' },
    { receptionistId: 'rec027', name: 'Ava Wilson', doctorId: 9, phoneNumber: '555-5671' },
  
    // For Dr. James Taylor (Surgery)
    { receptionistId: 'rec028', name: 'Brian Scott', doctorId: 10, phoneNumber: '555-6782' },
    { receptionistId: 'rec029', name: 'Clara Adams', doctorId: 10, phoneNumber: '555-8906' },
    { receptionistId: 'rec030', name: 'Derek Lee', doctorId: 10, phoneNumber: '555-2348' }
  ];
  

  async function addReceptionistsToFirestore(receptionists) {
    try {
      const collectionRef = collection(db, "receptionists");
      
      for (const receptionist of receptionists) {
        const docRef = await addDoc(collectionRef, receptionist);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All receptionist uploaded successfully!");
    } catch (e) {
      console.error("Error adding documents: ", e);
    }
  }
  
  // Call the function to add the patients
  addReceptionistsToFirestore(receptionists);
  