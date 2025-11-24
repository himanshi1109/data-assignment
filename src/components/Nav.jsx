import React from 'react'

const Nav = ({switchTheme , dark}) => {
  return (
    <div className={dark?"flex justify-between items-center p-4 border border-black/30 rounded-xl bg-[#132440]":"flex justify-between items-center p-4 border border-black/30 rounded-xl bg-[#F7A9A8]"}>
          <div className="flex items-center gap-3">
            <div id='logo' className="w-10 h-10 border border-black/40 rounded-lg"></div>
            <h1 className={dark?"text-2xl text-white font-bold tracking-wider":"text-2xl font-bold tracking-wider"}>CAFE DEBUG</h1>
          </div>
          <button onClick={switchTheme} className={dark?"px-4 py-2 border border-black/40 rounded-lg text-lg font-semibold bg-[#80A1BA] hover:bg-black hover:text-white transition":"px-4 py-2 border border-black/40 rounded-lg text-lg font-semibold bg-[#FFE6B3] hover:bg-black hover:text-white transition"}>
            SWITCH THEME
          </button>
        </div>
  )
}

export default Nav
