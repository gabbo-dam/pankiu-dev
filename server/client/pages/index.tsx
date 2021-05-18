import React, { useState, useEffect } from 'react'
import SocketQueue from '../src/SocketQueue'
import { useRouter } from 'next/router'

import Button from '@atoms/button'
import TopBar from '@organisms/appbar'
import Header from '@organisms/header'
import Title from '@atoms/title'

export enum searchParam {
  only_counselor,
  counselor_or_happy,
  other_people,
}
enum Language {
  Spanish,
  English,
}

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJFeGFtcGxlIiwiZW1haWwiOiJleGFtcGxlQG1haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsInJhdGUiOjV9.j99UPXCrRpCaU4R45ziBwZWaQYNUmqnuSclRZAXed94'

export enum Mood {
  Normal,
  Depressed,
  Anxious,
  Stressed,
  Lonely,
  Happy,
}

const Index = () => {
  // let socket: SocketQueue
  // const router = useRouter()

  // useEffect(() => {
  //   socket = new SocketQueue((roomid) =>
  //     router.push({
  //       pathname: '/testing',
  //       query: {
  //         roomid,
  //       },
  //     })
  //   )
  // })

  return (
    <>
      <TopBar />
      <Header />

      {/* <h1>Home Page</h1>
      <Button
        onClick={() =>
          socket.queueGuest(
            'name',
            Mood.Depressed,
            searchParam.only_counselor,
            [Language.English]
          )
        }
      >
        Queue Patient
      </Button>
      <Button
        onClick={() => {
          localStorage.setItem('token', jwt)
          socket.queueCounselor(jwt, [Language.English])
        }}
      >
        Queue Counselor{' '}
      </Button> */}
    </>
  )
}

export default Index
