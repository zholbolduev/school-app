import './Description.scss';

type IDescription = {
    description: string | undefined;
}

export const Description = ({description}: IDescription) => {
    return (
        <div className="detailsDescription">
            <p>{description}</p>
        </div>
    );
}