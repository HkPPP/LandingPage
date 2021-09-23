import Head from 'next/head'
import {InfoBoxHeader, InfoBoxIntro, ContactUs, SocialMediaIcons} from '../components/infoBox'
import { ContactForm} from '../components/contactForm'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Submit a contact form" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="min-h-screen bg-green-100 text-center ">

        <div className="grid bg-white lg:grid-cols-3 lg:grid-flow-col 2xl:grid-cols-8 h-screen">

          <div className="rounded p-4 lg:col-start-2 lg:col-span-2 lg:p-10 2xl:col-start-5 2xl:col-span-3 xl:py-24">
            <ContactForm/>
          </div>

          <div className="bg-green-400 rounded p-4 space-y-3.5 lg:col-start-1 lg:pt-40 lg:text-xl lg:space-y-8 xl:px-16 2xl:px-24 2xl:col-start-1 2xl:col-span-3 ">
            <InfoBoxHeader/>
            <InfoBoxIntro/>
            <ContactUs/>
            <SocialMediaIcons/>
          </div>

        </div>

      </main>
      
    </div>
  )
}

