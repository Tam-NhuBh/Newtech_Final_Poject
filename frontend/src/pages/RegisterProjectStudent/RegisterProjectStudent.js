import React, { useState, useEffect } from 'react'
// RegisterProjectStudent.js
import { Link } from 'react-router-dom';


function RegisterProjectStudent() {
    const [data, setData] = useState([
      {
        id: 1,
        tenDeTai: "Hệ thống quản lý sinh viên",
        tenGiaoVien: "Nguyen Van A",
        soLuongDangKy: 5,
      },
      {
        id: 2,
        tenDeTai: "Hệ thống quản lý học tập",
        tenGiaoVien: "Tran Thi B",
        soLuongDangKy: 3,
      },
      // Các dữ liệu khác giữ nguyên hoặc thêm dữ liệu mới tương ứng
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [sortOrder, setSortOrder] = useState({
      id: 'asc',
      tenDeTai: 'asc',
      tenGiaoVien: 'asc',
      soLuongDangKy: 'asc',
    });
    const [sortColumn, setSortColumn] = useState(null);
    
    const handleSort = (column) => {
      const isAsc = sortColumn === column && sortOrder[column] === 'asc';
      const multiplier = isAsc ? -1 : 1;
  
      const order = [...filteredData].sort((a, b) => {
        if (a[column] < b[column]) {
          return -1 * multiplier;
        } else if (a[column] > b[column]) {
          return 1 * multiplier;
        } else {
          return 0;
        }
      });
  
      setFilteredData(order);
      setSortOrder((prevSortOrder) => ({
        ...prevSortOrder,
        [column]: isAsc ? 'desc' : 'asc',
      }));
      setSortColumn(column);
    };
    

      
    const renderSortIcon = (column) => {
      if (sortColumn === column) {
        return sortOrder[column] === 'asc' ? (
          <div className="flex items-center">
            <i className="fa fa-arrow-up mr-1" />
            <i className="fa fa-sort" />
          </div>
        ) : (
          <div className="flex items-center">
            <i className="fa fa-arrow-down mr-1" />
            <i className="fa fa-sort" />
          </div>
        );
      } else {
        return <i className="fa fa-sort ml-1" />;
      }
    };
      const handleSearch = () => {
        const term = searchTerm.toLowerCase();
        const result = data.filter((item) => {
          const tenDeTaiMatch = item.tenDeTai.toLowerCase().includes(term);
          const tenGiaoVienMatch = item.tenGiaoVien.toLowerCase().includes(term);
          const soLuongDangKyMatch = item.soLuongDangKy.toString().includes(term);
    
          return tenDeTaiMatch || tenGiaoVienMatch || soLuongDangKyMatch;
        });
    
        setFilteredData(result);
      };
      

      const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
      };
      useEffect(() => {
        handleSearch();
      }, [searchTerm]);
    

      return (
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold text-center mb-4">Danh sách hướng dẫn đề tài</h1>
      
          <div className="mb-4 flex justify-between">
            <div>
              <input
                type="text"
                className="border p-2"
                placeholder="Tìm kiếm theo tên đề tài, tên giáo viên hoặc số lượng đăng ký"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Tìm kiếm
              </button>
            </div>
          </div>
      
          <table className="w-full border border-collapse">
            <thead>
              <tr>
                <th className="text-center border p-2" onClick={() => handleSort('id')}>
                  ID {renderSortIcon('stt')}
                </th>
                <th className="text-center border p-2" onClick={() => handleSort('tenDeTai')}>
                  Tên đề tài {renderSortIcon('tenDeTai')}
                </th>
                <th className="text-center border p-2" onClick={() => handleSort('tenGiaoVien')}>
                  Tên giáo viên {renderSortIcon('tenGiaoVien')}
                </th>
                <th className="text-center border p-2" onClick={() => handleSort('soLuongDangKy')}>
                  Số lượng đăng ký {renderSortIcon('soLuongDangKy')}
                </th>
                <th className="text-center border p-2">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="text-center border p-2">{item.id}</td>
                  <td className="text-center border p-2">{item.tenDeTai}</td>
                  <td className="text-center border p-2">{item.tenGiaoVien}</td>
                  <td className="text-center border p-2">{item.soLuongDangKy}</td>
                  <td className="text-center border p-2">
                  <Link to={`/app/register/${item.id}`}>
                    <button className="btn btn-primary">Chi tiết</button>
                  </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
    }
    
    export default RegisterProjectStudent;