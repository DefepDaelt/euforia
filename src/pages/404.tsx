import Head from "next/head"
import { Door } from '../components/assets/Door'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 • Page not found</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    
      <main className="w-full min-h-screen flex-1 flex flex-col items-center justify-center gap-2">
        <Door />
        <div className="flex flex-col items-center justify-center pt-5">
          <span className="text-xl text-zinc-300">404 ERROR</span>
          <h1 className="font-bold text-5xl">Page not found.</h1>
          <span className="text-sm text-zinc-300">Desculpa, mas não foi possivel achar a pagina desejada.</span>
        </div>
      </main>
    </>
  )
}

export default Custom404
