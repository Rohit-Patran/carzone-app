"use client";
import { SearchManufacturer } from "@/components";
import { useState } from "react";
import Image from "next/image";
import  { useRouter } from "next/navigation";

const SearchButton = ({otherClasses} : {otherClasses : string}) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40} className="object-contain"/>
    </button>
)


const SearchBar = () => {
    const [manufacturer , setManufacturer] = useState('');
    const [model , setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (!model && !manufacturer) ? 
        alert("Enter the correct value") :
        updateSearchParams(manufacturer.toLowerCase() , model.toLowerCase());
    };

    function updateSearchParams(manufacturer : string , model : string)
    {
        const searchParams = new URLSearchParams(window.location.search);

        (manufacturer != "") ? searchParams.set("manufacturer" , manufacturer) : searchParams.delete("manufacturer");

        (model != "") ? searchParams.set("model" , model) : searchParams.delete("model");

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer = {setManufacturer}/>
                <SearchButton otherClasses = "sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" className="absolute w-[20px] h-[20px] ml-4" alt="car model" width={25} height={25}/>
                <input type="text" name="model" value={model} className="searchbar__input" placeholder="Tiguan" onChange={(e) => setModel(e.target.value)} />
                <SearchButton otherClasses = "sm:hidden"/>
            </div>
            <SearchButton otherClasses = "max-sm:hidden"/>
        </form>
    )
}

export default SearchBar;