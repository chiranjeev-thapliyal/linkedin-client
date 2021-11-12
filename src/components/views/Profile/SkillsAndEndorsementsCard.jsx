import React from 'react'

export default function SkillsAndEndorsementsCard({ title, num, fname }) {
    return (
        <div>
            <h3 style={{ marginBottom: "1rem" }}>{title} <span style={{ color: "gray", fontWeight: "400", fontSize: "small" }}> . {num}</span></h3>

            <p>Endorsed by <strong>{fname} {true ? `and ${num - 1} others.` : ""}</strong></p>
            <br />
        </div>
    )
}
