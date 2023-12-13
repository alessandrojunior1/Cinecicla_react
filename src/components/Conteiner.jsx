import Lixeiras from '@/components/LixeirasCards'
import {useLixeiras} from '@/context/LixeirasContext'

export default function Conteiner() {
    const {
      lixeiras,
      loadLixeiras,
    } = useLixeiras();
  
  useEffect(() => {
    loadLixeiras();
  }, []);
  
  
    return (
      <>
        <main>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 pt-3 pb-3 pl-4 pr-4">
            {lixeiras.map((card) => ( <Lixeiras {...card} key={card.type} />))}
          </div>
        </main>
      </>
    );
  }