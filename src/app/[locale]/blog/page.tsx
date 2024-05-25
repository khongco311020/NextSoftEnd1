// "use client";
// import styles from "./blog.module.css";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import dayjs from "dayjs";
// import Image from "next/image";
// import ReactPaginate from "react-paginate";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5555/blogs")
//       .then((response) => {
//         console.log("Data fetched:", response.data.data);
//         setBlogs(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   const [pageNumber, setPageNumber] = useState(0);

//   const itemsPerPage = 6;
//   const pagesVisited = pageNumber * itemsPerPage;

//   const itemsDisplay = blogs.slice(pagesVisited, pagesVisited + itemsPerPage);

//   const pageCount = Math.ceil(blogs.length / itemsPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//       easing: "ease",
//       once: false,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div>
//       <div className={styles.container}>
//         <div className={styles.blogcol1} data-aos="fade-right">
//           <h1 className={styles.blogtitle}>BLOG</h1>
//           <div className={styles.blogloop}>
//             {itemsDisplay.map((blog, index) => (
//               <div key={index} className={styles.blogcontent}>
//                 <div className={styles.top}>
//                   <div className={styles.imgContainer}>
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       width={150}
//                       height={150}
//                       className={styles.blogimg}
//                     />
//                   </div>
//                   <div className={styles.bottom}>
//                     <h1 className={styles.title}>{blog.title}</h1>
//                     <p className={styles.content}>{blog.highlight}</p>
//                     <Link href={`/blogs/${blog._id}`}>
//                       <span
//                         className={styles.morehover}
//                         style={{ fontSize: "14px" }}
//                       >
//                         Xem thêm
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <ReactPaginate
//               previousLabel={"<<"}
//               nextLabel={">>"}
//               pageCount={pageCount}
//               onPageChange={changePage}
//               containerClassName={styles.pagination}
//               previousLinkClassName={"previousButton"}
//               nextLinkClassName={"nextButton"}
//               disabledClassName={styles.paginationDisabled}
//               activeClassName={styles.paginationActive}
//             />
//           </div>
//         </div>
//         <div className={styles.blogcol2} data-aos="fade-left">
//           <div className={styles.null}></div>
//           <div className={styles.blogmain}>
//             <h3 className={styles.blognews}>Tin tức nổi bật</h3>
//             <div className={styles.newscontent}>
//               {blogs.map((blog, index) => {
//                 if (index < 4)
//                   return (
//                     <div key={index} className={styles.newsloop}>
//                       <div className={styles.newsbox}>
//                         <Image
//                           src={blog.image}
//                           alt={blog.title}
//                           width={100}
//                           height={100}
//                           className={styles.newsimg}
//                         />
//                       </div>
//                       <div className={styles.newsright}>
//                         <Link href="/blogs/post">{blog.title}</Link>
//                         <span style={{ fontSize: "10px" }}>
//                           {dayjs(blog.createAt).format("DD-MM-YYYY")}
//                         </span>
//                       </div>
//                     </div>
//                   );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.partner}>
//         <div className={styles.logo}>
//           <li>
//             <Image src="/fpt.svg" width={150} height={100} />
//           </li>
//           <li>
//             <Image src="/ggcloud.png" width={150} height={50} />
//           </li>
//           <li>
//             <Image src="/mcs.png" width={150} height={50} />
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import Carousel from "@/components/news/newsCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <Image
        src="/bg.jpg"
        alt=""
        width={1200}
        height={250}
        className="relative w-full  h-auto "
      />
      <div className="grid grid-cols-4 gap-5 container py-10">
        <div className="col-span-1 flex flex-col gap-5">
          <h2 className="text-lg font-semibold ">Tin thường ngày</h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/vácin.jpg"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-auto"
              />
              <Link href="https://web4s.vn/view-demo/new01" target="_blank">
                <p className="font-medium hover:text-neutral-300">
                  {" "}
                  Kế hoạch tiêm vaccine của TP HCM đến cuối năm ra sao?
                </p>
              </Link>
            </div>
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/nganhang.webp"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-24"
              />
              <Link
                href="https://cafebiz.vn/cong-bo-5-so-tai-khoan-ngan-hang-co-dau-hieu-lua-dao-nguoi-dan-can-canh-giac-khi-giao-dich-176240514085257291.chn"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  {" "}
                  Công bố 5 số tài khoản ngân hàng có dấu hiệu lừa đảo, người
                  dân cần cảnh giác khi giao dịch!
                </p>
              </Link>
            </div>
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/vnpt.webp"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-auto"
              />
              <Link
                href="https://cafebiz.vn/vnpt-duoc-binh-chon-nha-mang-yeu-thich-nhat-tai-vietnam-game-awards-2024-176240513191310132.chn"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  VNPT được Bình chọn nhà mạng yêu thích nhất tại Vietnam Game
                  Awards 2024
                </p>
              </Link>
            </div>
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/ndte.webp"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-auto"
              />
              <Link
                href="https://cafebiz.vn/ket-qua-ban-dau-cua-mo-hinh-tra-luong-bang-nhan-dan-te-dien-tu-o-trung-quoc-176240513212400564.chn"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  Kết quả ban đầu của mô hình trả lương bằng nhân dân tệ điện tử
                  ở Trung Quốc
                </p>
              </Link>
            </div>
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/sdtlua.webp"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-24"
              />
              <Link
                href="https://cafebiz.vn/day-la-so-dien-thoai-lua-dao-chiem-doat-tien-tuyet-doi-khong-bat-may-khong-ket-ban-zalo-176240513160451328.chn"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  Đây là số điện thoại lừa đảo chiếm đoạt tiền, tuyệt đối không
                  bắt máy, không kết bạn Zalo
                </p>
              </Link>
            </div>
            <div className="flex gap-5 border-b  pb-4">
              <Image
                src="/vnpt.webp"
                alt=""
                width={300}
                height={300}
                className="w-2/6 h-auto"
              />
              <Link
                href="https://cafebiz.vn/vnpt-duoc-binh-chon-nha-mang-yeu-thich-nhat-tai-vietnam-game-awards-2024-176240513191310132.chn"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  VNPT được Bình chọn nhà mạng yêu thích nhất tại Vietnam Game
                  Awards 2024
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2  pb-4">
          <div className="flex flex-col gap-5">
            <Image
              src="/vácin.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            <Link
              href="https://cafebiz.vn/vnpt-duoc-binh-chon-nha-mang-yeu-thich-nhat-tai-vietnam-game-awards-2024-176240513191310132.chn"
              target="_blank"
            >
              <p className="font-medium hover:text-neutral-300">
                {" "}
                Kế hoạch tiêm vaccine của TP HCM đến cuối năm ra sao?
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <h2 className="text-lg font-semibold">Tin nổi bật</h2>
          <div className="flex flex-col gap-5 border-b  pb-4">
            <div className="flex gap-2 flex-col">
              <Image
                src="/vácin.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-40"
              />
              <Link href="https://web4s.vn/view-demo/new01" target="_blank">
                <p className="font-medium hover:text-neutral-300">
                  {" "}
                  Kế hoạch tiêm vaccine của TP HCM đến cuối năm ra sao?
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5  border-b  pb-4">
            <div className="flex gap-2 flex-col ">
              <Image
                src="/applewatch.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-40"
              />
              <Link
                href="https://www.24h.com.vn/thoi-trang-hi-tech/gia-apple-watch-thang-5-giam-nhieu-nhat-65-trieu-dong-c407a1567488.html"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300 ">
                  {" "}
                  Giá Apple Watch tháng 5, giảm nhiều nhất 6,5 triệu đồng
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5  border-b  pb-4">
            <div className="flex gap-2 flex-col">
              <Image
                src="/macbook.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-40"
              />
              <Link
                href="https://www.24h.com.vn/thoi-trang-hi-tech/macbook-dong-loat-giam-gia-vao-thang-5-tu-1819-trieu-dong-c407a1567561.html"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  {" "}
                  MacBook đồng loạt giảm giá vào tháng 5, từ 18,19 triệu đồng
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5  border-b  pb-4">
            <div className="flex gap-2 flex-col">
              <Image
                src="/iphone12.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-40"
              />
              <Link
                href="https://www.24h.com.vn/thoi-trang-hi-tech/gia-iphone-12-thang-5-2024-giam-them-toi-14-trieu-dong-so-voi-thang-truoc-c407a1567175.html"
                target="_blank"
              >
                <p className="font-medium hover:text-neutral-300">
                  {" "}
                  Giá iPhone 12 tháng 5/2024: Giảm thêm tới 1,4 triệu đồng so
                  với tháng trước
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
