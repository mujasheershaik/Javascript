import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentName, setStudentName] = useState("");

  return (
    <StudentContext.Provider
      value={{ studentName, setStudentName }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}