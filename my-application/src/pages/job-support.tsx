import Layout from '@/components/Layout'
import JobSupportSection from '@/components/job_support_section'
import {
  favicon,
  homePageMetaTitle,
} from '@/constants/constants'

const JobSupport = () => {
  return (
    // <Layout
    //   metaTitle={`Job Support - ${homePageMetaTitle}`}
    //   pageHref="job-support"
    // >
      <JobSupportSection imagePath={favicon} />
    // </Layout>
  )
}

export default JobSupport
