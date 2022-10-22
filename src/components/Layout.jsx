import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <section className="bnrsection">
                {children}
            </section>
            <Footer />
        </>
    )
}

export default Layout