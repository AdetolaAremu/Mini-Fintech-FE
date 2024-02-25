import { useState } from "react";
import Modal from "../../components/Modal";
import { RootState } from "../../store/RootReducer";
import { useTypedSelector } from "../../utils/Hook";

const Home = () => {
  const [modal, setModal] = useState(false);
  const { loggedInUser } = useTypedSelector(
    (state: RootState) => state.private
  );
  console.log(loggedInUser.user, "loggedin");
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="flex justify-center pt-20">
        <div className="bg-white w-3/4 h-48 rounded-md p-3">
          <div className="">
            <div className="capitalize">
              Welcome back,{" "}
              {loggedInUser.user.firstName + " " + loggedInUser.user.lastName}
            </div>
          </div>
          <button
            onClick={toggleModal}
            className="mt-5 bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Transfer
          </button>
        </div>
      </div>
      <Modal modal={modal} onClose={toggleModal} />
    </>
  );
};

export default Home;
