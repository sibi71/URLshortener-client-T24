import React from 'react'
import { Link } from 'react-router-dom'
import "./Homecard.css"
import { BsHandThumbsUp } from "react-icons/bs"
import { GiBreakingChain } from "react-icons/gi"
import { MdSecurity,MdScreenSearchDesktop ,MdDevicesOther } from "react-icons/md"
import { FaHandPaper} from "react-icons/fa"

const Homecard = () => { 
  return (
    <div className='homecard'>
        <div className='homecard__create'>
        <h1>Want More? Try Premium Features!</h1>
        <p>Custom short links, powerful dashboard, 
        detailed analytics, API, UTM builder, QR codes, 
        browser extension, 50+ app integrations and supportOnly $17/month</p>
        <Link to="/signup" className='homecard__linkbtn'>Create Account</Link>
        </div>

        <div  className='homecard__info'>
            <div className='homecard__detalls'>
            <p>
                <h1>Simple and fast URL shortener!</h1>
                ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and sites with authority on the Internet. Just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened 
                URL and share it on websites, chat and emails. After shortening the URL, check how many clicks it received.
            </p>
            <p>
                <h1>Shorten, share and track</h1>
                Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. 
                Track statistics for your business and projects by monitoring the number of hits from your URL with the click counter.
            </p>
            </div>
            
        </div>
        <div className='homecard__morethan'>
                <div>
                  <BsHandThumbsUp className='homecard__icons'/>
                  <h5>Easy</h5>
                  <p>ShortURL is easy and fast, enter the long link to get your shortened link</p>
                </div>
                <div>
                  <GiBreakingChain className='homecard__icons'/>
                  <h5>Shortened</h5>
                  <p>Use any link, no matter what size, ShortURL always shortens</p>
                </div>
                <div>
                  <MdSecurity className='homecard__icons' />
                  <h5>Secure</h5>
                  <p>It is fast and secure, our service have HTTPS protocol and data encryption</p>
                </div>
                <div>
                  <MdScreenSearchDesktop className='homecard__icons' />
                  <h5>Statistics</h5>
                  <p>Check the amount of clicks that your shortened URL received</p>
                </div>

                <div>
                  <FaHandPaper className='homecard__icons'/>
                  <h5>Reliable</h5>
                  <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                </div>
                <div>
                  <MdDevicesOther className='homecard__icons'/>
                  <h5>Devices</h5>
                  <p>Compatible with smartphones, tablets and desktop</p>
                </div>
            </div>
    </div>

  )
}

export default Homecard