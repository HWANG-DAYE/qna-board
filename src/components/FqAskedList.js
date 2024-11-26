import React from "react";

function FqAskedList() {
    const asks = [
        { users_id: 1, title: "배송은 얼마나 걸리나요?"},
        { users_id: 2, title: "반품은 어떻게 하나요?"},
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>FqAskedList</h2>
        <ul>
            {asks.map((ask) => (
                <li key={asks.no}  style={{ margin: "10ps 0" }}>
                    <strong>{asks.title}</strong>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default FqAskedList;