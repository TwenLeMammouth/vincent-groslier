import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React, { Suspense } from 'react'
import Form from '../components/Form';
import { useFormStatus } from 'react-dom';
import prisma from '../lib/db';
import { LoaderBouncingBall } from '../components/Loader';
import { FormLoading, LoadingMessages } from '../components/LoadingState';

async function getGuestBookEntry() {
  const data = await prisma.guestBookEntry.findMany({
    select: {
      User: {
        select: {
          firstName: true,
          profileImage: true,
        }
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 30,
  })

  return data;
}

export default function ExperiencePage() {
  return (
    <section className='max-w-7xl w-full px-4 md:px8 mx-auto'>
      <h1>Experiences</h1>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>
              Hello
              <LoaderBouncingBall/>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label className='mb-1'>Message</Label>
            <Suspense fallback={<FormLoading/>}>
              <AuthForm/>
            </Suspense>
          </CardContent>

        <ul className='m-5 pt-7 gap-y-5 flex flex-col'>
          <Suspense fallback={<LoadingMessages/>}>
            <GuestBookEntries />
          </Suspense>
        </ul>

        </Card>
      </div>
    </section>
  )
}

async function GuestBookEntries() {
  const data = await getGuestBookEntry();

  if (data.length === 0) {
    return null
  }

  return data.map(entry => (
    <li key={entry.id} className=''>
      <div className='flex items-center'>
        <img src={entry.User?.profileImage as string} alt="User Profile Image" className='w-10 h-10 rounded-lg'/>
        <p className='text-muted-foreground pl-3 break-words'>{entry.User?.firstName + ": "}
          <span className='text-foreground'>{entry.message}</span>
        </p>
      </div>
    </li>
  ))
}

async function AuthForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(user) {
    // console.log(user)
    return (
      <div>
        <h1>Salut {user.given_name} !</h1>
        <Form />
        <LogoutLink>Log out</LogoutLink>
      </div>
    )
  }

  return (
    <div className='flex justify-between gap-4 flex-col md:flex-row'>
      <Input type="text" placeholder='Your Message ..'/>
      <RegisterLink>
        <Button>Send</Button>
      </RegisterLink>
      <LoginLink>Sign up</LoginLink>
    </div>
  )
}


