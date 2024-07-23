import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Experience() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
    const {portfolioData} = useSelector(state => state.root)
    const {experiences} = portfolioData;
  return (
    <div>
       <SectionTitle title="Experience"/> 
       <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
            {experiences.map((experience, index)=>(
                <div onClick={() => {
                    setSelectedItemIndex(index);
                }}
                className="cursor-pointer"
                >
                <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{experience.period}</h1>
                </div>
                ))}
        </div>
            
            <div className="flex flex-col gap-10">
            <h1 className="text-secondary text-2xl"> {experiences[selectedItemIndex].title} </h1>
            <h1 className="text-tertiary text-2xl"> {experiences[selectedItemIndex].company} </h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi ex numquam sit perferendis accusamus nisi debitis 
                    dolorem quo consectetur, maxime officiis quam nobis nulla 
                    praesentium quas neque, quis mollitia delectus.
                </p>
            </div>
       </div>
    </div>
  )
}

export default Experience