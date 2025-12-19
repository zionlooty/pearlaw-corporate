import ArticlesSection from '@/components/blogpage/articles-section'
import FooterSection from '@/components/blogpage/footer-section'
import Herosection from '@/components/blogpage/hero-section'
import React from 'react'

const Blog = () => {
    return (
        <>
            <Herosection />

            <ArticlesSection />

            <FooterSection/>
        </>
    )
}

export default Blog