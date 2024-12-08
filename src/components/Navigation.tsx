import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 16px;
  border-bottom: 1px solid #E5E7EB;
`;

const NavList = styled.div`
  display: flex;
  gap: 24px;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  color: ${props => props.$active ? '#000' : '#6B7280'};
  font-weight: ${props => props.$active ? '600' : '400'};
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${props => props.$active ? '#000' : 'transparent'};
  transition: all 0.2s ease;
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavList>
        <NavItem to="/" $active={location.pathname === '/'}>
          Подписки
        </NavItem>
        <NavItem to="/cashback" $active={location.pathname === '/cashback'}>
          Кэшбек и предложения
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation; 