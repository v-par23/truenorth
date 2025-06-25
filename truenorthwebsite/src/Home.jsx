
import IMG1 from "./assets/image_1.png";
import IMG2 from "./assets/image_2.png";
import IMG3 from "./assets/image_3.png";
import IMG4 from "./assets/image_4.png";
import img from "./assets/image.png";
import Navbar from "./Navbar";

const Home = () => {

    const AboutUs = () => {
        return(
        <div className = " text-red-700 w-[1500px] h-dvh flex items-center flex-col justify-center" >
            <div className = "text-white text-[80px]">TrueNorth Table Tennis</div>
            <div className = " text-gray-400 text-[45px] font-light">Where Champions Rise</div>
    
            <div className = "text-white flex flex-col items-center mt-[20px] text-[25px] font-extralight">
            <p>Embody the spirit of a champion with resilient, </p>
            <p>fearless, and unstoppable training. Join the King of the</p>
            <p>North and claim your rightful place at the top.</p>
            </div>
    
            <div className = "flex flex-row mt-[40px]">
            <div className = "bg-red-600 w-[150px] h-[75px] rounded flex justify-center items-center text-white m-[10px] text-2xl font-bold hover:bg-red-700">
                Join Now
            </div>
            <div className = "bg-gray-800 w-[150px] h-[75px] rounded flex justify-center items-center text-white m-[10px] border-2 border-gray-500 text-2xl font-bold hover:bg-gray-900 hover:border-gray-600">
                Learn More
            </div>
            </div>
    
        </div>
        );
    }

    const Intro = () => {
    const text = "Home of "
    return( 
      <div className = "h-dvh flex justify-center flex-col " id = "intro">
        <p className = "text-white text-[40px] m-top-50 flex items-center flex-col justify-center">Welcome to Toronto's Premier Table Tennis Destination</p>
        <p className = "text-white text-[22px] m-top-100  flex items-center flex-row justify-center font-extralight">Home of&nbsp; <div className = "text-red-600">Champions.</div>&nbsp;Heart of the<div className = "text-red-600"> &nbsp;North.</div></p>
        
        <div className = "flex flex-row items-center justify-center mt-[40px]">
        <div className="flex-1 max-w-xl right" >
          <img src={img} alt="True North Table Tennis Club" className="rounded-lg w-w-xl" />
        </div>
        <div className="flex-1 max-w-xl text-left ml-[20px]">
          <p className="text-white text-[18px] text-lg leading-relaxed">
                        At True North Table Tennis Club, our name represents more than a place. It stands for leadership, resilience, and the spirit of a champion.
            “True North” is the King of the North, a force powered by discipline, skill, and unwavering passion.
            <br /><br />
            We train every player to rise with courage, heart, and relentless dedication, both on and off the table.
            Welcome to True North, where champions rise and the King of the North is born.
          </p>
        </div>
        </div>
        
        
        <div className="w-[1260px] mx-auto flex flex-wrap justify-center items-start gap-20 mt-16">
          {[
            "Elite Coaching Team",
            "State-of-the-Art Facilities",
            "Tailored Programs for All Levels",
            "Community and Competition",
          ].map((label) => (
            <div key={label} className="flex flex-col">
              <div className="w-12 border-t-2 border-red-600 mb-2"></div>
              <p className="text-white text-[18px] font-extralight">{label}</p>
            </div>
          ))}
        </div>

 
      </div>
    );
    }
    
    const Coaches = () => {
    return(
      <div className = "text-white w-9/10 flex justify-center items-center flex-col h-dvh" id="coaches">
        <div className = "flex text-[40px] ">Meet Our Coaches</div>
        <p className = "text-[20px] mt-[20px] font-extralight flex flex-row">
          
          <div className = "text-red-600">Professional</div> &nbsp; and <div className = "text-red-600"> &nbsp; experienced &nbsp;</div> coaching team from entry-level to top performance,</p>
        <p className = "text-[20px] font-extralight flex">TrueNorth has the best coaches to meet your &nbsp;
          
          <div className = "text-red-600">expectations.</div>
          
          </p>

        <div className = "flex flex-row w-full justify-center mt-[30px]">

          <div className = "m-[10px] w-1/5 h-fit flex items-center flex-col">
          <p className = "text-[20px]" >Eugene Wang</p>
          <p>Founder & Head Coach</p>
          <img src={IMG3} className = "w-3/4 rounded mt-[20px]"></img>
          <div className = " h-[50px] w-[100px] m-[20px] flex justify-center rounded bg-red-600 items-center font-bold">More Info</div>
          </div>

          <div className = "m-[10px] w-1/5 h-fit flex items-center flex-col">
          <p className = "text-[20px]">Hongtao Chen</p>
          <p>Co-founder & Head Coach</p>
          <img src={IMG1} className = "w-3/4 rounded mt-[20px]"></img>
          <div className = " h-[50px] w-[100px] m-[20px] flex justify-center rounded bg-red-600 items-center font-bold">More Info</div>
          </div>

          <div className = " m-[10px] w-1/5 h-fit flex flex-col items-center">
          <p className = "text-[20px]">Mo Zhang</p>
          <p>Head Coach</p>
          <img src={IMG2} className = "w-3/4 rounded mt-[20px]"></img>
          <div className = " h-[50px] w-[100px] m-[20px] flex justify-center rounded bg-red-600 items-center font-bold">More Info</div>
          </div>

          <div className = "m-[10px] w-1/5 h-fit flex items-center flex-col">
          <p className = "text-[20px]">Ye Lin</p>
          <p>Head Coach</p>
          <img src={IMG4} className = "w-3/4 rounded mt-[20px]"></img>
          <div className = " h-[50px] w-[100px] m-[20px] flex justify-center rounded bg-red-600 items-center font-bold">More Info</div>
          </div>
        </div>
      </div>
    );
    }

    const Train = () => {
    return(
      <div className = " text-red-700 w-fit h-dvh flex items-center flex-col justify-center " id="joinnow">
        <div className = "text-white text-[40px]">Train With Us</div>
        <div className = " flex text-white">
          <div className = "border m-[10px] w-[400px] rounded p-[15px] h-[300px]">
            <h1 className = "text-red-600 text-[24px]">Beginner Class</h1>
            <p className = "text-red-600">Time:</p>
            <p>
              Saturday 3:00-5:00pm
              <br></br>
              Sunday   3:00-5:00pm  
            </p>
            <p className = "text-red-600">Price:</p>
            <p>Drop In: $50/session</p>
            <p className = "text-red-600 text-[20px]">Limited Spots Available</p>
          </div>

          <div className = "border m-[10px] w-[400px] rounded p-[15px]">
            <h1 className = "text-red-600 text-[24px]">Adult Class</h1>
               <p className = "text-red-600">Time:</p>
            <p>
              Saturday 3:00-5:00pm
              <br></br>
              Sunday   3:00-5:00pm
            </p>
            <p className = "text-red-600">Price:</p>
            <p>Drop In: $50/session</p>
            <p className = "text-red-600 text-[20px]">Limited Spots Available</p>
          </div>

          <div className = "border m-[10px] w-[400px] rounded p-[15px]">
            <h1 className = "text-red-600 text-[24px]">Competition Class</h1>
               <p className = "text-red-600"> Time:</p>
            <p>
              Saturday 3:00-5:00pm
              <br></br>
              Sunday   3:00-5:00pm
            </p>
            <p className = "text-red-600">Price:</p>
            <p>Drop In: $50/session</p>
            <p className = "text-red-600 text-[20px]">Limited Spots Available</p>
          </div>
        </div>
    
      </div>
    );
    }

    const Contact = () => {
    return(
      <div className = " text-red-700 h-fit flex items-center flex-col justify-center m-[20px]">
        <div className = "text-white text-[40px]">Contact Us</div>

        <div className = "text-red flex flex-col items-center text-[25px]">
          <p>Want to learn more? </p>
        </div>

        <div className = "text-white flex flex-col items-center mt-[20px] text-[18px]">
          <p>(416) 525-7624 </p>
          <p>truenorthtabletennis@hotmail.com</p>
          <p>truenorthttc</p>
          <p>3470 Pharmacy Ave, Scarborough, ON M1W 2S7</p>
        </div>
      </div>
    );
  }

    return(
        <div className = " w-dvw h-fit flex flex-col items-center bg-gradient-to-br via-black from-red-900 to-red-900">
            <Navbar/>
            <AboutUs/>
            <Intro/>
            <Coaches/>
            <Train/>
            <Contact/>
        </div>
       
    );
}
export default Home;