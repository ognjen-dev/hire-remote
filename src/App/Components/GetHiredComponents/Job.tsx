import React from 'react'

// const Job = () => {
//     return (
//         <div className="py-2">
//             <a href="/">
//                 <div className="border rounded-lg flex flex-row h-24 items-center leading-6 justify-evenly">

//                     <div className="-ml-12">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" className="w-12 h-12 rounded-md border-2 border-gray-200" />
//                     </div>

//                     <div className="-ml-14">
// <p className="font-light text-sm font-normal">
//     Facebook
// </p>
// <p className="flex font-bold text-m">
//     Senior Developer <p className="mx-0.5">🌕</p> <p className="font-semibold text-xs px-1 my-0.5 bg-green-300 rounded-md w-max inline-flex self-center py-0.5 text-white">VERIFIED</p>
// </p>
//                         <div className="flex justify-center align-center bg-gray-300 rounded-md w-max h-max mt-1">
// <p className="font-semibold text-xs px-1 my-0.5">
//     🌎WORLDWIDE
// </p>
//                         </div>
//                     </div>

//                     <div className="flex">
//                         <div className="px-2">
//                             <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
//                         </div>
//                         <div className="px-2">
//                             <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
//                         </div>
//                         <div className="px-2">
//                             <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
//                         </div>

//                     </div>

//                     <div className="">
//                         <p className="text-sm">📌 1d</p>
//                     </div>

//                     <div className="-mr-10">
// <button className="bg-red-500 py-2 px-8 rounded-xl">
//     <p className="text-bold text-white">Apply</p>
// </button>
//                     </div>

//                 </div>
//             </a>
//         </div>
//     )
// }
interface JobProps {
    bgcolor: string
    position: string
    employer: string
    img: string
    txt: string
}

const Job = ({ bgcolor, position, employer, img, txt }: JobProps) => {
    return (
        <div className={`my-2 text-${txt}-50 py-2 border lg:rounded-lg w-full flex items-center justify-between px-2 bg-${bgcolor}-400`}>
            <div className="flex flex-row items-center">
                <div className="ml-4">
                    <img src={img} className="bg-white mr-8 w-11 rounded-sm border border-gray-200" />
                </div>

                <div className="flex flex-col lg:flex-row ml-8 lg:ml-4 mr-9 lg:items-center">
                    <div className="lg:flex lg:flex-col">
                        <p className="font-mono font-bold text-m">
                            {position}
                        </p>

                        <div className="font-mono flex flex-row lg:flex lg:flex-col lg:items-start sm:flex sm:flex-col sm:items-start mb-1 items-center">
                            <p className="font-mono flex items-center font-light text-sm mr-2">
                                {employer}<p className="text-white font-mono inline-flex justify-center align-center bg-green-400 lg:ml-2 md:block hidden rounded-sm p-0.5 w-max h-max mt-1 font-semibold text-xs px-1 my-0.5">
                                    verified
                            </p>
                                
                            </p>


                            <p className="font-mono inline-flex justify-center align-center bg-gray-300 rounded-sm p-0.5 w-max h-max mt-1 font-semibold text-xs px-1 my-0.5">
                                <p className="mr-0.5">🌎</p>WORLDWIDE
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-3/5 lg:self-center lg:pl-32">
                        <div className="flex flex-wrap">
                            <p className={`font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border text-xs border-${txt} rounded-md p-0.5 w-max`}>JAVA</p>
                            <p className={`font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border text-xs border-${txt} rounded-md p-0.5 w-max`}>C++</p>
                            <p className={`font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border text-xs border-${txt} rounded-md p-0.5 w-max`}>REACT</p>
                            <p className={`font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border text-xs border-${txt} rounded-md p-0.5 w-max`}>C#</p>
                            <p className={`font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border text-xs border-${txt} rounded-md p-0.5 w-max`}>RUBY</p>
                        </div>
                    </div>

                </div>

                <div className="sticky font-mono lg:pl-20 lg:ml-16">
                    <p className="text-sm">📌 1d</p>
                </div>
            </div>
            <div>
                <button className="md:block hidden bg-red-500 py-2 px-12 rounded-xl mr-5">
                    <p className={`font-semibold text-${bgcolor}-400`}>Apply</p>
                </button>
            </div>

        </div>
    )
}


export default Job
