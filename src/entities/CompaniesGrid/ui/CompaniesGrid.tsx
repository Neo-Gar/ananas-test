import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {CompaniesGridTypes} from "../types/CompaniesGrid.types";
import {Button} from "@nextui-org/button";
import {FaTrash} from "react-icons/fa6";
import {useAppDispatch} from "@/shared/hooks";
import {editCompanyField, removeCompany} from "@/entities/CompaniesGrid/store/companiesSlice";
import {Input} from "@nextui-org/input";

export const CompaniesGrid = (props: CompaniesGridTypes) => {
    const dispatch = useAppDispatch()
    return (
        <Table
            aria-label={'Таблица'}
            isHeaderSticky
            className={'max-h-[60vh]'}
        >
            <TableHeader>
                <TableColumn>Наименование</TableColumn>
                <TableColumn>Адрес</TableColumn>
                <TableColumn>ОГРН</TableColumn>
                <TableColumn>ИНН</TableColumn>
                <TableColumn>Дата регистрации</TableColumn>
                <TableColumn>Действия</TableColumn>
            </TableHeader>
            <TableBody
                items={props.hasSearchFilter ? props.searchRows : props.rows}>
                {item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            <Input
                                className={'min-w-[300px] lg:min-w-max'}
                                value={item.address}
                                onValueChange={
                                    (value) => dispatch(editCompanyField({
                                        id: item.id,
                                        type: 'address',
                                        value: value
                                    }))
                                }
                            />
                        </TableCell>
                        <TableCell>{item.ogrn}</TableCell>
                        <TableCell>{item.inn}</TableCell>
                        <TableCell>{item.reg_date}</TableCell>
                        <TableCell>
                            <Button
                                isIconOnly
                                color={'danger'}
                                onPress={() => dispatch(removeCompany(item.id))}
                            >
                                <FaTrash size={20}/>
                            </Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}