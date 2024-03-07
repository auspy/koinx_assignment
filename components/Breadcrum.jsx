"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Breadcrum = () => {
  const path = usePathname();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const pathArray = path.split("/");
    const customArray = () => {
      const arr = [];
      for (let index = 0; index < pathArray.length; index++) {
        const item = pathArray[index];
        if (!item) {
          continue;
        }
        arr.push({
          title: item,
          path: pathArray.slice(0, index + 1).join("/"),
        });
      }
      return arr;
    };
    setItems(customArray());
  }, [path]);
  if (items.length < 2) {
    return null;
  }
  return (
    <div className="flex w-100 py-4 items-center flex-row gap-1">
      {items.map((item, index) => {
        const lastItem = items.length - 1 === index;
        return (
          <div
            key={index}
            className={`${
              lastItem
                ? "text-heading font-medium"
                : " text-textSenti font-normal"
            } flex items-center gap-2`}
          >
            <Link className="capitalize text-sm" href={item.path}>
              {item.title}
            </Link>
            {!lastItem && <ChevronsRight strokeWidth={2} size={14} />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrum;
