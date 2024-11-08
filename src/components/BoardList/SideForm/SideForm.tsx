import React, { ChangeEvent, FC, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css.ts';
import { useTypedDispatch } from '../../../hooks/redux.ts';
import { addBoard } from '../../../store/slices/boardsSlice.ts';
import { v4 } from 'uuid';
import { addLogger } from '../../../store/slices/loggerSlice.ts';

type TSideFormProps = {
    inputRef: React.RefObject<HTMLInputElement>;
    isFormOpen: boolean;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideFormProps> = ({ inputRef, setIsFormOpen }) => {
    const [inputText, setInputText] = useState('');
    const dispatch = useTypedDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleOnBlur = () => {
        setIsFormOpen(false);
    };

    const handleClick = () => {
        if (inputText) {
            dispatch(
                addBoard({
                    board: {
                        boardId: v4(),
                        boardName: inputText,
                        lists: [],
                    },
                })
            );
            dispatch(
                addLogger({
                    logId: v4(),
                    logAuthor: 'user',
                    logMessage: `게시판 등록: ${inputText}`,
                    logTimestamp: String(Date.now()),
                })
            );
        }
    };

    return (
        <div className={sideForm}>
            <input
                className={input}
                // autoFocus
                ref={inputRef}
                type="text"
                placeholder="새로운 게시판 등록하기"
                value={inputText}
                // blur, click 이벤트 순서 중요
                // onmousedown mouseup click 순서
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            <FiCheck onMouseDown={handleClick} className={icon} />
        </div>
    );
};

export default SideForm;
