import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const FilterSection = styled.div`
  margin-bottom: 24px;
`;

const FilterChips = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const FilterChip = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${props => props.$active ? '#000' : '#E5E7EB'};
  background: ${props => props.$active ? '#000' : '#fff'};
  color: ${props => props.$active ? '#fff' : '#000'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000;
  }
`;

const OfferCard = styled.div`
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ShopName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const CashbackAmount = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #059669;
  margin-bottom: 8px;
`;

const OfferDescription = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
`;

const ValidUntil = styled.p`
  font-size: 12px;
  color: #9CA3AF;
  margin: 8px 0 0 0;
`;

const Cashback: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [offers] = useState([
    {
      id: 1,
      shop: 'Магнит',
      cashback: '15%',
      description: 'Кэшбэк на все товары для дома',
      validUntil: '30.09.2023',
      category: 'grocery'
    },
    {
      id: 2,
      shop: 'М.Видео',
      cashback: '10%',
      description: 'Кэшбэк на смартфоны и планшеты',
      validUntil: '15.10.2023',
      category: 'electronics'
    }
  ]);

  return (
    <Container>
      <Title>Кэшбэк и предложения</Title>
      
      <FilterSection>
        <FilterChips>
          <FilterChip 
            $active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            Все
          </FilterChip>
          <FilterChip 
            $active={activeFilter === 'grocery'}
            onClick={() => setActiveFilter('grocery')}
          >
            Продукты
          </FilterChip>
          <FilterChip 
            $active={activeFilter === 'electronics'}
            onClick={() => setActiveFilter('electronics')}
          >
            Электроника
          </FilterChip>
        </FilterChips>
      </FilterSection>

      {offers
        .filter(offer => activeFilter === 'all' || offer.category === activeFilter)
        .map(offer => (
          <OfferCard key={offer.id}>
            <ShopName>{offer.shop}</ShopName>
            <CashbackAmount>Кэшбэк {offer.cashback}</CashbackAmount>
            <OfferDescription>{offer.description}</OfferDescription>
            <ValidUntil>Действует до {offer.validUntil}</ValidUntil>
          </OfferCard>
        ))}
    </Container>
  );
};

export default Cashback; 