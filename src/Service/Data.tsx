interface Person {
    id: string;
    name: string;
    age: string;
    position: string;
  }
  
  export const generateData = () => {
    const names = ["Vijay", "Alice", "Bob", "Eva", "John"];
    const positions = ["Tester", "Developer", "Manager", "Designer"];
    const data: Person[] = [];
  
    for (let i = 1; i <= 1000; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAge = (Math.floor(Math.random() * 30) + 20).toString();
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
  
      const person: Person = {
        id: i.toString().padStart(2, '0'),
        name: randomName,
        age: randomAge,
        position: randomPosition
      };
  
      data.push(person);
    }
    
    return data;
  };
  