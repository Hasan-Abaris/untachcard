
import React from 'react'
import ProfileCard from './ProfileCard'
import ProductServices from './ProductServices'
import Portfolio from './Portfolio'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import EnquiryForm from './EnquiryForm'
import CustomSection from './CustomSection'
import WorkingHours from './WorkingHours'
import PaymentSection from './PaymentSection'

const ThemeNine = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 p-6 space-y-6">
            <ProfileCard />
            <ProductServices />
            <Portfolio />
            <Gallery />
            <Testimonials />
            <EnquiryForm />
            <CustomSection />
            <WorkingHours />
            <PaymentSection />
        </div>
    )
}

export default ThemeNine