import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {selectIsActive, toggleActive} from "../store/addModalSlice";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {useMemo, useState} from "react";
import {addCompany} from "@/entities/CompaniesGrid/store/companiesSlice";

export const AddModal = () => {
    const dispatch = useAppDispatch()
    const isActive = useAppSelector(selectIsActive)

    const [name, onNameChange] = useState('')
    const [address, onAddressChange] = useState('')
    const [ogrn, onOgrnChange] = useState('')
    const [inn, onInnChange] = useState('')
    const [reg_date, onRegDateChange] = useState('')

    const [isInvalidAdd, setInvalidAdd] = useState(false)

    // Проверка валидности полей

    const isNameInvalid = useMemo(() => {
        return name === '';
    }, [name])

    const isAddressInvalid = useMemo(() => {
        return address === '';
    }, [address])

    const isOrgnInvalid = useMemo(() => {
        if (!ogrn || ogrn.trim() === '' || ogrn.length !== 13)
            return true

        return /[^0-9]+$/.test(ogrn) || /\./.test(ogrn)
    }, [ogrn])

    const isInnInvalid = useMemo(() => {
        if (!inn || inn.trim() === '' || inn.length !== 10)
            return true

        return /[^0-9]+$/.test(inn) || /\./.test(inn)
    }, [inn])

    const isRegDateInvalid = useMemo(() => {
        if (reg_date === '') {
            return true;
        }

        const parsedDate = new Date(reg_date);
        if (isNaN(parsedDate.getTime()) || parsedDate < new Date('1900-01-01')) {
            return true;
        }

    }, [reg_date])

    const clearModalStates = () => {
        onNameChange('')
        onAddressChange('')
        onOgrnChange('')
        onInnChange('')
        onRegDateChange('')
        setInvalidAdd(false)
    }

    // Добавление новой компании с очисткой формы
    const handleCompanyData = () => {
        if (
            isNameInvalid
            || isAddressInvalid
            || isOrgnInvalid
            || isInnInvalid
            || isRegDateInvalid
        )
            setInvalidAdd(true)
        else {
            dispatch(addCompany({
                name: name,
                address: address,
                ogrn: ogrn,
                inn: inn,
                reg_date: reg_date
            }))
            clearModalStates()
            dispatch(toggleActive())
        }
    }

    // Закрытие формы с очисткой
    const closeModal = () => {
        clearModalStates()
        dispatch(toggleActive())
    }

    return (
        <Modal
            isOpen={isActive}
            onOpenChange={closeModal}
        >
            <ModalContent>
                <ModalHeader className={'flex-col'}>
                    <h3>Добавить компанию</h3>
                    {isInvalidAdd ? (
                        <h4 className={'text-danger'}>Пожалуйста, заполните форму корректно</h4>
                    ): null}
                </ModalHeader>
                <ModalBody>
                    <Input
                        autoFocus
                        type={'text'}
                        variant={'bordered'}
                        isRequired
                        isInvalid={isNameInvalid}
                        errorMessage={isNameInvalid && 'Пожалуйста, введите корректное название'}
                        label={'Наименование'}
                        placeholder={'Введите наименование'}
                        aria-label={'Наименование'}
                        aria-labelledby={'Наименование'}
                        value={name}
                        onValueChange={onNameChange}
                    />
                    <Input
                        type={'text'}
                        variant={'bordered'}
                        isRequired
                        isInvalid={isAddressInvalid}
                        errorMessage={isAddressInvalid && 'Пожалуйста, введите корректный адрес'}
                        label={'Адрес'}
                        placeholder={'Введите адрес'}
                        aria-label={'Адрес'}
                        aria-labelledby={'Адрес'}
                        value={address}
                        onValueChange={onAddressChange}
                    />
                    <Input
                        type={'text'}
                        variant={'bordered'}
                        isRequired
                        isInvalid={isOrgnInvalid}
                        errorMessage={isOrgnInvalid && 'Пожалуйста, введите корректный ОГРН'}
                        label={'ОГРН'}
                        placeholder={'Введите ОГРН'}
                        aria-label={'ОГРН'}
                        aria-labelledby={'ОГРН'}
                        value={ogrn}
                        onValueChange={onOgrnChange}
                    />
                    <Input
                        type={'text'}
                        variant={'bordered'}
                        isRequired
                        isInvalid={isInnInvalid}
                        errorMessage={isInnInvalid && 'Пожалуйста, введите корректный ИНН'}
                        label={'ИНН'}
                        placeholder={'Введите ИНН'}
                        aria-label={'ИНН'}
                        aria-labelledby={'ИНН'}
                        value={inn}
                        onValueChange={onInnChange}
                    />
                    <Input
                        type={'date'}
                        variant={'bordered'}
                        isRequired
                        isInvalid={isRegDateInvalid}
                        errorMessage={isRegDateInvalid && 'Пожалуйста, введите корректную дату'}
                        label={'Дата регистрации'}
                        placeholder={'Введите дату регистрации'}
                        aria-label={'Дата регистрации'}
                        aria-labelledby={'Дата регистрации'}
                        value={reg_date}
                        onValueChange={onRegDateChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color={'danger'}
                        onPress={closeModal}
                    >
                        Отмена
                    </Button>
                    <Button
                        color={'success'}
                        onPress={handleCompanyData}
                        className={'px-8 text-white'}
                    >
                        Создать
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}