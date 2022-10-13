import { useEffect } from "react";
import styles from "./Table.module.css";

export default function Table({
  rows,
  headers,
  borderWidth = "medium",
  cellPadding = "medium",
  cellTextColor = "black",
  headerTextColor = "white",
  cellBorderColor = "#747381",
  headerBorderColor = "#494866",
  backgroundColor = "#a6a5b8",
  headerBackgroundColor = "#65647a",
}: TableProps) {
  useEffect(() => {
    if (headers.length < 1) {
      throw Error("Must have at least one header");
    } else if (!rows.every((r) => r.length === headers.length)) {
      throw Error("Row length must equal header length");
    }
  }, [rows, headers]);

  const cellPaddingMap: any = {
    small: "3px",
    medium: "8px",
    large: "15px",
  };
  const borderWidthMap: any = {
    thin: "1px",
    medium: "2px",
    thick: "3px",
  };

  return (
    <div className={styles.main}>
      {headers.map((h, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          <div
            className={styles.header}
            style={{
              color: headerTextColor,
              padding: cellPaddingMap[cellPadding],
              backgroundColor: headerBackgroundColor,
              border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
            }}
          >
            {h}
          </div>

          <div className={styles.rows}>
            {rows.map((r, rowIndex) => (
              <div
                key={rowIndex}
                className={styles.cell}
                style={{
                  color: cellTextColor,
                  backgroundColor: backgroundColor,
                  padding: cellPaddingMap[cellPadding],
                  border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                }}
              >
                {r[columnIndex]}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface TableProps {
  rows: string[][];
  headers: string[];
  backgroundColor?: string;
  cellTextColor?: string;
  cellBorderColor?: string;
  headerTextColor?: string;
  headerBorderColor?: string;
  headerBackgroundColor?: string;
  borderWidth?: 'thin' | 'medium' | 'thick';
  cellPadding?: 'small' | 'medium' | 'large';
}
