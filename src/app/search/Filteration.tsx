


// 'use client'

// import { useRouter, useSearchParams, usePathname } from 'next/navigation'

// export default function Filteration({
//   name,
//   id,
//   type,
// }: {
//   name: string
//   id: string
//   type: 'category' | 'brand'
// }) {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const pathname = usePathname()

//   // ✅ نحدد هل ده متعلم ولا لا من URL
//   const isChecked = searchParams.get(type) === id

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const params = new URLSearchParams(searchParams)

//     if (e.target.checked) {
//       params.set(type, id)
//     } else {
//       params.delete(type)
//     }

//     router.replace(`${pathname}?${params.toString()}`)
//   }

//   return (
//     <div className="flex items-center gap-2">
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={handleChange}
//       />
//       <label className="text-sm font-medium">{name}</label>
//     </div>
//   )

// }



'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export default function Filteration({
  name,
  id,
  type,
}: {
  name: string
  id: string
  type: 'category' | 'brand'
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const isChecked = searchParams.get(type) === id

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (e.target.checked) {
      params.set(type, id)
    } else {
      params.delete(type)
    }

    // 🔥 مهم: نرجع لأول صفحة
    params.set('page', '1')

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="text-sm font-medium">{name}</label>
    </div>
  )
}