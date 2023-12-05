// 'use client'

// import { useRouter } from 'next/navigation';

const Read = (props) => {
    // const router = useRouter();
    // console.log(router)
    return (
        <>
        <h1 className="text-3xl text-blue-500 font-bold">
            {props.params.id}
        </h1>
        </>
    )
}


export default Read;