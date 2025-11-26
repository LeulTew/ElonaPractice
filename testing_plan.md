# Testing Plan for Elona Practice App

This document outlines the comprehensive testing strategy for the Elona Practice application, covering all pages, modals, and critical user flows.

## 1. Dashboard & Navigation

| Component      | Test Case                   | Expected Result                  | Status |
| :------------- | :-------------------------- | :------------------------------- | :----- |
| **Navbar**     | Click "Elona Practice" logo | Redirects to `/dashboard`        |        |
| **Navbar**     | Click "Courses" link        | Redirects to `/courses`          |        |
| **Navbar**     | Click "Theme Toggle"        | Switches between Light/Dark mode |        |
| **Mobile Nav** | View on Mobile (< 768px)    | `LimelightNav` appears at bottom |        |
| **Mobile Nav** | View on Desktop (> 768px)   | `LimelightNav` is hidden         |        |
| **Mobile Nav** | Click "Home" icon           | Redirects to `/dashboard`        |        |
| **Mobile Nav** | Click "Courses" icon        | Redirects to `/courses`          |        |
| **Mobile Nav** | Click "About" icon          | Redirects to `/about`            |        |

## 2. Course Selection

| Component       | Test Case                     | Expected Result                     | Status |
| :-------------- | :---------------------------- | :---------------------------------- | :----- |
| **Course Card** | Click "Start Learning" on CNP | Opens Exam Selection Modal          |        |
| **Modal**       | Click "Practice Mode"         | Sets mode to PRACTICE (green theme) |        |
| **Modal**       | Click "Exam Mode"             | Sets mode to EXAM (red theme)       |        |
| **Modal**       | Select "Chapter 1"            | Highlights selection                |        |
| **Modal**       | Click "Start Exam"            | Redirects to `/exam/[id]`           |        |

## 3. Exam Interface (Common)

| Component   | Test Case             | Expected Result                             | Status |
| :---------- | :-------------------- | :------------------------------------------ | :----- |
| **Sidebar** | Click "Menu" icon     | Toggles sidebar visibility                  |        |
| **Sidebar** | Click Question Number | Navigates to that question                  |        |
| **Sidebar** | Answer a question     | Question number turns blue (answered)       |        |
| **Sidebar** | Mark a question       | Question number shows yellow flag           |        |
| **AI Help** | Click "Ask AI"        | Copies context to clipboard & opens ChatGPT |        |
| **Exit**    | Click "Exit" button   | Shows confirmation modal                    |        |

## 4. Question Types

| Type              | Test Case              | Expected Result                    | Status |
| :---------------- | :--------------------- | :--------------------------------- | :----- |
| **MCQ**           | Click an option        | Option selected, border highlights |        |
| **Multi-Select**  | Click multiple options | Multiple options selected          |        |
| **Fill-Blank**    | Type in input          | Text appears in input field        |        |
| **Matching**      | Drag/Select pairs      | Pairs are connected/highlighted    |        |
| **Order**         | Drag items             | Items reorder in list              |        |
| **Short Answer**  | Type in textarea       | Text appears in textarea           |        |
| **Label Diagram** | Drag label to target   | Label snaps to target              |        |

## 5. Practice Mode Specifics

| Feature         | Test Case             | Expected Result                       | Status |
| :-------------- | :-------------------- | :------------------------------------ | :----- |
| **Hint**        | Click "Show Hint"     | Hint text appears with Lightbulb icon |        |
| **Feedback**    | Submit wrong answer   | Shows "Incorrect" with X icon         |        |
| **Feedback**    | Submit correct answer | Shows "Correct" with Check icon       |        |
| **Show Answer** | Click "Show Answer"   | Reveals correct answer                |        |

## 6. Exam Mode Specifics

| Feature         | Test Case            | Expected Result                         | Status |
| :-------------- | :------------------- | :-------------------------------------- | :----- |
| **Timer**       | Wait 1 minute        | Timer counts down correctly             |        |
| **No Hints**    | Look for "Show Hint" | Button is hidden                        |        |
| **No Feedback** | Submit answer        | "Saved" status (no correct/incorrect)   |        |
| **Navigation**  | Try to reload page   | Browser shows "Unsaved changes" warning |        |

## 7. Results & Grading

| Component      | Test Case                | Expected Result                     | Status |
| :------------- | :----------------------- | :---------------------------------- | :----- |
| **Submission** | Click "Finish"           | Redirects to `/exam/[id]/results`   |        |
| **Score**      | Check Score              | Displays correct percentage         |        |
| **Review**     | Scroll through questions | Shows user answer vs correct answer |        |
| **Confetti**   | Pass exam (>70%)         | Confetti animation plays            |        |

## 8. Mobile Responsiveness

| Component     | Test Case          | Expected Result                         | Status |
| :------------ | :----------------- | :-------------------------------------- | :----- |
| **Exam Page** | View on Mobile     | Sidebar is hidden by default (drawer)   |        |
| **Question**  | View large diagram | Image scales down, scrollable if needed |        |
| **Matching**  | View on Mobile     | Columns stack or scroll horizontally    |        |
