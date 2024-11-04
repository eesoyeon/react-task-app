import { boardsReducer } from '../slices/boardsSlice';
import { loggerReducer } from '../slices/loggerSlice';
import { modalReducer } from '../slices/modalSlice';

const reducer = {
    logger: loggerReducer,
    modal: modalReducer,
    boards: boardsReducer,
};

export default reducer;
