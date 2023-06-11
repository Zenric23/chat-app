import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const useForm = (callback, validate) => {
  const[error, setError] = useState({})
  const[value, setValue] = useState({})
  const[isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setValue(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(value))
    setIsSubmitting(true)
  }

  useEffect(()=> {
    if(Object.keys(error).length === 0 && isSubmitting){
        callback()
    }
  }, [error])


  return {
    handleSubmit,
    handleChange,
    error,
    value
  }

}

export default useForm