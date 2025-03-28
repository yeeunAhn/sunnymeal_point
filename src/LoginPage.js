import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // 개별 CSS 파일

export function LoginPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedPhone = phone.trim();

    if (trimmedPhone.length === 10 || trimmedPhone.length === 11) {
      if (trimmedPhone === "01012345678") {
        navigate("/admin"); // 특정 번호는 관리자 페이지로 이동
      } else {
        navigate(`/points/${trimmedPhone}`); // 일반 사용자는 포인트 페이지로 이동
      }
    } else {
      alert("올바른 전화번호를 입력하세요.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="전화번호 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
