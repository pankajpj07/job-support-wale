import Layout from '@/components/Layout'
import ThankYouPage from '@/components/ThankYouPage'
import { homePageMetaTitle } from '@/constants/constants'

const ThankYou = () => {
  return (
    <Layout metaTitle={`Thank You - ${homePageMetaTitle}`} pageHref="thankyou">
      <ThankYouPage />
    </Layout>
  )
}

export default ThankYou
