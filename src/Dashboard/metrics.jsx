import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for the cards using MUI v5 styling solution
const StyledPaper = styled(Paper)(({ theme, isgreen }) => ({
  padding: '20px',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '10px',
  backgroundColor: isgreen ? '#e8f5e9' : '#ffebee',
}));

const StyledTypographyHeader = styled(Typography)(({ isgreen }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: isgreen ? '#2e7d32' : '#c62828',
}));

const StyledTypographySubHeader = styled(Typography)({
  fontSize: '18px',
});

function DashboardCards() {
  // Define the card data
  const cardData = [
    { title: 'Total Revenue', value: '$406,411.29', isGreen: true },
    { title: 'Outstanding Amount', value: '$110,448.8', isGreen: false },
    { title: 'Total Jobs Avg', value: '$620', isGreen: true },
    { title: 'Memberships Sold', value: '105', isGreen: true },
    { title: 'Tickets Created', value: '655', isGreen: true },
    { title: 'Jobs Completed', value: '436', isGreen: true },
    { title: 'Tickets Scheduled', value: '735', isGreen: true },
    { title: 'Total Canceled', value: '65', isGreen: true },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StyledPaper elevation={3} isgreen={card.isGreen ? 1 : 0}>
            <StyledTypographyHeader isgreen={card.isGreen ? 1 : 0}>
              {card.value}
            </StyledTypographyHeader>
            <StyledTypographySubHeader>{card.title}</StyledTypographySubHeader>
          </StyledPaper>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardCards;
