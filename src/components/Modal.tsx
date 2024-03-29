import React, { ChangeEvent } from "react";
import { ITransferToUser } from "../types/PrivateType";
import { useAppDispatch, useTypedSelector } from "../utils/Hook";
import {
  getAllUsers,
  transferToAnotherUser,
} from "../views/private/actions/action";
import { GET_MODAL_DATA } from "../views/private/actions/types";

export interface IModal {
  modal: boolean;
  onClose: () => void;
}

const initialState: ITransferToUser = {
  toUser: "",
  amount: 0,
};

const Modal = ({ modal, onClose }: IModal) => {
  const [Inputs, setInputs] = React.useState(initialState);

  const { modalError, modalLoading, allUsers, getModalData } = useTypedSelector(
    (state) => state.private
  );

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(transferToAnotherUser(Inputs));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    dispatch(getAllUsers());

    if (getModalData) {
      Inputs.amount = 0;
      Inputs.toUser = "";
      dispatch({ type: GET_MODAL_DATA, payload: null });
    }
  }, [dispatch, getModalData]);

  return (
    <div>
      <div
        className="fixed inset-0 z-40"
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <div className="relative animodal-inner">
            <div className="rounded-lg bg-white border w-[300px] lg:w-[500px] border-stone-500 overflow-hidden px-5 py-5">
              <div
                onClick={onClose}
                className="text-black flex justify-end cursor-pointer"
              >
                x
              </div>
              <div className="font-bold text-lg text-center">
                Transfer money to your friends
              </div>

              {modalError && (
                <div className="bg-red-600 my-3 rounded-md px-2 text-white py-2">
                  {typeof modalError === "string"
                    ? modalError
                    : modalError?.response?.data.message}
                </div>
              )}

              {getModalData && (
                <div className="bg-green-600 my-3 rounded-md px-2 text-white py-2">
                  {getModalData.message}
                </div>
              )}

              <form className="mt-3" onSubmit={handleSubmit}>
                <select
                  onChange={handleChange}
                  value={Inputs.toUser}
                  name="toUser"
                  className=" border border-solid border-gray-300 w-full py-2 rounded-md pl-3"
                >
                  <option value="" disabled defaultValue={""}>
                    Select User
                  </option>
                  {allUsers?.user.map((el) => (
                    <option className="capitalize" key={el._id} value={el._id}>
                      {el.firstName + " " + el.lastName}
                    </option>
                  ))}
                </select>

                <input
                  onChange={handleChange}
                  value={Inputs.amount}
                  name="amount"
                  type="number"
                  className="border border-solid border-gray-300 w-full py-2 rounded-md pl-3 mt-6 mb-6"
                  placeholder="Enter Amount"
                />

                <div className="flex justify-center">
                  <div>
                    <button
                      onClick={onClose}
                      disabled={modalLoading}
                      type="submit"
                      className="bg-red-700 hover:bg-red-600 w-44 mr-3 text-white font-bold py-1 rounded-md"
                    >
                      Close
                    </button>
                  </div>

                  <div className="">
                    <button
                      disabled={modalLoading}
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 w-44 text-white font-bold py-1 rounded-md"
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
