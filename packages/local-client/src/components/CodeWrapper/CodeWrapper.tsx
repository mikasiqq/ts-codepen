import React, { FC, useEffect } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import Preview from "../Preview/Preview";
import Resizable from "../Resizable/Resizable";
import { Cell } from "../../store/cell";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./CodeWrapper.css";
import { useCumulativeCode } from "../../hooks/useCumulativeCode";

interface CodeWrapperProps {
  cell: Cell;
}

const CodeWrapper: FC<CodeWrapperProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value || "")}
          />
        </Resizable>
        <div className="progressWrapper">
          {!bundle || bundle.loading ? (
            <div className="progressCover">
              <progress className="progress is-small is-primary" max="100">
                Загрузка
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} bundlingStatus={bundle.error} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeWrapper;
