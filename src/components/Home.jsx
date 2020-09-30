import React from 'react';
import CV from '../files/CV.pdf'
import '../css/Home.css';

const Home = ()=>{
    return (
        <div className="home">
            <section className="detail_page">
                <div>
                    <h1>Hi There, I'm Jordi</h1>
                    <p>UI/FRONTEND for Web & Mobile</p>
                    <a href={CV} download="">Download</a> 
                </div>
                <hr />
            </section>
            <section className="home_a_propos">
                <div>
                    <h3>ABOUT ME </h3>
                    <p>I'm a young designer & Front-End for web and mobile environment.<br /></p>
                    <p>I use to work with some technologies on web like ReactJs, NodeJs and Xamarin.Froms and React Native For Mobile Device.</p>
                </div>
                <img src="" alt=""/>
            </section>
        </div>
    );
}

export default Home
