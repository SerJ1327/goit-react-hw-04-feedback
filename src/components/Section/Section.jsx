import PropTypes from 'prop-types';
import { StyledSectionContainer, StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSectionContainer>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
