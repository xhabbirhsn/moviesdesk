import React from "react";
import './Category.css'

export function Category() {
    const categories = ["AAAAAAAAA", "BBBBBBB", "CCCCCCC", "DDDDDDDDDDDd"];
    return (
        <>
            <div className="genre">
                <div className="genre-container">
                {categories.map((category, index) => (
                    <div className="genre-item" key={index}>
                        <span className="">{category}</span>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}