import React from 'react';

const CustomInputSelect: React.FC = () => {
   return (
      <div style={{
         backgroundColor: "white",
         border: "2px solid rgb(233, 233, 233)",
         borderRadius: "8px", 
         display: "flex",
         width: "100%",
         alignItems: "center", 
         maxWidth: "100%",
      }}>
         <input
            type="text"
            style={{
               flex: 1, 
               border: "none",
               padding: "10px",
               borderRight: "2px solid rgb(233, 233, 233)",
               outline: "none",
               backgroundColor: "white",
               color: "black",
               borderTopLeftRadius: "8px",
               borderBottomLeftRadius: "8px", 
               minWidth: "0",
            }}
           
         />
         <select
            name="cars"
            style={{
               border: "none",
               padding: "10px",
               outline: "none",
               backgroundColor: "white",
               color: "black",
               borderTopRightRadius: "8px", 
               borderBottomRightRadius: "8px", 
               minWidth: "120px", 
               maxWidth: "200px", 
            }}
         >
            <option value="1">Полный бак</option>
            <option value="2">2</option>
            <option value="3">3</option>
         </select>
      </div>
   );
};

export default CustomInputSelect;
