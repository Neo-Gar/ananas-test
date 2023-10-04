import {CompaniesTopContent} from "@/features/CompaniesTopContent";
import {CompaniesGrid} from "@/entities/CompaniesGrid";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {toggleActive} from "@/features/AddModal/store/addModalSlice";
import {selectCompanies, selectSearchFilter, selectSearchRows} from "@/entities/CompaniesGrid/store/companiesSlice";

export const CompaniesTable = () => {
    const dispatch = useAppDispatch()
    const rows = useAppSelector(selectCompanies)
    const searchRows = useAppSelector(selectSearchRows)
    const searchFilter = useAppSelector(selectSearchFilter)
    return (
        <>
            <CompaniesTopContent toggleAddModal={() => dispatch(toggleActive())}/>
            <CompaniesGrid rows={rows} searchRows={searchRows} hasSearchFilter={searchFilter}/>
        </>
    )
}