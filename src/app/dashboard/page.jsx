"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "../nav-links";
import { fetchUserInfo } from "../actions";
import {
  convertEmissionsToOffsetCost,
  convertTextAndImageCallsToEmissions,
} from "../../../scripts/emissions/emissions";
import Loader from "../../components/loader.jsx";
import ValueCard from "@/components/ValueCard";

export default function Page() {
  const [textCalls, setTextCalls] = useState(0);
  const [imageCalls, setImageCalls] = useState(0);
  const [emissions, setEmissions] = useState(0);
  const [offsetCost, setOffsetCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function setUserInfo() {
      setLoading(true);
      try {
        setError("");
        const result = await fetchUserInfo();
        if (result) {
          const textCalls = result.text_count;
          const imageCalls = result.image_count;
          const emissions = convertTextAndImageCallsToEmissions(
            textCalls,
            imageCalls
          );
          const offsetCost = convertEmissionsToOffsetCost(emissions);
          setTextCalls(textCalls);
          setImageCalls(imageCalls);
          setEmissions(emissions);
          setOffsetCost(offsetCost);
        }
      } catch (error) {
        setError("Woah. Something happened");
        console.error(error);
      }

      setLoading(false);
    }

    setUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="">
        <NavLinks />
        <Loader />
      </div>
    );
  } else if (error) {
    return (
      <div className=" text-black">
        <NavLinks />
        <h1>{error}</h1>
      </div>
    );
  } else if (!loading) {
    return (
      <div className="">
        <NavLinks />
        <div className="mt-40 flex flex-row justify-evenly">
          <ValueCard value={textCalls} description="LLM calls" />
          <ValueCard value={imageCalls} description="Image calls" />
          <ValueCard value={emissions} description="Tons of CO2" />
          <ValueCard value={`$${offsetCost}`} description="Offset Cost" />
        </div>
        <div className="mt-20 flex justify-center">
          <a
            href="https://cotap.org/donate/"
            class="inline-block text-4xl font-bold text-white bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl py-3 px-5 transition ease-in-out hover:scale-110 duration-500"
          >
            Offset Carbon
          </a>
          
        </div>
        <div className="absolute bottom-0 left-0 p-2 text-white text-xs">
          Copyright &copy; 2024 Team LiquidDeath. Created during LA Hacks.
        </div>
      </div>
    );
  }
}
