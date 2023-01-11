import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import IconButton from "./IconButton";
import "./ActionBar.css";

interface ActionBarProps {
  id: string;
}

const ActionBar: FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="actionBar">
      <IconButton icon="fas fa-arrow-up" onClick={() => moveCell(id, "up")} />
      <IconButton
        icon="fas fa-arrow-down"
        onClick={() => moveCell(id, "down")}
      />
      <IconButton icon="fas fa-times" onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
