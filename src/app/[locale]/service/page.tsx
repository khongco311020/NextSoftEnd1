// Trong file Service.js
import Image from "next/image";
const Service = () => {
  return (
    <div className="">
      <Image
        src="/bg.jpg"
        alt=""
        width={1200}
        height={250}
        className="relative w-full  h-auto "
      />
      <div className="services px-5 py-10 max-w-4xl mx-auto flex flex-col gap-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Dịch vụ của chúng tôi
      </h1>
      <section id="thiet-ke-website">
        <h2 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
          Thiết kế Website
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Thiết kế website là quá trình tạo ra giao diện và trải nghiệm người
          dùng của một trang web. Điều này bao gồm việc xây dựng bố cục, màu
          sắc, hình ảnh, và các yếu tố đồ họa khác để tạo ra một trang web hấp
          dẫn và dễ sử dụng. Một trang web tốt không chỉ đẹp mắt mà còn phải
          thân thiện với người dùng, dễ dàng điều hướng và tối ưu hóa cho các
          công cụ tìm kiếm (SEO). Dịch vụ thiết kế website bao gồm:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Phân tích và nghiên cứu yêu cầu của khách hàng Thiết kế giao diện đồ
            họa (UI/UX)
          </li>
          <li>
            Xây dựng trang web bằng các công nghệ hiện đại (HTML, CSS,
            JavaScript)
          </li>
          <li>Tối ưu hóa trang web cho thiết bị di động (responsive design)</li>
          <li>Tối ưu hóa SEO để cải thiện thứ hạng tìm kiếm</li>
        </ul>
      </section>
      <section id="thiet-ke-he-thong">
        <h2 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
          Thiết kế Hệ thống
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Thiết kế hệ thống là quá trình lập kế hoạch và cấu trúc các thành phần
          của hệ thống thông tin để đáp ứng các yêu cầu cụ thể của một tổ chức
          hoặc doanh nghiệp. Quá trình này bao gồm việc phân tích nhu cầu, xác
          định các thành phần phần cứng và phần mềm cần thiết, và thiết lập các
          giao thức và tiêu chuẩn hoạt động. Một hệ thống được thiết kế tốt sẽ:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Đảm bảo tính khả dụng và tin cậy</li>
          <li>Đáp ứng yêu cầu hiệu suất và mở rộng</li>
          <li>Bảo mật thông tin và dữ liệu</li>
          <li>Tích hợp với các hệ thống hiện có</li>
        </ul>
      </section>
      <section id="giai-phap-cntt">
        <h2 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
          Giải pháp CNTT
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Giải pháp Công nghệ Thông tin (CNTT) là việc áp dụng công nghệ để giải
          quyết các vấn đề kinh doanh và cải thiện hiệu quả hoạt động của doanh
          nghiệp. Các giải pháp CNTT bao gồm một loạt các dịch vụ và công nghệ
          như phần mềm quản lý doanh nghiệp (ERP), hệ thống quản lý quan hệ
          khách hàng (CRM), hạ tầng mạng, bảo mật thông tin, và các dịch vụ đám
          mây. Lợi ích của việc triển khai giải pháp CNTT bao gồm:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Tối ưu hóa quy trình kinh doanh</li>
          <li>Cải thiện năng suất và hiệu quả làm việc</li>
          <li>Tăng cường bảo mật và quản lý rủi ro</li>
          <li>Hỗ trợ ra quyết định thông minh dựa trên dữ liệu</li>
        </ul>
      </section>
      <section id="thiet-ke-app-mobile">
        <h2 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
          Thiết kế App Mobile
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Thiết kế ứng dụng di động (Mobile App) là quá trình tạo ra các ứng
          dụng phần mềm chạy trên thiết bị di động như điện thoại thông minh và
          máy tính bảng. Quá trình này bao gồm việc thiết kế giao diện người
          dùng (UI/UX), lập trình chức năng, và thử nghiệm ứng dụng trên nhiều
          nền tảng di động như iOS và Android. Một ứng dụng di động chất lượng
          cao sẽ:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cung cấp trải nghiệm người dùng tuyệt vời </li>
          <li>Tương thích với nhiều loại thiết bị và kích thước màn hình</li>
          <li>Hiệu suất mượt mà và ổn định</li>
          <li>Bảo mật và bảo vệ dữ liệu người dùng </li>
        </ul>
      </section>
    </div>
    </div>
    
  );
};

export default Service;
