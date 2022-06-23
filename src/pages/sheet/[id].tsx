import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { Label } from '../../components/Label'

const GET_CHARACTER_BY_ID_QUERY = gql`
  query GetCharacterById ($id: ID) {
    character (where: {id: $id}) {
      playerName
      name
      origin
      class
      trail
      patent
      prestige
      nex
      health {
        id
        hitPoints
        stressPoints
        sanity
        isDeath
        isInsane
      }
      attributes {
        id
        name
        value
        attributes {
          id
          name
          description
        }
      }
      skills {
        id
        name
        value
        skills {
          id
          name
          description
        }
      }
    }
  }
`

interface GetCharacterByIdResponse {
  character: {
    playerName: string
    name: string
    origin: string
    class: string
    trail: string
    patent: string
    prestige: string
    nex: string
    health: {
      id: string
      hitPoints: {
        max: string
        current: string
      }
      stressPoints: {
        max: string
        current: string
      }
      sanity: {
        max: string
        current: string
      }
      isDeath: string
      isInsane: string
    }
    attributes: {
      id: string
      name: string
      value: string
      attributes: {
        id: string
        name: string
        description: string
      }[]
    }[]
    skills: {
      id: string
      name: string
      value: string
      skills: {
        id: string
        name: string
        description: string
      }[]
    }[]
  }
}

const Sheet: NextPage = () => {  
  const { id } = useRouter().query
  const { data } = useQuery<GetCharacterByIdResponse>(GET_CHARACTER_BY_ID_QUERY, {
    variables: {
      id
    }
  })

  const [character, setCharacter] = useState(data?.character)

  useEffect(() => {
    setCharacter(data?.character)
  }, [data?.character])

  console.log(character)
  
  if (!character) {
    return (
      <>
        <Head>
          <title>Euforia - Ficha</title>
        </Head>
      
        <main className='w-full min-h-screen flex-1 flex sm:items-end sm:justify-end p-10 items-center justify-center'>
          <h1 className='font-bold text-4xl'>Carregando...</h1>
        </main>
      </>
    )
  }
  
  return (
    <>
      <Head>
        <title>Euforia - {character.name}</title>
        <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon" />
      </Head>
    
      <header className='w-full pt-24 pb-14 text-center flex flex-col gap-3 items-center justify-center'>
        <span className='font-bold text-6xl'>Euforia</span>
        <span className='flex gap-8'>
          <span className='text-zinc-300 font-medium text-xl'>
            Ficha do(a) {character.name}
          </span>
        </span>
      </header>

      <main className='w-full current-h-screen flex flex-col flex-1 gap-10 pb-10 items-center justify-center'>
        <Container>
          <span className='text-xl text-zinc-300'>{character.playerName}</span>
          <h1 className='font-bold text-3xl pb-1'>{character.name}</h1>
          <div className='w-full flex-1 text-zinc'>
            <Label title='Origem' value={character.origin} />
            <Label title='Classe' value={character.class} />
            { data?.character.trail && <Label title='Trilha' value={character.trail} /> }
            <Label title='Patente' value={character.patent} />
            <Label title='Nex' value={character.nex} />
          </div>
        </Container>

        <Container title='Saúde'>
          <Label className='text-red-400' title='PV' value={`${character.health.hitPoints.current}/${character.health.hitPoints.max}`} />
          <Label className='text-green-400' title='PE' value={`${character.health.stressPoints.current}/${character.health.stressPoints.max}`} />
          <Label className='text-blue-400' title='SAN' value={`${character.health.sanity.current}/${character.health.sanity.max}`} />
        </Container>

        <Container title='Atributos'>
        { character.attributes.map(attribute => (
            <Label key={attribute.id} title={!attribute.name ? attribute.attributes[0].name : attribute.name } value={attribute.value} />
          )) }
        </Container>

        <Container title='Perícias'>
          { character.skills.map(skill => (
            <Label key={skill.id} title={!skill.name ? skill.skills[0].name : skill.name } value={skill.value} />
          )) }
        </Container>
      </main>
    </>
  )
}

export default Sheet
