<div align="center">

# 🎓 Elona Practice - Exam Preparation Platform

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://elona-practice-qxbmdrhnl-leulman2-gmailcoms-projects.vercel.app/profile)
[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Test Coverage](https://img.shields.io/badge/Coverage-94.45%25-success?style=for-the-badge)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**A modern, comprehensive exam preparation platform built with Next.js, TypeScript, and Supabase**

[Live Demo](https://elona-practice-qxbmdrhnl-leulman2-gmailcoms-projects.vercel.app/profile) • [Documentation](#-documentation) • [Features](#-features) • [Tech Stack](#-tech-stack)

![Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

</div>

---

## ✨ Features

### 🎯 **Dual Exam Modes**

- **Practice Mode** - Relaxed learning with hints, answer viewing, and no time pressure
- **Exam Mode** - Timed, graded experience simulating real exam conditions with navigation guards

### 📊 **Rich Question Types**

<table>
<tr>
<td width="33%">

**📝 Text-Based**

- Multiple Choice (MCQ)
- True/False
- Fill-in-the-Blank
- Short Answer

</td>
<td width="33%">

**🔗 Interactive**

- Matching Pairs
- Order Sequences
- Multi-Select
- Image-Based Questions

</td>
<td width="33%">

**🤖 AI-Powered**

- AI Help Assistant
- Context-Aware Hints
- Instant Explanations
- Smart Grading

</td>
</tr>
</table>

### 📈 **Analytics & Tracking**

- **Real-time Dashboard** with performance metrics
- **Comprehensive Analytics** with interactive charts
- **Recent Activity** tracking with datetime display
- **Score History** and progress visualization
- **Time Management** insights and patterns

### 🎨 **Modern UI/UX**

- **Dark/Light Mode** with smooth transitions
- **Responsive Design** - works seamlessly on all devices
- **Smooth Animations** powered by Framer Motion
- **Accessible** - WCAG 2.1 compliant
- **Premium Design** using shadcn/ui components

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (required)
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ElonaPractice.git
cd ElonaPractice

# Install dependencies (use pnpm only)
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
pnpm dev
```

> **⚠️ Important**: This project exclusively uses `pnpm`. Do not use `npm` or `yarn`.

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🛠 Tech Stack

<div align="center">

| Category            | Technologies                                  |
| ------------------- | --------------------------------------------- |
| **Frontend**        | Next.js 15, React 19, TypeScript, TailwindCSS |
| **UI Components**   | shadcn/ui, Radix UI, Lucide Icons             |
| **Database**        | Supabase (PostgreSQL)                         |
| **Animation**       | Framer Motion                                 |
| **Testing**         | Vitest, React Testing Library                 |
| **Linting**         | ESLint, TypeScript ESLint                     |
| **Deployment**      | Vercel                                        |
| **Package Manager** | pnpm                                          |

</div>

---

## 📁 Project Structure

```
ElonaPractice/
├── app/                          # Next.js App Router pages
│   ├── courses/                  # Course selection page
│   ├── dashboard/                # Main dashboard
│   │   └── analytics/            # Analytics page
│   ├── exam/[examId]/            # Exam pages
│   │   ├── components/           # Exam-specific components
│   │   ├── review/               # Review page
│   │   └── results/              # Results page
│   ├── profile/                  # User profile
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   └── mode-toggle.tsx           # Dark mode toggle
├── lib/                          # Utilities and helpers
│   ├── grading.ts                # Auto-grading logic
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
└── **/*.test.tsx                 # Co-located test files
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test --coverage

# Run tests in watch mode
pnpm test --watch

# Run linting
pnpm lint
```

### Test Coverage

<div align="center">

| Metric         | Coverage | Target | Status      |
| -------------- | -------- | ------ | ----------- |
| **Statements** | 94.45%   | >95%   | 🟨 Close    |
| **Branches**   | 88.69%   | >85%   | ✅ Met      |
| **Functions**  | 94.84%   | >97%   | 🟨 Close    |
| **Lines**      | 97.2%    | >95%   | ✅ Exceeded |

**Test Files:** 24 passed  
**Total Tests:** 171 passed | 2 skipped  
**Status:** ✅ All tests passing

</div>

### Test Organization

```
├── Component Tests      → UI components and layouts
├── Page Tests          → Dashboard, Analytics, Exam, Review
├── Integration Tests   → End-to-end user flows
└── Utility Tests       → Grading logic, Supabase client
```

---

## 🎨 Key Features Deep Dive

### 📚 Exam System

#### Practice Mode

- ✅ No time limits
- ✅ View correct answers
- ✅ Access hints
- ✅ AI-powered help
- ✅ Immediate feedback

#### Exam Mode

- ⏱️ Timed challenges
- 🔒 Navigation guards
- 📊 Auto-grading
- 🎯 Score tracking
- 📱 Progress saving

### 📊 Analytics Dashboard

<table>
<tr>
<td width="50%">

**KPI Metrics**

- Total Attempts
- Average Score
- Time Spent
- Questions Answered

</td>
<td width="50%">

**Visual Charts**

- Score History (Line Chart)
- Time Distribution (Bar Chart)
- Performance Trends
- Activity Heatmap

</td>
</tr>
</table>

### 🎯 Recent Activity

Modern, scrollable list featuring:

- 📅 Full datetime display (date + time)
- 🎨 Gradient icon backgrounds
- 🏆 Color-coded score badges (green ≥70%, amber <70%)
- 📱 Fully responsive design
- 🌙 Dark mode support

---

## 🔧 Development

### Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm test         # Run tests
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🗄️ Database Schema

### Core Tables

<details>
<summary><b>Click to expand database schema</b></summary>

```sql
-- Exams
CREATE TABLE exams (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  duration_minutes INTEGER,
  passing_score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Questions
CREATE TABLE questions (
  id UUID PRIMARY KEY,
  exam_id UUID REFERENCES exams(id),
  content TEXT NOT NULL,
  question_type TEXT NOT NULL,
  options JSONB,
  correct_answer JSONB,
  explanation TEXT,
  points INTEGER DEFAULT 1,
  metadata JSONB
);

-- Exam Attempts
CREATE TABLE exam_attempts (
  id UUID PRIMARY KEY,
  exam_id UUID REFERENCES exams(id),
  mode TEXT CHECK (mode IN ('PRACTICE', 'EXAM')),
  score NUMERIC,
  total_points INTEGER,
  time_spent_seconds INTEGER,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  answers JSONB
);

-- User Answers
CREATE TABLE user_answers (
  id UUID PRIMARY KEY,
  attempt_id UUID REFERENCES exam_attempts(id),
  question_id UUID REFERENCES questions(id),
  user_answer JSONB,
  is_correct BOOLEAN,
  points_earned NUMERIC
);
```

</details>

---

## 📱 Screenshots

### Dashboard

<div align="center">
<img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Dashboard+Screenshot" alt="Dashboard" width="100%"/>
</div>

### Exam Interface

<div align="center">
<img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Exam+Interface+Screenshot" alt="Exam Interface" width="100%"/>
</div>

### Analytics

<div align="center">
<img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Analytics+Screenshot" alt="Analytics" width="100%"/>
</div>

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Test coverage >90%
- ✅ Responsive design
- ✅ Accessibility compliance

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful component primitives
- **Vercel** for seamless deployment
- **Supabase** for powerful backend infrastructure
- **Next.js** team for the amazing framework

---

## 📞 Support

<div align="center">

**Need help? We're here for you!**

[📧 Email](mailto:support@elonapractice.com) • [💬 Discord](https://discord.gg/elonapractice) • [🐛 Report Bug](https://github.com/yourusername/ElonaPractice/issues)

</div>

---

<div align="center">

**Built with ❤️ by the Elona Practice Team**

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-elona-practice---exam-preparation-platform)

</div>
