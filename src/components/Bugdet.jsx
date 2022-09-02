import React from 'react'

export default function Bugdet() {
  return (
    <div>
      <div className="family-budget">
        <h1>Budget</h1>
        <button onClick={() => depositMoney}>Deposit</button>
        <button>Withdraw</button>
      </div>
    </div>
  )
}
