"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "../nav-links";
import { fetchUserInfo } from "../actions";
import {
  convertEmissionsToOffsetCost,
  convertTextAndImageCallsToEmissions,
} from "../../../scripts/emissions/emissions";
import Loader from "../../components/loader.jsx";

export default function Page() {
  const [textCalls, setTextCalls] = useState(0);
  const [imageCalls, setImageCalls] = useState(0);
  const [emissions, setEmissions] = useState(0);
  const [offsetCost, setOffsetCost] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function setUserInfo() {
      setLoading(true);
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

      setLoading(false);
    }

    setUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="bg-white text-black">
        <NavLinks />
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <NavLinks />
      <div className="mt-40">
        <div>
          <h1>Text Calls: {textCalls}</h1>
        </div>
        <div>Image Calls: {imageCalls}</div>
        <div>Emissions: {emissions}</div>
        <div>Offset Cost: ${offsetCost}</div>
      </div>
    </div>
  );
}
