"use client";

import {
	Pie,
	PieChart,
	CartesianGrid,
	XAxis,
	Bar,
	BarChart,
	YAxis,
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
	chartConfig,
	genderData,
	ageData,
	pclassData,
	aliveradialData,
	unaliveradialData,
	embarkedData,
} from "./charts/ChartSettings";

function Charts() {
	return (
		<>
			{/* Div 1 */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
				<Card className="flex flex-col">
					<CardHeader className="items-center pb-0">
						<CardTitle>Passengers Who Survived the Titanic sinking</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 pb-0">
						<ChartContainer
							config={chartConfig}
							className="mx-auto aspect-square max-h-[250px]">
							<RadialBarChart
								data={aliveradialData}
								startAngle={0}
								endAngle={250}
								innerRadius={80}
								outerRadius={110}>
								<PolarGrid
									gridType="circle"
									radialLines={false}
									stroke="none"
									className="first:fill-muted last:fill-background"
									polarRadius={[86, 74]}
								/>
								<RadialBar
									dataKey="visitors"
									background
									cornerRadius={10}
								/>
								<PolarRadiusAxis
									tick={false}
									tickLine={false}
									axisLine={false}>
									<Label
										content={({ viewBox }) => {
											if (viewBox && "cx" in viewBox && "cy" in viewBox) {
												return (
													<text
														x={viewBox.cx}
														y={viewBox.cy}
														textAnchor="middle"
														dominantBaseline="middle">
														<tspan
															x={viewBox.cx}
															y={viewBox.cy}
															className="fill-foreground text-4xl font-bold">
															{aliveradialData[0].visitors.toLocaleString()}
														</tspan>
														<tspan
															x={viewBox.cx}
															y={(viewBox.cy || 0) + 24}
															className="fill-muted-foreground">
															Visitors
														</tspan>
													</text>
												);
											}
										}}
									/>
								</PolarRadiusAxis>
							</RadialBarChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="leading-none text-muted-foreground">
							This chart that displays the number of passengers who survived the Titanic tragedy.
						</div>
					</CardFooter>
				</Card>
				<Card className="flex flex-col">
					<CardHeader className="items-center pb-0">
						<CardTitle>Passengers Who Did Not Survive the Titanic sinking</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 pb-0">
						<ChartContainer
							config={chartConfig}
							className="mx-auto aspect-square max-h-[250px]">
							<RadialBarChart
								data={unaliveradialData}
								startAngle={0}
								endAngle={250}
								innerRadius={80}
								outerRadius={110}>
								<PolarGrid
									gridType="circle"
									radialLines={false}
									stroke="none"
									className="first:fill-muted last:fill-background"
									polarRadius={[86, 74]}
								/>
								<RadialBar
									dataKey="visitors"
									background
									cornerRadius={10}
								/>
								<PolarRadiusAxis
									tick={false}
									tickLine={false}
									axisLine={false}>
									<Label
										content={({ viewBox }) => {
											if (viewBox && "cx" in viewBox && "cy" in viewBox) {
												return (
													<text
														x={viewBox.cx}
														y={viewBox.cy}
														textAnchor="middle"
														dominantBaseline="middle">
														<tspan
															x={viewBox.cx}
															y={viewBox.cy}
															className="fill-foreground text-4xl font-bold">
															{unaliveradialData[0].visitors.toLocaleString()}
														</tspan>
														<tspan
															x={viewBox.cx}
															y={(viewBox.cy || 0) + 24}
															className="fill-muted-foreground">
															Visitors
														</tspan>
													</text>
												);
											}
										}}
									/>
								</PolarRadiusAxis>
							</RadialBarChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="leading-none text-muted-foreground">
							This chart that displays the number of passengers who tragically did not survive the sinking of the
							Titanic.
						</div>
					</CardFooter>
				</Card>
			</div>
			{/* Div 2 */}
			<div className="grid grid-cols-1 gap-4 p-4">
				<Card>
					<CardHeader>
						<CardTitle className="text-center">Distribution of Passenger Classes on the Titanic</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer config={chartConfig}>
							<BarChart
								accessibilityLayer
								data={pclassData}>
								<CartesianGrid
									vertical={false}
									stroke="currentColor"
									opacity={0.1}
								/>
								<XAxis
									dataKey="month"
									tickLine={false}
									tickMargin={10}
									axisLine={false}
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent indicator="dashed" />}
								/>
								<Bar
									dataKey="desktop"
									fill="var(--color-desktop)"
									radius={4}
								/>
							</BarChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col items-start gap-2 text-sm">
						<div className="leading-none text-muted-foreground">
							This chart illustrates the number of passengers in each class (First, Second, and Third) aboard the
							Titanic, highlighting the social and economic diversity of those on board.
						</div>
					</CardFooter>
				</Card>
			</div>
			{/* Div 3 */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
				{/* Chart 1 */}
				<Card className="flex flex-col h-full">
					<CardHeader className="items-center pb-0">
						<CardTitle>Gender Distribution of Titanic Passengers</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent className="flex-1 pb-0 h-[300px] sm:h-[400px] [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground">
						<ChartContainer
							config={chartConfig}
							className="mx-auto aspect-square w-full max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground touch-pan-x touch-pan-y">
							<PieChart>
								<ChartTooltip content={<ChartTooltipContent hideLabel />} />
								<Pie
									data={genderData}
									dataKey="visitors"
									label
									nameKey="browser"
								/>
							</PieChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="flex items-center gap-2 font-medium leading-none"></div>
						<div className="leading-none text-muted-foreground">
							This chart shows the proportion of male and female passengers aboard the Titanic.
						</div>
					</CardFooter>
				</Card>
				{/* Chart 2 */}
				<Card className="flex flex-col h-full">
					<CardHeader className="items-center pb-0">
						<CardTitle>Survival Status of Male Passengers on the Titanic</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent className="flex-1 pb-0 h-[300px] sm:h-[400px] [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground">
						<ChartContainer
							config={chartConfig}
							className="mx-auto aspect-square w-full max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground touch-pan-x touch-pan-y">
							<PieChart>
								<ChartTooltip content={<ChartTooltipContent hideLabel />} />
								<Pie
									data={genderData}
									dataKey="visitors"
									label
									nameKey="browser"
								/>
							</PieChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="flex items-center gap-2 font-medium leading-none"></div>
						<div className="leading-none text-muted-foreground">
							This chart compares the number of male passengers who survived to those who did not survive the Titanic
							sinking.
						</div>
					</CardFooter>
				</Card>
				{/* Chart 4 */}
				<Card className="flex flex-col h-full">
					<CardHeader className="items-center pb-0">
						<CardTitle>Survival Status of Female Passengers on the Titanic</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardContent className="flex-1 pb-0 h-[300px] sm:h-[400px] [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground">
						<ChartContainer
							config={chartConfig}
							className="mx-auto aspect-square w-full max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground dark:[&_.recharts-pie-label-text]:fill-foreground touch-pan-x touch-pan-y">
							<PieChart>
								<ChartTooltip content={<ChartTooltipContent hideLabel />} />
								<Pie
									data={genderData}
									dataKey="visitors"
									label
									nameKey="browser"
								/>
							</PieChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="flex items-center gap-2 font-medium leading-none"></div>
						<div className="leading-none text-muted-foreground">
							This chart compares the number of female passengers who survived to those who did not survive the Titanic
							sinking.
						</div>
					</CardFooter>
				</Card>
			</div>
			{/* Div 5 */}
			<div className="grid grid-cols-1 gap-4 p-4">
				<Card>
					<CardHeader>
						<CardTitle className="text-center">Age Distribution of Titanic Passengers</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer config={chartConfig}>
							<BarChart
								accessibilityLayer
								data={ageData}
								layout="vertical"
								margin={{
									left: -20,
								}}>
								<XAxis
									type="number"
									dataKey="desktop"
									hide
								/>
								<YAxis
									dataKey="month"
									type="category"
									tickLine={false}
									tickMargin={10}
									axisLine={false}
									stroke="currentColor"
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent hideLabel />}
								/>
								<Bar
									dataKey="desktop"
									fill="hsl(var(--chart-1))"
									radius={5}
								/>
							</BarChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col items-start gap-2 text-sm">
						<div className="leading-none text-muted-foreground">
							This chart shows the number of Titanic passengers grouped into age ranges, providing insight into the
							demographic composition of those aboard the ship.
						</div>
					</CardFooter>
				</Card>
			</div>
			{/* Div 6 */}
			<div className="grid grid-cols-1 gap-4 p-4">
				<Card>
					<CardHeader>
						<CardTitle className="text-center">Passenger Embarkation Points on the Titanic</CardTitle>
					</CardHeader>
					<CardContent>
						<ChartContainer config={chartConfig}>
							<BarChart
								accessibilityLayer
								data={embarkedData}>
								<CartesianGrid
									vertical={false}
									stroke="currentColor"
									opacity={0.1}
								/>
								<XAxis
									dataKey="month"
									tickLine={false}
									tickMargin={10}
									axisLine={false}
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent indicator="dashed" />}
								/>
								<Bar
									dataKey="desktop"
									fill="var(--color-desktop)"
									radius={4}
								/>
							</BarChart>
						</ChartContainer>
					</CardContent>
					<CardFooter className="flex-col items-start gap-2 text-sm">
						<div className="leading-none text-muted-foreground">
							This chart shows the distribution of passengers based on their port of embarkation: Cherbourg (C),
							Queenstown (Q), and Southampton (S), providing insight into where travelers began their journey aboard the
							Titanic.
						</div>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}

export default Charts;
