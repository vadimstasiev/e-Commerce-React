import React, {useState, useEffect} from 'react'
import { SyncOutlined, CloseOutlined, CheckOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import * as geofire from 'geofire-common';
import { registerWithEmailAndPassword } from "../../firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { RollbackOutlined } from '@ant-design/icons';

import SvgBackground from "../../Components/SvgBackground";

import {FixedToggle} from "../../Components/ThemeToggle";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Background from "../../Components/Background";


let re_no_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$`)
let re_with_space = new RegExp(`^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$`)


const SignUp = (props) => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const from = state?state.from:"/"
    const [user, loading, error] = useAuthState(auth);
  


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [authError, setAuthError] = useState("");

    const [postcode, setPostcode] = useState("");
    const [postcodeInputStatus, setPostcodeInputStatus] = useState("none");
    const [formattedAddress, setFormattedAddress] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const [geoHash, setGeoHash] = useState("");

    const handleSubmit = () => {
      if(password===confirmPassword){
        if(postcodeInputStatus==="success"){
          registerWithEmailAndPassword(name, email, password, {postcode, coordinates, geoHash})
          .catch(error => {
            if(error.code){
              let errorMessageFormated = error.code.replace('auth/','').replace(/-/g, " ")
              errorMessageFormated = errorMessageFormated.charAt(0).toUpperCase() + errorMessageFormated.slice(1) + "."
              setAuthError(errorMessageFormated)
            } else {
              setAuthError("Unkown Error")
            }
          })
        } else {
          setAuthError("Postcode must be valid.")
        }
      } else {
        setAuthError("Passwords must match.")
      }
    }


    const validatePostCode = postcode => {
        setPostcodeInputStatus("loading")
        getGeocode({ address:postcode })
        .then((result)=>{
            if(result){
                setPostcode(postcode)
                
                const lat = result[0].geometry.location.lat()
                const lng = result[0].geometry.location.lng()
                setFormattedAddress(result[0].formatted_address)

                setCoordinates({lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng()})

                // Compute the GeoHash for a lat/lng point
                const hash = geofire.geohashForLocation([lat, lng]);

                setGeoHash(hash)

                setPostcodeInputStatus("success")
            } else {
                setPostcodeInputStatus("error")
            }
        })
        .catch(e => {
            setPostcodeInputStatus("error")
        })
    }

    useEffect(() => {
      if (user) navigate(from);
    }, [user, loading]);

    return (
      <Background>
      <SvgBackground>
        <FixedToggle />
        <div className="grid place-items-center pt-40">
            <form className="bg-white dark:bg-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-zinc-200 border-2">
                <div className="mb-4">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Name
                  </label>
                  <input autoComplete="name" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="name" type="text" placeholder="Email"
                  onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Email
                  </label>
                  <input autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email" type="text" placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>





                <div className="mb-4">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                    Postcode (UK Only)
                  </label>
                  <input 
                      defaultValue={postcode}
                      onChange={e=> {
                              const value = e.target.value
                              if (re_no_space.test(value) || re_with_space.test(value)) {
                                  validatePostCode(value)
                              } else {
                                  setPostcodeInputStatus("none")
                              }
                          }
                      }
                      className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Postcode" />
                  {
                      postcodeInputStatus==="loading" &&
                          <>
                              <SyncOutlined spin  className="inline-block dark:text-zinc-200 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                              <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>Validating Postcode...</div>
                          </>
                  }
                  {
                      postcodeInputStatus==="error" &&
                          <>
                              <CloseOutlined className="inline-block text-red-400 dark:text-red-600 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                              <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>Error, not a valid address.</div>
                          </>
                  }
                  {
                      postcodeInputStatus==="success" &&
                          <>
                              <CheckOutlined className="inline-block text-green-400 dark:text-green-600 pb-[6px] text-xs text-light font-semibold mb-1 py-2 pl-2"/>
                              <div className='inline-block dark:text-zinc-200 hover:text-black dark:hover:text-white px-1 pt-2'>{formattedAddress||"Valid"}</div>
                          </>
                  }
              </div>





                <div className="mb-1">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Password
                  </label>
                  <input autoComplete="new-password" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="******************"
                  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="mb-6">
                  <label className="block text-zinc-700 dark:text-zinc-100 text-sm font-bold mb-2">
                      Confirm Password
                  </label>
                  <input autoComplete="new-password" className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm_password" type="password" placeholder={ password.length===0?"******************":"*".repeat(password.length)}
                  onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  {authError ? 
                      <p className="text-red-500 text-xs italic">{authError}</p>
                  : null}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-500 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={handleSubmit}>
                        Sign Up
                  </button>
                  <div className="inline-block align-baseline font-bold text-sm ml-20 text-gray-500">
                    <div className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/ResetPassword', {state:{from}})}>Forgot Password?</div>
                    <div className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/SignIn', {state:{from}})}>Already have an account? Sign In!</div>
                  </div>
                </div>
            </form>
            <div className="flex">
              <RollbackOutlined className="text-zinc-700 dark:text-zinc-100 text-lg"/>
              <div className="text-zinc-700 dark:text-zinc-100 text-lg font-bold pt-0.5 pl-2 cursor-pointer" onClick={() => navigate('/')}>
                  Home
              </div>
            </div>
        </div>
      </SvgBackground>
      </Background>
    );
  }


export default (SignUp);
