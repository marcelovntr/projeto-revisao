import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";

export function HomePage() {
    return (
        <div>
            <NewCycle />
            <Timer />      
        </div>
    )
}

export default HomePage;

// exportação nomeada