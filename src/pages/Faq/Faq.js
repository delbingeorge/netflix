import React, { useState } from "react";

function Faq() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    return (
        <div>
            <section className="faq-section">
                <div className="faq-head" id="faqone">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <button className="faq-btn" onClick={() => setShow(!show)}>
                    <p>What is Netflix?</p>
                    <h1>+</h1>
                </button>
                {show ? (
                    <div className="faq-content">
                        <span>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                            anime, documentaries and more – on thousands of internet-connected devices.
                            <br></br>
                            <br></br>You can watch as much as you want, whenever you want, without a single ad – all for one
                            low monthly price. There's always something new to discover, and new TV shows and movies are added
                            every week!
                        </span>
                    </div>
                ) : null}
                <button className="faq-btn" onClick={() => setShow1(!show1)}>
                    <p>How much does Netflix cost?</p>
                    <h1>+</h1>
                </button>
                {show1 ? (
                    <div className="faq-content">
                        <span>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or<br></br> streaming device, all for
                            one fixed monthly fee. Plans range from <br></br>₹ 149 to ₹ 649 a month. No extra costs, no
                            contracts.
                        </span>
                    </div>
                ) : null}
                <button className="faq-btn" onClick={() => setShow2(!show2)}>
                    <p>Where can I watch?</p>
                    <h1>+</h1>
                </button>
                {show2 ? (
                    <div className="faq-content">
                        <span>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                            netflix.com from your personal computer or on any internet-connected device that offers the
                            Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br></br>
                            <br></br>
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads
                            to watch while you're on the go and without an internet connection. Take Netflix with you
                            anywhere.
                        </span>
                    </div>
                ) : null}
                <button className="faq-btn" onClick={() => setShow3(!show3)}>
                    <p>How do i cancel?</p>
                    <h1>+</h1>
                </button>
                {show3 ? (
                    <div className="faq-content">
                        <span>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                            your account online in two clicks. There are no cancellation fees – start or stop your account
                            anytime.
                        </span>
                    </div>
                ) : null}
                <button className="faq-btn" onClick={() => setShow4(!show4)}>
                    <p>What can I watch on Netflix?</p>
                    <h1>+</h1>
                </button>
                {show4 ? (
                    <div className="faq-content">
                        <span>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you want, anytime you want.
                        </span>
                    </div>
                ) : null}
                <button className="faq-btn" onClick={() => setShow5(!show5)}>
                    <p>Is Netflix good for kids?</p>
                    <h1>+</h1>
                </button>
                {show5 ? (
                    <div className="faq-content">
                        <span>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you want, anytime you want.
                            <br></br>
                            <br></br>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating
                            of content kids can watch and block specific titles you don’t want kids to see.
                        </span>
                    </div>
                ) : null}

                <div className="faq-email">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="email-submit">
                        <input type="email" placeholder="Email here"></input>
                        <button>Get Started ></button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq;
