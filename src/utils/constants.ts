import { ICardData, IColumnData, IColumnTransaction, INavLink, IRowTransaction } from "../types/types";
import { formatDate } from "./helpers";
export const nav_link: INavLink[] = [
  { id: 1, title: "Колонки", path: "/" },
  { id: 2, title: "Видеофиксация", path: "/recording" },

  { id: 2, title: "Отчеты", path: "/reports" },

  { id: 3, title: "Объемы", path: "/volumes" },
  { id: 4, title: "Настройки", path: "/settings" },
];

export const card_data: ICardData[] = [
  { label: "Температура ℃", value: "20.0" },
  { label: "Давление pm³", value: "50" },
  { label: "Цена сум/м³", value: "3800.0" },
];

export const column_data:IColumnData[] = [
  { digit: 1, isActive: true },
  { digit: 2, isActive: true },
  { digit: 3, isActive: true },
  { digit: 4, isActive: true },
  { digit: 5, isActive: true },
  { digit: 6, isActive: false },
];

export const column_transactions:IColumnTransaction[] = [
  {
    id: "numeral",
    label: "№ Сопло",
    align: "left",
  },
  {
    id: "time",
    label: "Дата и время",
    align: "left",
    format:(row)=> formatDate(row)
  },
  {
    id: "price",
    label: "Цена (сум/м³)",
    align: "left",
  },
  {
    id: "volume",
    label: "Объем (м³)",
    align: "left",
  },
  {
    id: "summa",
    label: "Сумма (сум)",
    align: "left",
  },
  {
    id:"action",
    label: "Действие",
    align: "center",
  },
];

export const row_transactions: IRowTransaction[] = [
  {
    id: 1,
    numeral: 1,
    time: new Date().toString(),
    price: "3800.0",
    volume: "10.160",
    summa: "1900.0",
  },
  {
    id: 2,
    numeral: 2,
    time: new Date().toString(),
    price: "3800.0",
    volume: "10.160",
    summa: "1900.0",
  },
  {
    id: 3,
    numeral: 3,
    time: new Date().toString(),
    price: "3800.0",
    volume: "10.160",
    summa: "1900.0",
  },
  {
    id: 4,
    numeral: 4,
    time: new Date().toString(),
    price: "3800.0",
    volume: "10.160",
    summa: "1900.0",
  },

  {
    id: 5,
    numeral: 5,
    time: new Date().toString(),
    price: "3800.0",
    volume: "10.160",
    summa: "1900.0",
  },
 
];
