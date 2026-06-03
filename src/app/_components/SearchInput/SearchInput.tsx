// "use client";

// import { BrandType, CategoryType } from "@/api/types";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function SearchInput({brands,categories}:{categories:CategoryType[],brands:BrandType[]}) {
//   const router = useRouter();
//   const [value, setValue] = useState("");

//   const handleSearch = () => {
//     const searchValue = value.trim();

//     if (!searchValue) return;

//     router.push(
//       `/search?query=${encodeURIComponent(searchValue)}&page=1`
//     );
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") {
//           handleSearch();
//         }
//       }}
//       className="w-full px-4 pr-10 rounded-full border py-2"
//     />
//   );
// }


"use client";

import { BrandType, CategoryType } from "@/api/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput({
  brands,
  categories,
}: {
  categories: CategoryType[];
  brands: BrandType[];
}) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    const searchValue = value.trim().toLowerCase();

    if (!searchValue) return;

    // 👇 نحاول نلاقي Brand
    const matchedBrand = brands.find((b) =>
      b.name.toLowerCase().includes(searchValue)
    );

    // 👇 نحاول نلاقي Category
    const matchedCategory = categories.find((c) =>
      c.name.toLowerCase().includes(searchValue)
    );

    let url = `/search?page=1`;

    if (matchedBrand) {
      url = `/search?page=1&brand=${matchedBrand._id}`;
    } else if (matchedCategory) {
      url = `/search?page=1&category=${matchedCategory._id}`;
    } else {
      url = `/search?page=1&query=${encodeURIComponent(value)}`;
    }

    router.push(url);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      className="w-full px-4 pr-10 rounded-full border py-2"
    />
  );
}