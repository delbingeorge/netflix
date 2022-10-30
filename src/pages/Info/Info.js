import React from "react";

// import tvImg from "../../images/tv.png";
import tvImgOne from "../../images/tv.gif";
import tvImgTwo from "../../images/tv_1.gif";
import mobile from "../../images/mobile-0819.jpg";
import kids from "../../images/kids-tv.png";
function Info() {
   
    return (
        <div>
            <section className="info-section">
                <div className="info-div">
                    <div>
                        <h1>Enjoy on your TV.</h1>
                        <p>
                            Watch on smart TVs, PlayStation, Xbox, <br></br>Chromecast, Apple TV, Blu-ray players and<br></br>{" "}
                            more.
                        </p>
                    </div>
                    <img src={tvImgOne}></img>
                </div>
                <div className="info-div">
                    <img src={mobile}></img>
                    <div>
                        <h1>
                            Download your shows <br></br>to watch offline.
                        </h1>
                        <p>
                            Save your favourites easily and always have <br></br>something to watch.
                        </p>
                    </div>
                </div>
                <div className="info-div">
                    <div>
                        <h1>Watch everywhere.</h1>
                        <p>
                            Stream unlimited movies and TV shows on<br></br> your phone, tablet, laptop, and TV.
                        </p>
                    </div>

                    <img src={tvImgTwo}></img>
                </div>
                <div className="info-div">
                    <img src={kids}></img>
                    <div>
                        <h1>
                            Create profiles for <br></br>children.
                        </h1>
                        <p>
                            Send children on adventures with their<br></br> favourite characters in a space made just for
                            <br></br> them—free with your membership.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;
