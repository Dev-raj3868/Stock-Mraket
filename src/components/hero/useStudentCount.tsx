
import { useState, useEffect } from 'react';

export const useStudentCount = () => {
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    const baseCount = 2875;
    const randomIncrease = Math.floor(Math.random() * 24) + 2;
    const finalCount = baseCount + randomIncrease;
    setStudentsCount(finalCount);
  }, []);

  return studentsCount;
};
