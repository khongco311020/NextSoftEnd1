"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Select from "react-select";

type Option = {
  value: string;
  label: React.ReactNode;
};

type ValueType<OptionType> = OptionType | OptionType[] | null;

type OptionType = {
  value: string;
  label: React.ReactNode;
};

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const options = [
    {
      value: "en",
      label: (
        <span className="flex gap-3 ">
          <img src="./england.png" alt="English" width="20px" height="20px" />{" "}
          {/* Eng */}
        </span>
      ),
    },
    {
      value: "vi",
      label: (
        <span className="flex gap-2">
          <img src="./vietnam.png" alt="Vietnam" width="20px" height="20px" />{" "}
          {/* Vi */}
        </span>
      ),
    },
  ];

  const onSelectChange = (selectedOption: ValueType<Option>) => {
    if (selectedOption && !Array.isArray(selectedOption)) {
      const value = selectedOption.value;
      startTransition(() => {
        router.replace(`/${value}`);
      });
    }
  };

  return (
    <label>
      <p className="sr-only">change language</p>
      <Select
        defaultValue={options.find((option) => option.value === localActive)}
        options={options}
        onChange={onSelectChange}
        isDisabled={isPending}
        className="bg-transparent py-2"
      />
     
    </label>
  );
}