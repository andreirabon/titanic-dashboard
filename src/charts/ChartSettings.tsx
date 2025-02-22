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

export const aliveradialData = [{ value: 342, fill: "var(--color-safari)" }];

export const unaliveradialData = [{ value: 550, fill: "#7F1D1D" }];

export const pclassData = [
	{ class: "First Class", value: 216, fill: "hsl(220 70% 50%)" },
	{ class: "Second Class", value: 184, fill: "hsl(160 60% 45%)" },
	{ class: "Third Class", value: 491, fill: "hsl(30 80% 55%)" },
];

export const genderData1 = [
	{ sex: "Male", value: 577, fill: "#2662D9" },
	{ sex: "Female", value: 314, fill: "#7F1D1D" },
];

export const genderData2 = [
	{ status: "Survived", value: 109, fill: "#2662D9" },
	{ status: "Did Not Survive", value: 468, fill: "#7F1D1D" },
];

export const genderData3 = [
	{ status: "Survived", value: 233, fill: "#2662D9" },
	{ status: "Did Not Survive", value: 81, fill: "#7F1D1D" },
];

export const ageData = [
	{ range: "0s", value: 40 },
	{ range: "10s", value: 211 },
	{ range: "20s", value: 263 },
	{ range: "30s", value: 169 },
	{ range: "40s", value: 118 },
	{ range: "50s", value: 51 },
	{ range: "60s", value: 26 },
	{ range: "70s", value: 11 },
	{ range: "80s", value: 2 },
	{ range: "90s", value: 0 },
	{ range: "100s", value: 0 },
];

export const embarkedData = [
	{ embarked: "Cherbourg (C) ", value: 216, fill: "hsl(220 70% 50%)" },
	{ embarked: "Queenstown (Q)", value: 184, fill: "hsl(160 60% 45%)" },
	{ embarked: "Southampton (S)", value: 491, fill: "hsl(30 80% 55%)" },
];
