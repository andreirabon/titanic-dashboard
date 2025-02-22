import { type ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "hsl(var(--chart-1))",
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))",
	},
	firefox: {
		label: "Firefox",
		color: "hsl(var(--chart-3))",
	},
	edge: {
		label: "Edge",
		color: "hsl(var(--chart-4))",
	},
	other: {
		label: "Other",
		color: "hsl(var(--chart-5))",
	},
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export const aliveradialData = [{ browser: "safari", visitors: 200, fill: "var(--color-safari)" }];

export const unaliveradialData = [{ browser: "safari", visitors: 100, fill: "#7F1D1D" }];

export const pclassData = [
	{ month: "First Class", desktop: 216, fill: "hsl(220 70% 50%)" },
	{ month: "Second Class", desktop: 184, fill: "hsl(160 60% 45%)" },
	{ month: "Third Class", desktop: 491, fill: "hsl(30 80% 55%)" },
];

export const genderData = [
	{ browser: "Male", visitors: 577, fill: "#2662D9" },
	{ browser: "Female", visitors: 314, fill: "#7F1D1D" },
];

export const ageData = [
	{ month: "0s", desktop: 0 },
	{ month: "10s", desktop: 12 },
	{ month: "20s", desktop: 24 },
	{ month: "30s", desktop: 35 },
	{ month: "40s", desktop: 42 },
	{ month: "50s", desktop: 58 },
	{ month: "60s", desktop: 61 },
	{ month: "70s", desktop: 79 },
	{ month: "80s", desktop: 81 },
	{ month: "90s", desktop: 94 },
	{ month: "100s", desktop: 0 },
];

export const embarkedData = [
	{ month: "Cherbourg (C) ", desktop: 216, fill: "hsl(220 70% 50%)" },
	{ month: "Queenstown (Q)", desktop: 184, fill: "hsl(160 60% 45%)" },
	{ month: "Southampton (S)", desktop: 491, fill: "hsl(30 80% 55%)" },
];
