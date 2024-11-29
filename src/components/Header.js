import React from "react";

function Header() {
    return (
        <header style={{
            display: "flex", // Flexbox 사용
            justifyContent: "center", // 수평 가운데 정렬
            alignItems: "center", // 수직 가운데 정렬
            padding: "20px", // 상하좌우 여백
            textAlign: "center", // 텍스트 가운데 정렬
        }}>
            <h1 style={{
                display: "flex",
                alignItems: "center",
                gap: "10px", // 이미지와 텍스트 사이 간격
                fontSize: "45px", // 글자 크기
                fontWeight: "bold", // 글자 두께
                color: "#000000", // 텍스트 색상 (선택 사항)
            }}>
                <img
                    src={`${process.env.PUBLIC_URL}/call-icon.png`}
                    alt="Q&A Icon"
                    style={{width: "90px", height: "90px"}}
                />
                고객센터
            </h1>
        </header>
    );
}

export default Header;