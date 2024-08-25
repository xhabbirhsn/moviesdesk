import React from "react";
import './ItemDetails.css';
import logo from '../../Assets/logo.png'
import { Footer } from "../Footer/Footer";

export function ItemDetails() {
    const categories = ["AAAAAAAAA", "BBBBBBB", "CCCCCCC", "DDDDDDDDDDDd"];
    const movieDetails = [
        { label: 'Movie Name:', value: 'Better Call Soul (season 4)' },
        { label: 'iMDb Rating:', value: '9.5/10' },
        { label: 'Genre:', value: 'Drama, Crime' },
        { label: 'Stars:', value: 'Bob Odenkirk, Rhea Seehorn, Jonathan Banks' },
        { label: 'Creator:', value: 'Vince Gilligan, Peter Gould' },
        { label: 'No of Episodes:', value: '10' },
        { label: 'Language:', value: 'English' },
        { label: 'Quality:', value: 'HD' }
    ];
    const items = [
        { id: 1, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur?", image: logo },
        { id: 2, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur?", image: logo },
        { id: 3, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur?", image: logo },
        { id: 4, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consequuntur?", image: logo },
    ];
    const links = [
        { id: 1, label: "link 1", link: 'https://google.com' },
        { id: 2, label: "link 2", link: 'https://google.com' },
        { id: 3, label: "link 3", link: 'https://google.com' }
    ]
    return (
        <>
            <div className="main text-white">
                <div className="item-details">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, exercitationem!</h1>
                    <div className="list-category">
                        <div className="date">
                            <span className="icon bg-blue-700">📅</span>
                            <span className="bg-blue-700">Jun-22nd, 2024</span>
                        </div>
                        {categories.map((category, index) => (
                            <div className="category" key={index}>
                                <span className="icon bg-white">📁</span>
                                <span className="bg-white">{category}</span>
                            </div>
                        ))}
                    </div>
                    <div className="title-text">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta voluptatibus officiis error exercitationem vitae corrupti aspernatur cumque dolores? Expedita.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vitae nihil ratione, praesentium neque voluptatibus.</h3>
                    </div>
                    <div className="movie-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="movie-details">
                        {movieDetails.map((detail, index) => (
                            detail.label === 'Movie Name:' ? (
                                <h1 key={index} className="movie-details-h1">{detail.value}</h1>
                            ) : (
                                <h2 key={index}>{detail.label} <span className="movie-details-h2">{detail.value}</span></h2>
                            )
                        ))}
                    </div>
                    <div className="screenshots-container">
                        <div className="screenshots">
                            {items.map((item, index) => (
                                <img key={index} src={item.image} alt="img" className="screenshot-image" />
                            ))}
                        </div>
                    </div>
                    <div className="download-heading">
                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, tenetur!</h1>
                        <h1 className="download-links-text">Download Links</h1>
                    </div>
                    <div className="download-links">
                        {links.map((item, index) => (
                            <div key={index} className="link-item">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.label}</a>
                            </div>
                        ))}
                    </div>
                        <div className="movie-description">
                            <h1>Description:</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium expedita ab molestiae nihil amet ad ipsam cupiditate, deleniti iure minus, totam cum, facere dolor aperiam numquam? Non minima a distinctio illum. Nostrum quas nisi, natus facilis magnam vel reiciendis itaque ipsam expedita accusamus rem officiis dolor temporibus rerum cumque!</p>
                        </div>
                    <div className="movie-story-line">
                        <h1>Storyline:</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus voluptatibus at nesciunt, voluptate praesentium quis, illo autem in quia ut recusandae nemo, accusamus quam quos obcaecati aut qui aliquam inventore ratione necessitatibus. Omnis nam vero itaque enim suscipit, nesciunt accusantium asperiores deserunt maxime officia, impedit sunt ab. Recusandae, optio.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}