import { SixK } from "./../../node_modules/@mui/icons-material/index.d";
import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";
export interface IRoute {
  path: string;
  element: ReactNode;
}
export interface HelmetProps {
  title: string;
}
export interface ContainerProps {
  children: ReactNode;
}

export interface INavLink {
  id: number;
  title: string;
  path: string;
}
export interface CustomButtonProps extends ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  sx?: object;
}
export interface ICardData {
  label: string;
  value: string;
}
export interface IColumnData {
  digit: number;
  isActive: boolean;
}
export interface IColumnTransaction {
  id: string | number;
  label: string;
  align: "left" | "center" | "right";
  format?: (row: any) => any;
}
export interface IRowTransaction {
  id: number;
  numeral: number;
  time: string;
  price: string;
  volume: string;
  summa: string;
}
export interface InputProps {
  cardWidth: number;
  label: string;
  width?: string;
  defaultValue?: string;
  padding?: string;
  fontSize?: string;
  readOnly?: boolean;
  sx?: object;
}
export interface SelectProps {
  options: { value: number | string }[];
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
}
export interface Row {
  [key: string]: any;
}

export interface DataTableProps {
  total?: number;
  rows?: Row[];
  columns?: IColumnTransaction[];
  page?: number;
  rowsPerPage?: number;
  handleChangePage?: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  cardHeight: number;
  setCardHeight: (height: number) => void;
}
