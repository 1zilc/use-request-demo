import React, { Suspense } from "react";
import "./index.css";
import { Button, Drawer } from "antd";
import { useBoolean } from "ahooks";
import Loading from "./Loading";

const Content = React.lazy(() => import("./Content"));

const App: React.FC = () => {
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  return (
    <div style={{ height: "10000px", overflow: "auto" }}>
      <Button onClick={setTrue}>打开</Button>
      <Drawer open={visible} onClose={setFalse} destroyOnClose>
        <Content />
      </Drawer>
    </div>
  );
};

export default App;
