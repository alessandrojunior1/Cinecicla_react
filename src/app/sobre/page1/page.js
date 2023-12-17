import Link from "next/link";

export default function page1(){
    return(
    <section className="bg-white relative m-auto content-center max-w-[83rem]">

        <main className="mb-[20rem] max-h-[20rem]">
         <div className="flex w-auto max-h-[40rem] justify-center items-center ">
            <div className="flex justify-center">
              <img className="h-auto mt-[8rem] ml-5 rounded-lg max-w-[24rem]" src="/images/lataamarela.jpg" alt="lataVidro"/>
            </div>
            <div className="flex justify-center m-8 p-5 pt-[8rem]">
              <div className="bg-stone-500 rounded-lg p-5">
                <p className="text-xl mmax-w-[860px] max-h-[410]">
                A lixeira amarela desempenha um papel vital na gestão ambientalmente responsável de resíduos, focando especialmente no descarte adequado de metais. A reciclagem de metais é uma prática crucial para a preservação de recursos naturais, a redução da pegada de carbono e a minimização do impacto ambiental associado à extração de minérios.
                <br/>
                Ao utilizar a lixeira amarela para metais, os indivíduos se engajam ativamente na promoção de práticas sustentáveis, contribuindo para diversos benefícios ambientais.
                </p>
                <img className="absolute top-0 end-0" src="/images/circulogrande.svg" alt="circulomaior"/>
              </div>
              <img className="absolute inset-x-[36rem] bottom-[21rem]" src="/images/circulo.svg" alt="circulomenor"/>
              <img className="absolute inset-x-[22rem] top-[-10px] h-[7rem]" src="/images/meiocirculo.svg" alt="meiocirculo"/>
            </div>
            </div>
        </main>
        <footer className="w-auto max-h-[30rem]">
          <div className="bg-yellow-300">
            <h1 className="pb-4 pt-10 text-center">CineCicla</h1>
            <div>
              <ul className="text-center flex justify-center gap-x-6">
                <li className="p-2"><Link href="/">Início</Link></li>
                <li className="p-2">Sobre Nós</li>
                <li className="p-2">Blog</li>
              </ul>
            </div>
          </div>
          <div className="mt-1 bg-yellow-300 flex justify-between items-center h-auto w-auto">
            <img className="max-w-[80px] max-h-[80px] p-3 " src="/images/logoTipo.png" alt="logo"/>
            <div className="m-4">
              <p>© Direitos Autorais Reservados</p>
            </div>
          </div>
        </footer>
      </section>
    )
}