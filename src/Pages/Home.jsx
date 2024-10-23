import React, { useEffect } from 'react';
import './Home.css';
import image1 from '../Assets/Ansar wesite pohoto cut 2.png';
import image2 from '../Assets/Ansar wesite layout.png'
import image3 from '../Assets/Ansar orange1.png'
import { LiaAwardSolid } from "react-icons/lia";
import { TbTargetArrow } from "react-icons/tb";
import { GiFallingEye } from "react-icons/gi";
import { SiApachetomcat } from "react-icons/si";
import { BiSolidQuoteLeft } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({
          duration: 2500, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: false, // Whether animation should happen only once - while scrolling down
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);



  return (
    <div>
   <div className='first_section' style={{  height: '100vh', width: '100%'}}>
      <div style={{ margin: '70px 200px 100px' }}>
        <h1
          style={{ fontSize: '100px', width: '100%', fontWeight: 'bold' ,marginTop:'40px'}}
          className="exo section1_h1"
        >
          Unleash<br /> Your True <br />Potential
        </h1>
        <button
          style={{ width: '450px', height: '70px', position: 'absolute' ,zIndex:10,marginTop:'60px',fontWeight:'bold'}}
          type="button"
          className="btn buttons btn-outline-dark exo  ml-5"
          >
          ANSAR MUHAMMED
        </button>
        <img style={{width:'1000px',marginLeft:'200px'}} className="image" src={image2} alt="neoneow" />
      </div>
    </div>




    <div className='second_section' style={{ width: '100%', height: '100vh', backgroundColor: '#242f65', display: 'flex'}}  >
      <div className='second' style={{marginTop:'-82px',marginLeft:'150px'}} >
        <img className="imageSec2 my-5 " src={image1} alt="neoneow" style={{height: '650px', display: 'block',marginLeft:'-60px',overflow:'hidden',marginTop:'-50px'}}
          data-aos="fade-up" 
        />
        <div
          className='seconde_div2'
          style={{ position: 'absolute', marginTop: '-253px', color: 'white' }}
          data-aos="fade-up" 
        > 
          <h1
            style={{  fontSize: '80px',color:'#C4D7FF',fontWeight:'inherit' }}
            className=" mx-5 second_h1_tag montserrat"
          >
            Get to <br /> Know me
          </h1>
          <button
            type="button"
            className="btn btn-light"
            style={{ marginLeft: '50px', width: '280px', borderRadius: '15px' ,backgroundColor:'#B7E0FF' }}
         
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className='second_div' style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: '25px', marginBottom: '50px' }}>
  <p
    data-aos="fade-up"
    className='montserrat sec_main_P '
    style={{ transform: 'translateX(-100px)',color:'#B7E0FF',margin:'90px 0px 80px 250px' ,width:'500px'}}  // Use transform to shift element
  >
    Ansar Mohammed is an inspiring figure known for his remarkable journey from overcoming 
    the challenges of cleft lips to becoming a champion public speaker and the Managing 
    Director of MerakOne Interiors. His story is a testament to resilience, determination, and 
    an unwavering commitment to personal growth. One of his most memorable moments 
    was when he delivered a keynote speech at an international conference, moving the 
    audience to tears with his story of perseverance.
  </p>
