import { create } from "zustand";

type KeyloakDomain = {
  domainIndex: number;
  setDomainIndex: (index: number) => void;
  getDomain: () => string;
}

export const useKeyloakDomain = create<KeyloakDomain>((set, get) => ({
  domainIndex: 0,
  setDomainIndex: (index) => set(() => ({ domainIndex: index })),
  getDomain: () => {
    const index = get().domainIndex
    const domains = ["localhost:8230", "localhost:8330"]
    return domains[index]
  },
}));
