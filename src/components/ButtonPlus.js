import { Plusl } from "../assets/icons"

const ButtonPlus = (prop) => {
    return (
        <div
            onClick={prop.onClick}
            className="flex cursor-pointer w-fit fill-brand-dark text-base font-medium font-inter text-brand-dark">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
                <Plusl />
            </svg>
            <p>{prop.children}</p>
        </div>
    )
}

export default ButtonPlus;