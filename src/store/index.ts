import { create } from "zustand";

type KeyloakDomain = {
  domainIndex: number;
  setDomainIndex: (index: number) => void;
  getDomain: () => string;
};

export const useKeyloakDomain = create<KeyloakDomain>((set, get) => ({
  domainIndex: Number(localStorage.getItem("domainIndex")) ?? 0,
  setDomainIndex: (index) =>
    set(() => {
      localStorage.setItem("domainIndex", index.toString());
      return { domainIndex: index };
    }),
  getDomain: () => {
    const index = get().domainIndex;
    const domains = ["http://localhost:8230", "http://localhost:8330"];
    return domains[index];
  },
}));
