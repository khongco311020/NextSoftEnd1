import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Activities() {
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
    </div>
  );
}
