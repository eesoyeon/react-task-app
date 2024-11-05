import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../types';

type TSetModalDataAction = {
    boardId: string;
    listId: string;
    task: ITask;
};

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
    reducers: {
        setModalData: (
            state,
            { payload }: PayloadAction<TSetModalDataAction>
        ) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.task = payload.task;
        },
    }, // 액션 생성 함수
});

export const { setModalData } = modalSlice.actions;
// modalSlice 내보내기
export const modalReducer = modalSlice.reducer;
