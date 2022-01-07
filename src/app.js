export default function getSpecAttack({ special }) {
  const result = [];


  special.forEach((item) => {
    const data = { ...item };

    if (!data.description) {
      data.description = 'Описание недоступно';
    }

    result.push(data);
  });

  return result;
}
