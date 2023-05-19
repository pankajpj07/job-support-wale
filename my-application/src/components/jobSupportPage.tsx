import React from 'react'
import { useRouter } from 'next/router'
// import JobSupportSection from './job_support_section'
import FAQ from './faq'
import Layout from './Layout'
import {
  homePageMetaDescription,
  homePageMetaKeywords,
  homePageMetaTitle,
  jobSupportPageDate,
} from '@/constants/constants'
import JobSupportSection from './job_support_section'

const JobSupportPage: React.FC = () => {
  const router = useRouter()
  const { jobSupportType } = router.query

  const data =
    jobSupportType &&
    jobSupportPageDate[jobSupportType as keyof typeof jobSupportPageDate]
  console.log("data",data)
  return (
    <Layout
      metaTitle={`India Job Support - ${homePageMetaTitle}`}
      metaDescription={homePageMetaDescription}
      metaKeywords={homePageMetaKeywords}
      pageHref="job-support"
    >
      {data && <JobSupportSection imagePath={'/frontend.png'} {...data} />}
    </Layout>
  )
}

export default JobSupportPage