</div>


    </div>


    <div className='section_third' style={{ width: '100%', height: '100vh', display: 'flex' }}>
      {/* <div
        className='third_sub idontknow montserrat'
        data-aos="fade-up"
        style={{
          border: 'solid 1px lightgray',
          width: '400px ',
          height: '480px ',
          margin: '200px 94px 4px ',
          borderRadius: '35px 35px 1px 1px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          data-aos="fade-right"
          className='thisone'
          style={{
            width: '350px',
            backgroundColor: '#242f65',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            margin: '25px 24px 2px',
            borderRadius: '15px',
          }}
        >
          
          <div
          className='background_blue'
            style={{
              borderRadius: '50%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LiaAwardSolid
            className='icone'
              style={{ width: '70px', height: '70px', color: '#3DC2EC' }}
            />
          </div>
          <p
            className="mt-2 mx-3 achievements"
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '25px',
            }}
          >
            ACHIEVEMENTS
          </p>
        <div  className="sample">
          <div className="">
            <h1 className="fonthead">Lorem ipsum dolor</h1>
            <p className="fontpara">
            "Ansar's coaching has been transformative for our sales team. His insights and strategies 
have not only improved our sales performance but also fostered a culture of growth and 
resilience."
            </p>
          </div>
          <div>
            <h1 className="fonthead">Lorem ipsum dolor</h1>
            <p className="fontpara">
            Merakone transformed our office into a modern, functional space with exceptional quality. They created a warm, inviting café atmosphere and delivered luxurious hotel interiors that impressed our guests. Their work on our wellness center exceeded expectations, bringing our vision to life. Highly recommend their services!
            </p>
          </div>
        </div>
          
        </div>
      </div> */}
      <div
      className='why_imag'
        data-aos="fadeInUp"
        style={{
          color: '#242f65',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        <div className=" allinall exo">
        <p style={{fontSize:'80px',marginLeft:'500px' }} className='whychoose'>WHY CHOOSE ME</p>
        <p style={{ fontWeight: 'bold',marginLeft:'550px' }} className="exo whychoose ">
          Lorem
          <br /> ipsum dolor
        </p>
        </div>
        <div>
        <img style={{marginTop:'-420px',height:'auto'}} className="third_imagi " src={image3} alt="new pics" />
        </div>
      </div>
   </div> 




 
    <div className='mission_div' style={{
      display: 'flex',
      justifyContent: 'center',
      height: '70vh', 
      margin:'10px'
    }}>
      <div 
      className='cat_box'
        style={{ 
          width: '88%', 
          height: '600px', 
          backgroundColor: '#242f65', 
          borderRadius: '30px',
          display: 'flex',
          justifyContent: 'space-around', 
          position:'absolute'
        }}
        data-aos="-up" // Animation for the entire container
      >
        <div 
        className='iconing'
          style={{ 
            width: '30%', 
            height: '80%',
            backgroundColor: 'white',
            borderRadius: '15px' ,
            marginLeft:'35px',
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the first box
        >
         <div style={{display:'flex'}} className=''>
         <TbTargetArrow className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}} />
         <h1 style={{fontWeight:'300',color:'#242f65'}} className='mt-5 montserrat'>VISION</h1>
         </div>
         <p style={{color:'#242f65',fontWeight:'300'}} className='montserrat m-4 vision_p'>To be a guiding beacon and role model for oppressed and underprivileged individuals worldwide, fostering a community driven by purpose, acceptance, and respect. By promoting liberation and unity, the goal is to empower individuals to rise above their challenges. This mission aims to create a prosperous future where everyone is valued and included. Through these efforts, a stronger, more compassionate community can be built for all.</p>
        </div>
        <div 
        className='iconing iconing2'
          style={{ 
            width: '30%', 
            height: '80%', 
            backgroundColor: 'white',
            borderRadius: '15px' ,      
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the second box
          data-aos-delay="200" // Delay the animation by 200ms
        >
            <div style={{display:'flex'}} className=''>
          <GiFallingEye className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}} />
          <h1 style={{fontWeight:'300',color:'#242f65'}} className='mt-5 montserrat'>MISSION</h1>
            </div>
            <p style={{color:'#242f65',fontWeight:'300'}} className='montserrat m-4 vision_p'>Our mission is to transform lives by easing hardships and empowering individuals and organizations to achieve financial success and personal fulfillment. We do this through dedicated self-growth, coaching, mentoring, and educational programs. By offering guidance and support, we help people reach their full potential. This mission aims to foster both personal and financial well-being for all.</p>
        </div>
        <div 
        className='iconing12'
          style={{ 
            width: '30%', 
            height: '80%', 
            backgroundColor: 'white',
            borderRadius: '15px' ,
            marginRight:'35px',
            marginTop:'55px',
          }}
          data-aos="zoom-in" // Animation for the third box
          data-aos-delay="400" // Delay the animation by 400ms
        >
           <div style={{display:'flex'}} className=''>
           <SiApachetomcat className='m-3' style={{width:'70px',height:'70px' ,color:'#242f65'}}/>
           <h1 style={{fontWeight:'300',color:'#242f65'}} className='mt-5 montserrat'>CORE VALUES</h1>
            </div>
          <p  style={{color:'#242f65',fontWeight:'300'}} className='montserrat m-4 vision_p'>
          Empowerment through resources and opportunities helps individuals facing adversity succeed, focusing on communication and sales skills for growth. Resilience emphasizes overcoming obstacles with determination, while compassion advocates for the underprivileged using empathy. Effective communication builds relationships and drives success in personal and professional life. Strong communities foster belonging and prosperity by uplifting and supporting each other.</p>
        </div>
      </div>
    </div>  

     <div
  className='testimoni'
  style={{
    marginTop:'200px',
    width: '100%',
    height: 'auto',
    background: 'linear-gradient(180deg, #263f65, #357a77 50%, #263f65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
  }}>
  <div>
    <h1
      className='testimonials'
      data-aos="fadeInText" data-aos-delay="100" 
      style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '140px',
        marginBottom: '50px',
        marginTop: '40px',
        marginLeft: '50px'
      }}>
      Testimonials
    </h1>
  </div>

  <div
    className='boxers'
    style={{
      display: 'flex',
      width: '80%',
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',      // Center vertically
    }}> 
    {/* Box 1 */}
     <div
      data-aos="fade-up"
      className='boxe'
      style={{
        fontFamily:'cursive',
        cursor:'pointer',
        marginTop: '0px',
        width: '25%',
        height: '548px',
        backgroundColor: 'white',
        borderRadius: '15px 15px 0px 0px',
        boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.5s ease', // Animation for scaling
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '40px', color: '#263f65' }} />
      <p style={{ color: '#48bc8c' }} className='m-5 montserrat'>
     
