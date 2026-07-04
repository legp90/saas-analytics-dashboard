# 📊 Enterprise SaaS Analytics Dashboard

A high-performance business intelligence and data visualization control panel tailored for modern SaaS applications. This platform delivers a comprehensive view of critical business health indicators by transforming raw operational data into actionable, interactive, and beautifully rendered analytical insights.

🌐 **Live Demo:** [View Live Instance](https://saas-analytics-dashboard-gilt.vercel.app/)

---

## 🚀 Key Features

* **Interactive Data Visualization:** Implements dynamic, highly responsive data charting using Recharts to visualize complex metrics across customizable timeframes.
* **Critical KPI Tracking:** Real-time tracking of foundational SaaS metrics, including Monthly Recurring Revenue (MRR), Churn Rate, Lifetime Value (LTV), and Average Revenue Per User (ARPU).
* **Advanced Data Filtering & Tables:** A robust, state-driven data table component with strict type safety that allows immediate multi-parameter filtering, sorting, and pagination without performance bottlenecks.
* **Developer-First UX:** A clean, scannable dashboard layout built with a strict Tailwind CSS system, supporting responsive adaptations and intuitive state transitions.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Functional Architecture & Optimized Hooks)
* **Type Safety:** TypeScript (Strict Mode for dependable data shapes)
* **Styling & Icons:** Tailwind CSS & Lucide React
* **Data Charting Engine:** Recharts (SVG-based responsive charts)
* **Build Tooling:** Vite
* **Hosting & Deployment:** Vercel

---

## 🧠 Technical Highlight: Type-Safe Analytical State

The data architecture utilizes strict TypeScript interfaces to guarantee that any raw entry matches our financial schema, avoiding unexpected runtime issues when computing high-impact metrics:

```typescript
// Example of the strict typing driving our analytics schema
export interface MetricSnapshot {
  id: string;
  timestamp: string;
  mrr: number;
  churnRate: number;
  activeSubscriptions: number;
  unresolvedTickets: number;
}

// State management ensures instant filtering across the dataset
const filteredData = useMemo(() => {
  return rawSnapshots.filter((item) => {
    return item.mrr >= minRevenueThreshold && item.churnRate <= maxChurnAllowed;
  });
}, [rawSnapshots, minRevenueThreshold, maxChurnAllowed]);
```

---

## 🔧 Installation and Local Setup

Follow these steps to run the analytics dashboard locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/legp90/saas-analytics-dashboard.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```