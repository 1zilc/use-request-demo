import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Init = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return <div>init-page</div>;
};

export default Init;
