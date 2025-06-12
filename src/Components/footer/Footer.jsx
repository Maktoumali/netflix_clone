import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>

            <div className='main-footer-container'>
                <footer>
                    <div className='logo-container'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" className='netflix-logo' />
                    </div>
                    <div className='explore-container'>
                        <h2>Expore</h2>
                        <p>Help Center</p>
                        <p>Account</p>
                        <p>Ways to Watch</p>
                        <p>Only on Netflix</p>
                    </div>
                    <div className='explore-container'>
                        <h2>Legal</h2>
                        <p>Cookie Preference</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Gift Card Terms</p>
                        <p>Legal Notices</p>
                        <p>Corporate Information</p>
                    </div>
                    <div className='explore-container'>
                        <h2>Support</h2>
                        <p>FAQ</p>
                        <p>Speed Test</p>
                        <p>Contact us</p>
                        <p>Jobs</p>
                        <p>Media Center</p>
                        <p>Investor Relations</p>
                    </div>

                </footer>
                <div className="footer-bottomline"></div>

                <div className="copyright-container">
                    <p>Copyright ©
                        June 10, 2025 7:08 pm
                        Daniel Ross & Associates LLC</p>
                </div>
            </div>
        </>
    )
}

export default Footer