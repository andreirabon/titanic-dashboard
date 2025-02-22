"use client";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import GridExample from "./Grid.tsx";
import Charts from "./Charts.tsx";

ModuleRegistry.registerModules([AllCommunityModule]);

document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="mx-auto flex min-h-screen max-w-6xl">
			<div className="h-screen w-screen">
				<GridExample />
				<br />
				<Charts />
			</div>
		</div>
	</StrictMode>
);
