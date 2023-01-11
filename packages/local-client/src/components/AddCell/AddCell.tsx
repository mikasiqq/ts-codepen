import { FC } from "react";
import "./AddCell.css";
import { useActions } from "../../hooks/useActions";

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: FC<AddCellProps> = ({ forceVisible, prevCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`addCell ${forceVisible && "forceVisible"}`}>
      <div className="addButtons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(prevCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Код</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(prevCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Текст</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
