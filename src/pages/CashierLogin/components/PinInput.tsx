import React from "react";
import { PIN_LENGTH } from "../constants";

interface PinInputProps {
  pin: string;
}

/**
 * PIN Input Component
 * Displays 6 boxes that fill with bullets as user enters PIN
 */
const PinInput: React.FC<PinInputProps> = ({ pin }) => {
  return (
    <div className="d-flex justify-content-center gap-2 mb-3">
      {Array.from({ length: PIN_LENGTH }, (_, i) => {
        const hasValue = i < pin.length;
        return (
          <div
            key={i}
            className="border rounded d-flex align-items-center justify-content-center"
            style={{
              width: 48,
              height: 48,
              fontSize: 32,
              fontWeight: "bold",
              backgroundColor: "#fff",
              color: "#000",
              borderColor: hasValue ? "#0d6efd" : "#dee2e6",
              borderWidth: hasValue ? "2px" : "1px",
            }}
          >
            {hasValue ? "●" : ""}
          </div>
        );
      })}
    </div>
  );
};

export default PinInput;

