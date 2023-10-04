import {CompaniesGridTypes} from "../types/CompaniesGrid.types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";

const initialState: CompaniesGridTypes = {
    rows: [
        {
            id: 1,
            name: 'ОАО "РЖД"',
            address: 'г. Москва, ул. Новая Басманная, д. 2/1 стр. 1',
            ogrn: '1037739877295',
            inn: '7708503727',
            reg_date: '23.09.2003'
        },
        {
            id: 2,
            name: 'ООО "ЯНДЕКС"',
            address: 'г. Москва, ул. Льва Толстого, д. 16',
            ogrn: '1027700229193',
            inn: '7736207543',
            reg_date: '14.09.2000'
        },
        {
            id: 3,
            name: 'ООО "ГУГЛ"',
            address: 'г. Москва, ул. Летниковская д. 2 стр. 1',
            ogrn: '1057749528100',
            inn: '7704582421',
            reg_date: '14.12.2005'
        }
    ],
    hasSearchFilter: false,
    searchRows: []
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        addCompany: (state, action) => {
            // Генерация id для массива
            if (state.rows.length === 0)
                action.payload.id = 1
            else
                action.payload.id = state.rows[state.rows.length - 1].id + 1

            // Конверсия даты в красивые дд.мм.гггг
            const parsedDate = new Date(action.payload.reg_date)
            const day = String(parsedDate.getDate()).padStart(2, '0');
            const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
            const year = parsedDate.getFullYear();

            action.payload.reg_date = `${day}.${month}.${year}`

            state.rows.push(action.payload)
        },
        removeCompany: (state, action) => {
            state.rows = state.rows.filter(row => row.id !== action.payload)
        },
        editCompanyField: (state, action) => {

            // Ручки для редактирования всех полей
            switch (action.payload.type) {
                case 'name':
                    state.rows.forEach(row => {
                        if (row.id === action.payload.id)
                            row.name = action.payload.value
                    })
                    break;

                case 'address':
                    state.rows.forEach(row => {
                        if (row.id === action.payload.id)
                            row.address = action.payload.value
                    })
                    break;

                case 'ogrn':
                    state.rows.forEach(row => {
                        if (row.id === action.payload.id)
                            row.ogrn = action.payload.value
                    })
                    break;

                case 'inn':
                    state.rows.forEach(row => {
                        if (row.id === action.payload.id)
                            row.inn = action.payload.value
                    })
                    break;

                case 'reg_date':
                    state.rows.forEach(row => {
                        if (row.id === action.payload.id)
                            row.reg_date = action.payload.value
                    })
                    break;

            default: throw new Error(`Field to edit not found, field: ${action.payload.type}`)

            }
        },
        searchByName: (state, action) => {
            state.searchRows = state.rows.filter(
                row => row.name.toLowerCase().includes(action.payload.toLowerCase())
            )
            if (!state.hasSearchFilter)
                state.hasSearchFilter = true
        },
        clearSearchRows: state => {
            state.searchRows = []
            state.hasSearchFilter = false
        }
    }
})

export const {
    addCompany,
    removeCompany,
    editCompanyField,
    searchByName,
    clearSearchRows
} = companiesSlice.actions

export const selectCompanies = (state: RootState) => state.companies.rows
export const selectSearchRows = (state: RootState) => state.companies.searchRows
export const selectSearchFilter = (state: RootState) => state.companies.hasSearchFilter
export default companiesSlice.reducer