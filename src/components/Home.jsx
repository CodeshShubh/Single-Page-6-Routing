import React from 'react';
import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
    <div className="home">
        <main>
            <h1>Codesh Shubh</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Rem quia sapiente, quo doloremque 
                accusamus deserunt ratione voluptatibus neque quasi
                 porro voluptates vitae beatae voluptas tempora nostrum impedit et
                  provident veritatis nesciunt quae sed! Ipsum quos tenetur 
                 ullam repellendus maiores ad quam asperiores expedita? 
                Minima adipisci animi unde nihil impedit soluta?
            </p>
        </div>
    </div>
    </>
  )
}

export default Home