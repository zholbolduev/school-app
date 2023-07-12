import { ChangeEvent, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export const SearchForm = () => {

    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className='searchForm'>
            <form>
                <div>
                    <CiSearch />
                    <input 
                        type="text" 
                        placeholder="Поиск" 
                        value={value}
                        onChange={ (event) => {
                            handleChange(event);
                        }} />
                </div>
            </form>
        </div>
    );
}