import React from 'react';

import '../css/Portfolio.css';

const Portfolio = ({vara})=>{
    return (
        <main className="portfolio">
            <section className="detail_page">
                <div>
                    <h1>PORTFOLIO</h1>
                    <p>Here is some of my work on design & development</p>
                </div>
                <hr/>
            </section>

            <section className="portfolio_projects">
                <ul className="portfolio_project_menu">
                    <li><button className="active_button">All Project</button></li>
                    <li><button>Web Dev</button></li>
                    <li><button>Mobile Dev</button></li>
                </ul>
                <div className="portfolio_project_link">
                {vara.map((e, index)=>
                    <div className="portfolio_work" key={index}>
                        <img src={e.Img} alt="image.png"/>
                        <div>
                            <h4>{e.Name}</h4>
                            <hr/>
                            <a href={e.Link}>Go To Project</a>
                        </div>
                    </div>
                )}
                </div>
            </section>
        </main>
    )
}

export default Portfolio;