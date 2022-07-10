import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Button, Form, Loader } from 'semantic-ui-react'
import { useRouter } from 'next/router'

const NewNote = () => {
    const [form, setForm] = useState({ 
        title: '', 
        description: '' 
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    const router = useRouter()

    return (
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    
                }
            </div>
        </div>
    )
}