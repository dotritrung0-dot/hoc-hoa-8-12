#!/bin/bash
cd "$(dirname "$0")"
PORT=8080
echo "================================================="
echo "   🧪 ỨNG DỤNG HỌC HÓA HỌC TỪ ĐẦU ĐẾN 12"
echo "================================================="
echo "Đang khởi động máy chủ cục bộ tại cổng $PORT..."
echo "👉 Mở trình duyệt trên điện thoại và truy cập:"
echo "   http://localhost:$PORT"
echo "================================================="
python3 -m http.server $PORT
