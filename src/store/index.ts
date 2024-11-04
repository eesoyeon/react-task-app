import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

const store = configureStore({
    reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// store.getState() 의 타입 어떻게 가져와?
// ReturnType 사용
// type A = ReturnType<() => string>;
// type RootState = ReturnType<typeof store.getState>;

// const dispatch = useDispatch(); // 타입은 AppDispatch
// const logger = useSelector((state: RootState) => state.logger);

// 그러나 타입을 export해서 가져오기보다는, hooks를 만들어서 가져오는게 더 낫다
// useAppSelector;
// useTypedSelector;
