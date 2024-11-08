import { boardsReducer } from '../slices/boardsSlice';
import { loggerReducer } from '../slices/loggerSlice';
import { modalReducer } from '../slices/modalSlice';
import { userReducer } from '../slices/userSlice';

const reducer = {
    logger: loggerReducer,
    modal: modalReducer,
    boards: boardsReducer,
    user: userReducer,
};

export default reducer;
