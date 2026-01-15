# Railway.com Deployment Guide

## สิ่งที่ต้องเตรียมสำหรับ Deploy บน Railway

### 1. **Database (PostgreSQL)**
- สร้าง PostgreSQL service ใน Railway
- Railway จะให้ `DATABASE_URL` อัตโนมัติ

### 2. **Backend Service**
- Root directory: `back-end`
- Build command: `npm install && npm run prisma:generate && npm run build`
- Start command: `npm run start:prod`
- Port: Railway จะกำหนดให้อัตโนมัติ (ใช้ `PORT` env var)

### 3. **Frontend Service** (ถ้าต้องการ deploy แยก)
- Root directory: `front-end`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Port: Railway จะกำหนดให้อัตโนมัติ

### 4. **Environment Variables**

#### Backend:
```
DATABASE_URL=postgresql://user:password@host:port/database
PORT=8000
```

#### Frontend:
```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.railway.app
```

### 5. **Prisma Migrations**
หลังจาก deploy backend แล้ว ต้องรัน migrations:
```bash
cd back-end
npx prisma migrate deploy
```

หรือเพิ่มใน build command:
```bash
npm install && npm run prisma:generate && npx prisma migrate deploy && npm run build
```

## วิธี Deploy

### Option 1: Deploy แยก Service (แนะนำ)

1. **สร้าง Backend Service:**
   - New Project → Add Service → GitHub Repo
   - เลือก repository
   - Root Directory: `back-end`
   - Variables:
     - `DATABASE_URL` (จาก PostgreSQL service)
     - `PORT` (Railway จะ set ให้อัตโนมัติ)

2. **สร้าง Frontend Service:**
   - Add Service → GitHub Repo (same repo)
   - Root Directory: `front-end`
   - Variables:
     - `NEXT_PUBLIC_API_BASE_URL` = `https://your-backend-url.railway.app`

3. **สร้าง PostgreSQL Service:**
   - Add Service → Database → PostgreSQL
   - Railway จะให้ `DATABASE_URL` อัตโนมัติ

### Option 2: Deploy Monorepo (Single Service)

1. สร้าง Service จาก GitHub Repo
2. ใช้ `railway.json` ที่ root
3. ตั้งค่า Environment Variables ทั้งหมด

## Build Commands

### Backend:
```bash
npm install
npm run prisma:generate
npx prisma migrate deploy
npm run build
```

### Frontend:
```bash
npm install
npm run build
```

## Start Commands

### Backend:
```bash
npm run start:prod
```

### Frontend:
```bash
npm start
```

## หมายเหตุ

- Railway จะ auto-detect Node.js version จาก `package.json`
- ต้องมี `package.json` ในแต่ละ service directory
- Prisma ต้อง generate ก่อน build
- Migrations ต้องรันหลัง deploy
