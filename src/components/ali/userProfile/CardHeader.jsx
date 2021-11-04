import React from 'react'

export default function CardHeader({ title, rightTitle, image1, image2 }) {
    return (

        <div className="CardHeader flex-sb  editButton">
            {title ? <h2>{title}</h2> : ""}

            <div className="flex-row">
                {rightTitle ? <h3 style={{ marginTop: "1rem", cursor: "pointer" }}>{rightTitle}</h3> : ""}

                {image1 ? <img src={image1} alt="Button" /> : ""}
                {image2 ? <img src={image2} alt="Button" /> : ""}
            </div>

        </div>


    )
}
