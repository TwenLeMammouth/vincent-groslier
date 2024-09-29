"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, LoaderPinwheel } from 'lucide-react';
import React, { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { postData } from '../action';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form 
      ref={formRef}
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }} 
      className='flex justify-between gap-4 flex-col md:flex-row'>
      <Input 
        type="text" 
        placeholder="your message" 
        name="message" 
        maxLength={80} 
        minLength={1} 
        required />
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <>
      {pending ? (
        <Button className='w-full' disabled>
          <LoaderPinwheel className='mr-2 h-4 w-4 animate-spin'>Please wait</LoaderPinwheel>
        </Button>
      ) : (
        <Button className='w-full' type="submit">Sign for free</Button>
      )}
    </>
  )
}