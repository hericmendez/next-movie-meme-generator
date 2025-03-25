import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: auto;
  color: #fff;
  font-family: sans-serif;
`;

export const BackdropWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Info = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 8px;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #bbb;
  margin-bottom: 12px;
`;

export const Overview = styled.p`
  font-size: 0.95rem;
  margin-bottom: 12px;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
`;

export const GenreBadge = styled.span`
  background-color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
`;

export const ExtraInfo = styled.div`
  margin-top: 12px;
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.4;

  div {
    margin-bottom: 4px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Rating = styled.span`
  font-size: 1.1rem;
  color: #f5c518;
  font-weight: bold;
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  border-radius: 4px;
  overflow: hidden;
`;
