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
                <p className="text-white">As a full stack developer, I have gained comprehensive expertise in both front-end and back-end development, enabling me to build complete, end-to-end web applications. My skill set spans across various technologies and frameworks, allowing me to handle all aspects of web development with confidence and efficiency.

On the front-end, I have a strong command of HTML, CSS, and JavaScript, along with experience in modern libraries and frameworks such as React. I excel in creating responsive and dynamic user interfaces that offer seamless user experiences across different devices and browsers. My attention to detail and design principles ensures that the applications I develop are both visually appealing and highly functional.

On the back-end, I am proficient in using Node.js and Express to develop robust server-side applications. I have experience with various databases, including MongoDB and SQL, which allows me to design and manage efficient data storage solutions. My understanding of RESTful APIs and their integration has been crucial in building scalable and maintainable web services.

In addition to core development skills, I am well-versed in version control systems like Git, enabling effective collaboration with other developers. I am also familiar with deployment processes which help ensure that the applications I build are reliable and scalable.

Security and performance optimization are key aspects of my development process. 
                </p>
            </div>
       </div>
    </div>
  )
}

export default Experience