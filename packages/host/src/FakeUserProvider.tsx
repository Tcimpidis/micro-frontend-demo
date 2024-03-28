import { ReactNode, createContext, useState, FC } from "react";

interface FakeUserContextProps {
    firstName: string;
    lastName: string;
    setFirstName: (name: string) => void;
    setLastName: (name: string) => void;
}

const FakeUserContext = createContext<FakeUserContextProps | null>(null);

const FakeUserProvider: FC<{children: ReactNode}> = ({
    children
}) => {
    const [firstName, setFirstName] = useState<string>("Test");
    const [lastName, setLastName] = useState<string>("Testerson");
    return (
        <FakeUserContext.Provider value={{firstName,lastName, setFirstName, setLastName}}>
            {children}
        </FakeUserContext.Provider>
    )
}

export default FakeUserProvider;