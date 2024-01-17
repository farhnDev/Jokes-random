export default  function Input({type= 'text', ...props}) {
    return (
        <input {...props} type={type} className={'transition duration-300 w-full focus:outline-none focus:ring-blue-200 focus:border-blue-400 border-2 border-gray-300 p-2 shadow-sm rounded-lg placeholder:italic'}/>
    )
}