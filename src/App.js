import React, { useState } from 'react';
import './App.css';
import img from './logo.png'

function App() {
  const [thongTinCaNhan, setThongTinCaNhan] = useState({
    
    hoTen: '',
    gioiTinh: '',
    ngaySinh: '',
    noiSinh: '',
    danToc: '',
    tonGiao: '',
    hoKhau: '',
    noiTotNghiep: '',
    namTotNghiep: '',
    cmnd: '',
    ngayCap: '',
    noiCap: '',
    diaChiNhanh: '',
    dienThoai: '',
    dienThoaiPhuHuynh: '',  
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setThongTinCaNhan({
      ...thongTinCaNhan,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(thongTinCaNhan);
  };

  return (
    <div className="App">
      <header>
      <table>
      <thead>
        <tr>
          <td>Hãy đăng ký trường bạn yêu thích ngay nào</td>
        </tr>
      </thead>
      
    </table>
          <table>
        <tr>
          <th>
        <img src={img} alt="logo" />
        </th>
        <td>Chọn khác biệt chọn thành công </td>
        </tr>
        </table>
        <table>
          <th>
        <h1><u>HỒ SƠ XÉT TUYỂN CAO ĐẲNG TRỰC TUYẾN</u></h1>
        </th>
        </table>
      </header>
      
        <form onSubmit={handleSubmit}>
          <section className="thong-tin-ca-nhan">
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="form-group-left">
              <label className="red-text" htmlFor="hoTen">Họ và tên của thí sinh:* </label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                value={thongTinCaNhan.hoTen}
                onChange={handleChange}
                required
              />
              <br></br>
              <sub className='red-text'>Viết đúng như giấy khai sinh </sub>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngaySinh">Ngày,tháng năm sinh:</label>
              <input
                type="date"
                name="ngaySinh"
                id="ngaySinh"
                value={thongTinCaNhan.ngaySinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="red-text">Giới tính:*</label>
              <div>
                <label className="radio-label" htmlFor="gioiTinhNam">Nam</label>
                <input
                  type="radio"
                  id="gioiTinhNam"
                  name="gioiTinh"
                  value="Nam"
                  checked={thongTinCaNhan.gioiTinh === 'Nam'}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="radio-label" htmlFor="gioiTinhNu">Nữ</label>
                <input
                  type="radio"
                  id="gioiTinhNu"
                  name="gioiTinh"
                  value="Nữ"
                  checked={thongTinCaNhan.gioiTinh === 'Nữ'}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiSinh">Nơi sinh:*</label>
              <input
                type="text"
                name="noiSinh"
                id="noiSinh"
                value={thongTinCaNhan.noiSinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="danToc">Dân tộc:*</label>
              <input
                type="text"
                name="danToc"
                id="danToc"
                value={thongTinCaNhan.danToc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="tonGiao">Tôn giáo:*</label>
              <input
                type="text"
                name="tonGiao"
                id="tonGiao"
                value={thongTinCaNhan.tonGiao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="hoKhau">Hộ khẩu thường trú:*</label>
              <input
                type="text"
                name="hoKhau"
                id="hoKhau"
                value={thongTinCaNhan.hoKhau}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiTotNghiep">Nơi tốt nghiệp THCS hoặc THPT hoặc tương đương:*</label>
              <input
                type="text"
                name="noiTotNghiep"
                id="noiTotNghiep"
                value={thongTinCaNhan.noiTotNghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="namTotNghiep">Năm tốt nghiệp:*</label>
              <input
                type="number"
                name="namTotNghiep"
                id="namTotNghiep"
                value={thongTinCaNhan.namTotNghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="cmnd">Số CMND/ thẻ căn cước công dân:* </label>
              <input
                type="text"
                name="cmnd"
                id="cmnd"
                value={thongTinCaNhan.cmnd}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngayCap">Ngày cấp:*</label>
              <input
                type="date"
                name="ngayCap"
                id="ngayCap"
                value={thongTinCaNhan.ngayCap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiCap">Nơi cấp:*</label>
              <input
                type="text"
                name="noiCap"
                id="noiCap"
                value={thongTinCaNhan.noiCap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="diaChiNhanh">Địa chỉ liên lạc (nếu khác hộ khẩu):</label>
              <input
                type="text"
                name="diaChiNhanh"
                id="diaChiNhanh"
                value={thongTinCaNhan.diaChiNhanh}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoai">Điện thoại liên lạc:</label>
              <input
                type="tel"
                name="dienThoai"
                id="dienThoai"
                value={thongTinCaNhan.dienThoai}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoaiPhuHuynh">Điện thoại phụ huynh (nếu có):</label>
              <input
                type="tel"
                name="dienThoaiPhuHuynh"
                id="dienThoaiPhuHuynh"
                value={thongTinCaNhan.dienThoaiPhuHuynh}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
          <h2>Ngành đăng ký</h2>
          <ul className='red-text'>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Digital Marketing" onChange={handleChange} />
              Digital Marketing
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Quản trị khách sạn" onChange={handleChange} />
              Quản trị khách sạn
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Phiên dịch tiếng Anh thương mại" onChange={handleChange} />
              Phiên dịch tiếng Anh thương mại
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="CNTT-Ứng dụng phần mềm" onChange={handleChange} />
              CNTT-Ứng dụng phần mềm
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Tiếng Hàn" onChange={handleChange} />
              Tiếng Hàn
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Chăm sóc sắc đẹp" onChange={handleChange} />
              Chăm sóc sắc đẹp
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Tài chính đầu tư" onChange={handleChange} />
              Tài chính đầu tư
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Công nghệ ô tô" onChange={handleChange} />
              Công nghệ ô tô
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Thiết kế đồ họa" onChange={handleChange} />
              Thiết kế đồ họa
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Quản trị bán hàng" onChange={handleChange} />
              Quản trị bán hàng
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Quản trị doanh nghiệp" onChange={handleChange} />
              Quản trị doanh nghiệp
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Quản lý công nghiệp" onChange={handleChange} />
              Quản lý công nghiệp
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Tiếng Nhật" onChange={handleChange} />
              Tiếng Nhật
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="logistics" onChange={handleChange} />
              logistics
            </li>
            <li>
              <input type="checkbox" name="nganhDangKy" value="Tiếng Trung" onChange={handleChange} />
              Tiếng Trung
            </li>
            <sub><i>Tôi cam đoan lời khai trong phiếu ĐKXT này là đúng sự thật, nếu sai tôi chấp nhận sử lý theo Quy chế tuyển sinh.</i></sub>
            {/* Các ngành khác */}
          </ul>
        </section>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}


export default App;