function calculateTotalSpentByCategory(transactions) {
    const categoryMap={}
    transactions.forEach((transaction)=>{
      const {category,price}=transaction;
      if(categoryMap[category])
      {
        categoryMap[category].totalSpent+=price
      }else{
        categoryMap[category]={
          category:category,
          totalSpent:price
        }
      }
    })
    console.log(categoryMap)
    return Object.values(categoryMap);
  }

  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656076810000,
      price: 20,
      category: 'Shopping',
      itemName: 'Clothes',
    },
    {
      id: 3,
      timestamp: 1656076820000,
      price: 15,
      category: 'Food',
      itemName: 'Burger',
    },
  ];
calculateTotalSpentByCategory(transactions)