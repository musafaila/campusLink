'use client'
import { regData } from "@/lib/resources"
import ValForm from "./ValForm"

export default function DriverSignup() {
    return (
    <ValForm 
        text="Signup as a driver" 
        formInput={regData}
        formFields={{
            userName: '',
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
        }}
        action="Signup"
        option="Already have an account?"
        optionLink="/login"
    />
    )
}
