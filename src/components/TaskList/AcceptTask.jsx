import React from 'react'

const AcceptTask = () => {
  return (
    <div>
      <div className='p-5 flex-shrink-0 h-full w-[300px] bg-purple-500 rounded-xl'>
                <div className='flex justify-between items-center '>
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className='text-sm'>26 feb 2026</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> Make a Youtube Video</h2>
                <p className='text-sm mt-2'>
                    hic, ad neque magni aspernatur molestiae alias, totam iste similique numquam voluptatum in facere laborum repellendus!
                </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
            </div>

    </div>
  )
}

export default AcceptTask
