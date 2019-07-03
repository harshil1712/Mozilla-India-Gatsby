import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mozilla India" />
    <section className="section">
        <div className="container has-text-centered">
            <h1 className="title">
                Mozilla India
            </h1>
            <p className="subtitle">Home to the largest Mozilla community</p>
        </div>
    </section>
    <section className="section">
            <div className="container">
                <div className="notification is-link has-text-centered">We’re building a better Internet</div>
                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Mission</p>
                            <p className="subtitle">Our mission is to ensure the Internet is a global public resource, open and accessible to all. An Internet that truly puts people first, where individuals can shape their own experience and are empowered, safe and independent.</p>
                            <p>At Mozilla, we’re a global community of technologists, thinkers and builders working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.</p><br/>
                            <p>Read the <a href="https://mozilla.org/about/manifesto/">Mozilla Manifesto</a> to learn even more about the values and principles that guide the pursuit of our mission.</p>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Communication channels</p>
                            <ul className="iconed-list">
                                <li>
                                    <span className="icon">
                                        <img src="img/discourse.png" alt="Discourse Icon" />
                                    </span>
                                    <a href="https://discourse.mozilla.org/c/india">Discourse</a> - for important topics
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src="img/mail.jpg" alt="Mail Icon" />
                                    </span>
                                    <a href="https://lists.mozilla.org/listinfo/community-india">Mailing List</a> - for restricted visibility
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src="img/icon-telegram.svg" alt="Telegram Icon" />
                                    </span>
                                    <a href="https://t.me/MozillaIN">Telegram</a> - for instant messaging
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src="img/icon-riot.svg" alt="Matrix Icon" />
                                    </span>
                                    <a href="https://matrix.to/#/!OkcrSgHxzzzLELqtai:matrix.org">Matrix</a> - for instant messaging
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Social Media</p>
                            <ul className="iconed-list">
                                <li>
                                    <span className="icon" style={{backgroun: '#1da1f2'}}>
                                        <img src="img/twitter.png" alt="Twitter Icon"/>
                                    </span>
                                    <a href="https://twitter.com/MozillaIN">@MozillaIN</a>
                                </li>
                                <li>
                                    <span className="icon" style={{backgroun: '#1da1f2'}}>
                                        <img src="img/facebook.png" alt="Facebook Icon" />
                                    </span>
                                    <a href="https://facebook.com/mozillaindia">mozillaindia</a>
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src="img/icon-teach.svg" id="blog-image" alt="Blog Icon" />
                                    </span>
                                    <a href="https://blog.mozillaindia.org">blog</a>
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src="img/instagram.png" alt="Instagram Icon" />
                                    </span>
                                    <a href="https://www.instagram.com/mozillain/">mozillaindia</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title has-text-centered">How do I contribute?</p>
                            <p className="subtitle has-text-centered">There is no single answer. But read on to learn about multiple ways to be a part of a vibrant community of lovers of the open web.</p>
                            <p>The first step towards being a Mozillian and contributing to Mozilla is to know what Mozilla is. You have already read our mission above. Make sure you read the <a href="https://mozilla.org/about/manifesto/">manifesto</a> as well. Mozillians live by our manifesto.</p>
                            <br/>
                            <p>If all this sounds interesting to you, and you want to call yourself a Mozillian, sign up on the <a href="https://mozillians.org">mozillians</a> website and create your mozillians profile.</p>
                            <br/>
                            <p>Now you may want to find other contributors near you to work together. You can attend an <a href="https://www.mozilla.org/contribute/events/">upcoming event</a>, join our communication channels, follow our social media accounts, and join many of the various sub-communities which are listed below according to your interesting</p>
                            <br/>
                            <p>Find impactful and easy ways to contribute to Mozilla in the <a href="https://activate.mozilla.community/">Activate Mozilla</a> community website.</p>
                            <br/>
                            <p>Would you rather just sit at a convenient place, read resources, and figure out on your own which projects to contribute to and how? Visit <a href="https://wiki.mozilla.org/Contribute"> Contribute Wiki</a> and <a href="https://whatcanidoformozilla.org/">What Can I Do For Mozilla</a>. Multiple projects are listed down at these places where you can start contributing straightaway.</p>
                            <br/>
                            <p>If at any moment you find yourself stuck and unable to move forward, drop a message in any one of our communication channels and someone will surely reply. We are a bunch of friendly folks who are mindful of being inclusive in our communications and we are bound to <a href="https://www.mozilla.org/about/governance/policies/participation/">our community participation guidelines</a> which ensures that you will be treated respectfully, no matter who you are.</p>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <div className="tile is-ancestor is-vertical">
                                <div className="tile is-parent">
                                    <p className="title">Regional groups</p>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Delhi</p>
                                            <a href="https://t.me/mozilladelhi">Telegram</a>
                                            <a href="https://twitter.com/mozilladelhincr">Twitter</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Gujarat</p>
                                            <a href="http://mozillagujarat.org">Website</a>
                                            <a href="https://t.me/joinchat/CpXrs0J9FOfBVAB4TTEzAw">Telegram</a>
                                            <a href="https://github.com/mozguj">GitHub</a>
                                            <a href="https://twitter.com/mozguj">Twitter</a>
                                            <a href="https://www.instagram.com/mozguj/">Instagram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Hyderabad</p>
                                            <a href="https://t.me/MozHyderabad">Telegram</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Karnataka (BLR)</p>
                                            <a href="https://t.me/joinchat/AFfAPD1xS9_WEiXjDfkYGA">Telegram</a>
                                            <a href="https://twitter.com/MozKarnataka">Twitter</a>
                                            <a href="https://www.meetup.com/mozilla_bangalore/">Meetup</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Kerala</p>
                                            <a href="https://mozillakerala.com/">Website</a>
                                            <a href="https://t.me/mozilla_kerala">Telegram</a>
                                            <a href="https://github.com/MozillaKerala">GitHub</a>
                                            <a href="https://twitter.com/MozillaKerala">Twitter</a>
                                            <a href="https://www.instagram.com/mozillakerala/">Instagram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Nashik</p>
                                            <a href="https://t.me/MozillaNashik">Telegram</a>
                                            <a href="https://twitter.com/mozillanashik">Twitter</a>
                                            <a href="https://www.instagram.com/mozillanashik/">Instagram</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Pune</p>
                                            <a href="https://t.me/joinchat/AAAAAD7Sg38JxPvt489eoA">Telegram</a>
                                            <a href="https://www.facebook.com/mozPune/">Facebook</a>
                                            <a href="https://twitter.com/mozpune">Twitter</a>
                                            <a href="https://www.meetup.com/Pune-Mozilla-Meetup/">Meetup</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Punjab</p>
                                            <a href="https://www.meetup.com/MozillaPunjab/">Website</a>
                                            <a href="https://t.me/mozillapunjab">Telegram</a>
                                            <a href="https://github.com/MozillaPunjab">GitHub</a>
                                            <a href="https://twitter.com/MozPunjab">Twitter</a>
                                            <a href="https://www.facebook.com/MozillaPunjab">Facebook</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Rajasthan</p>
                                            <a href="https://t.me/mozillarajasthan">Telegram</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Tamil Nadu</p>
                                            <a href="https://t.me/mozillatnc">Telegram</a>
                                            <a href="https://github.com/MozillaTN">GitHub</a>
                                            <a href="https://twitter.com/mozillaTN">Twitter</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent"></div>
                                    <div className="tile is-parent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <div className="tile is-ancestor is-vertical">
                                <div className="tile is-parent">
                                    <p className="title">Functional groups</p>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Hindi Localization Group</p>
                                            <a href="https://t.me/joinchat/CEMWVhH5ueW0zSAqfma6lA">Telegram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Malayalam Localization Group</p>
                                            <a href="https://t.me/firefoxsmc">Telegram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Open Design</p>
                                            <a href="https://github.com/mozilla/OpenDesign/">GitHub</a>
                                            <a href="https://t.me/opendesign">Telegram</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <div className="tile is-ancestor is-vertical">
                                <div className="tile is-parent is-vertical">
                                    <p className="title">Campus Clubs</p>
                                    A Mozilla University &amp; College Club is a group of students with a passion for technology who meet regularly to advance this mission by building and innovating on open source projects that keep the web open.To learn more about Campus Clubs, you can visit the <a href="https://campus.mozilla.community/">Mozilla Campus Club Website</a>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Campus Club BVUCOE, Pune</p>
                                            <a href="https://www.facebook.com/mozilacampusclubbvucoep/">Facebook</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">FOSSers VAST, Kerala</p><br/>
                                            <a href="http://fossers.vidyaacademy.ac.in">Website</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">GLUG MVIT, Bangalore</p><br/>
                                            <a href="https://blog.glugmvit.com/">Website</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Campus Club MACE, Kerala</p>
                                            <a href="https://www.instagram.com/mozillamace/">Instagram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Campus Club NUV, Vadodara</p>
                                            <a href="https://www.instagram.com/cybersocietynuv/">Instagram</a>
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <div className="tile is-child box">
                                            <p className="subtitle">Mozilla Campus Club SJCET, Kerala</p>
                                            <a href="https://www.instagram.com/mozilla.sjcet/">Instagram</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile">
                                    <div className="tile is-parent">
                                            <div className="tile is-child box">
                                                <p className="subtitle">Mozneurons SVIT, Vasad</p><br/>
                                                <a href="https://www.instagram.com/moz_neurons">Instagram</a>
                                            </div>
                                        </div>
                                    <div className="tile is-parent"></div>
                                    <div className="tile is-parent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default IndexPage
