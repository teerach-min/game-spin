# Game Spin Application

แอปพลิเคชันเกมหมุนวงล้อเพื่อสะสมคะแนนและแลกรางวัล พัฒนาด้วย NestJS (Backend) และ Next.js (Frontend)

## 🚀 Tech Stack

### Backend
- **Framework**: NestJS 10
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma 7
- **Node.js**: 22.12+ (รองรับ Prisma 7.2.0)

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React Custom Roulette

## 📁 โครงสร้างโปรเจค

```
test-nest-js/
├── back-end/          # NestJS Backend API
│   ├── src/
│   │   ├── modules/   # Feature modules (user, rewards, game-spin)
│   │   ├── core/      # Core modules (prisma, config)
│   │   └── common/    # Shared utilities
│   ├── prisma/        # Prisma schema และ migrations
│   └── test/          # E2E tests
├── front-end/         # Next.js Frontend
│   ├── app/           # Next.js App Router
│   ├── config/        # Configuration files
│   └── commons/       # Shared components
└── docker-compose.yml # Docker setup สำหรับ development
```

## 🛠️ การติดตั้ง

### Prerequisites
- Node.js 22.12+ หรือ 20.19+ หรือ 24.0+
- PostgreSQL 15+
- npm หรือ yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd test-nest-js
```

### 2. Setup Backend

```bash
cd back-end

# ติดตั้ง dependencies
npm install

# สร้างไฟล์ .env
cp .env.example .env

# ตั้งค่า DATABASE_URL ใน .env
# DATABASE_URL="postgresql://user:password@localhost:54329/test_nest_db"
```

### 3. Setup Frontend

```bash
cd front-end

# ติดตั้ง dependencies
npm install

# สร้างไฟล์ .env.local (optional สำหรับ local development)
# NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

## 🚀 การรันโปรเจค

### Development Mode

#### 1. เริ่ม PostgreSQL ด้วย Docker
```bash
docker-compose up -d
```

#### 2. รัน Database Migrations
```bash
cd back-end
npm run prisma:migrate
```

#### 3. Seed ข้อมูล (Optional)
```bash
npm run prisma:seed
```

#### 4. เริ่ม Backend Server
```bash
cd back-end
npm run dev
# Server จะรันที่ http://localhost:8000
```

#### 5. เริ่ม Frontend Server
```bash
cd front-end
npm run dev
# Frontend จะรันที่ http://localhost:3000
```

### Production Mode

#### Backend
```bash
cd back-end
npm run build
npm run start:prod
```

#### Frontend
```bash
cd front-end
npm run build
npm start
```

## 📡 API Endpoints

Base URL: `http://localhost:8000/api/v1`

### Users
- `POST /api/v1/users/login` - เข้าสู่ระบบด้วยชื่อ
- `GET /api/v1/users/:userId` - ดูข้อมูลผู้ใช้พร้อมประวัติการแลกรางวัล

### Game Spins
- `GET /api/v1/game-spins` - ดูรายการวงล้อทั้งหมด
- `POST /api/v1/game-spins` - หมุนวงล้อ (ต้องส่ง `userId`)

### Rewards
- `GET /api/v1/rewards` - ดูรายการรางวัลทั้งหมด
- `POST /api/v1/rewards/:id/redeem` - แลกรางวัล (ต้องส่ง `userId`)
- `GET /api/v1/rewards/:userId/redeem-history` - ดูประวัติการแลกรางวัล (pagination)

### Reward History
- `GET /api/v1/rewards/histories` - ดูประวัติการได้คะแนนทั่วโลก (pagination)
- `GET /api/v1/rewards/histories/:userId` - ดูประวัติการได้คะแนนของตัวเอง (pagination)

### Query Parameters (Pagination)
- `page` - หน้าที่ต้องการ (default: 1)
- `limit` - จำนวนรายการต่อหน้า (default: 20)

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=8000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

**หมายเหตุ**: สำหรับ Next.js ต้องใช้ prefix `NEXT_PUBLIC_` เพื่อให้ environment variable ถูก embed ใน client bundle

## 🗄️ Database Schema

### Models
- **User** - ข้อมูลผู้ใช้ (id, name, point)
- **Reward** - รางวัลที่สามารถแลกได้ (id, name, point)
- **GameSpin** - วงล้อที่สามารถหมุนได้ (id, point)
- **RewardHistory** - ประวัติการได้คะแนน (id, userId, rewardPoint, createdAt)
- **RedeemRewardHistory** - ประวัติการแลกรางวัล (id, userId, rewardId, createdAt)

## 🚢 การ Deploy บน Railway

### Backend Service
1. สร้าง PostgreSQL service ใน Railway
2. สร้าง Backend service:
   - Root Directory: `back-end`
   - Build Command: `npm ci && npm run prisma:generate && npm run build`
   - Start Command: `npm run prisma:migrate:deploy && npm run start:prod`
   - Environment Variables:
     - `DATABASE_URL` (จาก PostgreSQL service)
     - `PORT` (Railway จะ set ให้อัตโนมัติ)

### Frontend Service
1. สร้าง Frontend service:
   - Root Directory: `front-end`
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm start`
   - Environment Variables:
     - `NEXT_PUBLIC_API_BASE_URL` = URL ของ Backend service (เช่น `https://your-backend.railway.app`)

**สำคัญ**: หลังจากเพิ่มหรือแก้ไข `NEXT_PUBLIC_API_BASE_URL` ต้อง rebuild service ใหม่

## 📝 Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create migration
npm run prisma:migrate

# Deploy migrations (production)
npm run prisma:migrate:deploy

# Seed database
npm run prisma:seed

# Open Prisma Studio
npm run prisma:studio

# Reset database
npm run prisma:reset
```

## 🧪 Testing

### Backend Tests
```bash
cd back-end

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📦 Build

### Backend
```bash
cd back-end
npm run build
# Output: dist/src/main.js
```

### Frontend
```bash
cd front-end
npm run build
# Output: .next/
```

## 📄 License

UNLICENSED

## 👥 Authors

- Your Name

---

**หมายเหตุ**: โปรเจคนี้ใช้ Node.js 22.12+ เพื่อรองรับ Prisma 7.2.0 ซึ่งต้องการ Node.js 20.19+, 22.12+, หรือ 24.0+
