export type TabsButtonItemToggleBtn = {
  isTheSame: boolean;
  id: number;
};

export type TabsButtonsList = {
  id: number;
  value: string;
  desc: string;
  isActive: boolean;
};
type onToggle = { onToggle: (data: TabsButtonItemToggleBtn) => void };

export type TabList = { list: TabsButtonsList[] };

export type tabBtnProps = TabList & onToggle;
export type tabBtnPropsItem = TabsButtonsList & onToggle;
