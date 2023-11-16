// src/components/ResultItem.js
import React from 'react';
import './ResultItem.css';
const ResultItem = ({ title, imageUrl, description, date, downloadLink }) => {
  const handleTitleClick = () => {
    // Thêm logic xử lý khi title được click, ví dụ mở Reference detail
    console.log('Title clicked');
  };

  return (
      <div className="result-item relative mb-5 border p-1 shadow-md">
        <div className="data-column">
        <h3 onClick={handleTitleClick} className="text-lg w-full h-full">{title}</h3>
        </div>
        <div className="other-columns">
          <div className="custom-image-container my-3 mx-3">
            <div className="custom-child">
              <img src={imageUrl} alt="Ảnh đại diện" className="w-full h-full object-cover rounded" />
            </div>
          </div>
          <div className= "mx-3 mt-4" >
            
            <p className="date">Khoa Công Nghệ Thông Tin</p>
            <p className="description">Mô tả: {description}</p>
            <p className="date text-red-500 text-sm">Thời gian thực hiện: {date}</p>
            <div className="relative">
                <a href={downloadLink} download>
                    <button className="bg-red-500 text-white px-1 py-1 rounded-full flex items-center justify-center w-1/10 ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-2 w-2 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                    <span className="ml-1 mr-3">Download</span>
                    </button>
                </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ResultItem;