Ansar's coaching has transformed our sales team, enhancing performance and fostering growth. His journey is truly inspiring, motivating others to overcome challenges with resilience. His insights have had a profound impact, pushing us to excel. I am now more driven to pursue my dreams with renewed energy and determination.     </p>
    </div>

    {/* Box 2 */}
    <div
      data-aos="fade-up" data-aos-delay="1000"
      className='boxe boxe2'
      style={{
        fontFamily:'cursive',
        cursor:'pointer',
        marginTop: '50px',
        width: '25%',
        height: '498px',
        backgroundColor: '#48bc8c',
        borderRadius: '15px 15px 0px 0px',
        boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.5s ease', 
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '40px', color: '#263f65' }} />
      <p style={{ color: 'white' }} className='m-5 montserrat'>
      Merakone transformed our office into a modern, functional space with exceptional quality. They created a warm, inviting café atmosphere and delivered luxurious hotel interiors that impressed our guests. Their work on our wellness center exceeded expectations, bringing our vision to life. Highly recommend their services!      </p>
    </div> 

    {/* Box 3 */}
     <div
      data-aos="fade-up" data-aos-delay="5000"
      className='boxe  box3'
      style={{
        fontFamily:'cursive',
        cursor:'pointer',
        width: '25%',
        height: '458px',
        marginTop: '90px',
        backgroundColor: 'white',
        borderRadius: '15px 15px 0px 0px',
        boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.5s ease', // Animation for scaling
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '40px', color: '#263f65' }} />
      <p style={{ color: '#48bc8c' }} className='p-2 m-4 montserrat'>


      Salesphere, led by Ansar, has transformed our sales team, boosting performance and confidence. The NLP techniques have enhanced our communication and sales skills. We've seen a 30% increase in sales since implementing the program. Ansar’s coaching has set us apart in a competitive market.      </p>
    </div> 

    {/* Box 4 */}
     <div
      data-aos="fade-up" data-aos-delay="300"
      className='boxe'
      style={{
        fontFamily:'cursive',
        cursor:'pointer',
        width: '25%',
        marginTop: '10px',
        height: '538px',
        backgroundColor: '#48bc8c',
        borderRadius: '15px 15px 0px 0px',
        boxShadow: '0 0px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.5s ease', // Animation for scaling
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '40px', color: '#263f65' }} />
      <p style={{ color: 'white' }} className='m-5 montserrat'>
      Wealthsphere has transformed my financial outlook with clear plans and effective tools for smart investing. Ansar’s focus on sustainable wealth creation has built my confidence in managing finances. His coaching revolutionized my approach to personal finance, helping me secure a prosperous future. I’ve achieved financial independence and peace of mind through this invaluable program.      </p>
    </div> 
  </div>
</div>




     <div className='mb-5 footer_main' style={{width:'100%',height:'30vh',display:'flex',justifyContent:'space-around',color:'#242f65',fontFamily:'sans-serif'}}>
      <div  className='m-5'>
        <h3 className='foot_head'>Lorem Ipsum</h3>
        <p className='foot_para' style={{width:'250px'}}>Loremipsumdolorsitamet,
          consecteturadipiscingelit,
          seddoeiusmod and temporincidi
          duntutlaboreetdolore
          magnaaliqua.Quisipsumsuspendisse</p>
      </div>

      <div className='m-5'>
        <h3 className='foot_head'>Lorem Ipsum</h3>
        <p className='foot_para'>About Us</p>
        <p className='foot_para'>Careers</p>
        <p className='foot_para'>News</p>
        <p className='foot_para'>Contact</p>

      </div>

      <div className='m-5'>
        <h3 className='foot_head'>Services</h3>
        <p className='foot_para'>About Us</p>
        <p className='foot_para'>Careers</p>
        <p className='foot_para'>News</p>
        <p className='foot_para'>Contact</p>
      </div>

      <div className='m-5'>
        <h3 className='foot_head'>News Letter</h3>
        <p className='foot_para'>Sign up our news letter to get update<br/>
           information , newsand free insight.</p>
      </div>

    </div> 
 




    </div>

  );
}

export default Home;
