import { useState } from "react";

const Matrix = () => {
  const initialColors = Array(9).fill("bg-gray-500");
  const [colors, setColors] = useState(initialColors);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.length === 8) {
      const newColors = [...colors];
      clickOrder.forEach((i, idx) => {
        setTimeout(() => {
          newColors[i] = "bg-orange-500";
          setColors([...newColors]);
        }, idx * 500);
      });
      setTimeout(() => {
        newColors[index] = "bg-orange-500";
        setColors([...newColors]);
      }, clickOrder.length * 500);
    } else {
      const newColors = [...colors];
      newColors[index] = "bg-green-500";
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-16 h-16 border ${color}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
