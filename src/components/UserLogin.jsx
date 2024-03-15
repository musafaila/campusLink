'use client'
import { loginData } from "@/lib/resources"
import ValForm from "./ValForm"

export default function PassengerSignup() {
    return (
    <ValForm 
       text="Login to CampusLink" 
       formInput={loginData}
       formFields={{userName: '', password: ''}}
       action="Login"
       option="Don't have an account?"
       optionLink="/signup"
    />
  )
}
