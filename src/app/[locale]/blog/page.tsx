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
