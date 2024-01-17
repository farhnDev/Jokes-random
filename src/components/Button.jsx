import clsx from "clsx";

export default function Button({className = 'bg-black',children, text, type= 'submit',...props}) {
    return (
        <button
            {...props}
            type={type}
            className={clsx(className,'[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-white font-bold px-4 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-blue-500')}
        >
            {text || children}
        </button>
    )
}