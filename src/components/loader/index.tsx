import { RootState } from "@/store";
import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

// Updated override styles to center the loader on the screen
const override : CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
};

const Loader = () => {
  const { isLoading } = useSelector((state : RootState) => state.loader);
  const color = "#ab1e56";

  return isLoading ? (
    <div className="fixed inset-0 z-51 bg-white/50">
      <PulseLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.5}
      />
    </div>
  ) : null;
};

export default Loader;
