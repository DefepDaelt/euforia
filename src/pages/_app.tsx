import {
  ApolloClient, ApolloProvider, InMemoryCache
} from '@apollo/client'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng7mb0013v01xp9mqiea7v/master',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
