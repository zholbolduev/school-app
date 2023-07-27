type IDescription = {
    description: string | undefined;
}

export const Description = ({description}: IDescription) => {
    return (
        <div>
            <p>{description}</p>
        </div>
    );
}