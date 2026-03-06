import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-4xl font-bold mb-4">订阅成功！</h1>
        <p className="text-gray-600 mb-8">
          感谢您的订阅，您现在可以享受所有专业服务
        </p>
        <div className="space-x-4">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            进入会员中心
          </Link>
          <Link
            href="/reports"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            查看报告
          </Link>
        </div>
      </div>
    </div>
  )
}
