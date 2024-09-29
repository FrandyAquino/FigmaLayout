import React from 'react'

function Layout({ children }) {
    return (
        <div className='max-w-[1440px] mx-auto px-[88px]'>
            {children}
        </div>
    )
}
export default Layout