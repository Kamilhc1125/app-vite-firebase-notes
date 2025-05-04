import { Heading } from '@/components';
import { packages } from '@/constants';

const About = () => {
  return (
    <div>
      <Heading text="About Project" />
      <ul className="list bg-base-100 rounded-box">
        {packages.map((item, index) => (
          <li className="list-row" key={index}>
            <div>
              <div className="text-xs uppercase font-semibold opacity-60">{item}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About;
