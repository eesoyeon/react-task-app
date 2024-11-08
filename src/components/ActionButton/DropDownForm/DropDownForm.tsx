import React, { ChangeEvent, FC, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTypedDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { v4 } from 'uuid';
import { addLogger } from '../../../store/slices/loggerSlice';
import {
    button,
    buttons,
    close,
    input,
    listForm,
    taskForm,
} from './DropDownForm.css.ts';

type TDromDownFormProps = {
    boardId: string;
    listId: string;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    list?: boolean;
};

const DropDownForm: FC<TDromDownFormProps> = ({
    boardId,
    listId,
    setIsFormOpen,
    list,
}) => {
    const dispatch = useTypedDispatch();
    const [text, setText] = useState('');
    const formPlaceholder = list
        ? '리스트의 제목을 입력하세요.'
        : '일의 제목을 입력하세요';

    const buttonTitle = list ? '리스트 추가하기' : '일 추가하기';

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleButtonClick = () => {
        if (text) {
            if (list) {
                dispatch(
                    addList({
                        boardId,
                        list: { listId: v4(), listName: text, tasks: [] },
                    })
                );
                dispatch(
                    addLogger({
                        logId: v4(),
                        logMessage: `리스트 생성하기: ${text}`,
                        logAuthor: 'User',
                        logTimestamp: String(Date.now()),
                    })
                );
            } else {
                dispatch(
                    addTask({
                        boardId,
                        listId,
                        task: {
                            taskId: v4(),
                            taskName: text,
                            taskDescription: '',
                            taskOwner: 'User',
                        },
                    })
                );
                dispatch(
                    addLogger({
                        logId: v4(),
                        logMessage: `일 생성하기: ${text}`,
                        logAuthor: 'User',
                        logTimestamp: String(Date.now()),
                    })
                );
            }
        }
    };

    return (
        <div className={list ? listForm : taskForm}>
            <textarea
                className={input}
                value={text}
                onChange={handleTextChange}
                autoFocus
                onBlur={() => setIsFormOpen(false)}
                placeholder={formPlaceholder}
            />
            <div className={buttons}>
                <button className={button} onMouseDown={handleButtonClick}>
                    {buttonTitle}
                </button>
            </div>
            <FiX className={close} />
        </div>
    );
};

export default DropDownForm;
