export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to TapChain Payments</h1>
      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="space-y-2">
          <li className="bg-gray-700 p-3 rounded">Transaction #1 - 0.1 ETH</li>
          <li className="bg-gray-700 p-3 rounded">Transaction #2 - 0.005 BTC</li>
          <li className="bg-gray-700 p-3 rounded">Transaction #3 - 12 USDT</li>
        </ul>
      </div>
    </div>
  );
}
