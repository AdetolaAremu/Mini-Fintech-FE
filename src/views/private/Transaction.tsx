import React, { useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { getAllCredits, getAllDebits } from "./actions/action";
import { format } from "date-fns";

const Transaction = () => {
  const [CheckType, useCheckType] = useState("credit");
  const dispatch = useAppDispatch();
  const { getAllCredit, getAllDebit } = useTypedSelector(
    (state) => state.private
  );

  console.log(getAllDebit?.data?.debit.map((el) => el, "adfad"));

  const changeType = () => {
    if (CheckType === "credit") useCheckType("debit");
    if (CheckType === "debit") useCheckType("credit");
  };

  React.useEffect(() => {
    dispatch(getAllCredits());
    dispatch(getAllDebits());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center pt-20">
        <div className="bg-white w-3/4 rounded-md p-3">
          <div className="flex justify-center mb-3">
            <button
              onClick={changeType}
              className="bg-green-700 text-white px-4 mr-2 py-1 rounded-md"
            >
              Credit
            </button>
            <button
              onClick={changeType}
              className="bg-red-700 text-white px-4 mr-2 py-1 rounded-md"
            >
              Debit
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {CheckType === "debit" && (
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                  )}

                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reference
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {CheckType === "credit" &&
                  getAllCredit?.data.credit.map((el) => (
                    <tr
                      key={el._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{el?.amount}</td>
                      <td className="px-6 py-4">{el?.transactionID}</td>
                      <td className="px-6 py-4">
                        {format(new Date(el?.createdAt), "yyyy-MM-dd HH:mm:ss")}
                      </td>
                    </tr>
                  ))}

                {CheckType === "debit" &&
                  getAllDebit?.data?.debit.map((el) => (
                    <tr
                      key={el._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{el?.toUser || "-"}</td>
                      <td className="px-6 py-4">{el?.amount}</td>
                      <td className="px-6 py-4">{el?.transactionID}</td>
                      <td className="px-6 py-4">
                        {format(new Date(el?.createdAt), "yyyy-MM-dd HH:mm:ss")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
