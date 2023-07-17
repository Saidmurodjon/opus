import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import "./index.css";
const Certificate = ({ image, modal }) => {
  console.log(modal);
  const [show, setShow] = useState(modal);
  return show ? (
    <div className={"modalBackground"}>
      <div
        className={`modal show d-block d-flex justify-content-center justify align-items-center `}
      >
        <div
          className="sm:w-50 md:w-25 bg-danger position-relative"
          //   onClick={() => closeModal()}
        >
          <div className="position-absolute top-0 end-0">
            <GrClose className="m-2" />
          </div>
          <div className="">
            <img src={image} className="img-fluid img-thumbnai" alt="..." />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Certificate;
