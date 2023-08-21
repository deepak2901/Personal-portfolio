import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const TechnologyIcon = styled.img`
  height: 32px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24px;
  }
`;

export const Skillbox = styled.div`
  background: #fafafa;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 160px;
  height: 160px;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;
`;
