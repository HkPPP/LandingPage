import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Submit a contact form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-center">

        <div className="">

          {/* Right */}
          <div className="bg-white rounded p-4">
            <p>test3</p>
            <p>test4</p>
          </div>

          {/* Left */}
          <div className="bg-green-400 rounded p-4 bottom-1">
            <h3 className="text-md text-white fond-bold">
              Contact Information
            </h3>
          </div>

        </div>
          

      </div>

      
    </div>
  )
}
