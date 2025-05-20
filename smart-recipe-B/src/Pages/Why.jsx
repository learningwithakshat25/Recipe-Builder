import React from 'react'

const Why = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-3 rounded-md p-3'>
            <h1 className='text-4xl font-semibold text-[#DE752E] text-center'>Why Use the Recipe Builder App?</h1>
            <p className='text-[#DE752E] font-semibold'>Cooking just got easier!</p>
            <div className="desc flex flex-col items-start justify-end gap-3 text-lg">
            <p className='shadow-sm shadow-black p-2 rounded-md'>The Smart Recipe Builder App helps you plan, adjust, and save your recipes with ease. Whether you're meal prepping for the week, doubling a dish for a party, or just organizing your favorite recipes — this app is designed to make your life in the kitchen simpler.</p>

            <p className='shadow-sm shadow-black p-2 rounded-md'><span className='font-medium'>What Makes It Great?</span> -- Easily Add Ingredients</p>
            <p className='shadow-sm shadow-black p-2 rounded-md'><span className='font-medium'>No more scribbling on paper</span> -- quickly add and organize your ingredients with just a few clicks.</p>
            <p className='shadow-sm shadow-black p-2 rounded-md'><span className='font-medium'>Adjust Servings Instantly</span> --
                Cooking for more or fewer people? Just change the number of servings, and the app automatically updates the ingredient amounts.</p>

            <p className='shadow-sm shadow-black p-2 rounded-md'><span className='font-medium'>Save Your Recipes</span> --
                Download your recipe as a file so you can keep it forever or share it with friends.</p>

            <p className='shadow-sm shadow-black p-2 rounded-md'><span className='font-medium'>Load Recipes Anytime </span>--
                Re-open your saved recipe files and jump back into cooking without starting over.</p>
            </div>
        </div>
    )
}

export default Why