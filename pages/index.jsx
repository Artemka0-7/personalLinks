import Head from 'next/head';
import Home from '../app/components/screens/Home/Home'
import MetaTitle from '../app/components/ui/MetaTitle'

const Index = () => {
  return (
    <>
      <MetaTitle title="Links | Все полезные ссылки" />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Home />
    </>
  )
}

export default Index;
