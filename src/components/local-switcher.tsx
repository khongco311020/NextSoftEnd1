"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Select, { components } from "react-select";

type Option = {
  value: string;
  label: React.ReactNode;
};

type ValueType<OptionType> = OptionType | OptionType[] | null;
// const DropdownIndicator = () => null;
// const IndicatorSeparator = () => null;
export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  const options = [
    {
      value: "en",
      label: (
        <span className="flex gap-3 text-red-300">
          <img
            src="/access/flags/england.png"
            alt="English"
            width="20px"
            height="20px"
          />{" "}
          En
        </span>
      ),
    },
    {
      value: "vi",
      label: (
        <span className="flex gap-3 text-red-300">
          <img
            src="/access/flags/vietnam.png"
            alt="Vietnam"
            width="21px"
            height="21px"
          />{" "}
          Vi
        </span>
      ),
    },
  ];

  const onSelectChange = (selectedOption: ValueType<Option>) => {
    if (selectedOption && !Array.isArray(selectedOption)) {
      const value = selectedOption.value;

      // Tách phần ngôn ngữ hiện tại ra khỏi pathname
      const currentPathWithoutLocale = pathname.replace(`/${localeActive}`, "");

      startTransition(() => {
        // Chuyển hướng tới URL mới với ngôn ngữ được chọn
        router.replace(`/${value}${currentPathWithoutLocale}`);
      });
    }
  };

  return (
    <div className="pr-10 max-lg:pr-4 ">
      <label>
        <p className="sr-only">change language</p>
        <Select
          defaultValue={options.find((option) => option.value === localeActive)}
          options={options}
          onChange={onSelectChange}
          isDisabled={isPending}
          className="bg-transparent py-2"
        />
      </label>
    </div>
  );
}
