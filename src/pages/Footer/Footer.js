import React from "react";
import { cate } from "../cate";
import "../Hero/Hero.css";

// import { cate } from "../cate";

function Footer() {
    return (
        <div>
            <footer>
                <p>Questions? Call 000-800-040-1843</p>
                <div className="footer-div">
                    <div>
                        <a href="https://twitter.com/dellbingeorge">FAQ</a>
                        <a href="https://twitter.com/dellbingeorge">Investor Relations</a>
                        <a href="https://twitter.com/dellbingeorge">Privacy</a>
                        <a href="https://twitter.com/dellbingeorge">Speed Test</a>
                    </div>
                    <div>
                        <a href="https://twitter.com/dellbingeorge">Help Center</a>
                        <a href="https://twitter.com/dellbingeorge">Jobs</a>
                        <a href="https://twitter.com/dellbingeorge">Cookie Preferences</a>
                        <a href="https://twitter.com/dellbingeorge">Legal Notices</a>
                    </div>
                    <div>
                        <a href="https://twitter.com/dellbingeorge">Account</a>
                        <a href="https://twitter.com/dellbingeorge">Ways to Watch</a>
                        <a href="https://twitter.com/dellbingeorge">Corporate Information</a>
                        <a href="https://twitter.com/dellbingeorge">Only in Netflix</a>
                    </div>
                    <div>
                        <a href="https://twitter.com/dellbingeorge">Media Centre</a>
                        <a href="https://twitter.com/dellbingeorge">Terms of Use</a>
                        <a href="https://twitter.com/dellbingeorge">Contact Us</a>
                    </div>
                </div>
                <select className="foot-btn">
                    {cate.map((cate) => (
                        <option>{cate.title}</option>
                    ))}
                </select>
                <p>Netflix India</p>
            </footer>
        </div>
    );
}

export default Footer;
