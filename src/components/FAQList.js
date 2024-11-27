import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function FAQList() {
    const navigate = useNavigate();

    const asks = [
        { no: 1, title: "배송은 얼마나 걸리나요?"},
        { no: 2, title: "반품은 어떻게 하나요?"},
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>FAQ List</h2>
        <ul>
            {asks.map((ask) => (
                <li key={ask.no}
                    style={{margin: "10px 0", cursor: "pointer"}}
                    onClick={() => navigate(`/asks/${ask.no}`)}
                >
                    <strong>{ask.title}</strong>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default FAQList;