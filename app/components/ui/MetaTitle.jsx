import Head from 'next/head';

const MetaTitle = ({title}) => {
  return (
    <Head>
      <meta name="theme-color" content="#841a26" />
      <title>{title}</title>
    </Head>
  )
}

export default MetaTitle