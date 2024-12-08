import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const SubscriptionList = styled.div`
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 16px;
`;

const SubscriptionItem = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #E5E7EB;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 24px;
    bottom: -24px;
    width: 1px;
    height: 24px;
    background-color: #E5E7EB;
  }
`;

const LogoCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #F3F4F6;
  border: 2px solid #E5E7EB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #374151;
`;

const SubscriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ServiceName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const DateRange = styled.div`
  font-size: 14px;
  color: #6B7280;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #059669;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '$';
    font-size: 14px;
    opacity: 0.8;
  }
`;

const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: #fff;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: #000;
    color: #000;
  }

  &::before {
    content: '+';
    font-size: 20px;
    font-weight: 400;
  }
`;

const Subscriptions: React.FC = () => {
  const [subscriptions] = useState([
    {
      id: 1,
      name: 'Netflix',
      startDate: '01.09.2023',
      endDate: '01.10.2023',
      price: '799'
    },
    {
      id: 2,
      name: 'Spotify',
      startDate: '15.09.2023',
      endDate: '15.10.2023',
      price: '199'
    },
    {
      id: 3,
      name: 'YouTube',
      startDate: '10.09.2023',
      endDate: '10.10.2023',
      price: '299'
    }
  ]);

  return (
    <Container>
      <Title>Подписки</Title>
      <SubscriptionList>
        {subscriptions.map(sub => (
          <SubscriptionItem key={sub.id}>
            <LogoCircle>
              {sub.name[0]}
            </LogoCircle>
            <SubscriptionInfo>
              <ServiceName>{sub.name}</ServiceName>
              <DateRange>{sub.startDate} - {sub.endDate}</DateRange>
            </SubscriptionInfo>
            <Price>{sub.price}</Price>
          </SubscriptionItem>
        ))}
      </SubscriptionList>
      <AddButton>
        Добавить подписку
      </AddButton>
    </Container>
  );
};

export default Subscriptions; 