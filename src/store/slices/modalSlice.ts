import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types';

// 타입 앨리어스
type TModalState = {
    boardId: string;
    listId: string;
    task: ITask; // interface
};

const initialState: TModalState = {
    boardId: 'board-0',
    listId: 'list-0',
    task: {
        taskId: 'task-0',
        taskName: 'task-0',
        taskDescription: 'task description',
        taskOwner: 'John',
    },
};

// 이름, 초기값, 리듀서
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {}, // 액션 생성 함수
});

// modalSlice 내보내기
export const modalReducer = modalSlice.reducer;
