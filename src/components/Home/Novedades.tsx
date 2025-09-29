const noticias=[
    {
        title:"titulo noticia 1",
        description:"descripcion noticia 1"
    },{
        title:"titulo noticia 2",
        description:"descripcion noticia 2"
    },{
        title:"titulo noticia 3",
        description:"descripcion noticia 3"
    },{
        title:"titulo noticia 4",
        description:"descripcion noticia 4"
    },{
        title:"titulo noticia 5",
        description:"descripcion noticia 5"
    },{
        title:"titulo noticia 6",
        description:"descripcion noticia 6"
    },{
        title:"titulo noticia 7",
        description:"descripcion noticia 2"
    },{
        title:"titulo noticia 8",
        description:"descripcion noticia 3"
    },{
        title:"titulo noticia 9",
        description:"descripcion noticia 4"
    },{
        title:"titulo noticia 10",
        description:"descripcion noticia 5"
    },
]
export default function Novedades(){
  return(
    <section className="relative max-w-5xl mx-auto my-22 px-5">
            <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 text-right">
                Novedades
            </h2>
            <div className="grid grid-cols-2 bg-gray-50 max-h-[390px] rounded-bl-3xl rounded-br-3xl"> 
                <img src="/novedades.jpg" alt="novedades" className="h-[390px] w-auto rounded-bl-3xl object-cover" />
                <div className="p-7 overflow-y-auto max-h-[390px]">
                    {
                        noticias.map((noticia,index)=>(
                            <div key={index} className="border-b-2 border-blue-200 py-5 rounded-br-3xl">
                                <h2 className="font-bold text-lg text-blue-950 underline">{noticia.title} </h2>
                                <p>{noticia.description}</p>  
                            </div>
                        ))
                    }
                    
                </div>
            </div>
      </section>
  )
}
