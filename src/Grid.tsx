import { useState, useEffect } from "react";
import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { colorSchemeDarkBlue } from "ag-grid-community";
import { themeQuartz } from "ag-grid-community";

interface IRow {
	passengerid: number;
	survived: boolean;
	pclass: number;
	name: string;
	sex: string;
	age: number;
	embarked: string;
}

const myTheme = themeQuartz.withPart(colorSchemeDarkBlue);
const GridExample = () => {
	useEffect(() => {
		fetch("/titanic.csv")
			.then((response) => response.text())
			.then((text) => {
				const rows = text.split("\n").slice(1);
				const data = rows.map((row) => {
					const [PassengerId, Survived, Pclass, Name, Sex, Age, Embarked] = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
					return {
						passengerid: Number(PassengerId),
						survived: Number(Survived),
						pclass: Number(Pclass),
						name: Name,
						sex: Sex,
						age: Number(Age),
						embarked: Embarked,
					};
				});
				setRowData(
					data.map((row) => ({
						...row,
						survived: Boolean(row.survived),
					}))
				);
			});
	}, []);

	const [rowData, setRowData] = useState<IRow[]>([]);

	const [colDefs] = useState<ColDef[]>([
		{ field: "passengerid", headerName: "Passenger ID" },
		{ field: "survived", headerName: "Survivor" },
		{ field: "pclass", headerName: "Passenger Class" },
		{ field: "name", headerName: "Name" },
		{ field: "sex", headerName: "Sex" },
		{ field: "age", headerName: "Age" },
		{ field: "embarked", headerName: "Embarked" },
	]);

	const defaultColDef: ColDef = {
		flex: 1,
		filter: true,
	};

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<AgGridReact
				theme={myTheme}
				pagination={true}
				rowData={rowData}
				columnDefs={colDefs}
				defaultColDef={defaultColDef}
			/>
		</div>
	);
};

export default GridExample;
