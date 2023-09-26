import { MouseEventHandler } from "react";

export interface CustomProps {
    title : string,
    containerStyles? : string,
    handleClick? : MouseEventHandler<HTMLButtonElement>,
    btnType? : "button" | "submit",
    rightIcon? : string
    isDisabled? : boolean
}

export interface CustomSearchProps {
    manufacturer : string,
    setManufacturer : (manufacturer : string) => void
}

export interface CarProps{
    city_mpg:number;
    carClass:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:26
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface FilterProps{
    manufacturer? : string,
    year? : number,
    fuel? : string,
    limit? : number,
    model? : string
      
}

export interface HomeProps{
    searchParams : FilterProps
}

export interface OptionProps{
    title : string,
    value : string
}

export interface CustomFilterProps{
    title : string,
    options : OptionProps[]
}

export interface ShowMoreProps{
    pageNumber : number,
    isNext : boolean
}