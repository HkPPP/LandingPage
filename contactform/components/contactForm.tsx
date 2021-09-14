import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.number().positive().integer().min(9,"Phone number must be 9 digits.").max(9, "Phone number must be 9 digits."),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required").max(500, "Message is longer than 500 characters"),
});

export function Label({t}: {t: string}) {
    return (
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
            {t} 
        </label>
    );
}

export function ContactForm () {

const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });   

const submitForm = (data) => {
    console.log(data);
    };

const fieldStyle: string = "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"


    return(
        <form className="w-full max-w-lg">
            <h2 className="text-black font-bold text-s">SEND US A MESSAGE</h2>
            
            <div className="flex flex-wrap -mx-3 p-4">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <Label t="First Name" />
                    <input 
                        className={fieldStyle}
                        {...register('firstName')}
                        placeholder="John" >
                    </input>
                    <Label t="Last Name" />
                    <input 
                        className={fieldStyle}
                        {...register('lastName')}
                        placeholder="Doe" >
                    </input>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 p-4">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <Label t="Email" />
                    <input 
                        className={fieldStyle}
                        {...register('email')}
                        placeholder="abc@mail.com" >
                    </input>
                    <Label t="Phone Number" />
                    <input 
                        className={fieldStyle}
                        {...register('phone')}
                        placeholder="123456789" >
                    </input>
                </div>
            </div>

            <div className="w-full px-3 md:mb-0">
                <Label t="Subject"/>
                <input 
                    className={fieldStyle}
                    {...register('subject')}
                    placeholder="Subject" >
                    </input>
            </div>

            <div className="w-full px-3 md:mb-0">
                <Label t="Message"/>
                <textarea 
                    className={fieldStyle + " h-40"}
                    {...register('message')}
                    placeholder="Message" >
                </textarea>
            </div>

            <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>
    );
}