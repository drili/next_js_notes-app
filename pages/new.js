import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Button, Form, Loader } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { createContext } from 'react/cjs/react.production.min'

const NewNote = () => {
    const [form, setForm] = useState({ 
        title: '', 
        description: '' 
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                // createNote()
                alert("::: Success creating note.")
            } else {
                setIsSubmitting(false)
            }
        }
    }, [errors])

    const handleSubmit = (e) => {
        e.preventDefault()
        let errs = validate()
        setErrors(errs)
        setIsSubmitting(true)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const validate = () => {
        let err = {}

        if (!form.title) {
            err.title = "Title is required."
        }

        if(!form.description) {
            err.description = "Description is required."
        }

        return err
    }

    return (
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline="centered"></Loader>
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: "Please enter a title", pointing: "below" } : null}
                                label="Title"
                                placeholder="Title"
                                name="title"
                                onChange={handleChange}
                            ></Form.Input>

                            <Form.TextArea
                                fluid
                                error={errors.description ? { content: "Please enter a description", pointing: "below" } : null}
                                label="Description"
                                placeholder="Description"
                                name="description"
                                onChange={handleChange}
                            ></Form.TextArea>

                            <Button type="submit">Create</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewNote