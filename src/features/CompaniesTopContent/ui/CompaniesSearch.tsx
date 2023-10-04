import {BiSearch} from "react-icons/bi";
import {Input} from "@nextui-org/input";
import {useState} from "react";
import {useAppDispatch} from "@/shared/hooks";
import {clearSearchRows, searchByName} from "@/entities/CompaniesGrid/store/companiesSlice";

export const CompaniesSearch = () => {
    const dispatch = useAppDispatch()

    const [filterName, onFilterNameChange] = useState('')

    const handleFilter = (value: string) => {
        onFilterNameChange(value)
        if (value === '')
            dispatch(clearSearchRows())
        else
            dispatch(searchByName(filterName))
    }

    const clearFilter = () => {
        onFilterNameChange('')
        dispatch(clearSearchRows())
    }

    return (
        <Input
            isClearable
            className="w-full self-start mb-4 sm:mb-0"
            placeholder="Поиск по наименованию..."
            startContent={<BiSearch size={20}/>}
            size={'lg'}
            value={filterName}
            onValueChange={handleFilter}
            onClear={clearFilter}
        />
    )
}