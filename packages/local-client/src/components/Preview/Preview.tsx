import { FC, useEffect, useRef } from "react";
import "./Preview.css";
interface PreviewProps {
  code: string;
  bundlingStatus: string;
}

const html = `
  <html>
    <head>
      <style>html { background-color: white; }</style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        const handleError = (error) => {
          const root = document.querySelector('#root')
          root.innerHTML = '<div style="color: rgb(215, 56, 88); font-family: "Lato","Helvetica Neue",Helvetica,Arial,sans-serif;"><h4 style="margin: 5px 0">Runtime error</h4>' + error + '</div>'
          console.error(error);
        }

        window.addEventListener('error', (event) => {
          event.preventDefault()
          handleError(event.error)
        })

        window.addEventListener('message', (event) => {
          try {
            eval(event.data)
          } catch (error) {
            handleError(error)
          }
        }, false)
      </script>
    </body>
  </html>
`;

const Preview: FC<PreviewProps> = ({ code, bundlingStatus }) => {
  const frame = useRef<any>();

  useEffect(() => {
    frame.current.srcdoc = html;
    setTimeout(() => {
      frame.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="previewWrapper">
      <iframe
        title="Code Preview"
        ref={frame}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {bundlingStatus && <div className="previewError">{bundlingStatus}</div>}
    </div>
  );
};

export default Preview;
