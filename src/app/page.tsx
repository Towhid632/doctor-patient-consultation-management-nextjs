import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import router from "next/navigation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Button size="md" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        continue as a patient
      </Button>
      <Button size="md" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        continue as a doctor
      </Button>
      <Button size="md" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        continue as a receptionist
      </Button>

    </main>
  );
}
