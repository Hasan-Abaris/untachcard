import React from 'react'
import Banner from '../home/banner/Banner'
import BlogBanner from './banner'
import BlogContent from './BlogSidebar'
import BrowseGuides from './browseguide'
import InstAppMail from './instappmail'

function Blogpage() {
  return (
   <>
        <BlogBanner/>
        <BlogContent/>
        <BrowseGuides/>
        <InstAppMail/>
        </>
  )
}

export default Blogpage
