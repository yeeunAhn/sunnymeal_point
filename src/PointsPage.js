import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PointsPage.css"; // 개별 CSS 파일

export function PointsPage() {
  const { phone } = useParams();
  const [points, setPoints] = useState(null);

  useEffect(() => {
    // 실제 API 호출 대신 예제 데이터 사용
    setTimeout(() => setPoints(100), 1000);
  }, []);

  return (
    <div className="points-container">
      <div className="points-box">
        <h1 className="points-title">포인트 확인</h1>
        <p className="points-info">전화번호: {phone}</p>
        <p className="points-value">
          보유 포인트: {points !== null ? `${points}P` : "로딩 중..."}
        </p>
      </div>
    </div>
  );
}
