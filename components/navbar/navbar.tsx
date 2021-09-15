import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavbarBackground = styled.div`
  ${tw`
    shadow-sm
    mt-10 
    py-0 
    w-full
`}
`;

const NavbarContainer = styled.div`
  ${tw`
   
`};
`;

function navbar() {
  return <NavbarBackground></NavbarBackground>;
}

export default navbar;
