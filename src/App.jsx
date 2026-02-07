import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import SkillsHub from './pages/SkillsHub/SkillsHub'
import WebDesigns from './pages/WebDesigns/WebDesigns'
import SMMDesign from './pages/SMMDesign/SMMDesign'
import BookDesign from './pages/BookDesign/BookDesign'
import CodedProjects from './pages/CodedProjects/CodedProjects'
import QualityAssurance from './pages/QualityAssurance/QualityAssurance'
import ItsAWrap from './pages/ItsAWrap/ItsAWrap'
import BugReportCaseStudy from './pages/CaseStudy/BugReportCaseStudy'
import ApiHealthCaseStudy from './pages/CaseStudy/ApiHealthCaseStudy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsHub />} />
          <Route path="/web-designs" element={<WebDesigns />} />
          <Route path="/smm-design" element={<SMMDesign />} />
          <Route path="/book-design" element={<BookDesign />} />
          <Route path="/coded-projects" element={<CodedProjects />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/dev/bug-report-generator" element={<BugReportCaseStudy />} />
          <Route path="/dev/api-health-monitor" element={<ApiHealthCaseStudy />} />
          <Route path="/its-a-wrap" element={<ItsAWrap />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
