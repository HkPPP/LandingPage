const socials =[
{
name: "Twitter", 
link: "https://twitter.com", 
svgPath:"M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
},
{
    name: "Facebook",
    link: "https://facebook.com",
    svgPath: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
},
{
    name: "Github",
    link: "https://github.com",
    svgPath: "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
},
]

const contacts = [
{
    name: "+1 (555) 123-4567",
    svgPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
},
{
    name: "support@workcation.com",
    svgPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
}
]


export function InfoBoxHeader() {
    return(
        <h3 className="text-md text-white font-bold">
            Contact Information
        </h3>
    );
}

export function InfoBoxIntro() {
    return(
        <p className="text-white">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu
        </p>
    );
}


export function SocialMediaIcons() {
    return (
        <div className="flex space-x-20 justify-center">
            {socials.map((social) => {
                return (IconWithLink(social.name, social.link, social.svgPath))
            })}
        </div>
    )
}

export function IconWithLink(title: string, link:string, svgIconPath:string) {
    return(
        <svg className="h-6 w-6"  key={title.replace(/\s/g, "").toLowerCase()} role="img" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <path d={svgIconPath}/>
            </a>
        </svg>
    )
}


export function ContactUs() {
    return (
        <div className="flex flex-col text-white justify-center space-x-10">
            {contacts.map((contact) => {
                return (IconWithText(contact.name, contact.svgPath))
            })}
        </div>
    );
}

export function IconWithText(text: string, svgIconPath:string) {
    return (
        <span key={text.replace(/\s/g, "").toLowerCase()} >
            <svg className="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgIconPath} />
            </svg>
            <span className="ml-2" >{text}</span>
        </span>
    );
    }