import React from 'react'
import SectionDishes from './SectionDishes'
import SectionFeedback from './SectionFeedback'
import SectionIntro from './SectionIntro'
import SectionNew from './SectionNew'
import SectionRation from './SectionRation'

export default function NewPage() {
  return (
    <>
      <SectionIntro />
      <SectionRation />
      <SectionDishes />
      <SectionFeedback />
      <SectionNew />
    </>
  )
}
