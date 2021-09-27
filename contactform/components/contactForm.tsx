import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from 'react'

import { storage } from "../firebase/clientApp";
import { collection, addDoc } from "firebase/firestore"; 

function SideBySideWrapper({children}: {children: any}){
    return (
        <div className="flex flex-wrap -mx-3 space-y-4 px-4 p-4 pt-1 md:pt-4 md:space-y-0">
                {React.Children.map(children, child => {
                    return (
                        <div className="w-full px-3 md:w-1/2 md:mb-0">
                            {child}
                        </div>
                    )
                })}
        </div>
    );
}

export function ContactForm () {

    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    // phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired(),

    const fieldStyle: string = "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"

    const schema = yup.object().shape({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email("Must be a valid email").required("Email is required"),
        phone: yup.number().typeError("Must be a number").positive("Must be a phone number").integer("Must be a number").transform(value => (isNaN(value) ? 1 : value)).notRequired(),
        subject: yup.string().required("Subject is required"),
        message: yup.string().required("Message is required").max(500, "Message is longer than 500 characters"),
    });

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });   

    const submitForm = (data) => {
        try {
            const docRef =  addDoc(collection(storage, "contact"), data);
            console.log(data);
            alert("We have received your message. Thank you for contacting us!");
            reset();
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    };

    const errorDisplay = {
        'firstName': errors?.firstName?.message,
        'lastName': errors?.lastName?.message,
        'email': errors?.email?.message,
        'phone': errors?.phone?.message,
        'subject': errors?.subject?.message,
        'message': errors?.message?.message,
    }


    function ErrorMsg({msg}: {msg: string}){
        return (
            <p className="text-red-600 italic text-left"> {errorDisplay[msg]} </p>
        );
    }

    function LabelAndInput(label: string, schemaName: string, placeHolder: string, type: string = "text"){
        return (
            <>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                    {label}
                </label>
                <input 
                    type={type}
                    className={fieldStyle}
                    {...register(schemaName)}
                    placeholder={placeHolder} >
                </input>
                <ErrorMsg msg={schemaName}/>
            </>
        );
    }

    function LabelAndTextArea(label: string, schemaName: string, placeHolder: string){
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
                <ErrorMsg msg={schemaName}/>
            </>
        );
    }

    const firstNameInput = LabelAndInput("First Name", "firstName", "Required...")
    const lastNameInput = LabelAndInput("Last Name", "lastName", "Required...")
    const emailInput = LabelAndInput("Email", "email", "Required...")
    const phoneInput = LabelAndInput("Phone Number", "phone", "Optional...", "number")
    const subjectInput = LabelAndInput("Subject", "subject", "Required...")
    const messageInput = LabelAndTextArea("Message", "message", "Required (500 characters max)...")
    

    return(
        <form className="w-full max-w" onSubmit={handleSubmit(submitForm)}>
            <h2 className="text-black font-bold text-s p-4 ">SEND US A MESSAGE</h2>
            
            <SideBySideWrapper>
                {firstNameInput}
                {lastNameInput}
            </SideBySideWrapper>

            <SideBySideWrapper>
                {emailInput}
                {phoneInput}
            </SideBySideWrapper>

            <div className="w-full px-4 py-2 md:p-4 md:mx-1">
                {subjectInput}
            </div>

            <div className="w-full px-4 py-2 md:p-4 md:mx-1">
                {messageInput}
            </div>

            {isValid 
            ? <input className="bg-gray-500 text-white font-bold py-2 px-4 mb-4 hover:bg-black rounded" 
            disabled={false}
            type="submit"></input> 
            : <input className="bg-gray-200 text-white font-bold py-2 px-4 mb-4 rounded " 
            disabled={true}
            type="submit"></input>}
            
        </form>
    );
}

