import React from "react";

export const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeNoArr = Array.from({length : 3},(_,index) => pageNo - 1-index
  ).filter((value)=>value>0).reverse()
  const nextFourNoArr = Array.from({length:4},(_,index)=>pageNo+index )
  const paginationArray = [...prevThreeNoArr,...nextFourNoArr]

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div onClick={handlePrevious} className="page-btn">
          {" "}
          Previous{" "}
        </div>
      ) : (
        ""
      )}
      {paginationArray.map((value)=>{
        return  <div onClick={()=>setPageNo(value)} className={value === pageNo ?"page-btn active" : "page-btn"}>{value}</div>
      })}
     
      <div onClick={handleNext} className="page-btn">
        Next
      </div>
    </div>
  );
};
