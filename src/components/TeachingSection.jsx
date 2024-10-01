import { ways } from "../data"
import WayToTech from "./WayToTech"

export default function TeachingSection() {
    return (
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map(way => ( 
              <WayToTech key={way.title} {...way}/> ))} {/*//если возваращаемое значение написано в одно строчку, то можем обойтись без return() */}   
          </ul>
        </section>
    )
}