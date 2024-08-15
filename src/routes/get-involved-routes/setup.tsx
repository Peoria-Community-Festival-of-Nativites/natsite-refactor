﻿// import React from "react";
import Spacer from "../../components/Spacer";
import Shifts from "../../components/Shifts";
import { useAuth0 } from "@auth0/auth0-react";
import IsAuthenticated from "../../components/IsAuthenticated";

export default function Setup() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <IsAuthenticated isAuthenticated={isAuthenticated} />;
  }

  return (
    <>
      <Spacer />
      <Shifts shiftType="setup" />
    </>
  );
}
