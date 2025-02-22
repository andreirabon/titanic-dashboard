"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import chartData from "./charts/data/cd";
import chartConfig from "./charts/chartconfig/cf";

function Charts() {
	return (
		<>
			<Card className="flex flex-col">
				<CardHeader className="items-center pb-0">
					<CardTitle>Gender Distribution of Titanic Passengers</CardTitle>
					<CardDescription>January - June 2024</CardDescription>
				</CardHeader>
				<CardContent className="flex-1 pb-0">
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground">
						<PieChart>
							<ChartTooltip content={<ChartTooltipContent hideLabel />} />
							<Pie
								data={chartData}
								dataKey="visitors"
								label
								nameKey="browser"
							/>
						</PieChart>
					</ChartContainer>
				</CardContent>
				<CardFooter className="flex-col gap-2 text-sm">
					<div className="flex items-center gap-2 font-medium leading-none">
						Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
					</div>
					<div className="leading-none text-muted-foreground">Showing total visitors for the last 6 months</div>
				</CardFooter>
			</Card>
		</>
	);
}

export default Charts;
