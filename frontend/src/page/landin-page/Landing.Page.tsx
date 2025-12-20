import { ShoppingBag, Upload, TrendingUp, StarIcon } from 'lucide-react';
import type { LandingPageInterface } from '../../types/interfaces';
import Navbar from '../../components/navbar/NavBar';
import '../../style/landingPage.css'
import { useState } from 'react';

const images = {
  First_Src: [
    "/assets/design1.jpg",
    "/assets/design2.jpg",
    "/assets/design3.jpg",
    "/assets/design4.jpg",  
  ],
  Second_Src: [
    "/assets/design5.jpg",
    "/assets/design6.jpg",
    "/assets/design7.jpg",
    "/assets/design8.jpg",
  ],
  Third_Src: [
    "/assets/design9.jpg",
    "/assets/design10.jpg",
    "/assets/design11.jpg",
    "/assets/design12.jpg",
  ],
  Fourth_Src: [
    "/assets/design13.jpg",
    "/assets/design14.jpg",
    "/assets/design15.jpg",
    "/assets/design16.jpg",
  ],
};

export default function LandingPage ({onNavigate}: LandingPageInterface) {
  const [openmodal, setOpenModal] = useState<null | 'terms' | 'privacy' | 'contact'>(null)
  return (

      <div className="landing">

        <Navbar onNavigate={onNavigate}/>

        <section className="landing-container" id='home'>
          {/* Hero Section */}
          <div className="hero">

            <div className='img-hero-container'>
              <img src="/assets/littleboy.png" alt="little boy" />
            </div>
             
            <h1 className="hero-title">WELCOME TO GRAPIXIE</h1>

            <p className="hero-description">
              The ultimate marketplace for high-quality sprite sheets, 2D graphics, and 3D graphics.
              Buy, sell, and discover amazing digital art assets for your games and
              projects.
            </p>

            <div className="button-group">
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate('login')}
              >
                Get Started
              </button>
              <button
                className="btn btn-outline"
                onClick={() => onNavigate('signup')}
              >
                Join For Free
              </button>
            </div>
          </div>
          
          <div className='feature-container'>
            <div className="features">
              <div className="feature-card">
                <ShoppingBag size={48} strokeWidth={1.5} />
                <h3>Browse Marketplace</h3>
                <p>
                  Explore thousands of premium sprite sheets, character designs, and
                  2D graphics from talented artists worldwide.
                </p>
              </div>

              <div className="feature-card">
                <Upload size={48} strokeWidth={1.5} />
                <h3>Sell Your Art</h3>
                <p>
                  Upload your creations and reach a global audience. Set your prices
                  and start earning from your pixel art today.
                </p>
              </div>

              <div className="feature-card">
                <TrendingUp size={48} strokeWidth={1.5} />
                <h3>Track Sales</h3>
                <p>
                  Monitor your sales, manage your products, and grow your business
                  with our comprehensive seller dashboard.
                </p>
              </div>

               <div className="feature-card">
                <StarIcon size={48} strokeWidth={1.5} />
                <h3>Discover New Design</h3>
                <p>
                  Stay updated with the latest trends in 2D graphics and find fresh
                  inspiration for your projects.
                </p>
              </div>
              
            </div>
          </div>

        </section>

        <section className='gallery-container' id='gallery'>
          <div className='design hero'>
            <h1 className='design-title hero-title'>AVAILABLE DESIGNS</h1>
          </div>

          <div className="gallery-carousel">
            <div className="gallery-carousel-track track-left">
              {/** Duplicate items for seamless scrolling */}
              {[
                 ...images.First_Src, ...images.Second_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={idx}>
                  <img src={src} />
                </div>
              ))}
              {/** Duplicate again for infinite loop */}
              {[
                 ...images.Third_Src, ...images.Fourth_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={"dup" + idx}>
                  <img src={src} />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-carousel">
            <div className="gallery-carousel-track track-right">
              {/** Duplicate items for seamless scrolling */}
              {[
                 ...images.Second_Src, ...images.First_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={idx}>
                  <img src={src} />
                </div>
              ))}
              {/** Duplicate again for infinite loop */}
              {[
                 ...images.Third_Src, ...images.Fourth_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={"dup" + idx}>
                  <img src={src} />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-carousel">
            <div className="gallery-carousel-track track-left">
              {/** Duplicate items for seamless scrolling */}
              {[
                 ...images.Third_Src, ...images.Fourth_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={idx}>
                  <img src={src} />
                </div>
              ))}
              {/** Duplicate again for infinite loop */}
              {[
                 ...images.First_Src, ...images.Third_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={"dup" + idx}>
                  <img src={src} />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-carousel">
            <div className="gallery-carousel-track track-right">
              {/** Duplicate items for seamless scrolling */}
              {[
                 ...images.Second_Src, ...images.Fourth_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={idx}>
                  <img src={src} />
                </div>
              ))}
              {/** Duplicate again for infinite loop */}
              {[
                 ...images.Third_Src, ...images.First_Src
              ].map((src, idx) => (
                <div className="gallery-item" key={"dup" + idx}>
                  <img src={src} />
                </div>
              ))}
            </div>
          </div>
 

        </section>
        

        <section className="contact-section" id="contact">
          <div className='contact-wrapper'>

            <div className='contact-Image'>
              <img src="/assets/contactImg.png" alt="Calling Boy" />
            </div>

              <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-subtitle">
                  Have questions, feedback, or want to collaborate?  
                  <br />We’d love to hear from you.
                </p>
                
                <form className="contact-form">
                  <div className="form-group">

                    <div className='input-divider'>
                      <h2>Name</h2>
                      <input className='landing-input' type="text" placeholder="Your Name" required />
                    </div>

                    <div className='input-divider'>
                      <h2>Email</h2>
                      <input className='landing-input' type="email" placeholder="Your Email" required />
                    </div>
                    
                  </div>

                  <div className='textarea-title'>
                    <h2>Feel free to send your inquiries</h2>
                  </div>

                  <textarea
                    className='landing-textarea'
                    placeholder="Your Message"
                    rows={5}
                    required
                  >

                  </textarea>

                  <button type="submit" className="btn-contact">
                    Send Message
                  </button>
                </form>
              </div>

          </div>
        </section>


      
      <footer className='landing-footer'>
        <div className='footer-container'>
          <p>@ 2025 GRAPIXIE. All rights reserved.</p>
          <div className='footer-links'>
            <button onClick={() => setOpenModal('terms')}>Terms</button>
            <button onClick={() => setOpenModal('privacy')}>Privacy</button>
          </div>
        </div>
      </footer>

      {
        openmodal && (
          <div className='modal-backdrop' onClick={() => setOpenModal(null)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <button className='modal-close' onClick={() => setOpenModal(null)}>x</button>
              {openmodal === 'terms' && <div>Terms Content</div>}
              {openmodal === 'privacy' && <div>Privacy Content</div>}
            </div>
          </div>
        )
      }

      </div>
    );
}