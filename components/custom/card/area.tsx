'use client'

import { bodyHeightStyle } from '@/lib/consts'
import CardRule from './rule'

function CardArea() {
  return (
    <div
      className="w-xl col-span-3 border-4 border-slate-400 p-5"
      style={{ height: bodyHeightStyle }}
    >
      <CardRule />
    </div>
  )
}

export default CardArea
