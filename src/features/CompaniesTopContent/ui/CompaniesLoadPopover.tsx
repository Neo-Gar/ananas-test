import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {BsFillCloudDownloadFill} from "react-icons/bs";
import {useMemo, useState} from "react";
import {innFetch} from "@/shared/lib/innFetch";
import {useAppDispatch} from "@/shared/hooks";
import {addCompany} from "@/entities/CompaniesGrid/store/companiesSlice";

export const CompaniesLoadPopover = () => {
    const dispatch = useAppDispatch()

    const [isPopoverOpen, onPopoverOpen] = useState(false)

    const [inn, onInnChange] = useState('')

    // Проверка на валидность ИНН
    const isInnInvalid = useMemo(() => {
        if (!inn || inn.trim() === '' || inn.length !== 10)
            return true

        return /[^0-9]+$/.test(inn) || /\./.test(inn)
    }, [inn])

    // Проверка на валидность, fetch, добавление компании, очистка
    // Не придумал что отобразить при инвалиде\отсутствии компании :(
    const handleInnData = async () => {
        if (isInnInvalid)
            return null
        else {
            const company = await innFetch(inn)
            if (company.suggestions.length > 0) {
                dispatch(addCompany({
                    name: company.suggestions[0].data.name.short_with_opf,
                    address: company.suggestions[0].data.address.value,
                    ogrn: company.suggestions[0].data.ogrn,
                    inn: company.suggestions[0].data.inn,
                    reg_date: company.suggestions[0].data.state.registration_date
                }))
                onPopoverOpen(false)
                onInnChange('')
            }
            else
                return null
        }
    }

    return (
        <Popover
            className={'p-0'}
            showArrow
            isOpen={isPopoverOpen}
            onOpenChange={onPopoverOpen}
            onClose={() => onInnChange('')}
        >
            <PopoverTrigger>
                <Button
                    className={'ml-2 sm:ml-8'}
                    color={'primary'}
                    size={'lg'}
                >
                    Загрузить по ИНН
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Input
                    placeholder={'Введите ИНН...'}
                    disableAnimation
                    value={inn}
                    onValueChange={onInnChange}
                    className={isInnInvalid ? 'text-danger underline underline-offset-1 decoration-1 decoration-danger' : 'text-black'}
                    startContent={
                        <Button
                            isIconOnly
                            variant={'light'}
                            disableAnimation
                            onPress={handleInnData}
                            className={'bg-default-100 group-hover:bg-default-200  group-data-[focus=true]:bg-default-100'}
                        >
                            <BsFillCloudDownloadFill
                                size={20}
                                className={'text-black hover:text-primary'}
                            />
                        </Button>
                    }
                />
            </PopoverContent>
        </Popover>
    )
}