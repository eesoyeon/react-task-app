import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// 에러
// const useTypedSelector: RootState = useSelector;

// RootState는 any 타입이라서
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useTypedSelector((state) => state.logger);

// (parameter) state: {
//     logger: loggerState;
//     modal: TModalState;
//     boards: TBoardState;
// }

// interface Obj<T> {
//     name: T;
// }

// interface State {
//     state: {
//         data: string;
//         loading: boolean;
//     };
// }

// const obj: Obj<State> = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: false,
//         },
//     },
// };
