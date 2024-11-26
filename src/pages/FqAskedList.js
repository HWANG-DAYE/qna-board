import React from "react";

function FqAskedList() {
    const asks = [
        { no: 1, title: "배송은 얼마나 걸리나요?"},
        { no: 2, title: "반품은 어떻게 하나요?"},
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>FqAskedList</h2>
        <ul>
            {asks.map((ask) => (
                <li key={asks.no}  style={{ margin: "10px 0" }}>
                    <strong>{ask.title}</strong>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default FqAskedList;