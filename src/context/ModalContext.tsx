import { createContext, useState} from 'react';

interface IModalContext {
    modal: boolean
    openModal: () => void
    closeModal: () => void
}

const ModalContext = createContext<IModalContext>({
    modal: false,
    openModal: () => {},
    closeModal: () => {},
})

const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState<boolean>(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            { children }
        </ModalContext.Provider>
    )
}

export {
    ModalContext,
    ModalState,
}