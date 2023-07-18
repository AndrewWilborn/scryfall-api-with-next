import Image from 'next/image'

export default async function Home() {

  const res = await fetch('https://api.scryfall.com/cards/search?order=name&q=oracle%3Abanding+%28game%3Apaper%29')
  const resJson = await res.json()
  let cards = resJson.data

  return (
    <section class="text-gray-400 body-font bg-gray-900">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Cards that mention Banding</h1>
            <div class="h-1 w-20 bg-yellow-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Banding is a keyword introduced in the original release of Magic the Gathering. Any creatures with banding, and up to one without, can attack in a band. Bands are blocked as a group. If any creatures with banding you control are blocking or being blocked by a creature, you divide that creature's combat damage, not its controller, among any of the creatures it's being blocked by or is blocking.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {cards.map((data) => 
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image width={"500"} height={"500"} class="h-40 rounded w-full object-cover object-center mb-6" src={data.image_uris.art_crop} alt="content" />
                <h3 class="tracking-widest text-yellow-400 text-lg font-medium title-font">{data.name}</h3>
                <h2 class="text-s text-white font-medium title-font">{data.mana_cost}</h2>
                <h2 class="text-s text-white font-medium title-font">{data.type_line}</h2>
                <h2 class="text-s text-white font-medium title-font mb-4">{data.power} / {data.toughness}</h2>
                <p class="leading-relaxed text-base">{data.oracle_text}</p>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </section>
  )
}
