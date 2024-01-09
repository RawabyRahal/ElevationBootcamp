const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', age: 30 , isActive: true},
    { id: 2, name: 'Bob', age: 25 , isActive: false},
    { id: 3, name: 'Charlie', age: 35 , isActive: true},
    { id: 4, name: 'Diana', age: 28 , isActive: true},
    { id: 5, name: 'Edward', age: 40 , isActive: false}
  ];
  
  let animals = [
    { id: 1, type: 'Dog', name: 'Rex' },
    { id: 2, type: 'Cat', name: 'Whiskers' },
    { id: 3, type: 'Bird', name: 'Tweety' },
    { id: 4, type: 'Fish', name: 'Goldie' },
    { id: 5, type: 'Hamster', name: 'Fuzzy' }
  ];


// List all users 
// app.get('/users', (req, res) => res.status(200).send({users:users}));

// Get a user by ID 
app.get('/users/:id', (req, res) => {
    const userId= req.params.id

  const user = users.find(u => u.id === parseInt(userId));
  user ? res.status(200).json(user) : res.status(404).send({message : 'User not found'});
});


// Search users by name 
app.get('/users', (req, res) => {
  const name = req.query.name;
  if(name){
    const filteredUsers = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
   return res.status(200).json(filteredUsers);
  }
  res.status(200).send({users:users})
});


// Add a new user 
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user 
app.put('/users/:id', (req, res) => {
    const userId = req.params.id
  const user = users.find(u => u.id === parseInt(userId));
  if (user) {
    Object.assign(user, req.body);
    res.status(200).json(user);
  } else {
    res.status(404).send({message : 'User not found'});
  }
});


// Delete a user 
app.delete('/users/:id', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.status(200).send({message : 'User removed'});
});



// List all animals 
// app.get('/animals', (req, res) => res.status(200).json(animals));


// Get a specific animal by ID 
app.get('/animals/:id', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  animal ? res.status(200).json(animal) : res.status(404).send({message : 'Animal not found'});
});

// Add a new animal 
app.post('/animals', (req, res) => {
  const newAnimal = { id: animals.length + 1, ...req.body };
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

// Update an animal 
app.put('/animals/:id', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  if (animal) {
    Object.assign(animal, req.body);
    res.json(animal);
  } else {
    res.status(404).send({message : 'Animal not found'});
  }
});


// Delete an animal 
app.delete('/animals/:id', (req, res) => {
  animals = animals.filter(animal => animal.id !== parseInt(req.params.id));
  res.status(200).send({message : 'Animal removed'});
});


// Increment User's Age 
app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.age += 1;
      res.status(200).json(user);
    } else {
      res.status(404).send({message : 'User not found'});
    }
  });
  

  // Filter Animals by Type 
  app.get('/animals', (req, res) => {
    const type = req.query.type;
    if(type){
        const filteredAnimals = animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase());
        return res.status(200).json(filteredAnimals);
    }
    res.status(200).json(animals)
  });
  
  // Change Animal's Name 
  app.patch('/animals/:id', (req, res) => {
    const { name } = req.body;
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (animal && name) {
      animal.name = name;
      res.status(200).json(animal);
    } else {
      res.status(404).send({message : 'Animal not found or new name not provided'});
    }
  });
  

  // List Users in a Certain Age Range 
  app.get('/users', (req, res) => {
    const { minAge, maxAge } = req.body;
    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
    res.json(filteredUsers);
  });
  
  // Toggle User's Active Status 
  app.get('/userActiveStatusToggle', (req, res) => {
    const userId = req.query.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.isActive = !user.isActive;
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  

app.listen(3000, () => console.log('Server running on port 3000'));