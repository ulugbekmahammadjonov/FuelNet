import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './components/config-navigation'
import './App.css'
import Header from './components/header';
import DataTable from './components/data-table';
import Footer from './components/footer';
import CustomCard from './components/card';
import Columns from './pages/Columns';
function App() {
  const routing = useRoutes(routes)

  return (
    <div>
      <Header />
      <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>}>
        {routing}
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

// import React, { useState, useRef, useEffect } from 'react';
// import { Grid, Box, Paper, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// interface StyledCardProps {
//   height: string | number;
// }

// // Styled components for the card and resize handle
// const StyledCard = styled(Paper)<StyledCardProps>(({ theme, height }) => ({
//   width: '100vw',
//   height: height,
//   minHeight: '200px',
//   padding: theme.spacing(2),
//   border: `1px solid ${theme.palette.divider}`,
//   boxShadow: theme.shadows[1],
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.background.paper,
//   position: 'relative',
//   overflow: 'hidden',
//   bottom: 0,
// }));

// const ResizeHandle = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '10px',
//   cursor: 'n-resize',
//   background: 'rgba(0, 0, 0, 0.1)',
// }));

// const App = () => {
//   const [cardHeight, setCardHeight] = useState(200); // Initial height
//   const cardRef = useRef(null);
//   const handleRef = useRef(null);
//   const gridContainerRef = useRef(null);
//   const rowCount = 3;
//   const gap = 5; // Gap between grid items

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     const startY = e.clientY;
//     const startHeight = cardHeight;

//     const handleMouseMove = (e) => {
//       const newHeight = startHeight - (e.clientY - startY);
//       if (newHeight >= 200) { // Minimum height
//         setCardHeight(newHeight);
//       }
//     };

//     const handleMouseUp = () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   useEffect(() => {
//     if (gridContainerRef.current) {
//       const gridHeight = window.innerHeight - cardHeight - 30; // 30px padding
//       const newRowHeight = (gridHeight - (rowCount - 1) * gap) / rowCount;
//       gridContainerRef.current.style.gridTemplateRows = `repeat(${rowCount}, ${newRowHeight}px)`;

//       const gridItems = gridContainerRef.current.querySelectorAll('.grid-item');
//       gridItems.forEach(item => {
//         item.style.height = `${newRowHeight}px`;
//       });
//     }
//   }, [cardHeight]);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
//       <Box
//         ref={gridContainerRef}
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(5, 1fr)', // 5 columns
//           gridTemplateRows: `repeat(3, 1fr)`,
//           gap: '5px',
//           padding: '5px',
//           marginBottom: '100px',
//           flexGrow: 1,
//           transition: 'grid-template-rows 0.1s ease', // Smooth animation
//         }}
//       >
//         {/* 15 ta grid elementlar */}
//         {Array.from({ length: 15 }, (_, index) => (
//           <Box
//             key={index + 1}
//             className="grid-item"
//             sx={{
//               backgroundColor: '#f0f0f0',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               border: '1px solid #ccc',
//               transition: 'all 0.1s ease',
//               maxHeight: '100px',
//               overflow: 'hidden',
//               maxWidth: '200px',
//             }}
//           >
//             {index + 1}
//           </Box>
//         ))}
//       </Box>
//       <StyledCard ref={cardRef} height={`${cardHeight}px`}>
//         <ResizeHandle ref={handleRef} onMouseDown={handleMouseDown} />
//         <Typography>This card is stuck to the bottom and can only be resized from the top border.</Typography>
//       </StyledCard>
//     </Box>
//   );
// };

// export default App;

