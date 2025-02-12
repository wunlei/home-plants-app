import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectNotification } from "@/state/plants/plants.selectors";
import { resetNotification } from "@/state/plants/plants.slice";
import { Slide, toast, ToastContainer } from "react-toastify";
import ErrorBoundary from "@/components/commons/ErrorBoundary";

function App() {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(selectNotification);

  useEffect(() => {
    const onClose = () => {
      dispatch(resetNotification());
    };
    const { text, type } = notification;

    switch (type) {
      case "error":
        toast.error(text, {
          onClose,
        });
        break;
      case "success":
        toast.success(text, {
          onClose,
        });
        break;
      default:
        if (type) {
          toast(text, { onClose });
        }
        break;
    }
  }, [dispatch, notification]);

  return (
    <ErrorBoundary>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        pauseOnFocusLoss
        pauseOnHover
        transition={Slide}
      />
    </ErrorBoundary>
  );
}

export default App;
