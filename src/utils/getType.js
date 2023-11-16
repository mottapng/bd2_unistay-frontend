export const getType = (type_id) => {
  switch (type_id) {
    case 1:
      return "República";
    case 2:
      return "Apartamento";
    case 3:
      return "Quarto";
    case 4:
      return "Casa";
    case 5:
      return "Kitnet";
    default:
      return null;
  }
};
