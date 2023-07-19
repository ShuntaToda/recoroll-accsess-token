import React from 'react'

import logo from "../../images/logos/logo.svg";

export const Loading = () => {
  return (
        <div>
            <div className="flex justify-center items-center mt-16">
                <img src={logo} className="w-72"></img>
            </div>
            <div className="flex justify-center">
                <div className="gradation-border rounded w-2/3 m-auto mt-10">
                    <div className="gradation-text text-center text-3xl font-bold  pb-3">
                        Loading...
                    </div>
                </div>
            </div>
        </div>
  )
}
