import { IButtonSelector } from "./Interface";

export const setSingleSelection = (list: IButtonSelector[], v: string) =>
  list.map(item =>
    item.value === v
      ? { ...item, isActive: !item.isActive }
      : { ...item, isActive: false }
  );
