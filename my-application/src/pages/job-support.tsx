import Layout from '@/components/Layout'
import JobSupportSection from '@/components/job_support_section'
import {
  favicon,
  homePageMetaDescription,
  homePageMetaKeywords,
  homePageMetaTitle,
} from '@/constants/constants'

const JobSupport = () => {
  return (
    <Layout
      metaTitle={`Job Support - ${homePageMetaTitle}`}
      metaDescription={homePageMetaDescription}
      metaKeywords={homePageMetaKeywords}
      pageHref="job-support"
    >
      <JobSupportSection imagePath={favicon} />
    </Layout>
  )
}

export default JobSupport
