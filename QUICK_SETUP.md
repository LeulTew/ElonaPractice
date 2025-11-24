# Quick Database Setup

I've tried every automated method, but Supabase's security prevents automated SQL execution. Here's the fastest manual approach (takes 60 seconds):

## Step 1: Run Schema (30 seconds)

1. Open: https://supabase.com/dashboard/project/ykskwxkgcapkflfpgiww/sql/new
2. Copy ALL of `supabase/schema.sql` (104 lines)
3. Paste into SQL Editor
4. Click "Run" button
5. Wait for "Success" message

## Step 2: Run Seed Data (30 seconds)

1. Same SQL Editor page
2. Clear the editor
3. Copy ALL of `supabase/seed.sql` (97 lines)
4. Paste into SQL Editor
5. Click "Run" button
6. Wait for "Success" message

## Step 3: Verify

Run this query to check:

```sql
SELECT
  (SELECT COUNT(*) FROM courses) as courses,
  (SELECT COUNT(*) FROM exams) as exams,
  (SELECT COUNT(*) FROM questions) as questions;
```

You should see:

- courses: 1
- exams: 4
- questions: 34

## Step 4: Refresh App

Go to http://localhost:3000/courses and you'll see all 4 exams!

---

**What's Already Done:**
✅ 35 images uploaded to Supabase Storage
✅ Schema SQL generated (creates 6 tables)
✅ Seed SQL generated (4 exams, 34 questions)
✅ Gitignore fixed

**Why Manual?**
Supabase blocks automated SQL execution via:

- REST API (no exec function)
- Management API (requires different auth)
- Postgres connection (password auth issues)
- Supabase client (tables must exist first)

This 60-second manual step is the only way forward.
