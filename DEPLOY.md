# 🚀 China Leasing Intelligence - 部署指南

## 项目已完成！

你的 **中国融资租赁情报平台** 已经准备好部署了。

---

## 最简单的部署方式（推荐）

### 步骤 1：上传到 GitHub

由于网络限制，你需要手动操作：

1. **下载项目**: `C:\Users\Jackie\Desktop\china-leasing-intelligence.zip`

2. **解压**到一个文件夹

3. **打开 GitHub**: https://github.com/new

4. 创建新仓库:
   - Repository name: `china-leasing-intelligence`
   - 选择 **Public**
   - 点击 **Create repository**

5. **上传文件**:
   - 在仓库页面点击 **"uploading an existing file"**
   - 把解压后的所有文件拖进去
   - 点击 **Commit changes**

### 步骤 2：部署到 Vercel

1. 打开 https://vercel.com
2. 点击 **"Add New..."** → **"Project"**
3. 选择刚创建的 GitHub 仓库
4. 点击 **"Deploy"**

✅ **完成！网站会上线，大约1-2分钟**

---

## 部署后配置（可选）

要启用 Stripe 支付功能：

1. 去 https://dashboard.stripe.com 注册账号（免费）
2. 获取 API Keys:
   - **Publishable Key** (以 `pk_` 开头)
   - **Secret Key** (以 `sk_` 开头)
3. 在 Vercel 项目设置中添加环境变量:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = 你的 Publishable Key
   - `STRIPE_SECRET_KEY` = 你的 Secret Key

---

## 网站预览

部署后，你可以看到:
- 🏠 **首页**: 中国融资租赁情报平台 (深色专业风格)
- 📄 **Reports**: 示例报告列表
- 💰 **Subscribe**: 订阅页面 ($49/$149/$499)
- 👤 **Dashboard**: 会员中心

---

## 项目文件位置

```
C:\Users\Jackie\lobsterai\project\finance-subscription\
├── src/app/
│   ├── page.tsx          # 首页
│   ├── subscribe/         # 订阅页
│   ├── reports/          # 报告页
│   └── dashboard/        # 会员中心
├── package.json
├── tailwind.config.js
└── README.md
```

---

有任何问题随时问我！
