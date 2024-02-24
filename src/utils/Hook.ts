import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/RootReducer";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
