# HOWTO

1. Start mongo
```bash
mongod --dbpath=./.db
```
2. npm start
3. http://localhost:9000/graphql




## Mutation query
```graphql
mutation {
  addGadget(
    name: "Test",
    release_date: "01.01.1970",
    by_company: "Test",
    price: "1000"
  ) {
    id,
    price
  }
}
```

```json
{
  "data": {
    "addGadget": {
      "id": "5d2f022e3d12b114b221248e"
    }
  }
}
```

```graphql
mutation {
  updateGadget(
    id: "5d2f022e3d12b114b221248e", name: "Macbook Pro",
    release_date: "January 10, 2006", by_company: "Apple",
    price: "9999") {
    id
    name
    release_date
    by_company
    price
  }
}
```

```graphql
mutation {
  removeGadget(id: "5c51ae117eb446624aad1049") {
    id
    name
    release_date
    by_company
    price
  }
}
```

## query

```graphql
query {
	queryGadgetById(id: "5d2f040570b81523476d307b") {
    id,
    price,
  }
}
```

```graphql
query {
	queryAllGadgets {
	  id
	}
}
```

```graphql
query {
	queryByPriceRange(priceMin: 0, priceMax: 1200) {
    id,
    price
  }
}
```
