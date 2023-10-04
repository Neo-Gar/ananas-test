import {Button} from "@nextui-org/button";
import {CompaniesSearch} from "./CompaniesSearch";
import {CompaniesLoadPopover} from "./CompaniesLoadPopover";

interface CompaniesTopContentProps {
    toggleAddModal: () => void
}

export const CompaniesTopContent = (props: CompaniesTopContentProps) => {

    return (
        <div className={'flex flex-col sm:flex-row justify-between my-6 sm:mb-6'}>

            <CompaniesSearch/>

            <div className={'w-full flex flex-row justify-start sm:justify-end self-end'}>
                <Button
                    color={'primary'}
                    size={'lg'}
                    onPress={props.toggleAddModal}
                >
                    Добавить
                </Button>

                <CompaniesLoadPopover/>

            </div>
        </div>
    )
}