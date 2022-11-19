import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import ShoppingCartOutlined from "@mui/icons-material/Mail";

// import Search from "@mui/icons-material/Search";

const Container = styled.div`
  height: 60px;
  //   background-color: black;
  //   color: #fff;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  //   background-color: red;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-right:5px
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  //   background-color:green;
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:flex-end
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <FaSearch  style={{fontSize:'24px', color:"gray"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Wallflower.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
                <FaShoppingCart style={{fontSize:'16px'}}/>
              {/* <ShoppingCartOutlined color='action' /> */}
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
