import { Brands } from "./Brands";
import { ClearFilters } from "./ClearFilters";
import { Sizes } from "./Sizes";
import { IdealFor } from "./IdealFor";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ClearFilters />
      <Brands />
      <Sizes />
      <IdealFor />
    </aside>
  );
};
