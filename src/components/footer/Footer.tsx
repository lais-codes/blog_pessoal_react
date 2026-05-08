import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

    let data = new Date().getFullYear();

    return (
        <>
            <div className=" flex justify-center bg-indigo-900 text-white">
                <div className=" container flex flex-col items-center py-4">
                    <p className=" text-xl font-bold">Blog Pessoal | Copyrigth: {data}</p>
                    <p className="text-lg">Acesse minhas redes sociais:</p>
                    <div className=" flex gap-2">
                        <a href="https://www.linkedin.com/in/lais-b-sousa/" target="_blank">
                            <LinkedinLogoIcon size={44} weight="bold" />
                        </a>
                        <a href="https://github.com/lais-codes" target="_blank">
                            <GithubLogoIcon size={44} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;