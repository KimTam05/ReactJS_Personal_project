
# Ứng dụng Thời tiết

## Tổng quan

Ứng dụng Thời tiết là một ứng dụng đơn giản và trực quan được xây dựng bằng ReactJS, cho phép người dùng nhận thông tin thời tiết theo thời gian thực cho bất kỳ thành phố nào trên thế giới. Ứng dụng lấy dữ liệu từ một API thời tiết và hiển thị các điều kiện thời tiết hiện tại, bao gồm nhiệt độ, độ ẩm, tốc độ gió và mô tả ngắn gọn về thời tiết.


## Tính năng

 - Chức năng tìm kiếm: Người dùng có thể tìm kiếm thông tin thời tiết bằng cách nhập tên thành phố.
 - Dữ liệu thời gian thực: Ứng dụng lấy và hiển thị dữ liệu thời tiết thời gian thực từ một API thời tiết đáng tin cậy.
 - Thiết kế đáp ứng: Ứng dụng hoàn toàn đáp ứng và hoạt động tốt trên cả thiết bị để bàn và di động.
  - Giao diện thân thiện với người dùng: Ứng dụng có giao diện sạch sẽ và trực quan.

## Công nghệ sử dụng

 - #### ReactJS: Thư viện JavaScript để xây dựng giao diện người dùng.
 - #### Axios: Thư viện HTTP client dựa trên promise để thực hiện các yêu cầu API.
 - #### OpenWeatherMap API: API thời tiết được sử dụng để lấy dữ liệu thời tiết thời gian thực.
 - #### CSS và Bootstrap: Để tạo kiểu cho ứng dụng.


## Cài đặt

### 1. Clone repository:

```bash
  git clone https://github.com/KimTam05/ReactJS_Personal_project
```

### 2. Chuyển đến thư mục dự án 
```bash
  cd weather-app
```

### 3. Cài đặt các phụ phuộc
```bash
  npm install
```

## Sử dụng

### 1. Lấy API Key từ OpenWeatherMap
Link tạo tài khoản và tạo key: [OpenWeatherMap](https://openweathermap.org/)
### 2. Thêm API key vào mã nguồn:
```bash
  const APIKey = 'ENTER_YOUR_API_KEY_HERE';
```

### 3. Khởi động server
```bash
  npm start
```
### 4. Mở trình duyệt và truy cập để xem ứng dụng.
```
  http://localhost:3000
```


    
## Lời cảm ơn
- OpenWeatherMap đã cung cấp API thời tiết.
- ReactJS cho thư viện tuyệt vời.
- Thư viện Bootstrap giúp CSS dễ hơn
## Authors

- [@KimTam05](https://www.github.com/KimTam05)