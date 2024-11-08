import React, { FC, useRef, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import {
    addButton,
    addSection,
    boardItem,
    boardItemActive,
    container,
    title,
} from './BoardList.css.ts';
import clsx from 'clsx';
import { GoSignOut } from 'react-icons/go';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { app } from '../../firebase.ts';
import { removeUser, setUser } from '../../store/slices/userSlice.ts';
import { useAuth } from '../../hooks/useAuth.ts';

type TBoardListProps = {
    activeBoardId: string;
    setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({
    activeBoardId,
    setActiveBoardId,
}) => {
    const dispatch = useTypedDispatch();
    const { boardArray } = useTypedSelector((state) => state.boards);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const { isAuth } = useAuth();

    const handleClick = () => {
        setIsFormOpen(!isFormOpen);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                // console.log(userCredential); // redux에 유저 데이터 넣기
                dispatch(
                    setUser({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                    })
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={container}>
            <div className={title}>게시판 :</div>
            {boardArray.map((board, index) => (
                <div
                    key={board.boardId}
                    onClick={() => setActiveBoardId(boardArray[index].boardId)}
                    className={clsx(
                        {
                            [boardItemActive]:
                                boardArray.findIndex(
                                    (b) => b.boardId === activeBoardId
                                ) === index,
                        },
                        {
                            [boardItem]:
                                boardArray.findIndex(
                                    (b) => b.boardId === activeBoardId
                                ) !== index,
                        }
                    )}
                >
                    <div>{board.boardName}</div>
                </div>
            ))}
            <div className={addSection}>
                {isFormOpen ? (
                    <SideForm
                        inputRef={inputRef}
                        isFormOpen={isFormOpen}
                        setIsFormOpen={setIsFormOpen}
                    />
                ) : (
                    <FiPlusCircle className={addButton} onClick={handleClick} />
                )}
                {isAuth ? (
                    <GoSignOut className={addButton} onClick={handleSignout} />
                ) : (
                    <FiLogIn className={addButton} onClick={handleLogin} />
                )}
            </div>
        </div>
    );
};

export default BoardList;
