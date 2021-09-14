

export function Label({t: string}) {
    return (
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
            {t}
        </label>
    );
}

export function InputBox() {
    return (
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
    );
}

export function TextArea() {
    return (
        <textarea  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-40 focus:bg-white"></textarea>
    );
}

