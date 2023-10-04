import {Card, CardBody} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <div className={'container mx-auto px-4'}>
                <Card
                    className={'my-4 sm:m-4 border-none bg-background/60 shadow-md w-full sm:w-auto'}
                    isBlurred={true}
                    radius={'md'}
                >
                    <CardBody className={'flex flex-row justify-between items-center'}>
                        <Avatar
                            src={'/avatar.jpg'}
                            className={'hidden sm:block'}
                            size={'lg'}
                        />
                        <p>
                            © 2023 - Made by Nikita Vatlecov
                        </p>
                        <Button
                            as={Link}
                            href={'https://github.com/Neo-Gar'}
                            color={'secondary'}
                            size={"lg"}
                        >
                            Find me on Github
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </footer>
    )
}