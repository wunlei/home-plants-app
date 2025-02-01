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
    if (notification.type === "error") {
      toast.error(notification.text, {
        onClose: () => {
          dispatch(resetNotification());
        },
      });
    }

    if (notification.type === "success") {
      toast.success(notification.text, {
        onClose: () => {
          dispatch(resetNotification());
        },
      });
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
