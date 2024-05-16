"use client"

function CategoryCard({category,id}) {
  return (
        <div className=" shadow-sm flex justify-between p-2 rounded-xl flex-1 border-[1px] bg-white border-slate-200">
            <p className="text-sm text-muted-foreground">
                {category}
            </p>
            <div className=' cursor-pointer'>
                <img className=" w-5" src="/arrow.svg" alt="arrow"/>
            </div>
        </div>
  )
}

export default CategoryCard