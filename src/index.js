export default (age) => {
  const currentYear = new Date().getFullYear(); // Динамический расчет!
  return currentYear - age;
};
