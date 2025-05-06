import { Heading } from '@/components';
import { packages } from '@/constants';

const About = () => {
  return (
    <div className='w-1/2'>
      <Heading text="About Project" />
      <ul className="list rounded-box">
        {packages.map((item, index) => {
          return (
            <li className="list-row" key={index}>
              <div className="text-xs opacity-60">
                <span className="text-md uppercase font-semibold">{item.name}</span> - {item.description}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default About;
