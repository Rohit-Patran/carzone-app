"use client"

import { CustomSearchProps } from "@/types/types"
import { Combobox , Transition } from "@headlessui/react"
import Image from "next/image"
import { useState , Fragment} from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({manufacturer , setManufacturer} : CustomSearchProps) => {
    const [carSearch , setCarSearch] = useState('');
    const filteredCarSearch = (carSearch === "") ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g , "").includes(carSearch.toLowerCase().replace(/\s+/g , "")));

    return (
      <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
          <div className="relative w-full">
            <Combobox.Button className="absolute top-[14px]">
              <Image src="/car-logo.svg" className="w-[20px] h-[20px] ml-4" width={20} height={20} alt="car-logo"/>
            </Combobox.Button>

            <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagon" displayValue={(manufacturer : string) => manufacturer} onChange={(e) => setCarSearch(e.target.value)}/>

            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setCarSearch('')}>
                  <Combobox.Options>
                    {filteredCarSearch.map((item)=>(
                      <Combobox.Option key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}> 
                        {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {item}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-teal-600'
                                  }`}
                                >
                                  
                                </span>
                              ) : null}
                              </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    )
}

export default SearchManufacturer