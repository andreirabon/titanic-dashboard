"use client";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import GridExample from "./Grid.tsx";
import Charts from "./Charts.tsx";
ModuleRegistry.registerModules([AllCommunityModule]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="h-[300px] w-screen">
			<GridExample />
		</div>
		<div className="h-[300px] w-[300px]">
			<Charts />
		</div>
	</StrictMode>
);
