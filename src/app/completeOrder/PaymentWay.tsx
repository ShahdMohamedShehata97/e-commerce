type Props = {
  selected: 'cash' | 'online'
  onChange: (value: 'cash' | 'online') => void
}

export default function PaymentWay({ selected, onChange }: Props) {
  return (
    <div className="space-y-4">

      {/* CASH */}
      <div
        onClick={() => onChange('cash')}
        className={`p-4 border rounded-xl cursor-pointer
          ${selected === 'cash' ? 'border-green-500 bg-green-50' : 'border-gray-200'}
        `}
      >
        Cash on Delivery
      </div>

      {/* ONLINE */}
      <div
        onClick={() => onChange('online')}
        className={`p-4 border rounded-xl cursor-pointer
          ${selected === 'online' ? 'border-green-500 bg-green-50' : 'border-gray-200'}
        `}
      >
        Online Payment
      </div>

    </div>
  )
}