import React from 'react';

const CustomInputSelect: React.FC = () => {
   return (
      <div style={{ backgroundColor: "white", border: "2px solid rgb(233, 233, 233)", borderRadius: "8px", width: "100%" }}>
         <input
            type="text"
            style={{
               maxWidth: "320px",
               border: "none",
               padding: "10px",
               flex: 1,
               borderRight: "2px solid rgb(233, 233, 233)", 
               outline: "none",
               backgroundColor: "white",
               color: "black",
            }}
         />
         <select
            name="cars"
            style={{
               border: "none",
               padding: "8px",
               outline: "none",
               backgroundColor: "white",
               color: "black",
               textAlign: "left", // Matnni o'ngga yopishtirish
               // paddingRight: "10px", // O'ng tarafga biroz joy qoldirish
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
