import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from 'react'




export function ContactForm () {

    const schema = yup.object().shape({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email("Must be a valid email").required("Email is required"),
        phone: yup.number().typeError("Must be a number").positive("Must be a phone number").integer("Must be a number").min(9,"Phone number must be 9 digits.").max(9, "Phone number must be 9 digits."),
        subject: yup.string().required("Subject is required"),
        message: yup.string().required("Message is required").max(500, "Message is longer than 500 characters"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });   

    const submitForm = (data) => {
        console.log(data);
    };

    const errorDisplay = {
        'firstName': errors.firstName?.message,
        'lastName': errors.lastName?.message,
        'email': errors.email?.message,
        'phone': errors.phone?.message,
        'subject': errors.subject?.message,
        'message': errors.message?.message,
    }

    const fieldStyle: string = "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"


    function LabelAndInput({label, schemaName, placeHolder}: {label: string, schemaName: string, placeHolder: string}){
        return (
            <>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                    {label} 
                </label>
                <input 
                    className={fieldStyle}
                    {...register(schemaName)}
                    placeholder={placeHolder} >
                </input>
                <p> {errorDisplay[schemaName]} </p>
            </>
        );
    }

    function LabelAndTextArea({label, schemaName, placeHolder}: {label: string, schemaName: string, placeHolder: string}){
        return (
            <>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                    {label} 
                </label>
                <textarea 
                    className={`${fieldStyle} h-40`}
                    {...register(schemaName)}
                    placeholder={placeHolder} >
                </textarea>
                <p> {errorDisplay[schemaName]} </p>
            </>
        );
    }

    function SideBySideWrapper({children}: {children: any}){
        return (
            <div className="flex flex-wrap -mx-3 p-4">
                    {React.Children.map(children, child => {
                        return (
                            <div className="w-full md:w-1/2 px-3 md:mb-0">
                                {child}
                            </div>
                        )
                    })}
            </div>
        );
    }

    return(
        <form className="w-full max-w-lg" onSubmit={handleSubmit(submitForm)}>
            <h2 className="text-black font-bold text-s">SEND US A MESSAGE</h2>
            
            <SideBySideWrapper>
                <LabelAndInput label="First Name" schemaName="firstName" placeHolder="John"/>
                <LabelAndInput label="Last Name" schemaName="lastName" placeHolder="Doe"/>
            </SideBySideWrapper>


            <SideBySideWrapper>
                <LabelAndInput label="Email" schemaName="email" placeHolder="abc@mail.com"/>
                <LabelAndInput label="Phone Number" schemaName="phone" placeHolder="123456789"/>
            </SideBySideWrapper>

            <div className="w-full px-3 md:mb-0">
                <LabelAndInput label="Subject" schemaName="subject" placeHolder="Subject"/>
            </div>

            <div className="w-full px-3 md:mb-0">
                <LabelAndTextArea label="Message" schemaName="message" placeHolder="Message"/>
            </div>

            <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
            </button>
        </form>
    );
}