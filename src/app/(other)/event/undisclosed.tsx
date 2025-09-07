import { UndisclosedPage } from "@/components/global/parts/loading";
type Props ={
    message:string
}

export default function Loading({message}:Props) {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <UndisclosedPage message={message}></UndisclosedPage>
    )
}