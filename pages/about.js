import Head from 'next/head'
import Image from 'next/image'

export default () => {
  return (
      <div>
        <Head>
          <title>About Page</title>
          <meta name="description" content="About Page"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h2>This is About page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda, commodi
          deserunt eaque est incidunt ipsa omnis quisquam. Enim laboriosam laudantium quaerat quo, similique sint.
          Facilis, quod saepe!</p>
      </div>
  );
};