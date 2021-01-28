import styled from "styled-components";

export const BarBackground = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 100px;
  height: 10px;
  background: #bdbdbd;
  border-radius: 0.5rem;
`;

const returnColorHSL = (range) => {
  //Green: 94, 100%, 45%
  //Red: 0, 100%, 45%
  const realRange = range > 100 ? 100 : range;

  const color = 100 - realRange;

  return `hsl(${color}, 100%, 45%)`
};

export const ProgressBarActive = styled.div`
  width: ${({ range }) => (range > 100 ? 100 : range)}px;
  height: 10px;
  background: ${({range}) => returnColorHSL(range)};
  border-radius: 0.5rem;
  box-shadow: 3px 0px 5px #4d4d4d;
`;
