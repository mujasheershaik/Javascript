import React, { useEffect, useState } from 'react'

function useDevice() {
    let [device, setdevice] = useState("Desktop")

    useEffect(()=>{
        function checkDevice(){
            if(window.innerWidth<768){
                setdevice("Mobile")
            }
            else{
                setdevice("Desktop")
            }
        }
        checkDevice()

        window.addEventListener("resize", checkDevice)
        
        return function(){
            window.removeEventListener("resize", checkDevice)
        }
    },[])
  return device
}

export default useDevice
