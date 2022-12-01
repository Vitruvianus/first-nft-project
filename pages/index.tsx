import NavBar from "../components/NavBar"
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import Disconnected from '../components/Disconnected'
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"
import dynamic from 'next/dynamic';

// add this
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Trippy</title>
        <meta name="The NFT Collection for Trippy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        backgroundPosition="center"
      >

        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />
          
          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
