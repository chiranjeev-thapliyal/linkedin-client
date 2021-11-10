import React from 'react'

export default function PeopleCard({ btn, imgUrl, name, title }) {

    if (title.length > 65) {
        title = title.slice(0, 65) + "...";
    }


    return (
        <div className="PeopleCard PFCC-BottomPanelButtons">

            <div className="flex-row">
                <div>
                    <img src={imgUrl} alt="peopleLogo" />
                </div>
                <div className="flex-col ml1rem">
                    <strong> <p>{name}</p> </strong>
                    <p className="small" >{title}</p>
                    <button >{btn}</button>
                </div>
            </div>

        </div>
    )
}
