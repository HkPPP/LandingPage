import Head from 'next/head'
import {InfoBoxHeader, InfoBoxIntro, ContactUs, SocialMediaIcons} from '../components/infoBox'
import {Label, InputBox, TextArea} from '../components/contactForm'

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

      <body className="min-h-screen bg-white text-center">
        <div className="bg-white rounded p-4">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 p-4">
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <Label t="First Name"/>
                
              </div>
            </div>

          </form>
        </div>

        <div className="bg-green-400 rounded p-4 gap-2">
          <InfoBoxHeader/>
          <InfoBoxIntro/>
          <ContactUs/>
          <SocialMediaIcons/>
        </div>
      </body>
    </div>
  )
}

