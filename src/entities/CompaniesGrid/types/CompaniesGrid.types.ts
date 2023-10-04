interface CompaniesGridRowType {
    id: number;
    name: string;
    address: string;
    ogrn: string;
    inn: string;
    reg_date: string;
}

export interface CompaniesGridTypes {
    rows: CompaniesGridRowType[];
    hasSearchFilter: boolean;
    searchRows: CompaniesGridRowType[];
}