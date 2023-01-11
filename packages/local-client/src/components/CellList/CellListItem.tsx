import { FC } from "react";
import { Cell } from "../../store";
import ActionBar from "../ActionBar/ActionBar";
import CodeWrapper from "../CodeWrapper/CodeWrapper";
import TextEditor from "../TextEditor/TextEditor";
import "./CellListItem.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="actionBarWrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeWrapper cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cellListItem">{child}</div>;
};

export default CellListItem;
