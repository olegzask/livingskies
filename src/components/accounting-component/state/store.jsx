import create from "zustand";

export const useButton = create((set) => ({
  buttonClick: "",
  setButton: (newName) => set((state) => ({ buttonClick: newName })),
}));

export const getTotal = create((set) => ({
  total: 0,
  setTotal: (amount) => set((state) => ({ total: amount })),
}));
