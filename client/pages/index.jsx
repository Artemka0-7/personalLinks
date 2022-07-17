import Head from 'next/head';
import Home from '../app/components/screens/Home/Home'
import MetaTitle from '../app/components/ui/MetaTitle'
import axios from 'axios'
import { SERVER_URL } from '../app/constants/constants';

const Index = ({ cms }) => {
  return (
    <>
      <MetaTitle title="Links | Все полезные ссылки" />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Home cms={cms} />
    </>
  )
}

export const getStaticProps = async () => {
  const cms = await axios.get(`${SERVER_URL}/api/cms`).then(({ data }) => data)

  return {
		props: {
			cms
		}
	}
}

export default Index;
