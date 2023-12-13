export default function LixeirasCards({
    type,
    name,
    about
}){
    return(
    <div
      id="lixeiras"
      class="bg-white shadow-md bg-opacity-60 rounded-lg p-4 hover:shadow-xl"
    >
    <div class="flex justify-between items-center"> 
      <img src={image} alt="lixeira"/>
    </div>
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">
          {name}
        </h3>
        <p class="text-lg font-semibold text-gray-700">
          {type}
        </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Sobre:</span>
          {about}
        </p>
      </div>
    </div> 
    )
}
   