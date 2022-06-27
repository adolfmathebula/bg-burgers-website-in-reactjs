import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/About.Styles.css';
import John from '../images/person1.png';
import Tshepo from '../images/person2.png';
import Adolf from '../images/person3.png';
import Precious from '../images/person4.png';

const About = () => {
  return (

    <section class="about-section">

            <div class="about-section-left">

                <br/><br/>
                <h1>Our History</h1>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    
                    <br/><br/>
                    <span class="color-orange">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</span>
                </p>

                <h1>Our Vision</h1>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                     </p>

                <h1>Management</h1>
                <p>Diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

                <div class="people-management">

                    <div class="person">
                        <img src={John} alt="" class="people-image" />
                        <p class="people-name">John K. Smith</p>
                        <p class="people-title">Chief Executive Officer</p>
                        <p class="people-email">johnsmith@bgburgers.co.za</p>
                    </div>

                    <div class="person">
                    <img src={Tshepo} alt="" class="people-image" />
                        <p class="people-name">Thepo Nkuna</p>
                        <p class="people-title">Operations Manager</p>
                        <p class="people-email">tbkuna@bgburgers.co.za</p>
                    </div>

                    <div class="person">
                        <img src={Adolf} alt="" class="people-image" />
                        <p class="people-name">Adolf Mathebula</p>
                        <p class="people-title">Brand Manager</p>
                        <p class="people-email">adolf@bgburgers.co.za</p>
                    </div>

                    <div class="person">
                        <img src={Precious} alt="" class="people-image" />
                        <p class="people-name">Precious H. Mokwena</p>
                        <p class="people-title">Financial Manager</p>
                        <p class="people-email">mokwenap@bgburgers.co.za</p>
                    </div>

                </div>

            </div>

            <Sidebar />

        </section>
  )
}

export default About