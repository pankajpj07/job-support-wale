import Layout from '@/components/Layout'
import JobSupportSection from '@/components/job_support_section'
import { favicon, jobSupportPageMeta } from '@/constants/constants'

const JobSupport = () => {
  return (
    <Layout
      metaTitle={jobSupportPageMeta.title}
      pageHref="job-support"
      metaDescription={jobSupportPageMeta.description}
      metaKeywords={jobSupportPageMeta.keywords}
    >
      <JobSupportSection imagePath={favicon} />
    </Layout>
  )
}

export default JobSupport
