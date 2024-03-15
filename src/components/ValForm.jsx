"use client"
import { useState } from "react"
import Link from "next/link"

export default function ValForm({ text, formInput, formFields, action, option, optionLink }) {
    const [formData, setFormData] = useState(formFields)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            console.log(formData)
            const response = await fetch('https://campuslink.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(response.ok) {
                // handle successful signup
            } else {
                //handle error response
            }
        } catch(error) {
            console.log(error)
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
    <div className="relative w-full max-w-[40rem] h-screen text-white flex flex-col items-center justify-center gap-6 mx-auto">
        <div className="text-5xl md:text-6xl font-bold text-yellow-600">
            CampusLink
        </div>
        <p className="text-xl">{text}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10 mx-auto w-full">
            {formInput.map((data, i) => (
                <label
                    key={i}
                    htmlFor="userName"
                    className="flex flex-col gap-1 text-sm font-medium"
                >
                    {data.label}
                    <input 
                        className="border text-gray-600 focus:outline-none py-3 rounded-md text-sm px-4"
                        type={data.type}
                        name={data.name}
                        value={formData[data.name]}
                        onChange={handleChange}
                    />
                </label>
            ))}
            <Link href={optionLink} className="text-yellow-600 text-right">{option}</Link>
            <button type="submit" className="bg-yellow-600 rounded-lg p-3">{action}</button>
        </form>
    </div>
    )
}
