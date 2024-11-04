import { createSlice } from '@reduxjs/toolkit';
import { ILogItem } from '../../types';

// 타입 앨리어스
type loggerState = {
    logArray: ILogItem[];
};

const initialState: loggerState = {
    logArray: [],
};

// 이름, 초기값, 리듀서
const loggerSlice = createSlice({
    name: 'logger',
    initialState,
    reducers: {}, // 액션 생성 함수
});

// modalSlice 내보내기
export const loggerReducer = loggerSlice.reducer;
