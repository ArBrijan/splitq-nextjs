import IconBox from "@/components/ui/IconBox";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";




export default function CartPage() {
    return (
        <main className="p-4">
            <div className="flex gap-4 items-center">
                    <Link href={"/home"}>
                        <IconBox variant={"square"} Icon={MdOutlineArrowBack} />
                    </Link>
                <h1 className="font-bold text-2xl">Carrito de compras </h1>

                <div className="">
                    <h1 className="font-bold text-2xl">    El Chory </h1>
                    <p>Chory Original</p>
                    <h1>$1.50
                    </h1>
                </div>


            </div>
        </main>
    )
}
