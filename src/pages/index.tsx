import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Euforia</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    
      <main className='w-full min-h-screen flex flex-col flex-1 gap-10 items-center justify-center'>
        <h1 className='font-bold text-6xl'>Ops...</h1>
        <span className='font-medium text-xl text-center'>
          <p>Está quase lá, mas não é aqui ainda.</p>
          <p>Adicione o id do seu personagem depois de &apos;/sheet/&apos;.</p>
          <p>Caso não tenha essa informação pessa para o seu mestre.</p>
        </span>
      </main>
    </>
  )
}

export default Home
