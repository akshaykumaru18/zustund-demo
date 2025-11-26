"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import profileStore from "../data-store/profiles-store";

export default function CreateProfilePage() {
    
  const router = useRouter();
  const { addProfile } = profileStore();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  return (
    <div>
      <div>Create Profile</div>
      <div className="flex flex-col">
        <input
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          placeholder="Phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          placeholder="Place"
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <button
          onClick={(event) => {
            console.log(email);
            console.log(phone);
            console.log(place);
            console.log(name);
            addProfile({
              name: name,
              email: email,
              place: place,
              phone: phone,
            });
            router.push("/view-profile");
          }}
        >
          Create Profile
        </button>
      </div>
    </div>
  );
}
