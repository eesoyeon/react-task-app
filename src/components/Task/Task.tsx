import React, { FC } from 'react';
import { container, description, title } from './Task.css.ts';

type TTaskProps = {
    index: number;
    id: string;
    boardId: string;
    taskName: string;
    taskDescription: string;
};

const Task: FC<TTaskProps> = ({
    taskName,
    taskDescription,
    boardId,
    id,
    index,
}) => {
    return (
        <div className={container}>
            <div className={title}>{taskName}</div>
            <div className={description}>{taskDescription}</div>
        </div>
    );
};

export default Task;
